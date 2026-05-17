"use client";

export default function ZaloFloat() {
  return (
    <div className="fixed bottom-8 right-8 z-[200] flex flex-col items-end gap-3">
      <div className="px-3.5 py-2 rounded-xl text-white text-xs font-semibold whitespace-nowrap backdrop-blur-xl"
        style={{ background: "rgba(30,42,58,0.95)", border: "1px solid rgba(255,255,255,0.1)" }}>
        Nhắn tin Zalo ngay!
      </div>
      <a href="https://zalo.me/0376355565" target="_blank" rel="noreferrer"
        className="animate-zalo relative w-[60px] h-[60px] rounded-full flex items-center justify-center"
        style={{ background: "#0068FF", boxShadow: "0 4px 20px rgba(0,104,255,0.5)" }}
        title="Chat Zalo">
        {/* Ripple */}
        <span className="animate-ripple absolute inset-[-8px] rounded-full border-2 border-[rgba(0,104,255,0.3)]" />
        {/* Z icon */}
        <svg viewBox="0 0 48 48" width="34" height="34" xmlns="http://www.w3.org/2000/svg">
          <text x="24" y="34" textAnchor="middle" fontFamily="Arial Black" fontWeight="900" fontSize="28" fill="white">Z</text>
        </svg>
      </a>
    </div>
  );
}
