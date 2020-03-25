import React, { useRef } from 'react'
import { useClickOutsideCloser } from './customMainUtils';

const WinningAnnouncement = ({ availableForQA, foundWinner, closeIt, selectedForQA }) => {
    const wrapperRef = useRef(null);
    useClickOutsideCloser(wrapperRef, foundWinner, closeIt);
    const pickAnimationForWinningName = () => {
        const allAnimations = [
            'spinningShimmerIn',
            'pulsingName',
            'fireFlashName',
            'oneLapAndPulse',
            'crazyJumping',
        ];
        const winningIdx = Math.floor(Math.random() * allAnimations.length);
        return allAnimations[winningIdx];
    }
    // What was this supposed to do? When would I not want it to be displayed with flex?
    const flexClass = foundWinner ? 'displayFlex' : '';
    const animationForWinningName = pickAnimationForWinningName();
    return (
        <>
            {availableForQA.length > 0 ?
                <dialog
                    className={`announceTheWinner ${flexClass}`}
                    open={foundWinner}
                    onClick={closeIt}
                    ref={wrapperRef}
                >
                    <div className='announce'>The Winner is </div>
                    <div className={`nameOfWinner ${animationForWinningName}`}>{selectedForQA}</div>
                </dialog>
                :
                <dialog
                    className={`announceTheWinner ${flexClass}`}
                    open={foundWinner}
                    onClick={closeIt}
                    ref={wrapperRef}
                >
                    <div className='sassy-announce'>
                        Well look at
            <div className='sassy-nameOfWinner'>CAPTAIN QA</div>
                        over here!
            <br />Spinner of Wheels and Finder of Bugs!
            <br />You spun it, now you've WON it
          </div>
                    <div>And while you're at it, please fix my bugs at https://github.com/davidlynch2000/WheelOfQA</div>
                </dialog>
            }
        </>
    );
}
export default WinningAnnouncement;