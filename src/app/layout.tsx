import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yachtways 2.0",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col h-screen`}>
        <nav className="h-16 p-4 flex items-center border-b-2 border-neutral-100">
          Navbar
        </nav>

        <div className="flex flex-grow overflow-auto">
          <div className="flex w-64 border-r border-neutral-100 p-4">
            Sidebar Content
          </div>
          <main className="flex-grow p-4">{children}</main>
        </div>

        <footer className="h-16 p-4 flex items-center shadow-md">Footer</footer>
      </body>
    </html>
  );
}
