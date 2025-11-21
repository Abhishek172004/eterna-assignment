import React from 'react';
import { ScrollArea } from './ui/scroll-area';
import { Separator } from './ui/separator';
import TokenCardReplica from './tokenCard';

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => <TokenCardReplica/>
)

const Scroll_Area = () => {
  return (
        <ScrollArea className="h-120 w-full bg-gray-950 border-gray-700">
            <div className="flex flex-col">
              {tags.map((tag) => (
                <React.Fragment>
                  <div className="text-sm">{tag}</div>
                  {/* <Separator className="my-2" /> */}
                </React.Fragment>
              ))}
            </div>
        </ScrollArea>
  );
};

export default Scroll_Area;