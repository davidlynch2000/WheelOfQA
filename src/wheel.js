import React, { useState, useRef } from 'react';
import './wheel.css';

const Wheel = (props) => {
    const [selectedItemIdx, setSelectedItemIdx] = useState(undefined);
    const spinning = useRef('');
    const numTotalSpins = useRef(5);
    const selectedName = useRef('');

    const SECONDS_TO_SPIN = 6;

    const reset = () => {
        spinning.current = ('');
        props.popUpWinningModal(selectedName.current);
    }

    const selectItem = () => {
        if(props.items.length < 1){
            props.popUpSassyModal();
            return;
        }
        spinning.current = 'spinning';
        const selectedIdx = Math.floor(Math.random() * props.items.length);
        console.log(`selectedIdx: ${selectedIdx}`);
        props.setSelectedForQA(props.items[selectedIdx]);
        selectedName.current = props.items[selectedIdx];
        setSelectedItemIdx(selectedIdx);
        setTimeout(reset, SECONDS_TO_SPIN * 1000 * 1.001);
    }

    const { items } = props;

    const wheelVars = {
        '--nb-item': items.length > 0 ? items.length : 1,
        '--selected-item': selectedItemIdx,
        '--nb-turn': numTotalSpins.current,
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