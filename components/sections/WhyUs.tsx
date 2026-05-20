"use client";

import { useReveal } from "@/hooks/useReveal";
import { CheckCircle, Zap, HeadphonesIcon, DollarSign } from "lucide-react";

const reasons = [
  {
    icon: CheckCircle,
    title: "Sản phẩm bản quyền chính hãng 100%",
    desc: "Tất cả sản phẩm công ty cung cấp cam kết đều là hàng chính hãng, mới 100% đạt yêu cầu chất lượng từ hãng, đầy đủ giấy tờ pháp lý, hóa đơn VAT, COA.",
  },
  {
    icon: Zap,
    title: "Bàn giao nhanh, đúng tiến độ",
    desc: "Quy trình làm việc chuyên nghiệp, cam kết thời gian bàn giao rõ ràng, không để khách hàng chờ đợi.",
  },
  {
    icon: HeadphonesIcon,
    title: "Hỗ trợ kỹ thuật suốt quá trình sử dụng",
    desc: "Đội ngũ kỹ thuật sẵn sàng hỗ trợ qua Zalo, điện thoại, remote desktop — bảo hành dài hạn cho mọi sản phẩm.",
  },
  {
    icon: DollarSign,
    title: "Giá cả minh bạch, không phát sinh",
    desc: "Báo giá rõ ràng từ đầu, không phát sinh chi phí ẩn. Tối ưu ngân sách, đảm bảo hiệu quả đầu tư cho doanh nghiệp.",
  },
];


const miniStats = [
  { num: "200+", label: "Khách hàng" },
  { num: "24/7", label: "Hỗ trợ" },
  { num: "50+", label: "Dự án" },
  { num: "3+", label: "Năm kinh nghiệm" },
];

export default function WhyUs() {
  const leftRef = useReveal();
  const rightRef = useReveal(150);

  return (
    <section id="why-us" className="py-24 px-[5%]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Visual */}
        <div ref={leftRef} className="reveal">
          <div className="rounded-3xl p-12 text-center mb-4"
            style={{ background: "linear-gradient(135deg, rgba(65,67,106,0.5), rgba(152,64,99,0.5))", border: "1px solid rgba(246,70,104,0.2)" }}>
            <div className="text-8xl font-extrabold gradient-text mb-2" style={{ fontFamily: "var(--font-sora)" }}>100%</div>
            <div className="text-white/60">Khách hàng hài lòng</div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {miniStats.map((s) => (
              <div key={s.label} className="rounded-2xl p-5 text-center"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="text-3xl font-extrabold text-[#F64668]" style={{ fontFamily: "var(--font-sora)" }}>{s.num}</div>
                <div className="text-white/60 text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Text */}
        <div ref={rightRef} className="reveal">
          <span className="text-xs font-bold tracking-[0.12em] uppercase text-[#F64668] block mb-3">
            Tại sao chọn chúng tôi
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-8" style={{ fontFamily: "var(--font-sora)" }}>
            Cam kết chất lượng,{" "}
            <span className="gradient-text-glow">đồng hành lâu dài</span>
          </h2>
          <ul className="flex flex-col gap-6">
            {reasons.map((r) => (
              <li key={r.title} className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(246,70,104,0.12)", border: "1px solid rgba(246,70,104,0.2)" }}>
                  <r.icon size={20} className="text-[#F64668]" />
                </div>
                <div>
                  <div className="font-bold text-sm mb-1" style={{ fontFamily: "var(--font-sora)" }}>{r.title}</div>
                  <div className="text-white/60 text-sm leading-relaxed">{r.desc}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
