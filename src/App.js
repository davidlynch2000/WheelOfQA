import React, { Component, useState, useRef } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import logo from './logo.svg';
import './App.css';
import Wheel from './wheel';
import EditableWheelItem from './EditableWheelItem';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a> */}

//         found something
//       </header>
//     </div>
//   );
// }

// fake data generator
// const getItems = (count, offset = 0) =>
//     Array.from({ length: count }, (v, k) => k).map(k => ({
//         id: `item-${k + offset}`,
//         content: `item ${k + offset}`
//     }));

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

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? 'lightgreen' : 'grey',

  // styles we need to apply on draggables
  ...draggableStyle
});

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
  padding: grid,
  width: 250
});




const App = () => {
  const [teamMembers, setTeamMembers] = useState(getItems());
  const [availableForQA, setAvailableForQA] = useState([]);
  const [selectedForQA, setSelectedForQA] = useState('');
  const [foundWinner, setFoundWinner] = useState(false);
  const [title, setTitle] = useState('Wheel of QA!');
  const [titleCanChange, setTitleCanChange] = useState(false);
  const [listIsEditable, setListIsEditable] = useState(false);

  const popUpWinningModal = (winner) => {
    setFoundWinner(true);
  }

  const popUpSassyModal = (winner) => {
    setFoundWinner(true);
  }
  /**
   * A semi-generic way to handle multiple lists. Matches
   * the IDs of the droppable container to the names of the
   * source arrays stored in the state.
   */
  const id2List = {
    droppable: availableForQA,
    droppable2: teamMembers,
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
        getList(source.droppableId),//droppableID2
        source.index,//
        destination.index
      );

      if (source.droppableId === 'droppable2') {
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

      setAvailableForQA(result.droppable);
      setTeamMembers(result.droppable2);
    }
  };


  const closeIt = () => {
    setFoundWinner(false);
  }

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

  const toggleEditableList = () => {
    setListIsEditable(!listIsEditable);
  }

  const changeItemContent = (value, idx) => {
    setTeamMembers(curTeamMembers => {
      const curTeamMembersCpy = curTeamMembers.slice();
      curTeamMembersCpy[idx] = { id: value, content: value };
      return curTeamMembersCpy;
    });
  }

  const flexClass = foundWinner ? 'displayFlex' : '';

  return (
    <div className="App">
      {availableForQA.length > 0 ?
        <dialog className={`announceTheWinner ${flexClass}`} open={foundWinner} onClick={closeIt}>
          <div className='announce'>The Winner is </div>
          <div className='nameOfWinner'>{selectedForQA}</div>
        </dialog>
        :
        <dialog className={`announceTheWinner ${flexClass}`} open={foundWinner} onClick={closeIt}>
          <div className='sassy-announce'>Well look at  </div>
          <div className='sassy-nameOfWinner'>CAPTAIN QA</div>
          <div className='sassy-announce'>over here!</div>
          <div className='sassy-announce'>Spinner of Wheels and Finder of Bugs!</div>
          <div className='sassy-announce'>You spun it, now you've WON it</div>
          <div>And while you're at it, please fix my bugs at https://github.com/davidlynch2000/WheelOfQA</div>
        </dialog>

      }

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
        <h1 className='headerBanner' onClick={toggleTitleEditable}>{title}</h1>
      }


      <div className='pageContainer'>
        <DragDropContext onDragEnd={onDragEnd} className='DAndD'>
          <div className='columnsOfNames'>
            <h2>Team Members
              <button type='button' onClick={toggleEditableList}>
                {listIsEditable ? 'Done Editing' : 'Edit List'}
              </button>
            </h2>
            <div>
              <Droppable droppableId="droppable2">
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    style={getListStyle(snapshot.isDraggingOver)}>

                    {teamMembers.map((item, index) => (
                      listIsEditable ?
                        <EditableWheelItem
                          key={index}
                          value={item.content}
                          changeItemContent={changeItemContent}
                          idx={index}
                        />
                        :
                        <Draggable
                          key={item.id}
                          draggableId={item.id}
                          index={index}>
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              style={getItemStyle(
                                snapshot.isDragging,
                                provided.draggableProps.style
                              )}>
                              {item.content}
                            </div>
                          )}
                        </Draggable>


                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          </div>
          <div className='columnsOfNames'>
            <h2>Available for QA</h2>
            <Droppable droppableId="droppable">
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  style={getListStyle(snapshot.isDraggingOver)}>
                  {availableForQA.map((item, index) => (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}>
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={getItemStyle(
                            snapshot.isDragging,
                            provided.draggableProps.style
                          )}>
                          {item.content}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
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
