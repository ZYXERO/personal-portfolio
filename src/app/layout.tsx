import type { Metadata } from "next";
import { IBM_Plex_Mono, Source_Sans_3, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kaushikselvakumar.com"),
  title: {
    default: "Kaushik Selvakumar — Portfolio",
    template: "%s · Kaushik Selvakumar",
  },
  description:
    "Portfolio of Kaushik Selvakumar — Computer Engineering student at USF building AI, cloud, and full-stack software. Selected projects with demos, screenshots, and recordings.",
  openGraph: {
    url: "https://kaushikselvakumar.com",
    title: "Kaushik Selvakumar — Portfolio",
    description:
      "AI, cloud, and full-stack work with demos, screenshots, and project recordings.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaushik Selvakumar — Portfolio",
    description:
      "AI, cloud, and full-stack work with demos, screenshots, and project recordings.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${sourceSans.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="site-shell min-h-full font-sans text-ink">{children}</body>
    </html>
  );
}
