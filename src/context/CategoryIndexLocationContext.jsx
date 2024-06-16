import { createContext, useEffect, useState } from "react";

export const CategoryIndexLocationContext = createContext();

export const CategoryIndexLocationContextProvider =({children})=>{
    const [currentLocation, setCurrentLocation] = useState('0-9');

    useEffect(()=>{
       // console.log(currentLocation)
    },[currentLocation])

    const changeCurrentLocation =(categoryIndex)=>{
        setCurrentLocation(categoryIndex)
    }

    return (
        <CategoryIndexLocationContext.Provider value={{
            currentLocation,
            changeCurrentLocation
        }}>
            {children}
        </CategoryIndexLocationContext.Provider>
    )
}