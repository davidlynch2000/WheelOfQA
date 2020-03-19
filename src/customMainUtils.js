import { useEffect } from 'react';

export const useClickOutsideCloser = (ref, foundWinner, closeIt) => {
    function handleClickOutside(event) {
        if (foundWinner && ref.current && !ref.current.contains(event.target)) {
            closeIt();
        }
    }
    useEffect(() => {
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [foundWinner]);
};