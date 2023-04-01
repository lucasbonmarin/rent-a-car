import { useState } from "react"
import { useGlobalEvent } from "./use-global-event.hook";

export const useGoUp = () => {

    const [goUp, setGoUp] = useState(false);

    const onPageScroll = () => {
        setGoUp(window.pageYOffset > 600);
    };

    useGlobalEvent('scroll', onPageScroll);

    return goUp;

}