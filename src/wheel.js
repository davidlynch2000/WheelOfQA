import React, { useState, useRef } from 'react';
import './wheel.css';

const Wheel = ({items, popUpWinningModal, popUpSassyModal, setSelectedForQA}) => {
    const [selectedItemIdx, setSelectedItemIdx] = useState(undefined);
    const spinning = useRef('');
    const numTotalSpins = 5;
    const selectedName = useRef('');

    const SECONDS_TO_SPIN = 6;

    const reset = () => {
        spinning.current = ('');
        popUpWinningModal(selectedName.current);
    }

    const selectItem = () => {
        if(items.length < 1){
            popUpSassyModal();
            return;
        }
        spinning.current = 'spinning';
        const selectedIdx = Math.floor(Math.random() * items.length);
        console.log(`selectedIdx: ${selectedIdx}`);
        setSelectedForQA(items[selectedIdx]);
        selectedName.current = items[selectedIdx];
        setSelectedItemIdx(selectedIdx);
        setTimeout(reset, SECONDS_TO_SPIN * 1000 * 1.001);
    }

    const wheelVars = {
        '--nb-item': items.length > 0 ? items.length : 1,
        '--selected-item': selectedItemIdx,
        '--nb-turn': numTotalSpins,
        '--spinning-duration': `${SECONDS_TO_SPIN}s`,
    };


    return (
        <div className="wheel-container">
            <div className={`wheel ${spinning.current}`} style={wheelVars} onClick={selectItem}>
                {items.map((item, index) => (
                    <div className="wheel-item" key={index} style={{ '--item-nb': index }}>
                        {item}
                    </div>
                ))}
            </div>
            <div className="buttonContainer">
                <button type='button' onClick={selectItem} className='spinItButton'>Spin It!</button>
            </div>
        </div>
    );
}


export default Wheel;