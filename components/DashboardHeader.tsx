import React from 'react';
import { 
    HelpCircle, 
    List, 
    ChevronDown, 
    Bookmark, 
    Keyboard, 
    Volume2, 
    Crosshair,
    Folder,
    Box,
    Wallet
} from 'lucide-react';
import Image from 'next/image';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Button } from './ui/button';

// Custom Solana Icon to match the gradient look


const DashboardHeader = () => {
  return (
    <div className="w-full h-16 flex items-center justify-between bg-black">
        
        {/* --- LEFT: Title & Badges --- */}
        <div className="flex items-center gap-3">
            <div>
                <h1 className="text-[22px] font-weight-500 text-white tracking-tight">Pulse</h1>
            </div>
            
            <div className="flex mt-1 items-center gap-2">
                {/* Solana Gradient Badge */}
                <div className="h-10 w-10 rounded-full bg-[#13141b] flex items-center justify-center hover:bg-[#1c1e26] cursor-pointer transition-colors">
                    <Image src="/firsticon.svg" width={22} height={22} alt="icon" />
                </div>
                
                {/* Yellow Cube/Box Icon */}
                <div className="h-10 w-10 rounded-full bg-[#13141b] flex items-center justify-center hover:bg-[#1c1e26] cursor-pointer transition-colors">
                    <Image src="/bnb-fill.svg" width={22} height={22} alt="icon" />
                </div>
            </div>
        </div>

        {/* --- RIGHT: Controls & Tools --- */}
        <div className="flex items-center gap-4 mt-3.5">
            
            {/* Help Icon */}
            <button className="text-gray-500 hover:text-gray-300 transition-colors">
                <HelpCircle className="w-5 h-5" />
            </button>




            {/* Display Dropdown */}
            <Popover>
                <PopoverTrigger asChild>
                    <button className="flex items-center gap-2 bg-[#16171d] hover:bg-[#1f2128] text-white px-4 py-2 rounded-full transition-all border border-white/5">
                        <List className="w-4 h-4 text-gray-200" />
                        <span className="text-sm font-bold mb-1">Display</span>
                        <ChevronDown className="w-4 h-4 text-gray-500" />
                    </button>
                </PopoverTrigger>
                <PopoverContent className='h-120 w-80 bg-[#16171d]' >
                    <div className='bg-[#16171d]  h-50 w-50' >

                    </div>
                </PopoverContent>
            </Popover>

            {/* Action Icons Row */}
            <div className="flex items-center gap-4 mx-2">
                <button className="text-gray-500 hover:text-white transition-colors">
                    <Bookmark className="w-5 h-5" />
                </button>
                <button className="text-gray-500 hover:text-white transition-colors">
                    <Keyboard className="w-5 h-5" />
                </button>
                <button className="text-gray-500 hover:text-white transition-colors">
                    <Volume2 className="w-5 h-5" />
                </button>
                <button className="text-gray-500 hover:text-white transition-colors">
                    <Crosshair className="w-5 h-5" />
                </button>
            </div>

            {/* Wallet Summary Pill */}
            <Popover>
                <PopoverTrigger asChild>
                    <button className="flex items-center gap-3 bg-[#0a0a0a] border border-white/10 rounded-full px-4 py-2 hover:border-white/20 transition-all">
                        {/* Folder Section */}
                        <div className="flex items-center gap-2">
                            <Wallet className="w-4 h-4 text-gray-400"/>
                            <span className="text-sm font-bold text-white">1</span>
                        </div>
                        
                        {/* Solana Section */}
                        <div className="flex items-center gap-1">
                            <Image src="/firsticon.svg" width={16} height={16} alt="icon" />
                            <span className="text-sm font-bold text-white">0</span>
                        </div>

                        <ChevronDown className="w-4 h-4 text-gray-500 ml-1" />
                    </button>
                </PopoverTrigger>
                <PopoverContent className='h-120 w-80 bg-[#16171d]' >
                    <div className='bg-[#16171d]  h-50 w-50' >

                    </div>
                </PopoverContent>
            </Popover>

        </div>
    </div>
  );
};

export default DashboardHeader;