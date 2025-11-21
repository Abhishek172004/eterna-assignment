import React from 'react';
import { Settings, Star, Activity, ChartLine } from 'lucide-react';
import HeaderControl from './HeaderControl';
import Scroll_Area from './Schroll_area';

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
)

const Box = () => {
  return (
    <div className="w-full h-135 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-700
    border border-gray-700 text-white bg-gray-950">
      <div className='flex flex-col'>
          <HeaderControl/>
          <Scroll_Area/>
      </div>

      <div>
        <HeaderControl/>
        <Scroll_Area/>
      </div>
      <div>
        <HeaderControl/>
        <Scroll_Area/>
      </div>
    </div>

  );
};

export default Box;