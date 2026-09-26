import React from "react";
import MyPlanContent from "@/components/MyPlanContent";

const getWorkouts = async () => {
    try {
        const res = await fetch("https://api.abcz-store.workers.dev/api/fitlog",
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

const MyPlanPage = async () => {

    const workouts = await getWorkouts();

    return (
        <MyPlanContent workouts={workouts} />
    );
};

export default MyPlanPage;