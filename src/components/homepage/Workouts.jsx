import React from 'react';
import WorkoutCard from '../WorkoutCard';

const getWorkouts = async () => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
    const data = await res.json();
    return data;
}

const Workouts = async () => {
    const workoutsData = await getWorkouts();
    return (
        <div className=" max-w-6xl mx-auto container my-16" >
            <h1 className="text-3xl font-bold">The Library</h1>
            <p className="text-[#9CA3AF]">
                Twelve lifts covering every major muscle group.
            </p>
            <div id="library"  className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8 -mb-4" >
                {workoutsData.map((workout) => (
                    <WorkoutCard
                        key={workout.id}
                        workout={workout}
                    />
                ))}
            </div>
        </div>
    );
};

export default Workouts;


