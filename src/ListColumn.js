import React, { useState } from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import './App.css';
import EditableWheelItem from './EditableWheelItem';
import './ListColumn.css';
import ListEditingControls from './ListEditingControls';

const ListColumn = ({
    columnTitle,
    addItemToList,
    removeItemFromList,
    allItems,
    changeItemContent,
    droppableId,
    functionForEditingList }) => {

    const [listIsEditable, setListIsEditable] = useState(false);

    const grid = 8;

    const getItemStyle = (isDragging, draggableStyle) => ({
        // some basic styles to make the items look a bit nicer
        userSelect: 'none',
        padding: grid * 2,
        margin: `0 0 ${grid}px 0`,

        // change background colour if dragging
        background: isDragging ? 'aquamarine' : 'turquoise',

        // styles we need to apply on draggables
        ...draggableStyle
    });

    const toggleEditableList = () => {
        setListIsEditable(!listIsEditable);
    }

    const addingAnItemToTheList = () => {
        addItemToList(functionForEditingList);
    }

    const removingAnItemFromTheList = () => {
        removeItemFromList(functionForEditingList);
    }

    const getListStyle = isDraggingOver => ({
        background: isDraggingOver ? 'lightblue' : 'lightgrey',
        padding: grid,
        width: 250,
        overflow: 'hidden',
        whiteSpace: 'no-wrap',
        textOverflow: 'ellipsis',
    });

    return (
        <div className='columnsOfNames'>
            <ListEditingControls
                columnTitle={columnTitle}
                listIsEditable={listIsEditable}
                toggleEditableList={toggleEditableList}
                addingAnItemToTheList={addingAnItemToTheList}
                removingAnItemFromTheList={removingAnItemFromTheList}
            />
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