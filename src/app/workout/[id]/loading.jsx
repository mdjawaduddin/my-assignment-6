import React from "react";

const WorkoutDetailsLoading = () => {
  return (
     <div className="flex justify-center items-center h-full w-screen">
          <div>Workout details loading...</div>
     
            <span className="loading loading-spinner loading-xl "></span>
        </div>
  );
};

export default WorkoutDetailsLoading;