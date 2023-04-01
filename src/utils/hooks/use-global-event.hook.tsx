import { useCallback, useEffect } from "react";

/**
 * Register globally an event handler.
 * @param {string} eventName 
 * @param {function} callback 
 * 
 * @example
 * 
 * useGlobalEvent('click', () => alert('Click detected'))
 */
export const useGlobalEvent = (eventName: string, callback: () => void) => {

    const removeGlobalListener = useCallback(() => {
        window.removeEventListener(eventName, callback)
    }, [eventName, callback]);

    const addGlobalListener = () => {
        if (!eventName) {
            throw Error('Invalid Event Name');
        }

        window.addEventListener(eventName, callback);
        return removeGlobalListener;
    };

    useEffect(addGlobalListener, [eventName, callback, removeGlobalListener]);

}