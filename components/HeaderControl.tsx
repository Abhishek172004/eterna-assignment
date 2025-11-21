import React from 'react';
import { Zap, SlidersHorizontal } from 'lucide-react';
import Image from 'next/image';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
const HeaderControl = ({ name }: { name?: string }) => {
  return (
    <div className="w-full bg-gray-950 p-2 flex items-center justify-between border-b border-white/5">
        
        {/* Left Title */}
        <h2 className="text-lg text-white tracking-tight">
            {name || 'Tokens'}
        </h2>

        {/* Right Controls Container */}
        <div className="flex items-center gap-3">
            
            {/* The Main Pill Container */}
            <div className="flex items-center bg-[#0a0a0a] border border-white/10 rounded-full h-7 px-1">
                
                {/* Section 1: Zap & Stats */}
                <div className="flex items-center gap-2 px-2">
                    <Zap className="w-3 h-3 text-gray-500 fill-gray-500/20" />
                    <span className="text-xs font-medium text-gray-400">0.0</span>
                </div>

                {/* Section 2: Solana Logo */}
                <div className="flex items-center justify-center px-1">
                    <Image src="/firsticon.svg" width={16} height={16} alt="icon"/>0
                </div>

                {/* Vertical Divider */}
                <div className="w-[1px] h-3 bg-white/10 mx-1"></div>

                {/* Section 3: P1 P2 P3 Toggles */}
                <div className="flex items-center gap-3 px-2 text-[11px] font-bold">
                    <span className="text-[#5e6ad2] cursor-pointer hover:opacity-80">P1</span>
                    <span className="text-gray-400 cursor-pointer hover:text-white transition-colors">P2</span>
                    <span className="text-gray-400 cursor-pointer hover:text-white transition-colors">P3</span>
                </div>

            </div>

            {/* Filter Settings Icon */}
            <Popover>
                <PopoverTrigger asChild>  
                    <button className="text-gray-400 hover:text-white transition-colors p-1">
                <SlidersHorizontal className="w-4 h-4" />
            </button>
                </PopoverTrigger>
                <PopoverContent className='h-60 w-100 bg-[#16171d] flex items-center justify-center' >
                    <span className='text-white'>
                        Coming Soon!
                    </span>
                </PopoverContent>
            </Popover>
            

        </div>
    </div>
  );
};

export default HeaderControl;