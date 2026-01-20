import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Escape Room",
  description: "방탈출 카페 예약 시스템",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="ko">
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
};

export default RootLayout;
