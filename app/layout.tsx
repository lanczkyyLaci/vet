import { Geist, Geist_Mono, Roboto } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { LandingFooter } from "@/components/layouts/landing-footer/landing-footer";
import { Navbar } from "@/components/layouts/navbar/navbar";

const roboto = Roboto({ subsets: ["latin"], variable: "--font-sans" });

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        roboto.variable
      )}
    >
      <body>
        <Navbar />
        <ThemeProvider>
          <main>{children}</main>
        </ThemeProvider>
        <LandingFooter />
      </body>
    </html>
  );
}
