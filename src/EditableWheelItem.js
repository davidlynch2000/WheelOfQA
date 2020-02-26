import React from 'react';

const EditableWheelItem = ({ value, idx, changeItemContent }) => {
    
    const changeTheValue = (e) => {
        changeItemContent(e.target.value, idx);
    }

    return (
        <input type='text' value={value} onChange={changeTheValue} />
    );
}

export default EditableWheelItem;