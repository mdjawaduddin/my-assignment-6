
"use client";

import { useContext } from "react";
import React from "react";
import { WorkoutsContext } from "@/context/WorkoutsContext";
import { LuCalendarPlus } from "react-icons/lu";
import { Bounce, toast } from "react-toastify";
import { RxCrossCircled } from "react-icons/rx";

const AddButton = ({ workout }) => {

    const { addWorkouts, setAddWorkouts } =
        useContext(WorkoutsContext);

    const isAdded = addWorkouts.includes(workout.id);

    const handleAddToPlan = () => {

        if (isAdded) {
            toast.error('  Already in your plan', {
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

    setAddWorkouts((previousWorkouts) => [
        ...previousWorkouts,
        workout.id,
    ]);

    toast.success("Added to today's plan", {
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
    <button
        className="btn btn-ghost flex items-center gap-2 rounded-2xl bg-[#b7f000] px-4 py-3 text-sm font-bold text-black"
        onClick={handleAddToPlan}
    >
        <LuCalendarPlus />

        Add to today's plan
    </button>
);
};

export default AddButton;