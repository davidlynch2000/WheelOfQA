import React, { useState, useRef } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import './App.css';
import Wheel from './wheel';
import ListColumn from './ListColumn';
import WinningAnnouncement from './WinningAnnouncement';

const getItems = () => {
  return [
    {
      id: 'Mariam',
      content: 'Mariam'
    },
    {
      id: 'Josses',
      content: 'Josses'
    },
    {
      id: 'Jide',
      content: 'Jide'
    },
    {
      id: 'Kartik',
      content: 'Kartik'
    },
    {
      id: 'Matt',
      content: 'Matt'
    },
    {
      id: 'David',
      content: 'David'
    },
    {
      id: 'Garret',
      content: 'Garret'
    },
    {
      id: 'Deb',
      content: 'Deb'
    },
  ];
}

const reorder = (list, startIndex, endIndex) => {
  const listCpy = list.slice();
  const [removed] = listCpy.splice(startIndex, 1);
  listCpy.splice(endIndex, 0, removed);
  return listCpy;
};

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
  // this feels too verbose...
  const sourceClone = source.slice();
  const destClone = destination.slice();
  const [removed] = sourceClone.splice(droppableSource.index, 1);
  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};


const App = () => {
  const [teamMembers, setTeamMembers] = useState(getItems());
  const [availableForQA, setAvailableForQA] = useState([]);
  const [selectedForQA, setSelectedForQA] = useState('');
  const [foundWinner, setFoundWinner] = useState(false);
  const [title, setTitle] = useState('Wheel of QA!');
  const [titleCanChange, setTitleCanChange] = useState(false);

  const closeIt = () => {
    setFoundWinner(false);
    setSelectedForQA('');
  }

  const popUpWinningModal = () => {
    setFoundWinner(true);
  }

  const popUpSassyModal = () => {
    setFoundWinner(true);
  }
  /**
   * A semi-generic way to handle multiple lists. Matches
   * the IDs of the droppable container to the names of the
   * source arrays stored in the state.
   */
  const id2List = {
    wheelItems: availableForQA,
    allItems: teamMembers,
  };

  const getList = id => id2List[id];

  const onDragEnd = result => {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }

    // reordering items in the same list
    if (source.droppableId === destination.droppableId) {
      const items = reorder(
        getList(source.droppableId),
        source.index,
        destination.index
      );

      if (source.droppableId === 'allItems') {
        setTeamMembers(items)
      }
      else {
        setAvailableForQA(items);
      }

    } else {
      const result = move(
        getList(source.droppableId),
        getList(destination.droppableId),
        source,
        destination
      );

      setAvailableForQA(result.wheelItems);
      setTeamMembers(result.allItems);
    }
  };

  const toggleTitleEditable = () => {
    setTitleCanChange(curTitleEditable => {
      return !curTitleEditable;
    });
  }

  const checkForEnter = (e) => {
    if (e.keyCode == 13) {
      toggleTitleEditable();
    }
  }

  const changeTitle = (e) => {
    setTitle(e.target.value);
  }

  const changeItemContent = (value, idx, functionForEditingList) => {
    functionForEditingList(curTeamMembers => {
      const curTeamMembersCpy = curTeamMembers.slice();
      curTeamMembersCpy[idx] = { id: value, content: value };
      return curTeamMembersCpy;
    });
  }

  const addItemToList = (functionForEditingList) => {
    functionForEditingList(curTeamMembers => {
      return [...curTeamMembers, { id: '', content: '' }]
    })
  }

  const removeItemFromList = (functionForEditingList) => {
    functionForEditingList(curTeamMembers => {
      let removedCurTeamMembersCpy = curTeamMembers.slice(0, curTeamMembers.length - 1);
      return removedCurTeamMembersCpy;
    })
  }

  return (
    <div className="App">
      <WinningAnnouncement
        availableForQA={availableForQA}
        foundWinner={foundWinner}
        closeIt={closeIt}
        selectedForQA={selectedForQA}
      />

      <div className="headerBanner">
        {titleCanChange ?
          <input
            className='headerBanner'
            type='text'
            value={title}
            onChange={changeTitle}
            onBlur={toggleTitleEditable}
            onKeyDown={checkForEnter}
          />
          :
          <h1 onClick={toggleTitleEditable}>{title}</h1>
        }
      </div>

      <div className='pageContainer'>
        <DragDropContext onDragEnd={onDragEnd} className='DAndD'>
          <ListColumn
            columnTitle='Team Members'
            addItemToList={addItemToList}
            removeItemFromList={removeItemFromList}
            changeItemContent={changeItemContent}
            allItems={teamMembers}
            droppableId='allItems'
            functionForEditingList={setTeamMembers}
          />

          <ListColumn
            columnTitle='Available For QA'
            addItemToList={addItemToList}
            removeItemFromList={removeItemFromList}
            changeItemContent={changeItemContent}
            allItems={availableForQA}
            droppableId='wheelItems'
            functionForEditingList={setAvailableForQA}
          />

        </DragDropContext>

        <Wheel
          items={availableForQA.map(teamMember => teamMember.id)}
          setSelectedForQA={setSelectedForQA}
          popUpWinningModal={popUpWinningModal}
          popUpSassyModal={popUpSassyModal}
        />
      </div>
    </div>
  );
}

export default App;
