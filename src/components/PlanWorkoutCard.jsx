// "use client";

// import Link from "next/link";
// import React, { useContext } from "react";
// import {
//   LuClock3,
//   LuFlame,
//   LuStar,
//   LuCheck,
//   LuX,
// } from "react-icons/lu";
// import { toast } from "react-toastify";
// import { WorkoutsContext } from "@/context/WorkoutsContext";
// import Image from "next/image";

// const PlanWorkoutCard = ({ workout }) => {
//   const { addWorkouts, setAddWorkouts } = useContext(WorkoutsContext);

//   const handleDone = () => {
//     setAddWorkouts(
//       addWorkouts.filter((id) => id !== workout.id)
//     );

//     toast.success("Workout marked as done!");
//   };

//   const handleRemove = () => {
//     toast.info("Workout is still in your plan.");
//   };

//   return (
//     <div className="w-full rounded-2xl border border-base-300/20 bg-[#1b1d21] p-5">
//       <div className="flex flex-col gap-5 md:flex-row md:items-center">

//         {/* IMAGE */}
//         <div className="relative h-32 w-full shrink-0 overflow-hidden rounded-xl md:h-28 md:w-44">
//           <Image
//             src={workout.image}
//             alt={workout.name}
//             fill
//             className="object-cover"
//           />
//         </div>

//         {/* WORKOUT INFORMATION */}
//         <div className="flex-1">

//           {/* Workout name */}
//           <h2 className="text-xl font-extrabold uppercase tracking-wide text-white">
//             {workout.name}
//           </h2>

//           {/* Equipment */}
//           <p className="mt-1 text-sm text-gray-400">
//             {workout.equipment}
//           </p>

//           {/* Stats */}
//           <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-gray-300">

//             <div className="flex items-center gap-1.5">
//               <LuClock3 className="text-[#b7f000]" />
//               <span>{workout.duration} min</span>
//             </div>

//             <div className="flex items-center gap-1.5">
//               <LuFlame className="text-[#b7f000]" />
//               <span>{workout.caloriesBurned} kcal</span>
//             </div>

//             <div className="flex items-center gap-1.5">
//               <LuStar className="text-[#b7f000]" />
//               <span>{workout.rating}</span>
//             </div>

//           </div>
//         </div>

//         {/* BUTTONS */}
//         <div className="flex flex-wrap items-center gap-2 md:justify-end">

//           {/* VIEW DETAILS */}
//           <Link
//             href={`/workout/${workout.id}`}
//             className="rounded-full border border-gray-400 px-4 py-2 text-sm font-semibold text-white hover:border-[#b7f000] hover:text-[#b7f000]"
//           >
//             View Details
//           </Link>

//           {/* MARK AS DONE */}
//           <button
//             onClick={handleDone}
//             className="flex items-center gap-2 rounded-full bg-[#b7f000] px-4 py-2 text-sm font-bold text-black"
//           >
//             <LuCheck />
//             Mark as Done
//           </button>

//           {/* CROSS BUTTON */}
//           <button
//             onClick={handleRemove}
//             className="flex h-10 w-10 items-center justify-center rounded-full text-gray-300 hover:bg-red-500/10 hover:text-red-500"
//           >
//             <LuX size={20} />
//           </button>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default PlanWorkoutCard;
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


    /*
      Mark as done
    */

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


    /*
      Remove workout
    */

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


                {/* WORKOUT INFORMATION */}

                <div className="min-w-0 flex-1">

                    <h2 className="text-xl font-extrabold uppercase tracking-wide text-white">
                        {workout.name}
                    </h2>

                    <p className="mt-1 text-sm text-gray-400">
                        {workout.equipment}
                    </p>


                    {/* STATS */}

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


                {/* BUTTONS */}

                <div className="flex w-full flex-wrap items-center gap-2 lg:w-auto lg:justify-end">


                    {/* VIEW DETAILS */}

                    <Link
                        href={`/workout/${workout.id}`}
                        className="rounded-full border border-gray-400 px-4 py-2 text-center text-sm font-semibold text-white hover:border-[#b7f000] hover:text-[#b7f000]"
                    >
                        View Details
                    </Link>


                    {/* MARK AS DONE */}

                    {!isSaved && (

                        <button
                            onClick={handleDone}
                            className="flex items-center justify-center gap-2 rounded-full bg-[#b7f000] px-4 py-2 text-sm font-bold text-black"
                        >

                            <LuCheck />

                            Mark as Done

                        </button>

                    )}


                    {/* REMOVE */}

                    <button
                        onClick={handleRemove}
                        aria-label="Remove workout"
                        className="flex h-10 w-10 items-center justify-center rounded-full text-gray-300 hover:bg-red-500/10 hover:text-red-500"
                    >

                        <LuX size={20} />

                    </button>

                </div>

            </div>

        </div>
    );
};

export default PlanWorkoutCard;