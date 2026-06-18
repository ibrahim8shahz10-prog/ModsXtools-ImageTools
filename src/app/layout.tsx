import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "PixlTools — Professional Image & PDF Toolkit",
  description:
    "Free online tools to remove backgrounds, convert, compress, resize images, and edit PDFs. Fast, free, and professional.",
  keywords: "image tools, background remover, pdf tools, image converter, compress image",
  openGraph: {
    title: "PixlTools — Professional Image & PDF Toolkit",
    description: "50+ free tools for images and PDFs",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
