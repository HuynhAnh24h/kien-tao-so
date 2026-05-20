"use client";

import { useEffect, useRef } from "react";
import { Monitor, Settings, Target, ShoppingCart, Globe, LineChart } from "lucide-react";

const services = [
  {
    icon: Monitor,
    name: "Chuẩn hóa bản quyền doanh nghiệp",
    desc: "Cung cấp Quy trình Chuẩn hóa bản quyền phần mềm doanh nghiệp: Window, Office, CAD, ... chính hãng, pháp lý đầy đủ đáp ứng yêu cầu của Cơ quan chức năng. Hỗ trợ kỹ thuật 24/7.",
    price: "Chỉ từ 2,750,000đ",
  },
  {
    icon: Settings,
    name: "Thi công hệ thống Điện, Mạng, Camera",
    desc: "Chúng tôi cung cấp dịch vụ thi công hệ thống điện công nghiệp, điện dân dụng, mạng, camera tích hợp cùng hệ thống máy tính mang đến khả năng hoàn thiện thẩm mỹ cũng như khai thác tối đa hiệu năng của doanh nghiệp.",
    price: "Liên hệ báo giá",
  },
  {
    icon: Settings,
    name: "Phần Mềm Nội Bộ Theo Yêu Cầu",
    desc: "Thiết kế và gia công phần mềm quản lý nội bộ: quản lý kho, nhân sự, bán hàng, CRM tùy chỉnh theo quy trình doanh nghiệp.",
    price: "Liên hệ báo giá",
  },
  {
    icon: Target,
    name: "Landing Page Chuyển Đổi Cao",
    desc: "Thiết kế landing page tối ưu chuyển đổi, chuẩn SEO, tốc độ cao, kết nối form leads và chiến dịch quảng cáo hiệu quả.",
    price: "Từ 2.000.000đ",
  },
  {
    icon: ShoppingCart,
    name: "Website Thương Mại Điện Tử",
    desc: "Xây dựng website bán hàng online chuyên nghiệp: quản lý sản phẩm, đơn hàng, thanh toán trực tuyến, tích hợp vận chuyển.",
    price: "Từ 8.000.000đ",
  },
  {
    icon: Globe,
    name: "Website Doanh Nghiệp",
    desc: "Thiết kế website giới thiệu công ty, portfolio chuyên nghiệp, chuẩn SEO kỹ thuật, responsive mọi thiết bị, bảo trì dài hạn.",
    price: "Từ 4.000.000đ",
  },
  {
    icon: LineChart,
    name: "Tư Vấn Chiến Lược Digital",
    desc: "Tư vấn chiến lược số hóa toàn diện, audit website, tối ưu SEO, đề xuất giải pháp công nghệ phù hợp ngân sách doanh nghiệp.",
    price: "Miễn phí tư vấn",
  },
];

function ServiceCard({ service, delay }: { service: typeof services[0]; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setTimeout(() => el.classList.add("visible"), delay); obs.disconnect(); }
    }, { threshold: 0.12 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className="reveal group relative rounded-2xl p-9 overflow-hidden cursor-default transition-all duration-300 hover:-translate-y-2"
      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.06] transition-opacity duration-300 pointer-events-none"
        style={{ background: "var(--gradient-brand)" }} />
      <div className="relative z-10">
        <div className="w-14 h-14 rounded-[14px] flex items-center justify-center mb-5"
          style={{ background: "rgba(246,70,104,0.12)", border: "1px solid rgba(246,70,104,0.2)" }}>
          <service.icon size={26} className="text-[#F64668]" />
        </div>
        <h3 className="font-bold text-lg mb-3" style={{ fontFamily: "var(--font-sora)" }}>{service.name}</h3>
        <p className="text-white/60 text-sm leading-relaxed mb-5">{service.desc}</p>
        <span className="inline-block text-xs font-semibold px-3.5 py-1.5 rounded-full text-[#FE9677]"
          style={{ background: "rgba(246,70,104,0.12)", border: "1px solid rgba(246,70,104,0.25)" }}>
          {service.price}
        </span>
      </div>
    </div>
  );
}

export default function Services() {
  const headerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = headerRef.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add("visible"); obs.disconnect(); } }, { threshold: 0.12 });
    obs.observe(el); return () => obs.disconnect();
  }, []);

  return (
    <section id="services" className="py-24 px-[5%]"
      style={{ background: "linear-gradient(180deg, var(--navy) 0%, var(--navy-light) 100%)" }}>
      <div ref={headerRef} className="reveal text-center mb-16">
        <span className="text-xs font-bold tracking-[0.12em] uppercase text-[#F64668] block mb-3">Dịch vụ</span>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ fontFamily: "var(--font-sora)" }}>
          Giải pháp công nghệ đa dạng
        </h2>
        <p className="text-white/60 max-w-lg mx-auto leading-relaxed">
          Chúng tôi cung cấp đầy đủ các dịch vụ công nghệ giúp doanh nghiệp của bạn phát triển trong kỷ nguyên số.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => <ServiceCard key={s.name} service={s} delay={i * 80} />)}
      </div>
    </section>
  );
}
