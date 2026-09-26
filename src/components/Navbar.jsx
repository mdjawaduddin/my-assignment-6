
"use client";


import Image from 'next/image';
import Link from 'next/link';
import React , {useContext} from 'react';
import { usePathname } from 'next/navigation';
import logo from '@/assets/logo.png';
import { WorkoutsContext } from '@/context/WorkoutsContext';

const Navbar = () => {

    const pathname = usePathname();
    const { addWorkouts, savedWorkouts } = useContext(WorkoutsContext);

    return (
        <nav className="container mx-auto max-w-6xl bg-[#000000] sticky top-0 z-50">

            <div className="navbar">

                <div className="navbar-start">

                    <div className="dropdown">

                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                        >
                            <svg
                                aria-label="Menu"
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>

                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                        >

                            <li>
                                <Link
                                    href="/Homepage"
                                    className={
                                        pathname === "/Homepage"
                                            ? "bg-[#1b1d21] text-[#b7f000]"
                                            : "text-white"
                                    }
                                >
                                    Workouts
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/My-plan"
                                    className={
                                        pathname === "/My-plan"
                                            ? "bg-[#1b1d21] text-[#b7f000]"
                                            : "text-white"
                                    }
                                >
                                    My Plan
                                </Link>
                            </li>

                        </ul>
                    </div>


                    <div className="flex items-center gap-2">

                        <Link
                            href="/Homepage"
                            className="flex items-center gap-2"
                        >
                            <Image
                                src={logo}
                                alt="Logo"
                                width={20}
                                height={20}
                                className="rounded-full"
                            />

                            <span className="font-bold">
                                FITLOG
                            </span>

                        </Link>

                    </div>

                </div>


                <div className="navbar-center hidden lg:flex">

                    <ul className="menu menu-horizontal px-1">

                        <li>
                            <Link
                                href="/Homepage"
                                className={`rounded-xl px-4 py-2 ${pathname === "/Homepage"
                                        ? "bg-[#1b1d21] text-[#b7f000]"
                                        : "text-white hover:text-[#b7f000]"
                                    }`}
                            >
                                Workouts
                            </Link>
                        </li>


                        <li>
                            <Link
                                href="/My-plan"
                                className={`rounded-xl px-4 py-2 ${pathname === "/My-plan"
                                        ? "bg-[#1b1d21] text-[#b7f000]"
                                        : "text-white hover:text-[#b7f000]"
                                    }`}
                            >
                                My Plan
                            </Link>
                        </li>

                    </ul>

                </div>


                <div className="navbar-end">

                    <Link href="/My-plan">

                        <button className="btn btn-ghost">
                            Plan

                            <span className="bg-[#C2F800] rounded-2xl badge badge-success">
                                {addWorkouts.length}
                            </span>
                        </button>

                        <button className="btn btn-ghost">
                            Saved

                            <span className="border-white rounded-2xl badge badge-neutral badge-outlines">
                                {savedWorkouts.length}
                            </span>
                        </button>

                    </Link>

                </div>

            </div>

        </nav>
    );
};

export default Navbar;