import { useEffect, useState } from "react";

const useMountingAnimation =(delayTime=0.05)=>{
    const [visibility, setVisibility] = useState(false);

    useEffect (()=>{
        const timerId = setTimeout(()=>{
            setVisibility(true)
        }, delayTime * 1000)
        return () => {
            setVisibility(false)
            clearTimeout(timerId)
        }
    }, [delayTime]);
    
    return visibility;
}

export {useMountingAnimation};