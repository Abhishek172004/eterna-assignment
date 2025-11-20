import React from 'react';
import Image from 'next/image';
import { 
    Search, 
    Bell, 
    Star, 
    Wallet, 
    ChevronDown, 
    Triangle, 
    Menu,
    SolarPanelIcon,
    UserStar
} from 'lucide-react';


const Link = ({ href, children, className }: { href: string, children: React.ReactNode, className?: string }) => (
  <a href={href} className={className}>{children}</a>
);

const Header = () => {
  const navLinks = [
    { name: 'Discover', href: '/discover' },
    { name: 'Pulse', href: '/pulse', active: true },
    { name: 'Trackers', href: '/trackers' },
    { name: 'Perpetuals', href: '/perps' },
    { name: 'Yield', href: '/yield' },
    { name: 'Vision', href: '/vision' },
    { name: 'Portfolio', href: '/portfolio' },
  ];

  return (
    <header className='fixed top-0 left-0 w-full h-16 border-b border-white/10 bg-[#050505] text-white z-50 flex items-center gap-4 px-6 font-sans'>
        
        {/* --- LEFT SIDE: Logo & Navigation --- */}
        <div className='flex items-center gap-4 lg:gap-6'>
            {/* Logo Area */}
            <Link href="/" className='flex items-center gap-1 group no-underline'>
                <div className="relative flex items-center justify-center">
                    <Image src='/logo.png' alt="APP LOGO" width={55} height={55} className='h-10 py-1 w-auto object-contain'/>
                </div>
                <div className='flex items-center'>
                <span className="text-[24px]  tracking-tight text-white">AXIOM 
                  <span className="text-[16px] font-normal text-gray-300 "> Pro</span>
                </span>
                </div>
            </Link>

            {/* Navigation Links (Desktop) */}
            <nav className='hidden lg:flex items-center gap-[10px] text-[13px] font-medium color-white hover:color-blue'>
                {navLinks.map((link) => (
                    <Link 
                        key={link.name} 
                        href={link.href}
                        className="px-3 py-2 rounded-md transition-all no-underline text-white hover:bg-[#526FFF]/30
                        text-[14px] font-medium"
                    >
                        {link.name}
                    </Link>
                ))}
            </nav>
        </div>

        {/* --- RIGHT SIDE: Search, Tools, Wallet, Profile --- */}
        <div className='flex items-center gap-2 sm:gap-3'>
            
            {/* Search Bar (Pill Shape) */}
            <div className='hidden md:flex items-center bg-black border-[1.9px] border-gray-730 rounded-full px-3 py-0.5 w-40 lg:w-55 group focus-within:border-gray-500 transition-colors'>
                <Search className='h-6 w-6 text-white-800 mr-1  group-focus-within:text-white' />
                <input 
                    type="text" 
                    placeholder="Search by token or CA..." 
                    className='bg-transparent border-none outline-none text-xs text-white placeholder:text-gray-600 w-full focus:ring-0'
                />
                <div className='hidden lg:block text-[10px] text-gray-500 border border-white/10 px-1.5 rounded bg-black/50'>/</div>
            </div>

            {/* Chain Selector (SOL) */}
            <button className="h-8 rounded-full bg-[#0f1114] border border-green] hover:bg-white/5 gap-2 px-3 hidden sm:flex items-center transition-colors cursor-pointer">
                <div className="h-4 w-4">
                  <Image src="/firsticon.svg" width={16} height={16} alt="icon" />
                </div> 
                <span className="text-[16px] text-white">SOL</span>
                <ChevronDown className="h-3 w-3 text-gray-500" />
            </button>


            <div className='flex items-center gap-2 pl-2'>
                {/* Deposit Button (Primary Action) */}
                <button className="h-8 rounded-full bg-[#526fff] hover:bg-[#5b6ecc] text-black text-[14px] font-bold px-3 shadow-[0_0_15px_-3px_rgba(94,106,210,0.6)] transition-all cursor-pointer">
                    Deposit
                </button>

                {/* Icons: Star & Bell */}
                <div className="flex items-center gap-3 mx-1">
                    <button className="h-8 w-8 rounded-full text-gray-200 bg-white/10 hover:text-white hover:bg-white/5 flex items-center justify-center transition-colors">
                        <Star className="h-4 w-4" />
                    </button>
                    <button className="h-8 w-8 rounded-full text-gray-200 bg-white/10 hover:text-white hover:bg-white/5 flex items-center justify-center transition-colors">
                        <Bell className="h-4 w-4" />
                    </button>
                </div>

                {/* Wallet Display (The Complex Pill) */}
                <div className="hidden xl:flex items-center gap-1 bg-[#0f1114] border border-white/10 rounded-full pl-3 pr-2 py-1 h-8 cursor-pointer hover:border-white/20 transition-colors">
                    <Wallet className="h-4 w-4 text-gray-100" />
                    <div className="flex items-center gap-1 text-5 font-medium text-gray-300 ml-2">
                      <Image src="/firsticon.svg" width={16} height={16} alt="icon"/>0
                    </div>
                    <div className="h-3 w-[1px] bg-gray-800 mx-2"></div>
                    <div className="flex items-center gap-1 text-5 font-medium text-gray-300">
                      <Image src="/usdc-perps.svg" width={16} height={16} alt="icon"/>
                      0
                    </div>
                    <ChevronDown className="h-3 w-3 text-gray-500 ml-1" />
                </div>

                {/* User Profile (Static Avatar) */}
                <div className="ml-1 h-8 w-8 rounded-full bg-gray-700 border border-white/10 overflow-hidden cursor-pointer hover:border-white/30 transition-all relative">
                    <UserStar size={32} />
                </div>

                {/* Mobile Menu Toggle */}
                <button className="lg:hidden h-8 w-8 rounded-full text-gray-400 hover:text-white hover:bg-white/5 flex items-center justify-center">
                    <Menu className="h-5 w-5" />
                </button>
            </div>
        </div>
    </header>
  );
};

export default Header;