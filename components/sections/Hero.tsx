"use client";

import { Rocket, FileText, TrendingUp, Users, Code2 } from "lucide-react";

// Hero
const stats = [
  { num: "200+", label: "Khách hàng tin dùng" },
  { num: "50+", label: "Dự án hoàn thành" },
  { num: "3+", label: "Năm kinh nghiệm" },
];

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) window.scrollTo({ top: (el as HTMLElement).offsetTop - 80, behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center px-[5%] pt-24 pb-16 overflow-hidden">
      {/* Background orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="animate-float absolute w-[500px] h-[500px] rounded-full -top-24 -right-24 opacity-25 blur-[80px]"
          style={{ background: "#F64668" }} />
        <div className="animate-float-2 absolute w-[350px] h-[350px] rounded-full -bottom-12 -left-20 opacity-25 blur-[80px]"
          style={{ background: "#41436A" }} />
        <div className="animate-float-3 absolute w-[250px] h-[250px] rounded-full opacity-[0.12] blur-[80px]"
          style={{ background: "#FE9677", top: "40%", left: "30%" }} />
        {/* Grid */}
        <div className="hero-grid absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl">
        {/* Badge */}
        <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-7 text-xs font-bold tracking-[0.05em] uppercase"
          style={{ background: "rgba(246,70,104,0.12)", border: "1px solid rgba(246,70,104,0.3)", color: "#FE9677" }}>
          <span className="animate-pulse-dot w-1.5 h-1.5 rounded-full bg-[#F64668]" />
          Đối tác công nghệ tin cậy
        </div>

        {/* Title */}
        <h1 className="animate-fade-up-1 font-bold leading-[1.15] mb-6 text-4xl md:text-5xl lg:text-6xl"
          style={{ fontFamily: "var(--font-sora)" }}>
          Giải pháp công nghệ<br />
          <span className="gradient-text">toàn diện cho doanh nghiệp</span>
        </h1>

        {/* Desc */}
        <p className="animate-fade-up-2 text-white/85 text-lg leading-relaxed mb-10 max-w-xl">
          Từ bản quyền phần mềm, thiết kế website, landing page đến hệ thống thương mại điện tử —
          Kiến Tạo Số đồng hành cùng bạn xây dựng thương hiệu số vững chắc.
        </p>

        {/* CTA Buttons */}
        <div className="animate-fade-up-3 flex flex-wrap gap-4">
          <button
            onClick={() => handleScroll("#contact")}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-semibold text-white transition-all hover:-translate-y-1"
            style={{ background: "var(--gradient-glow)", boxShadow: "0 8px 30px rgba(246,70,104,0.4)" }}
          >
            <Rocket size={18} />
            Tư vấn miễn phí
          </button>
          <button
            onClick={() => handleScroll("#services")}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-medium text-white border border-white/15 backdrop-blur-sm transition-all hover:bg-white/10 hover:-translate-y-1"
            style={{ background: "rgba(255,255,255,0.07)" }}
          >
            <FileText size={18} />
            Xem dịch vụ
          </button>
        </div>
      </div>

      {/* Stats — desktop only */}
      <div className="animate-fade-left hidden lg:flex flex-col gap-4 absolute right-[5%] bottom-[15%] z-10">
        {stats.map((s) => (
          <div key={s.label}
            className="text-center px-7 py-5 rounded-2xl backdrop-blur-xl"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
            <div className="text-4xl font-extrabold gradient-text-glow" style={{ fontFamily: "var(--font-sora)" }}>
              {s.num}
            </div>
            <div className="text-white/60 text-xs mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Floating service icons */}
      <div className="hidden xl:block absolute right-[22%] top-[20%] z-10 animate-float-2">
        <div className="w-12 h-12 rounded-xl flex items-center justify-center"
          style={{ background: "rgba(246,70,104,0.15)", border: "1px solid rgba(246,70,104,0.2)" }}>
          <Code2 size={22} className="text-[#F64668]" />
        </div>
      </div>
      <div className="hidden xl:block absolute right-[30%] top-[55%] z-10 animate-float-3">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ background: "rgba(254,150,119,0.15)", border: "1px solid rgba(254,150,119,0.2)" }}>
          <TrendingUp size={18} className="text-[#FE9677]" />
        </div>
      </div>
    </section>
  );
}
