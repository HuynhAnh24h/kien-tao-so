import Image from "next/image";
import { Share2, MessageCircle, Phone, Mail, MapPin, Tv } from "lucide-react";

const services = ["Key Windows & Office","Phần mềm nội bộ","Landing Page","Website Ecommerce","Website doanh nghiệp"];
const company = ["Về chúng tôi","Quy trình làm việc","Dự án nổi bật","Blog công nghệ","Chính sách bảo hành"];
const socials = [
  { icon: Share2, href: "#", label: "Facebook" },
  { icon: MessageCircle, href: "#", label: "Zalo" },
  { icon: Tv, href: "#", label: "YouTube" },
  { icon: Phone, href: "tel:0900000000", label: "Phone" },
];

export default function Footer() {
  return (
    <footer style={{ background: "rgba(0,0,0,0.3)", borderTop: "1px solid rgba(255,255,255,0.06)" }}
      className="px-[5%] pt-16 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image src="/logo.jpg" alt="Kiến Tạo Số" width={36} height={36} className="rounded-lg object-contain" />
            <span className="gradient-text font-bold text-lg" style={{ fontFamily: "'Sora', sans-serif" }}>Kiến Tạo Số</span>
          </div>
          <p className="text-white/60 text-sm leading-relaxed mb-6">
            Kiến tạo thành công, nâng tầm thương hiệu. Đối tác công nghệ toàn diện, tin cậy cho doanh nghiệp Việt Nam.
          </p>
          <div className="flex gap-2.5">
            {socials.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} aria-label={label}
                className="w-9 h-9 rounded-xl flex items-center justify-center border border-white/10 text-white/70 hover:text-white hover:bg-[#F64668]/20 hover:-translate-y-0.5 transition-all"
                style={{ background: "rgba(255,255,255,0.06)" }}>
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <div className="font-bold text-sm mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>Dịch vụ</div>
          <ul className="flex flex-col gap-2.5">
            {services.map((s) => <li key={s}><a href="#services" className="text-white/60 text-sm hover:text-[#FE9677] transition-colors">{s}</a></li>)}
          </ul>
        </div>
        <div>
          <div className="font-bold text-sm mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>Công ty</div>
          <ul className="flex flex-col gap-2.5">
            {company.map((c) => <li key={c}><a href="#" className="text-white/60 text-sm hover:text-[#FE9677] transition-colors">{c}</a></li>)}
          </ul>
        </div>
        <div>
          <div className="font-bold text-sm mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>Liên hệ</div>
          <ul className="flex flex-col gap-3">
            {[
              { icon: Phone, label: "0376355565", href: "tel:0376355565" },
              { icon: MessageCircle, label: "Zalo: 0376355565", href: "https://zalo.me/0376355565" },
              { icon: Mail, label: "digitalcreation358@gmail.com", href: "digitalcreation358@gmail.com" },
              { icon: MapPin, label: "TP. Hồ Chí Minh, Việt Nam", href: "#" },
            ].map(({ icon: Icon, label, href }) => (
              <li key={label}>
                <a href={href} className="flex items-center gap-2 text-white/60 text-sm hover:text-[#FE9677] transition-colors">
                  <Icon size={13} className="text-[#F64668] flex-shrink-0" />{label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 pt-6 border-t border-white/[0.06]">
        <p className="text-white/40 text-xs">© 2025 Kiến Tạo Số. Bảo lưu mọi quyền.</p>
        <div className="flex gap-5">
          <a href="#" className="text-white/40 text-xs hover:text-white/70 transition-colors">Chính sách bảo mật</a>
          <a href="#" className="text-white/40 text-xs hover:text-white/70 transition-colors">Điều khoản dịch vụ</a>
        </div>
      </div>
    </footer>
  );
}
