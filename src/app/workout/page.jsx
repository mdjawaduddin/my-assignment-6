import WorkoutCard from '@/components/WorkoutCard';
import React from 'react';

const getWorkouts = async () => {
  try {
        const res = await fetch("https://api.abcz.workers.dev/api/fitlog",
            {
                cache: "force-cache",
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

const Workouts = async () => {
    const workoutsData = await getWorkouts();
    return (
        <div className=" max-w-6xl mx-auto container my-16" >
            <h1 className="text-3xl font-bold">The Library</h1>
            <p className="text-[#9CA3AF]">
                Twelve lifts covering every major muscle group.
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8 -mb-4">
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