import NavBar from "@/components/NavBar/NavBar";
import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cookies } from "next/headers";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Junsu Park's Instagram Clone",
  description: "Created by Junsu Park",
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  const isAuth = cookies().get("JUNSU-AUTH");
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} dark:bg-black dark:text-white`}>
        <div className="flex-col flex sm:flex-row items-center">
          {isAuth && <NavBar />}
          {children}
        </div>
        {modal}
      </body>
    </html>
  );
}
