"use client";

import { useEffect, useRef } from "react";
import { Check } from "lucide-react";

const plans = [
  {
    plan: "Phần mềm",
    name: "Key Bản Quyền",
    price: "150K",
    unit: "/ key",
    note: "Windows 10/11 Pro, Office 365",
    features: ["Key kích hoạt vĩnh viễn","Hỗ trợ cài đặt từ xa","Bảo hành 12 tháng","Key chính hãng Microsoft"],
    featured: false,
    cta: "Đặt mua ngay",
  },
  {
    plan: "Landing Page",
    name: "Landing Page Pro",
    price: "2.000K",
    unit: "/ trang",
    note: "Bàn giao trong 3–5 ngày làm việc",
    features: ["Thiết kế UI/UX chuyên nghiệp","Chuẩn SEO kỹ thuật","Form leads tích hợp","Responsive mọi thiết bị","Tốc độ tải trang cao","Bảo hành 6 tháng"],
    featured: true,
    cta: "Tư vấn ngay",
  },
  {
    plan: "Thương mại điện tử",
    name: "Website Ecommerce",
    price: "8.000K",
    unit: "/ dự án",
    note: "Bàn giao trong 15–30 ngày làm việc",
    features: ["Quản lý sản phẩm, đơn hàng","Tích hợp thanh toán online","Kết nối đơn vị vận chuyển","Admin quản lý đầy đủ","SEO & Analytics","Bảo hành 12 tháng"],
    featured: false,
    cta: "Liên hệ tư vấn",
  },
];

function PriceCard({ p, delay }: { p: typeof plans[0]; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setTimeout(() => el.classList.add("visible"), delay); obs.disconnect(); }
    }, { threshold: 0.12 });
    obs.observe(el); return () => obs.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`reveal relative rounded-3xl p-10 transition-all duration-300 hover:-translate-y-2 ${p.featured ? "lg:-mt-4 lg:mb-4" : ""}`}
      style={{ background: p.featured ? "linear-gradient(135deg,rgba(65,67,106,0.4),rgba(152,64,99,0.4))" : "rgba(255,255,255,0.04)", border: p.featured ? "1px solid rgba(246,70,104,0.35)" : "1px solid rgba(255,255,255,0.08)" }}>
      {p.featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full text-white text-[10px] font-bold tracking-widest uppercase whitespace-nowrap"
          style={{ background: "var(--gradient-glow)" }}>⭐ Phổ biến nhất</div>
      )}
      <div className="text-[#F64668] text-xs font-bold tracking-widest uppercase mb-3">{p.plan}</div>
      <div className="font-bold text-xl mb-5" style={{ fontFamily: "var(--font-sora)" }}>{p.name}</div>
      <div className="font-extrabold text-4xl text-[#FE9677] mb-2" style={{ fontFamily: "var(--font-sora)" }}>
        {p.price} <span className="text-base font-normal text-white/60">{p.unit}</span>
      </div>
      <p className="text-white/50 text-xs mb-7">{p.note}</p>
      <ul className="flex flex-col gap-3 mb-8">
        {p.features.map((f) => (
          <li key={f} className="flex items-center gap-2.5 text-white/85 text-sm">
            <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(246,70,104,0.15)" }}>
              <Check size={11} className="text-[#F64668]" strokeWidth={3} />
            </span>
            {f}
          </li>
        ))}
      </ul>
      <a href="#contact" className={`block text-center py-3.5 rounded-full font-semibold text-sm transition-all ${p.featured ? "text-white" : "text-white border border-white/20 hover:bg-white/[0.08]"}`}
        style={p.featured ? { background: "var(--gradient-glow)", boxShadow: "0 6px 20px rgba(246,70,104,0.3)" } : {}}>
        {p.cta}
      </a>
    </div>
  );
}

export default function Pricing() {
  const headerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = headerRef.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add("visible"); obs.disconnect(); } }, { threshold: 0.12 });
    obs.observe(el); return () => obs.disconnect();
  }, []);

  return (
    <section id="pricing" className="py-24 px-[5%]">
      <div ref={headerRef} className="reveal text-center mb-16">
        <span className="text-xs font-bold tracking-[0.12em] uppercase text-[#F64668] block mb-3">Báo giá</span>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ fontFamily: "var(--font-sora)" }}>Gói dịch vụ phù hợp mọi nhu cầu</h2>
        <p className="text-white/60 max-w-md mx-auto leading-relaxed">Lựa chọn gói phù hợp hoặc liên hệ để được tư vấn gói tùy chỉnh theo ngân sách của bạn.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {plans.map((p, i) => <PriceCard key={p.name} p={p} delay={i * 100} />)}
      </div>
    </section>
  );
}
