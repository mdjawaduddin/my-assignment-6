"use client";

import React, { useContext, useState } from "react";
import Link from "next/link";

import { WorkoutsContext } from "@/context/WorkoutsContext";
import PlanWorkoutCard from "@/components/PlanWorkoutCard";

import { LuChevronDown } from "react-icons/lu";

const MyPlanContent = ({ workouts }) => {

    const {
        addWorkouts,
        setAddWorkouts,
        savedWorkouts,
        setSavedWorkouts
    } = useContext(WorkoutsContext);

    const [activeTab, setActiveTab] = useState("plan");

    const [sortBy, setSortBy] = useState("duration");




    const plan = workouts.filter((workout) =>
        addWorkouts.includes(workout.id)
    );

    const saved = workouts.filter((workout) =>
        savedWorkouts.includes(workout.id)
    );




    let currentWorkouts;

    if (activeTab === "plan") {
        currentWorkouts = plan;
    } else {
        currentWorkouts = saved;
    }


    let sortedWorkouts = [...currentWorkouts];



    if (sortBy === "duration") {

        sortedWorkouts.sort(
            (a, b) => a.duration - b.duration
        );

    } else if (sortBy === "calories") {

        sortedWorkouts.sort(
            (a, b) =>
                a.caloriesBurned - b.caloriesBurned
        );

    } else if (sortBy === "rating") {

        sortedWorkouts.sort(
            (a, b) => b.rating - a.rating
        );
    }



    const totalExercises = currentWorkouts.length;

    const totalMinutes = currentWorkouts.reduce(
        (total, workout) =>
            total + workout.duration,
        0
    );

    const totalCalories = currentWorkouts.reduce(
        (total, workout) =>
            total + workout.caloriesBurned,
        0
    );




    const removeFromPlan = (id) => {

        const newPlan = addWorkouts.filter(
            (workoutId) => workoutId !== id
        );

        setAddWorkouts(newPlan);
    };




    const removeFromSaved = (id) => {

        const newSaved = savedWorkouts.filter(
            (workoutId) => workoutId !== id
        );

        setSavedWorkouts(newSaved);
    };


    return (
        <main className="min-h-screen bg-[#0f1012] text-white">

            <div className="container mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-0">


                <div className="mb-7">

                    <h1 className="text-3xl font-extrabold uppercase tracking-wide sm:text-4xl">
                        My Plan
                    </h1>

                    <p className="mt-2 text-sm text-gray-400 sm:text-base">
                        Cap of five lifts for today. Finish them,
                        then load more.
                    </p>

                </div>



                <div className="mb-8 grid grid-cols-1 overflow-hidden rounded-xl border border-white/10 bg-[#15171c] sm:grid-cols-3">


                    <div className="border-b border-white/10 px-5 py-4 sm:border-b-0 sm:border-r">

                        <p className="text-xs font-medium text-gray-400">
                            Exercises
                        </p>

                        <p className="mt-1 text-2xl font-bold text-[#b7f000]">
                            {totalExercises}
                        </p>

                    </div>



                    <div className="border-b border-white/10 px-5 py-4 sm:border-b-0 sm:border-r">

                        <p className="text-xs font-medium text-gray-400">
                            Minutes
                        </p>

                        <p className="mt-1 text-2xl font-bold text-white">
                            {totalMinutes}
                        </p>

                    </div>



                    <div className="px-5 py-4">

                        <p className="text-xs font-medium text-gray-400">
                            Calories
                        </p>

                        <p className="mt-1 text-2xl font-bold text-white">
                            {totalCalories}
                        </p>

                    </div>

                </div>



                <div className="mb-7 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">


                    <div className="flex w-fit rounded-xl bg-[#1b1d21] p-1">

                        <button
                            onClick={() =>
                                setActiveTab("plan")
                            }
                            className={`rounded-lg px-4 py-2 text-sm font-semibold ${activeTab === "plan"
                                ? "bg-[#15171c] text-[#b7f000]"
                                : "text-gray-400 hover:text-white"
                                }`}
                        >
                            Today's Plan
                        </button>


                        <button
                            onClick={() =>
                                setActiveTab("saved")
                            }
                            className={`rounded-lg px-4 py-2 text-sm font-semibold ${activeTab === "saved"
                                ? "bg-[#15171c] text-[#b7f000]"
                                : "text-gray-400 hover:text-white"
                                }`}
                        >
                            Saved
                        </button>

                    </div>


                    <fieldset className="fieldset w-full sm:w-56">


                        <legend className="mb-1 block text-sm text-gray-300">
                            Sort By
                        </legend>

                        <div className="relative">

                            <select
                                value={sortBy}
                                onChange={(event) =>
                                    setSortBy(
                                        event.target.value
                                    )
                                }
                                className="w-full appearance-none rounded-xl border border-white/20 bg-[#0f1012] px-4 py-3 text-sm text-white outline-none focus:border-white "
                            >

                                <option value="duration">
                                    Duration
                                </option>

                                <option value="calories">
                                    Calories
                                </option>

                                <option value="rating">
                                    Rating
                                </option>

                            </select>

                            <LuChevronDown
                                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-300"
                            />

                        </div>
                    </fieldset>


                </div>



                <div className="space-y-4">

                    {sortedWorkouts.length === 0 ? (


                        <div className="flex min-h-64 flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 bg-[#15171c] px-5 py-12 text-center">

                            <p className="text-2xl font-extrabold text-white">
                                NOTHING HERE YET
                            </p>

                            <p className="mt-2 max-w-md text-sm text-gray-400">

                                Browse the library and add a lift to get today moving.
                            </p>

                            <Link
                                href="/Homepage"
                                className="mt-5 rounded-xl bg-[#b7f000] px-5 py-3 text-sm font-bold text-black"
                            >
                                Go to workouts
                            </Link>

                        </div>

                    ) : (

                        sortedWorkouts.map((workout) => (

                            <PlanWorkoutCard
                                key={`${activeTab}-${workout.id}`}
                                workout={workout}
                                isSaved={
                                    activeTab === "saved"
                                }
                                onRemove={
                                    activeTab === "plan"
                                        ? removeFromPlan
                                        : removeFromSaved
                                }
                            />

                        ))

                    )}

                </div>

            </div>

        </main>
    );
};

export default MyPlanContent;