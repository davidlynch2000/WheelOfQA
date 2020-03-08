import React from 'react';

const EditableWheelItem = ({ value, idx, changeItemContent,functionForEditingList }) => {
    
    const changeTheValue = (e) => {
        changeItemContent(e.target.value, idx,functionForEditingList);
    }

    return (
        <input type='text' value={value} onChange={changeTheValue} />
    );
}

export default EditableWheelItem;