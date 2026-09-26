import Image from 'next/image';
import React from 'react';
import logo from '@/assets/logo.png';


const Footer = () => {
    return (
        <div className="  container mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 pt-2 mb-8 sm:gap-3 md:flex-row">
           <div className="flex items-center gap-2">
             <Image src={logo} alt="Logo" width={20} height={20}/> <span> FITLOG</span> 
          
           </div>
            <div>
                <p className=" text-[#6B7280] items-center">© 2026 FitLog — Workout Library. Train hard, log honest.</p>
            </div>
        </div>
    );
};

export default Footer;