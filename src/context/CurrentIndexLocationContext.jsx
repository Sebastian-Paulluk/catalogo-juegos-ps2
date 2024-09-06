import { createContext, useState } from "react";

export const CurrentIndexLocationContext = createContext();

export const CurrentIndexLocationContextProvider =({children})=>{
    const [currentIndex, setCurrentIndex] = useState('');

    const changeCurrentLocation =(newLocation)=>{
        setCurrentIndex(newLocation)
    }

    return (
        <CurrentIndexLocationContext.Provider value={{
            changeCurrentLocation,
            currentIndex
        }}>
            {children}
        </CurrentIndexLocationContext.Provider>
    )
}