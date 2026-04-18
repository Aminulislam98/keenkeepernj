import { Fraunces, JetBrains_Mono, Inter_Tight } from "next/font/google";
import "./globals.css";
import Navbar from "@/shared/Navbar";
import Footer from "@/shared/Footer";
import DataProvider from "./lib/providers";
import { ToastContainer } from "react-toastify";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "KeenKeeper",
  description: "A private ledger for the people who matter",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${jetbrainsMono.variable} ${interTight.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink-950 text-cream font-sans">
        <DataProvider>
          <Navbar />
          {children}
          <Footer />
        </DataProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
