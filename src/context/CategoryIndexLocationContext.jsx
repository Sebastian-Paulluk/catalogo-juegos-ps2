import { createContext, useState } from "react";

export const CategoryIndexLocationContext = createContext();

export const CategoryIndexLocationContextProvider =({children})=>{
    const [currentLocation, setCurrentLocation] = useState('0-9');
    const [forceUpdate, setForceUpdate] = useState(false)

    const changeCurrentLocation =(categoryIndex)=>{
        setCurrentLocation(categoryIndex)
        setForceUpdate(!forceUpdate)
    }   

    return (
        <CategoryIndexLocationContext.Provider value={{
            currentLocation,
            forceUpdate,
            changeCurrentLocation
        }}>
            {children}
        </CategoryIndexLocationContext.Provider>
    )
}