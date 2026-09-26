"use client";

import { useContext } from 'react';
import { WorkoutsContext } from '@/context/WorkoutsContext';
import React from 'react';
import { LuBookmark } from 'react-icons/lu';
import { Bounce, toast } from 'react-toastify';
import { RxCrossCircled } from 'react-icons/rx';

const SavedButton = ({ workout}) => {

    const { savedWorkouts, setSavedWorkouts } = useContext(WorkoutsContext);

     const isSaved = savedWorkouts.includes(workout.id);

    const handleSavedToPlan = () => {

        if (isSaved) {
            toast.error('  Already in your saved lsit', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
                icon: <RxCrossCircled className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-600"/>  
            });

        return;
    }

    setSavedWorkouts((previousWorkouts) => [
        ...previousWorkouts,
        workout.id,
    ]);

    toast.success("Added to saved list", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
        transition: Bounce,
    });
};
    


    return (
        <div>

            <button
                className="btn btn-ghost  flex items-center gap-2 rounded-2xl border border-gray-500 px-4 py-3 text-sm font-medium text-white"
                onClick={() => handleSavedToPlan(workout.id)}>

                <LuBookmark />

                Save for later


            </button>
        </div>
    );
};

export default SavedButton;

