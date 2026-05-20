"use client";

import { useReveal } from "@/hooks/useReveal";
import { MessageCircle, FileText, Code2, Gift } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    num: "01",
    title: "Tư vấn miễn phí",
    desc: "Liên hệ qua Zalo hoặc Form để nhận tư vấn và khảo sát thực trạng doanh nghiệp. Phân tích nhu cầu, đề xuất giải pháp phù hợp nhất để tối ưu chi phí tối đa lợi ích cho hệ thống",
  },
  {
    icon: FileText,
    num: "02",
    title: "Báo giá & Ký hợp đồng",
    desc: "Nhận báo giá chi tiết trong 24h, thỏa thuận hợp đồng rõ ràng với cam kết bảo hành.",
  },
  {
    icon: Code2,
    num: "03",
    title: "Thực hiện & Cập nhật",
    desc: "Đội ngũ triển khai, cập nhật tiến độ thường xuyên, lắng nghe feedback để điều chỉnh kịp thời.",
  },
  {
    icon: Gift,
    num: "04",
    title: "Bàn giao & Hỗ trợ",
    desc: "Bàn giao hệ thống với đầy đủ sản phẩm, tài liệu, giấy tờ pháp lý, hướng dẫn sử dụng và cam kết hỗ trợ dài hạn",
  },
];


export default function Process() {
  const headerRef = useReveal();
  const stepsRef = useReveal(100);

  return (
    <section className="py-24 px-[5%]" style={{ background: "var(--navy-light)" }}>
      <div ref={headerRef} className="reveal text-center mb-16">
        <span className="text-xs font-bold tracking-[0.12em] uppercase text-[#F64668] block mb-3">Quy trình</span>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ fontFamily: "var(--font-sora)" }}>
          Làm việc đơn giản, hiệu quả
        </h2>
        <p className="text-white/60 max-w-md mx-auto leading-relaxed">
          Chỉ 4 bước để có sản phẩm hoàn chỉnh đúng ý bạn.
        </p>
      </div>

      <div ref={stepsRef} className="reveal relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Connector line */}
        <div className="hidden lg:block absolute top-10 left-[15%] right-[15%] h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(246,70,104,0.4), transparent)" }} />

        {steps.map((s, i) => (
          <div key={s.num} className="group text-center relative">
            {/* Step circle */}
            <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center relative z-10 transition-all duration-300 group-hover:scale-110"
              style={{ background: "var(--navy)", border: "2px solid rgba(246,70,104,0.4)" }}>
              <s.icon size={28} className="text-[#F64668]" />
              <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white"
                style={{ background: "var(--gradient-glow)" }}>
                {i + 1}
              </span>
            </div>
            <h3 className="font-bold text-sm mb-2" style={{ fontFamily: "var(--font-sora)" }}>{s.title}</h3>
            <p className="text-white/60 text-xs leading-relaxed px-2">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
