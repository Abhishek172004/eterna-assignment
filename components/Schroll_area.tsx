import React from 'react';
import { ScrollArea } from './ui/scroll-area';
import { Separator } from './ui/separator';
import TokenCardReplica from './tokenCard';
import tokens from "../public/token.json"; 
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';


const Scroll_Area = () => {
  return (
        <ScrollArea className="h-125 w-full bg-gray-950">

          <Dialog>
            <DialogTrigger>
              <div className="flex flex-col">
                {tokens.map((item, i) => (
                  <TokenCardReplica data={item}/>
                ))}
              </div>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader className="bg-gray-950 text-white">
                <DialogTitle className="bg-gray-950 text-white">Coming Soon!</DialogTitle>
                <DialogDescription className="bg-gray-950 text-white">
                  This page is underdevelopmet.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          
        </ScrollArea>

  );
};

export default Scroll_Area;