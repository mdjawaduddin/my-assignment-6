import React from "react";
import Image from "next/image";
import Link from "next/link";

import {
    LuCalendarPlus,
    LuBookmark,
} from "react-icons/lu";
import AddButton from "@/components/workoutDetails/AddButton";
import SavedButton from "@/components/workoutDetails/SavedButton";


const getWorkouts = async () => {
    try {
        const res = await fetch(
            "https://api.api.workers.dev/api/fitlog/${id}",
            {
                cache: "no-store",
            }
        );

        const data = await res.json();

        return data;

    } catch (error) {
        console.error("Error fetching workout details:", error);
        return [];
    }
};


const WorkoutDetailsPage = async ({ params }) => {

    const { id } = await params;

    const data = await getWorkouts();

    const workout = data.find(
        (workout) => Number(workout.id) === Number(id)
    );



    return (
        <main className="min-h-screen bg-[#0f1012] text-white">

            <div className="mx-auto max-w-6xl px-5 py-10">



                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">



                    <div className="overflow-hidden rounded-xl border border-white/10">

                        <Image
                            src={workout.image}
                            alt={workout.name}
                            width={600}
                            height={800}
                            className="h-full w-full object-cover lg:h-[760px]"
                        />

                    </div>



                    <div>



                        <h1 className="text-3xl font-extrabold uppercase leading-tight tracking-wide lg:text-4xl">
                            {workout.name}
                        </h1>



                        <p className="mt-3 text-sm leading-6 text-gray-400">
                            {workout.description}
                        </p>



                        <div className="mt-4 flex flex-wrap gap-2">

                            {workout.muscleGroups.map((muscle) => (

                                <span
                                    key={muscle}
                                    className="rounded-full bg-[#b7f000] px-3 py-1 text-xs font-bold uppercase text-black"
                                >
                                    {muscle}
                                </span>

                            ))}

                        </div>



                        <div className="mt-5 overflow-hidden rounded-xl border border-white/10 bg-[#1b1d21]">



                            <div className="flex items-center border-b border-white/5 px-4 py-3">

                                <span className="w-1/2 text-xs font-bold uppercase">
                                    Equipment
                                </span>

                                <span className="w-1/2 text-sm text-gray-300">
                                    {workout.equipment}
                                </span>

                            </div>



                            <div className="flex items-center border-b border-white/5 px-4 py-3">

                                <span className="w-1/2 text-xs font-bold uppercase">
                                    Difficulty
                                </span>

                                <span className="w-1/2 text-sm text-gray-300">
                                    {workout.difficulty}
                                </span>

                            </div>



                            <div className="flex items-center border-b border-white/5 px-4 py-3">

                                <span className="w-1/2 text-xs font-bold uppercase">
                                    Sets
                                </span>

                                <span className="w-1/2 text-sm text-gray-300">
                                    {workout.sets}
                                </span>

                            </div>



                            <div className="flex items-center border-b border-white/5 px-4 py-3">

                                <span className="w-1/2 text-xs font-bold uppercase">
                                    Reps
                                </span>

                                <span className="w-1/2 text-sm text-gray-300">
                                    {workout.reps}
                                </span>

                            </div>


                            <div className="flex items-center border-b border-white/5 px-4 py-3">

                                <span className="w-1/2 text-xs font-bold uppercase">
                                    Duration
                                </span>

                                <span className="w-1/2 text-sm text-gray-300">
                                    {workout.duration} min
                                </span>

                            </div>



                            <div className="flex items-center border-b border-white/5 px-4 py-3">

                                <span className="w-1/2 text-xs font-bold uppercase">
                                    Calories
                                </span>

                                <span className="w-1/2 text-sm text-gray-300">
                                    {workout.caloriesBurned} kcal
                                </span>

                            </div>



                            <div className="flex items-center px-4 py-3">

                                <span className="w-1/2 text-xs font-bold uppercase">
                                    Rating
                                </span>

                                <span className="w-1/2 text-sm text-gray-300">
                                    {workout.rating}
                                </span>

                            </div>

                        </div>



                        <div className="mt-7">

                            <h2 className="text-xl font-extrabold uppercase tracking-wide">
                                Instructions
                            </h2>


                            <ol className="mt-4 space-y-3">

                                {workout.instructions.map((instruction, index) => (

                                    <li
                                        key={index}
                                        className="flex gap-3 text-sm leading-6 text-gray-300"
                                    >

                                        <span className="font-bold text-white">
                                            {index + 1}.
                                        </span>

                                        <span>
                                            {instruction}
                                        </span>

                                    </li>

                                ))}

                            </ol>

                        </div>



                        <div className="mt-6 flex flex-wrap gap-3">


                          <AddButton workout={workout} />



                    <SavedButton workout={workout}/>


                        </div>

                    </div>

                </div>

            </div>

        </main>
    );
};


export default WorkoutDetailsPage;