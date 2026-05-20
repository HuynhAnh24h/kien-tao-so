"use client";

import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { MessageCircle, Phone, Mail, Send, CheckCircle } from "lucide-react";

const methods = [
  {
    icon: MessageCircle,
    label: "Nhắn tin Zalo ngay",
    value: "0376355565",
    href: "https://zalo.me/0376355565",
    colorClass: "rgba(0,100,255,0.15)",
  },
  {
    icon: Phone,
    label: "Gọi điện tư vấn",
    value: "0376355565",
    href: "tel:0376355565",
    colorClass: "rgba(246,70,104,0.15)",
  },
  {
    icon: Mail,
    label: "Gửi email",
    value: "info@kientaosd.com",
    href: "mailto:info@kientaosd.com",
    colorClass: "rgba(254,150,119,0.15)",
  },
];

const serviceOptions = [
  "Chuẩn hóa bản quyền doanh nghiệp",
  "Phần mềm nội bộ theo yêu cầu",
  "Landing Page",
  "Website doanh nghiệp",
  "Website Thương mại điện tử",
  "Tư vấn chiến lược số",
];

export default function Contact() {
  const leftRef = useReveal();
  const rightRef = useReveal(150);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.service) {
      alert("Vui lòng điền đầy đủ họ tên, số điện thoại và dịch vụ quan tâm.");
      return;
    }
    setSubmitted(true);
  };

  const inputClass =
    "w-full rounded-xl px-4 py-3.5 text-white text-sm outline-none transition-all placeholder:text-white/30"
  const inputStyle = {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
  };

  return (
    <section id="contact" className="py-24 px-[5%]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Info */}
        <div ref={leftRef} className="reveal">
          <span className="text-xs font-bold tracking-[0.12em] uppercase text-[#F64668] block mb-3">Liên hệ</span>
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-5" style={{ fontFamily: "var(--font-sora)" }}>
            Sẵn sàng bắt đầu{" "}
            <span className="gradient-text-glow">dự án của bạn?</span>
          </h2>
          <p className="text-white/60 leading-relaxed mb-9">
            Đừng để ý tưởng mãi chỉ là ý tưởng. Hãy liên hệ ngay để được tư vấn miễn phí và nhận báo giá chi tiết trong vòng 24 giờ.
          </p>
          <div className="flex flex-col gap-4">
            {methods.map((m) => (
              <a key={m.value} href={m.href} target="_blank" rel="noreferrer"
                className="flex items-center gap-3.5 p-4 rounded-2xl transition-all hover:translate-x-1.5"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: m.colorClass }}>
                  <m.icon size={20} className="text-white" />
                </div>
                <div>
                  <div className="text-white/50 text-xs mb-0.5">{m.label}</div>
                  <div className="font-semibold text-sm">{m.value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Form */}
        <div ref={rightRef} className="reveal rounded-3xl p-10"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
          <h3 className="font-bold text-xl mb-7" style={{ fontFamily: "var(--font-sora)" }}>
            Gửi yêu cầu tư vấn
          </h3>

          {submitted ? (
            <div className="text-center py-10">
              <CheckCircle size={60} className="text-[#F64668] mx-auto mb-4" />
              <div className="text-lg font-bold mb-2">Gửi thành công!</div>
              <p className="text-white/60 text-sm">
                Chúng tôi sẽ liên hệ lại trong vòng 24 giờ làm việc.<br />Cảm ơn bạn đã tin tưởng Kiến Tạo Số!
              </p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-semibold text-white/60 mb-2 tracking-wide">Họ và tên *</label>
                  <input className={inputClass} style={inputStyle} placeholder="Nguyễn Văn A"
                    value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-white/60 mb-2 tracking-wide">Số điện thoại *</label>
                  <input className={inputClass} style={inputStyle} placeholder="0900 000 000" type="tel"
                    value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-xs font-semibold text-white/60 mb-2 tracking-wide">Email</label>
                <input className={inputClass} style={inputStyle} placeholder="email@company.com" type="email"
                  value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              </div>
              <div className="mb-4">
                <label className="block text-xs font-semibold text-white/60 mb-2 tracking-wide">Dịch vụ quan tâm *</label>
                <select className={inputClass} style={{ ...inputStyle, appearance: "none" }}
                  value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}>
                  <option value="">-- Chọn dịch vụ --</option>
                  {serviceOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
              <div className="mb-6">
                <label className="block text-xs font-semibold text-white/60 mb-2 tracking-wide">Mô tả yêu cầu</label>
                <textarea className={inputClass} style={inputStyle} rows={4}
                  placeholder="Mô tả ngắn về dự án hoặc nhu cầu của bạn..."
                  value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
              </div>
              <button onClick={handleSubmit}
                className="w-full flex items-center justify-center gap-2.5 py-4 rounded-full font-bold text-white transition-all hover:-translate-y-0.5"
                style={{ background: "var(--gradient-glow)", boxShadow: "0 6px 24px rgba(246,70,104,0.3)" }}>
                <Send size={18} />
                Gửi yêu cầu tư vấn
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
