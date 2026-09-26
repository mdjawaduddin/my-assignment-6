import Image from 'next/image';
import React from 'react';
import logo from '@/assets/logo.png';


const Footer = () => {
    return (
        <div className=" max-w-7xl mx-auto container flex justify-between items-center gap-auto py-5 -mt-3">
           <div className="flex items-center gap-2">
             <Image src={logo} alt="Logo" width={20} height={20}/> <span> FITLOG</span> 
          
           </div>
            <div>
                <p className=" text-[#6B7280]">© 2026 FitLog — Workout Library. Train hard, log honest.</p>
            </div>
        </div>
    );
};

export default Footer;