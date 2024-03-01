import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Image from "next/image";
import logoImage from '../../public/rocketseat-logo.svg'
import "./globals.css";

export const metadata: Metadata = {
  title: "Rocketseat Clone",
  description: "My version of Rockeseat website",
};

const jakarta = Plus_Jakarta_Sans({subsets: ['latin']})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={jakarta.className}>
        <header className="lg:sticky lg:top-0 z-40 bg-[#121214]">
          <nav className="overflow-x-clip border-b border-gray-700">
            <div className="flex mx-auto max-w-[120rem] items-center justify-center p-4 xl:px-10 xl:py-6">
              <Image src={logoImage} alt="Rocketseat Logo"/>
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
