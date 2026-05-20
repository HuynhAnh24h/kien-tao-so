"use client";

import { useEffect, useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  { initials: "TH", name: "Anh Trần Hùng", role: "Giám đốc công ty XNK", stars: 5,
    text: "Mua key Windows bản quyền cho cả văn phòng 10 máy, được hỗ trợ cài đặt từ xa rất nhanh. Giá tốt hơn nhiều so với mua trực tiếp, sẽ tiếp tục ủng hộ!" },
  { initials: "NL", name: "Chị Nguyễn Linh", role: "Marketing Manager", stars: 5,
    text: "Landing page được thiết kế đẹp, chuyên nghiệp, tốc độ tải rất nhanh. Sau 2 tuần chạy ads đã có nhiều leads chất lượng hơn hẳn landing page cũ. Rất hài lòng!" },
  { initials: "MĐ", name: "Anh Minh Đức", role: "Chủ chuỗi cửa hàng", stars: 5,
    text: "Phần mềm quản lý kho được làm đúng theo yêu cầu, giao diện dễ dùng, nhân viên nắm bắt nhanh. Đội ngũ hỗ trợ nhiệt tình, chỉnh sửa nhanh khi có yêu cầu." },
];


function TestimonialCard({ t, delay }: { t: typeof testimonials[0]; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setTimeout(() => el.classList.add("visible"), delay); obs.disconnect(); }
    }, { threshold: 0.12 });
    obs.observe(el); return () => obs.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className="reveal relative rounded-2xl p-8"
      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
      <Quote size={48} className="absolute top-4 right-6 text-[#F64668]/15" />
      <div className="flex gap-1 mb-4">{Array.from({ length: t.stars }).map((_, j) => <Star key={j} size={14} className="text-[#FE9677] fill-[#FE9677]" />)}</div>
      <p className="text-white/85 text-sm leading-relaxed italic mb-6">"{t.text}"</p>
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-white flex-shrink-0"
          style={{ background: "var(--gradient-brand)" }}>{t.initials}</div>
        <div>
          <div className="font-semibold text-sm">{t.name}</div>
          <div className="text-white/50 text-xs">{t.role}</div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const headerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = headerRef.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add("visible"); obs.disconnect(); } }, { threshold: 0.12 });
    obs.observe(el); return () => obs.disconnect();
  }, []);

  return (
    <section id="testimonials" className="py-24 px-[5%]" style={{ background: "var(--navy-light)" }}>
      <div ref={headerRef} className="reveal text-center mb-16">
        <span className="text-xs font-bold tracking-[0.12em] uppercase text-[#F64668] block mb-3">Đánh giá</span>
        <h2 className="text-3xl md:text-4xl font-extrabold" style={{ fontFamily: "var(--font-sora)" }}>Khách hàng nói gì về chúng tôi</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => <TestimonialCard key={t.name} t={t} delay={i * 100} />)}
      </div>
    </section>
  );
}
