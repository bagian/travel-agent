import {MessageCircle} from "lucide-react";

export default function FloatingWA() {
  return (
    <div className="fixed bottom-8 right-8 z-[60] flex flex-col items-end">
      {/* GROUP HANYA DI BUBBLE */}
      <div className="relative group">
        {/* Tooltip */}
        <div
          className="
            bg-white shadow-2xl border border-slate-100 px-4 py-2 rounded-2xl mb-3
            opacity-0 invisible translate-y-2
            group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
            transition-all duration-300
            pointer-events-none
            hidden md:block
            absolute bottom-full right-0
            whitespace-nowrap
          "
        >
          <p className="text-xs font-bold text-slate-700">
            Tanya admin via WhatsApp?
          </p>

          {/* Arrow */}
          <div className="absolute -bottom-1 right-5 w-2 h-2 bg-white border-r border-b border-slate-100 rotate-45" />
        </div>

        {/* Bubble WhatsApp */}
        <a
          href="https://wa.me/6281234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="
            bg-green-500 text-white p-4 rounded-full shadow-lg
            hover:bg-green-600 hover:scale-110
            transition-all duration-300
            flex items-center justify-center
            cursor-pointer
          "
        >
          <MessageCircle size={28} />
        </a>
      </div>
    </div>
  );
}
