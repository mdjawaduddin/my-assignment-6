import Image from 'next/image';
import React from 'react';
import banner from '@/assets/banner.png'
import Link from 'next/link';

const Banner = () => {
    return (
        <div className="container mx-auto flex max-w-6xl flex-col items-center gap-8 rounded-2xl bg-[#222630] p-6 sm:p-8 md:flex-row md:justify-between md:gap-10 md:p-14">
            <div className=" grid grid-cols-1  gap-5 text-white">
                <p className=" text-[11px] text-lime-500 font-bold" > WORKOUT LIBRARY</p>
                <p className=" text-5xl font-bold"> TRAIN WITH INTENT. LOG <br />
                    EVERY SET.</p>
                <p className=" text-[#9CA3AF]">
                    FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                    into today's plan, and watch the week's work add up.
                </p>
                <p>

                   <Link href="#library">
                    <button className=" btn btn-active bg-[#C2F800] rounded-md text-black" > BROWSE WORKOUTS
                    </button></Link>
                </p>

            </div>
            <div className="w-full md:w-1/2">
                <Image src={banner} alt="Banner" width={500} height={500} className="rounded-lg">

                </Image>
            </div>

        </div>
    );
};

export default Banner;