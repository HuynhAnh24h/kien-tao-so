"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "#services", label: "Dịch vụ" },
  { href: "#why-us", label: "Tại sao chọn chúng tôi" },
  { href: "#pricing", label: "Báo giá" },
  { href: "#testimonials", label: "Đánh giá" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleAnchor = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) window.scrollTo({ top: (el as HTMLElement).offsetTop - 80, behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[5%] h-[70px] border-b border-white/[0.06] backdrop-blur-xl transition-all duration-300"
        style={{ background: scrolled ? "rgba(30,42,58,0.98)" : "rgba(30,42,58,0.85)" }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.jpg" alt="Kiến Tạo Số" width={40} height={40} className="rounded-lg object-contain" />
          <span className="font-sora font-bold text-[1.1rem] gradient-text" style={{ fontFamily: "var(--font-sora)" }}>
            Kiến Tạo Số
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={(e) => handleAnchor(e, l.href)}
                className="text-white/85 text-sm font-medium tracking-wide hover:text-[#FE9677] transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={(e) => handleAnchor(e, "#contact")}
              className="flex items-center gap-2 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all hover:opacity-90 hover:-translate-y-0.5"
              style={{ background: "var(--gradient-glow)", boxShadow: "0 4px 20px rgba(246,70,104,0.3)" }}
            >
              <Phone size={14} />
              Liên hệ ngay
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button className="md:hidden text-white" onClick={() => setMobileOpen(true)}>
          <Menu size={24} />
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[99] flex flex-col items-center justify-center gap-8 backdrop-blur-2xl"
          style={{ background: "rgba(30,42,58,0.98)" }}>
          <button className="absolute top-5 right-5 text-white" onClick={() => setMobileOpen(false)}>
            <X size={28} />
          </button>
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleAnchor(e, l.href)}
              className="text-white text-2xl font-semibold hover:text-[#FE9677] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleAnchor(e, "#contact")}
            className="text-white font-bold text-lg px-8 py-4 rounded-full"
            style={{ background: "var(--gradient-glow)" }}
          >
            Liên hệ ngay
          </a>
        </div>
      )}
    </>
  );
}
