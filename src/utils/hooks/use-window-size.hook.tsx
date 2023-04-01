import { useState } from "react";
import { useGlobalEvent } from "./use-global-event.hook";

const getWindowSize = () => ({
    width: window.innerWidth,
    height: window.innerHeight
});

/**
 * Give window dimensions with an optional subscription.
 * @param {boolean} withSubscription
 * 
 * @example
 * 
 * const windowSize = useWindowSize() // No subscription
 * const windowSize = useWindowSize(true) //Subscription
 */
export const useWindowSize = (withSubscription = false) => {

    const [size, setSize] = useState(getWindowSize());
    
    const handleResize = () => {
        withSubscription && setSize(getWindowSize());
    };

    useGlobalEvent('resize', handleResize);

    return size;

}