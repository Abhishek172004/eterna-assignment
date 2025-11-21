import React from 'react';
import { ScrollArea } from './ui/scroll-area';
import { Separator } from './ui/separator';
import TokenCardReplica from './tokenCard';
import tokens from "../public/token.json"; 
// const tags = Array.from({ length: 50 }).map(
//   (_, i, a) => <TokenCardReplica/>
// )

const Scroll_Area = () => {
  return (
        <ScrollArea className="h-125 w-full bg-gray-950 border border-gray-700">
          <div className="flex flex-col">
            {tokens.map((item, i) => (
              <TokenCardReplica data={item} />
            ))}
          </div>
        </ScrollArea>

  );
};

export default Scroll_Area;