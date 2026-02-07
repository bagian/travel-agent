import {MessageCircle} from "lucide-react";

export default function FloatingWA() {
  return (
    <div className="fixed bottom-8 right-8 z-[60] flex flex-col items-end gap-3 group">
      {/* Tooltip Popup */}
      <div className="bg-white shadow-2xl border border-slate-100 px-4 py-2 rounded-2xl mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <p className="text-xs font-bold text-slate-700">
          Tanya admin via WhatsApp?
        </p>
      </div>

      {/* Button */}
      <a
        href="https://wa.me/6281234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-4 rounded-full shadow-2xl shadow-green-200 hover:bg-green-600 hover:scale-110 transition-all duration-300 flex items-center justify-center relative"
      >
        <MessageCircle size={32} />
        {/* Notif Pulse */}
        <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full border-2 border-white animate-pulse" />
      </a>
    </div>
  );
}
