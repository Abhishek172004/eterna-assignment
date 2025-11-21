import React from 'react';
import { 
    Settings, 
    Wallet, 
    Bell, 
    Palette, 
    Compass, 
    Activity, 
    BarChart3, 
    Fuel, 
    Database, 
    ChevronDown, 
    LayoutTemplate,
    Twitter
} from 'lucide-react';
import Image from 'next/image';

// --- Custom Icon Components for things Lucide doesn't cover perfectly ---

const DiscordIcon = () => (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.772-.6083 1.1588a18.2915 18.2915 0 00-5.4882 0 4.168 4.168 0 00-.6128-1.1632.0746.0746 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1432-.1064.2868-.2132.4233-.3241a.0746.0746 0 00.0238-.0461c3.9631 1.8152 8.2456 1.8152 12.163 0a.0739.0739 0 00.0243.047c.137.1114.2811.2185.425.324a.076.076 0 01-.008.128 12.2999 12.2999 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z"/>
    </svg>
);

const EthIcon = () => (
    <div className="w-3.5 h-3.5 flex items-center justify-center text-[#627EEA]">
        <svg viewBox="0 0 32 32" className="w-full h-full fill-current">
            <path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm7.994-15.781L16.498 4 9 16.22l7.498 4.353 7.496-4.354zM24 17.616l-7.502 4.351L9 17.617l7.498 10.378 7.502-10.379z"/>
        </svg>
    </div>
);

// --- Component Helper: Nav Item with Pink Dot ---
const NavItem = ({ icon: Icon, label, hasDot }: { icon: any, label: string, hasDot?: boolean }) => (
    <div className="flex items-center gap-1.5 px-2 hover:text-white cursor-pointer relative group">
        <Icon className="w-3.5 h-3.5 text-gray-400 group-hover:text-white" />
        <span className="text-[11px] font-medium text-gray-300 group-hover:text-white">{label}</span>
        {hasDot && <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-[#f43f5e] rounded-full border border-[#050505]"></div>}
    </div>
);

const FooterBar = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full h-9 bg-[#050505] border-t border-white/10 flex items-center justify-between px-2 select-none z-50">
        
        {/* --- LEFT SECTION --- */}
        <div className="flex items-center gap-2">
            
            {/* Preset Button */}
            <button className="flex items-center gap-1.5 bg-[#171a2e] hover:bg-[#1f2238] border border-blue-500/30 text-blue-400 rounded px-2 py-0.5 transition-colors">
                <Settings className="w-3 h-3" />
                <span className="text-[10px] font-bold">PRESET 1</span>
            </button>

            {/* Wallet Summary */}
            <button className="flex items-center gap-2 bg-[#0a0a0a] border border-white/10 rounded-full px-3 h-6 hover:border-white/20 transition-all">
                <div className="flex items-center gap-1.5 border-r border-white/10 pr-2">
                    <Wallet className="w-3 h-3 text-gray-500" />
                    <span className="text-[10px] font-bold text-gray-300">1</span>
                </div>
                <div className="flex items-center gap-1">
                    <Image src="/firsticon.svg" width={16} height={16} alt="icon"/>0             
                    <span className="text-[10px] font-bold text-gray-300">0</span>
                    <ChevronDown className="w-3 h-3 text-gray-600" />
                </div>
            </button>
        </div>

         

        {/* --- MIDDLE SECTION (Icons & Nav) --- */}
        <div className="flex items-center gap-1 md:gap-3">
            
            

            {/* Nav Links with Dots */}
            <NavItem icon={Wallet} label="Wallet" hasDot />
            <NavItem icon={Twitter} label="Twitter" hasDot />
            <NavItem icon={Compass} label="Discover" hasDot />
            <NavItem icon={Activity} label="Pulse" hasDot />
            <NavItem icon={BarChart3} label="PnL" />

            {/* Pill with Badges */}
            <div className="flex items-center gap-1 bg-[#0a0a0a] border border-white/10 rounded-full px-2 py-0.5 ml-2">
                <div className="w-3 h-3 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center text-[8px]">💊</div>
                <div className="w-3 h-3 text-orange-500 flex items-center justify-center text-[8px]">🔥</div>
                <div className="w-3 h-3 text-pink-500 flex items-center justify-center text-[8px]">▒</div>
            </div>

        </div>

        {/* --- RIGHT SECTION (Prices & Stats) --- */}
        <div className="flex items-center gap-4">
            
            {/* BTC */}
            <div className="flex items-center gap-1.5">
                <Image src="/btc-fill.svg" width={16} height={16} alt="icon"/>
                <span className="text-[10px] font-bold text-[#F7931A]">$85.6K</span>
            </div>

            {/* ETH */}
            <div className="flex items-center gap-1.5">
                <EthIcon />
                <span className="text-[10px] font-bold text-[#627EEA]">$2794</span>
            </div>

            {/* SOL */}
            <div className="flex items-center gap-1.5 border-r border-white/10 pr-4">
                <Image src="/firsticon.svg" width={16} height={16} alt="icon"/>0
                            
                <span className="text-[10px] font-bold text-[#14F195]">$130.85</span>
            </div>

            {/* Stats */}
            <span className="text-[10px] font-bold text-gray-400">$53.8K</span>
            
            {/* Gas */}
            <div className="flex items-center gap-1 text-[10px] text-gray-400">
                <Fuel className="w-3 h-3" />
                <span>0.0<sub className="bottom-0">2</sub>3</span>
            </div>

            {/* Database */}
            <div className="flex items-center gap-1 text-[10px] text-gray-400">
                <Database className="w-3 h-3" />
                <span>0.0<sub className="bottom-0">2</sub>4</span>
            </div>
            
            {/* Connection Indicator Box */}
            <div className="h-full px-2 bg-[#062c1e] flex items-center justify-center border-l border-[#0d5f41]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#10b981]"></div>
            </div>

        </div>
           {/* Connection Status */}
        <div className='flex items-center gap-2'>
            <div className="hidden md:flex items-center gap-1.5 bg-[#062c1e] border border-[#0d5f41] rounded px-2 h-6">
                <div className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse"></div>
                <span className="text-[10px] font-medium text-[#10b981]">Connection is stable</span>
            </div>

            {/* Global Dropdown */}
            <div className="flex items-center gap-1 ml-2 text-[10px] font-bold text-gray-300 cursor-pointer hover:text-white">
                <span>GLOBAL</span>
                <ChevronDown className="w-3 h-3" />
            </div>
            {/* Utility Icons */}
            <div className="flex items-center gap-3 border-r border-white/10 pr-3">
                <LayoutTemplate className="w-3.5 h-3.5 text-gray-400 hover:text-white cursor-pointer" />
                <Bell className="w-3.5 h-3.5 text-gray-400 hover:text-white cursor-pointer" />
                <Palette className="w-3.5 h-3.5 text-gray-400 hover:text-white cursor-pointer" />
            </div>
            {/* Socials */}
            <div className="flex items-center gap-3 border-r border-white/10 pr-3">
                <DiscordIcon />
                <Twitter className="w-3.5 h-3.5 text-gray-400 hover:text-white cursor-pointer" />
            </div>
        </div>
    </div>
  );
};

export default FooterBar;