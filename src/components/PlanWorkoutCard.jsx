"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import {
    LuClock3,
    LuFlame,
    LuStar,
    LuCheck,
    LuX
} from "react-icons/lu";

import { Bounce, toast } from "react-toastify";


const PlanWorkoutCard = ({
    workout,
    isSaved,
    onRemove
}) => {



    const handleDone = () => {

        onRemove(workout.id);

        toast.success(
            "Workout logged — nice work",
            {
                position: "top-right",
                autoClose: 2500,
                hideProgressBar: true,
                theme: "dark",
                transition: Bounce
            }
        );
    };


 

    const handleRemove = () => {

        onRemove(workout.id);

        toast.success(
            isSaved
                ? "Removed from saved"
                : "Removed from today's plan",
            {
                position: "top-right",
                autoClose: 2500,
                hideProgressBar: true,
                theme: "dark",
                transition: Bounce
            }
        );
    };


    return (

        <div className="w-full rounded-2xl border border-white/10 bg-[#1b1d21] p-4 sm:p-5">

            <div className="flex flex-col gap-4 lg:flex-row lg:items-center">


                {/* IMAGE */}

                <div className="relative h-44 w-full shrink-0 overflow-hidden rounded-xl sm:h-48 lg:h-28 lg:w-44">

                    <Image
                        src={workout.image}
                        alt={workout.name}
                        fill
                        className="object-cover"
                    />

                </div>



                <div className="min-w-0 flex-1">

                    <h2 className="text-xl font-extrabold uppercase tracking-wide text-white">
                        {workout.name}
                    </h2>

                    <p className="mt-1 text-sm text-gray-400">
                        {workout.equipment}
                    </p>



                    <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-gray-300">


                        <div className="flex items-center gap-1.5">

                            <LuClock3 className="text-[#b7f000]" />

                            <span>
                                {workout.duration} min
                            </span>

                        </div>


                        <div className="flex items-center gap-1.5">

                            <LuFlame className="text-[#b7f000]" />

                            <span>
                                {workout.caloriesBurned} kcal
                            </span>

                        </div>


                        <div className="flex items-center gap-1.5">

                            <LuStar className="text-[#b7f000]" />

                            <span>
                                {workout.rating}
                            </span>

                        </div>

                    </div>

                </div>



                <div className="flex w-full flex-wrap items-center gap-2 lg:w-auto lg:justify-end">



                    <Link
                        href={`/workout/${workout.id}`}
                        className="rounded-full border border-white bg-mist-900 px-4 py-2 text-center text-sm font-semibold text-white hover:border-transparent" >
                        View Details
                    </Link>



                    {!isSaved && (

                        <button
                            onClick={handleDone}
                            className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#b7f000] px-4 py-2 text-sm font-bold text-black"
                        >

                            <LuCheck />

                            Mark as Done

                        </button>

                    )}



                    <button
                        onClick={handleRemove}
                        className=" flex cursor-pointer h-10 w-10 items-center justify-center rounded-full text-gray-300 hover:bg-mist-900 "
                    >

                        <LuX size={20} />

                    </button>

                </div>

            </div>

        </div>
    );
};

export default PlanWorkoutCard;