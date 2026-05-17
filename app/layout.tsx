import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kiến Tạo Số – Kiến tạo thành công, nâng tầm thương hiệu",
  description: "Kiến Tạo Số cung cấp giải pháp công nghệ toàn diện: Key Windows/Office bản quyền, thiết kế phần mềm nội bộ, landing page, website thương mại điện tử.",
  keywords: "mua key windows, key office bản quyền, thiết kế website, phần mềm nội bộ, landing page, ecommerce, Kiến Tạo Số",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@300;400;500;600;700&family=Sora:wght@400;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>{children}</body>
    </html>
  );
}
