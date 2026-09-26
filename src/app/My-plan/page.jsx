// "use client";

// import { useContext } from 'react';
// import { WorkoutsContext } from '@/context/WorkoutsContext';
// import React from 'react';
// import Link from 'next/link';
// import PlanWorkoutCard from '@/components/PlanWorkoutCard';





// const MyPlanPage = () => {
//     const { addWorkouts, savedWorkouts } = useContext(WorkoutsContext);



//     return (
//         <div>
//             <div className="container mx-auto px-4 py-8 max-w-7xl">
//                 <h1 className="text-4xl font-semibold mb-4">My Plan</h1>
//                 <p className="text-gray-400 text-lg">
//                     Cap of five lifts for today. Finish them, then load more.
//                 </p>
//                 <div className="mt-5 w-full rounded-xl border border-white/10 bg-[#15171c] px-5 py-4">

//                     <div className="grid grid-cols-3">

//                         <div className="border-r border-dashed border-white/10">

//                             <p className="text-xs font-medium text-gray-400">
//                                 Exercises
//                             </p>

//                             <p className="mt-1 text-2xl font-bold text-[#b7f000]">
//                                 2
//                             </p>

//                         </div>


//                         <div className="border-r border-dashed border-white/10 pl-5">

//                             <p className="text-xs font-medium text-gray-400">
//                                 Minutes
//                             </p>

//                             <p className="mt-1 text-2xl font-bold text-white">
//                                 23
//                             </p>

//                         </div>


//                         <div className="pl-5">

//                             <p className="text-xs font-medium text-gray-400">
//                                 Calories
//                             </p>

//                             <p className="mt-1 text-2xl font-bold text-white">
//                                 190
//                             </p>

//                         </div>

//                     </div>

//                 </div>
//             </div>
//             <div className="tabs tabs-border  max-w-7xl container mx-auto flex w-full flex-wrap gap-2 px-4">
//                 <input type="radio" name="my_tabs_2" className="tab" aria-label="Today's Plan" defaultChecked />
//                 <div className="tab-content border-base-300 bg-base-100 border-dashed p-10">
//                     {addWorkouts.length === 0 ? (
//                         <div className="flex flex-col items-center justify-center gap-4 p-15">  <p className="text-white text-2xl font-bold">NOTHING HERE YET</p>
//                             <p className="text-gray-400"> Browse the library and add a lift to get today moving.</p>
//                             <Link href="/Homepage">
//                                 <button className="btn btn-active bg-[#C2F800] rounded-2xl text-black font-semibold" >
//                                     Go to workouts
//                                 </button></Link> </div>
//                     ) : (
//                         addWorkouts.map((workout) => (
                    
//                         <PlanWorkoutCard key={workout.id} workout={workout} />

                        
//                         ))
//                     )}

//                 </div>

//                 <input type="radio" name="my_tabs_2" className="tab" aria-label="Saved"  />
//                 <div className="tab-content border-base-300 bg-base-100 border-dashed p-10">
//                     {savedWorkouts.length === 0 ? (
//                         <div className="flex flex-col items-center justify-center gap-4 p-15">  <p className="text-white text-2xl font-bold">NOTHING HERE YET</p>
//                             <p className="text-gray-400"> Browse the library and save a lift to get today moving.</p>
//                            <Link href="/Homepage">
//                                 <button className="btn btn-active bg-[#C2F800] rounded-2xl text-black font-semibold" >
//                                     Go to workouts
//                                 </button>
//                             </Link>
//                         </div>
//                     ) : (
//                         savedWorkouts.map((workout) => (
//                             <div key={workout.id} className="mb-4">
//                                 <h3 className="text-xl font-bold text-white">{workout.name}</h3>
//                                 <p className="text-gray-400">{workout.description}</p>
//                             </div>
//                         ))
//                     )}

//                 </div>


//             </div>
//         </div>
//     );
// };

// export default MyPlanPage;

import React from "react";
import MyPlanContent from "@/components/MyPlanContent";

const getWorkouts = async () => {
    try {
        const res = await fetch(
            "https://api.abcz.workers.dev/api/fitlog",
            {
                cache: "no-store",
            }
        );

        if (!res.ok) {
            return [];
        }

        const data = await res.json();

        return data;
    } catch (error) {
        console.error("Error fetching workouts:", error);
        return [];
    }
};

const MyPlanPage = async () => {

    const workouts = await getWorkouts();

    return (
        <MyPlanContent workouts={workouts} />
    );
};

export default MyPlanPage;