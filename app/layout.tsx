import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RiskQ CISO-Level Report",
  description: "Enterprise Risk & CISO Office - ValuRisQ Platform Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-background">
      <body>{children}</body>
    </html>
  );
}
