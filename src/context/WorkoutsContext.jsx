
"use client"
import React, { createContext, useState } from "react";


export const WorkoutsContext = createContext(null);




const WorkoutsProvider = ({ children }) => {

    const [addWorkouts, setAddWorkouts] = useState([]);
    const [savedWorkouts, setSavedWorkouts] = useState([]);
    const sharedData= {
        addWorkouts,
        setAddWorkouts,
        savedWorkouts,
        setSavedWorkouts
    }

    return (
       < WorkoutsContext.Provider value={sharedData}>
            {children}
        </WorkoutsContext.Provider>
    );
};

export default WorkoutsProvider;