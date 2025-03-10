import Header from "@/components/header";
import "./globals.css";
import { Inter } from 'next/font/google'
import { ClerkProvider } from "@clerk/nextjs";
import Image from "next/image";
import { Toaster } from "@/components/ui/sonner.jsx"
export const metadata = {
  title: "MindFlow",
  description: "A journaling app",
};
const inter = Inter({ subsets: ['latin'] })
export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${inter.className}`}>
        <Header/>
        <main className="min-h-screen">{children}</main>
        <Toaster/>
        {/* Background Image */}
        <div className="inset-0 bg-[url('/journal_bg.jpg')] opacity-50 fixed -z-10" />
        <main className="min-h-screen">{children}</main>
        <footer className="bg-brown-200 py-12 bg-opacity-10">
        <div className="container mx-auto px-4 text-center text-gray-900">
       <p>Made with love by Prarthana</p></div>
        </footer>
      </body>
    </html>
    </ClerkProvider>
  );
}
