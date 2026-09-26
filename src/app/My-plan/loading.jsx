import React from 'react';

const MyPlanLoadingPage = () => {
    return (
        <div className="flex justify-center items-center h-full w-screen">
          <div> My Plan loading...</div>
     
            <span className="loading loading-spinner loading-xl "></span>
        </div>
    );
};

export default MyPlanLoadingPage;