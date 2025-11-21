import React from 'react';
import { 
    Copy, 
    Search, 
    Users, 
    BarChart2, 
    Trophy, 
    Crown, 
    ChefHat, 
    Crosshair, 
    Ghost, 
    Boxes, 
    Zap,
    Pill
} from 'lucide-react';

// --- TYPES ---
interface TokenData {
    img: string;
    ticker: string;
    address: string;
    name: string;
    fullName: string;
    time: string;
    volume: string;
    mcap: string;
    liquidity: string;
    txCount: number;
    txBarGreen: number; 
    holders: string;
    top10: string;
    blueBadge: string;
    king: string;
    
    // Badges with color logic
    topHoldersMod: { val: string; color: 'red' | 'green' };
    devAction: { val: string; time: string; color: 'red' | 'green' };
    snipers: { val: string; color: 'red' | 'green' };
    insiders: { val: string; color: 'red' | 'green' };
    cluster: { val: string; color: 'red' | 'green' };
}

// --- RANDOM DATA GENERATOR ---
const generateRandomData = (): TokenData => {
    return {
        img: "https://api.dicebear.com/7.x/pixel-art/svg?seed=GAMEOVER", // Pixel art style image
        ticker: "GAMEOVER",
        address: "yZqS...pump",
        name: "GAMEOVER",
        fullName: "Game Over",
        time: "29s",
        volume: "$4K",
        mcap: "$5.08K",
        liquidity: "0.307",
        txCount: 45,
        txBarGreen: 85, // Mostly green bar like image
        holders: "13",
        top10: "4",
        blueBadge: "0",
        king: "0/1",
        topHoldersMod: { val: "17%", color: 'red' },
        devAction: { val: "2%", time: "8m", color: 'green' },
        snipers: { val: "15%", color: 'red' },
        insiders: { val: "0%", color: 'green' },
        cluster: { val: "13%", color: 'red' }
    };
};

const TokenCardReplica = ({ data }: { data: TokenData }) => {
  
  // Helper for the bottom badges
  const StatBadge = ({ 
      icon: Icon, 
      text, 
      subText, 
      color 
  }: { 
      icon: any, 
      text: string, 
      subText?: string, 
      color: 'red' | 'green' 
  }) => {
      const colorClass = color === 'red' ? 'text-[#ef4444] border-[#ef4444]/20' : 'text-[#10b981] border-[#10b981]/20';
      const bgClass = color === 'red' ? 'bg-[#ef4444]/5' : 'bg-[#10b981]/5';
      
      return (
          <div className={`flex items-center gap-1.5 px-1.5 py-0.5 rounded-full border ${colorClass} ${bgClass} text-[10px] font-bold h-5`}>
              <Icon className="w-3 h-3" />
              <span>{text}</span>
              {subText && <span className="text-gray-400 font-normal ml-0.5 flex items-center gap-0.5">{subText}</span>}
          </div>
      );
  };

  return (
    <div className="w-full bg-gray-950 border border-white/10 flex items-centergap-3 font-sans select-none border p-2 hover:border-white/10 transition-colors">
        
        {/* --- LEFT COLUMN: Image --- */}
        <div className="flex flex-col gap-1 shrink-0 mr-2">
            <div className="w-14 h-full rounded-md overflow-hidden border border-white/10 bg-[#1a1a1a]">
                <img src={data.img} alt={data.name} className="w-full h-full object-cover" />
                
                {/* Green Pill Overlay Icon (Bottom Right) */}
                <div className="absolute bottom-0 right-0 bg-[#050505] p-[1px] rounded-tl-md z-10">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#10b981] flex items-center justify-center border border-[#050505]">
                        <Pill className="w-2 h-2 text-black fill-black rotate-45" />
                    </div>
                </div>
            </div>
            <div className="text-[10px] text-gray-500 font-mono truncate w-14 text-center opacity-70">
                {data.address}
            </div>
        </div>

        {/* --- RIGHT COLUMN: Info --- */}
        <div className="flex-1 flex flex-col gap-1 min-w-0 justify-center">
            
            {/* TOP ROW: Name & Stats */}
            <div className="flex justify-between items-start">
                
                {/* Name Section */}
                <div className="flex flex-col">
                    <div className="flex items-baseline gap-1.5">
                        <span className="text-sm font-bold text-white tracking-wide">{data.name}</span>
                        <span className="text-xs text-gray-500 font-medium">{data.fullName}</span>
                        <Copy className="w-3 h-3 text-gray-600 hover:text-gray-400 cursor-pointer" />
                    </div>
                    
                    {/* Icons Row */}
                    <div className="flex items-center gap-3 mt-1 text-[11px] text-gray-400 font-medium">
                        <span className="text-[#10b981] font-bold">{data.time}</span>
                        <Pill className="w-3 h-3 text-gray-400 -ml-1" />
                        <Search className="w-3 h-3 text-gray-400 -ml-1" />
                        
                        {/* Holders */}
                        <div className="flex items-center gap-1 border-l border-gray-800 pl-2">
                            <Users className="w-3 h-3" />
                            <span className="text-white font-bold">{data.holders}</span>
                        </div>
                        
                        {/* Top 10 */}
                        <div className="flex items-center gap-1 border-l border-gray-800 pl-2">
                            <BarChart2 className="w-3 h-3 rotate-90" />
                            <span className="text-white font-bold">{data.top10}</span>
                        </div>
                        
                        {/* Trophy */}
                        <div className="flex items-center gap-1 border-l border-gray-800 pl-2">
                            <Trophy className="w-3 h-3" />
                            <span className="text-white font-bold">{data.blueBadge}</span>
                        </div>
                        
                        {/* Crown */}
                        <div className="flex items-center gap-1 border-l border-gray-800 pl-2">
                            <Crown className="w-3 h-3" />
                            <span className="text-white font-bold">{data.king}</span>
                        </div>
                    </div>
                </div>

                {/* Right Side Stats (MC/Vol/Liq) */}
                <div className="flex flex-col items-end text-[10px] font-mono gap-1 leading-none pt-0.5">
                    <div className="flex gap-2">
                        <span className="text-gray-500">V <span className="text-white font-bold">{data.volume}</span></span>
                        <span className="text-gray-500">MC <span className="text-[#3b82f6] font-bold">{data.mcap}</span></span>
                    </div>
                    <div className="flex gap-2 items-center">
                        <span className="text-gray-500 flex items-center gap-1">
                            F 
                            {/* Solana Icon */}
                            <svg viewBox="0 0 24 24" className="w-2.5 h-2.5" fill="none"><path d="M4 18L7.5 14H21.5L18 18H4Z" fill="#9945FF"/><path d="M2 12L5.5 8H19.5L16 12H2Z" fill="#14F195"/><path d="M4 6L7.5 2H21.5L18 6H4Z" fill="#14F195"/></svg>
                            <span className="text-white font-bold">{data.liquidity}</span>
                        </span>
                        <span className="text-gray-500 flex items-center gap-1">
                            TX <span className="text-white font-bold">{data.txCount}</span>
                            {/* Transaction Bar */}
                            <div className="w-8 h-1 bg-[#ef4444] rounded-full overflow-hidden ml-0.5">
                                <div className="h-full bg-[#10b981]" style={{ width: `${data.txBarGreen}%` }}></div>
                            </div>
                        </span>
                    </div>
                </div>
            </div>

            {/* BOTTOM ROW: Badges */}
            <div className="flex items-center gap-2 mt-1.5">
                <StatBadge icon={Users} text={data.topHoldersMod.val} color={data.topHoldersMod.color} />
                
                {/* Complex Chef Badge */}
                <div className={`flex items-center gap-1.5 px-1.5 py-0.5 rounded-full border text-[10px] font-bold h-5 ${data.devAction.color === 'red' ? 'text-[#ef4444] border-[#ef4444]/20 bg-[#ef4444]/5' : 'text-[#10b981] border-[#10b981]/20 bg-[#10b981]/5'}`}>
                    <ChefHat className="w-3 h-3" />
                    <span>{data.devAction.val}</span>
                    <div className={`w-[1px] h-2 mx-0.5 ${data.devAction.color === 'red' ? 'bg-[#ef4444]/30' : 'bg-[#10b981]/30'}`}></div>
                    <span className="text-white text-[9px] flex items-center gap-0.5">🚀 {data.devAction.time}</span>
                </div>

                <StatBadge icon={Crosshair} text={data.snipers.val} color={data.snipers.color} />
                <StatBadge icon={Ghost} text={data.insiders.val} color={data.insiders.color} />
                <StatBadge icon={Boxes} text={data.cluster.val} color={data.cluster.color} />

                <div className="ml-auto">
                     <Zap className="w-3 h-3 text-[#5e6ad2] fill-[#5e6ad2]/30" />
                </div>
            </div>

        </div>
    </div>
  );
};

export default TokenCardReplica;