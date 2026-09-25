import Image from 'next/image';
import React from 'react';

import {
  LuClock3,
  LuFlame,
  LuStar,
} from "react-icons/lu";

const WorkoutCard = ({ workout }) => {
  return (
  <div className="card w-full overflow-hidden rounded-xl border border-base-300/20 bg-[#1b1d21] shadow-none">

  {/* Image */}
  <figure className="h-52 w-full">
    <Image
      src={workout.image}
      alt={workout.name}
      className="h-full w-full object-cover"
      width={400}
      height={208}
    />
  </figure>

  {/* Card Content */}
  <div className="card-body gap-0 p-5">

    {/* Muscle Groups */}
    <div className="mb-3 flex flex-wrap gap-2">
      {workout.muscleGroups.map((muscle) => (
        <span
          key={muscle}
          className="badge h-6 min-h-0 rounded-full border-0 bg-[#b7f000] px-3 text-[11px] font-bold uppercase text-black"
        >
          {muscle}
        </span>
      ))}
    </div>

    {/* Workout Name */}
    <h2 className="card-title mb-2 text-[18px] font-extrabold uppercase leading-tight tracking-wide text-white">
      {workout.name}
    </h2>

    {/* Equipment */}
    <p className="mb-4 text-[13px] font-medium text-gray-400">
      {workout.equipment}
    </p>

    {/* Workout Information */}
    <div className="flex items-center gap-5 text-[12px] font-medium text-gray-300">

      <div className="flex items-center gap-1.5">
        <LuClock3 className="text-[16px] text-[#b7f000]" />
        <span>{workout.duration} min</span>
      </div>

      <div className="flex items-center gap-1.5">
        <LuFlame className="text-[16px] text-[#b7f000]" />
        <span>{workout.caloriesBurned} kcal</span>
      </div>

      <div className="flex items-center gap-1.5">
        <LuStar className="text-[16px] text-[#b7f000]" />
        <span>{workout.rating}</span>
      </div>

    </div>

  </div>
</div>
  );
};


export default WorkoutCard;