import React from 'react';
import { Settings, Star, Activity, ChartLine } from 'lucide-react';

const TaskBar = () => {
  return (
    <div className="w-full h-6 bg-[#050505] border-b border-white/10 flex items-center px-4 gap-4">
        
        {/* Settings Icon */}
        <button className="text-gray-400 hover:text-white ransition-colors hover:cursor-pointer">
            <Settings className="h-3.5 w-3.5" />
        </button>

        {/* Vertical Separator */}
        <div className="h-4 w-[1px] bg-white/10"></div>

        {/* Star (Favorites) */}
        <button className="text-gray-400 hover:text-white transition-colors hover:cursor-pointer">
            <Star className="h-3.5 w-3.5" />
        </button>

        {/* Activity / Chart Icon */}
        <button className="text-gray-200 hover:text-white transition-colors hover:cursor-pointer">
            <ChartLine className='h-3.5 w-3.5' />
        </button>

        {/* Vertical Separator */}
        <div className="h-4 w-[1px] bg-white/10"></div>

    </div>
  );
};

export default TaskBar;