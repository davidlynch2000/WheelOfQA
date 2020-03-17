import React, { useState } from 'react';

const ListEditingControls = ({
    title,
    listIsEditable,
    toggleEditableList,
    addingAnItemToTheList,
    removingAnItemFromTheList,
    changeTitle, }) => {

    const [editTitle, setEditTitle] = useState(false);

    const toggleEditTitle = () => {
        setEditTitle(!editTitle);
    }

    const titleChangeHandler = (e) => {
        console.log(`called the changeHandler with ${e.target.value}`);
        changeTitle(e.target.value);
    }

    const checkForEnter = (e) => {
        if (e.keyCode == 13) {
          toggleEditTitle();
        }
      }
    return (
        <h2>
            <span onClick={toggleEditTitle}>
                {editTitle ?
                    <input 
                        type='text' 
                        value={title}
                        onChange={titleChangeHandler}
                        autoFocus
                        onBlur={toggleEditTitle}
                        onKeyDown={checkForEnter}
                    />
                    :
                    title
                }
            </span>
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