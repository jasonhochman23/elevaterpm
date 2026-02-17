import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ElevateRPM - Clinical RPM Management That Pays for Itself",
  description:
    "ElevateRPM provides licensed clinical staff to manage your Remote Patient Monitoring program - driving adherence, maximizing CPT billing, and delivering consistent monthly revenue at zero upfront cost.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
