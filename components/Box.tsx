import React from 'react';
import { Settings, Star, Activity, ChartLine } from 'lucide-react';
import HeaderControl from './HeaderControl';

const Box = () => {
  return (
    <div className="w-full h-135 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-700
    border border-gray-700 text-white bg-gray-950">
      <div className='flex flex-col'>
          <HeaderControl/>
      </div>

      <div>
        <HeaderControl/>
      </div>
      <div>
        <HeaderControl/>
      </div>
    </div>

  );
};

export default Box;