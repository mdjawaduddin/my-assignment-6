import Image from 'next/image';
import React from 'react';
import banner from '@/assets/banner.png'

const Banner = () => {
    return (
        <div className="bg-[#222630] max-w-6xl mx-auto container flex justify-between items-center gap-auto p-14 rounded-2xl">
            <div className=" grid grid-cols-1  gap-5 text-white">
                <p className=" text-[11px] text-lime-500 font-bold" > WORKOUT LIBRARY</p>
                <p className=" text-5xl font-bold"> TRAIN WITH INTENT. LOG <br />
                    EVERY SET.</p>
                <p className=" text-[#9CA3AF]">
                    FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                    into today's plan, and watch the week's work add up.
                </p>
                <p>

                    <button className=" btn btn-active bg-[#C2F800] rounded-md text-black" > BROWSE WORKOUTS
                    </button>
                </p>

            </div>
            <div>
                <Image src={banner} alt="Banner" width={500} height={500} className="rounded-lg">

                </Image>
            </div>

        </div>
    );
};

export default Banner;