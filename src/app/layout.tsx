import type { Metadata } from "next";
import "./globals.css";
import Navbar from '../components/navbar';
import Footer from  '../components/footer';

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Personal Portfolio Website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto p-4">
          {children}
          </main>
        <Footer />
      </body>
    </html>
  );
}
