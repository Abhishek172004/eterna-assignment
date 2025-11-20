"use client";

import Image from "next/image";
import { useState } from "react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Input
} from "@/components/ui/input";

import {
  Button
} from "@/components/ui/button";

import {
  Search,
  Menu,
  Star,
  Bell,
  MoreVertical,
  User,
  ChevronDown
} from "lucide-react";


const navItems = [
  "Discover",
  "Pulse",
  "Trackers",
  "Perpetuals",
  "Yield",
  "Vision",
  "Portfolio",
];


const nav_bar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-[#0c0d0d] border-b border-[#1c1c1d] px-6 py-3 flex items-center justify-between">
      
      {/* LEFT — Logo + Desktop nav */}
      <div className="flex items-center space-x-10">
        
        {/* LOGO */}
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-white clip-triangle" />
          <span className="text-white text-xl font-semibold">
            AXIOM <span className="text-gray-400">Pro</span>
          </span>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center space-x-6 text-sm">
          {navItems.map((item) => (
            <button
              key={item}
              className={`${
                item === "Pulse"
                  ? "text-white font-semibold"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}
        </nav>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center space-x-3">

        {/* SEARCH BAR (hidden on mobile) */}
        <div className="relative hidden lg:block w-64">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <Input
            placeholder="Search by token or CA..."
            className="bg-[#111213] border border-[#1f1f20] pl-10 text-white rounded-xl"
          />
        </div>

        {/* CHAIN BUTTON */}
        <Button
          variant="outline"
          className="bg-[#111213] border-[#1f1f20] text-white rounded-xl hidden md:flex space-x-2"
        >
          <Image
            src="https://cryptologos.cc/logos/solana-sol-logo.png"
            alt="sol"
            width={16}
            height={16}
          />
          <span>SOL</span>
          <ChevronDown size={16} />
        </Button>

        {/* Deposit */}
        <Button className="bg-[#3b5bff] text-white rounded-xl font-semibold hidden md:flex">
          Deposit
        </Button>

        {/* Icons */}
        <Button
          size="icon"
          variant="outline"
          className="bg-[#111213] border-[#1f1f20] rounded-xl text-white hidden md:flex"
        >
          <Star size={18} />
        </Button>

        <Button
          size="icon"
          variant="outline"
          className="bg-[#111213] border-[#1f1f20] rounded-xl text-white hidden md:flex"
        >
          <Bell size={18} />
        </Button>

        <Button
          size="icon"
          variant="outline"
          className="bg-[#111213] border-[#1f1f20] rounded-xl text-white hidden md:flex"
        >
          <MoreVertical size={18} />
        </Button>

        <Button
          size="icon"
          variant="outline"
          className="bg-[#111213] border-[#1f1f20] rounded-full text-white hidden md:flex"
        >
          <User size={18} />
        </Button>

        {/* MOBILE MENU BUTTON */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button size="icon" variant="ghost" className="md:hidden text-white">
              <Menu size={22} />
            </Button>
          </SheetTrigger>

          {/* MOBILE SHEET */}
          <SheetContent side="left" className="bg-[#0c0d0d] border-[#1c1c1d] text-white w-64">
            <div className="mt-8 space-y-6">
              {navItems.map((item) => (
                <div
                  key={item}
                  className="text-gray-300 text-lg hover:text-white cursor-pointer"
                >
                  {item}
                </div>
              ))}

              <div className="pt-6 space-y-3">
                <Input
                  placeholder="Search..."
                  className="bg-[#111213] border-[#1f1f20] text-white"
                />
                <Button className="bg-[#3b5bff] text-white w-full">Deposit</Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

export default nav_bar;