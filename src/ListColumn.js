import React, { useState, useRef } from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import logo from './logo.svg';
import './App.css';
import EditableWheelItem from './EditableWheelItem';
import './ListColumn.css';

const ListColumn = ({
    columnTitle,
    addItemToList,
    removeItemFromList,
    getListStyle,
    allItems,
    changeItemContent,
    getItemStyle,
    droppableId,
    functionForEditingList }) => {
    const [listIsEditable, setListIsEditable] = useState(false);

    const toggleEditableList = () => {
        setListIsEditable(!listIsEditable);
    }

    const addingAnItemToTheList = () =>{
        addItemToList(functionForEditingList);
    }

    const removingAnItemFromTheList = () =>{
        removeItemFromList(functionForEditingList);
    }

    return (
        <div className='columnsOfNames'>
            <h2>{columnTitle}
                <button type='button' style={{ display: listIsEditable ? 'none' : '' }} onClick={toggleEditableList}>
                    {listIsEditable ? '' : 'Edit List'}
                </button>
                {(listIsEditable === true) &&
                    <div>
                        <button type='button' onClick={addingAnItemToTheList}>Add Item</button>
                        <button type='button' onClick={removingAnItemFromTheList}>Remove Item</button>
                        <button type='button'
                            onClick={toggleEditableList}
                            style={{ background: 'skyblue', marginLeft: '15px' }}
                        >
                            Done Editing
                </button>
                    </div>
                }
            </h2>
            <div>
                <Droppable droppableId={droppableId}>
                    {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            style={getListStyle(snapshot.isDraggingOver)}>

                            {allItems.map((item, index) => (
                                listIsEditable ?
                                    <EditableWheelItem
                                        key={index}
                                        value={item.content}
                                        changeItemContent={changeItemContent}
                                        idx={index}
                                        functionForEditingList={functionForEditingList}
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
    );
}

export default ListColumn;