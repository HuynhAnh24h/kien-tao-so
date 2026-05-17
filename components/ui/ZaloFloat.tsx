"use client";

import Image from "next/image";
import zalo from "../../app/assets/zalo.webp";

export default function ZaloFloat() {
  return (
    <div className="fixed bottom-8 right-8 z-[200] flex flex-col items-end gap-3">
      <div
        className="px-3.5 py-2 rounded-xl text-white text-xs font-semibold whitespace-nowrap backdrop-blur-xl"
      >
        Nhắn tin Zalo ngay!
      </div>

      <a
        href="https://zalo.me/0376355565"
        target="_blank"
        rel="noreferrer"
        className="animate-zalo relative w-[60px] h-[60px] rounded-full flex items-center justify-center overflow-hidden"
        title="Chat Zalo"
      >

        {/* Zalo icon */}
        <Image
          src={zalo}
          alt="Zalo"
          width={46}
          height={46}
          className="relative z-10 object-contain"
        />
      </a>
    </div>
  );
}