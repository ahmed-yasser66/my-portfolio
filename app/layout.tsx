import localFont from "next/font/local";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";

import "./globals.css";

const spaceGrotesk = localFont({
  variable: "--font-space-grotesk",
  src: "../public/fonts/SpaceGrotesk.ttf",
  preload: true,
  display: "swap",
  fallback: ["system-ui", "Arial", "sans-serif"],
});
const syne = localFont({
  variable: "--font-syne",
  src: "../public/fonts/Syne.ttf",
  preload: true,
  display: "swap",
  fallback: ["system-ui", "Arial", "sans-serif"],
});
const title = "Ahmed Yasser | Frontend Developer";
const description =
  "Frontend developer portfolio. You see projects built with React, Next.js, Tailwind CSS, and modern UI patterns. Focus on performance, accessibility, and clean code.";
const url = process.env.NEXT_BASE_URL;
export const metadata: Metadata = {
  metadataBase: new URL(url as string),
  title: {
    default: title,
    template: `%s | ${title}`,
  },
  description,
  keywords: [
    "Ahmed Yasser",
    "SnowCoding",
    "snow",
    "coding",
    "Next.js",
    "React",
    "TypeScript",
    "frontend",
    "front-end",
    "web developer",
  ],
  authors: [{ name: "Ahmed Yasser" }, { name: "Snow" }],
  openGraph: {
    title,
    description,
    url,
    siteName: "Ahmed Yasser | Frontend Developer",
    images: [
      {
        url: "/images/opengraph.png",
        width: 1200,
        height: 630,
        alt: "Ahmed Yasser | Frontend Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/opengraph.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} ${syne.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
