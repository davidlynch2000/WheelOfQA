import React, { useState } from 'react';

const ListEditingControls = ({
    columnTitle,
    listIsEditable,
    toggleEditableList,
    addingAnItemToTheList,
    removingAnItemFromTheList }) => {
    return (
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
    );
}

export default ListEditingControls;