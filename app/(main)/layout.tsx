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

  if (!isAuth) {
    return (
      <html lang="en">
        <body className={`${inter.className}`}>
          <div className="h-full">
            {children}
          </div>
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body className={`${inter.className} dark:bg-black dark:text-white`}>
        <div className="flex flex-col items-center sm:flex-row">
          <NavBar />
          {children}
        </div>
        {modal}
      </body>
    </html>
  );
}
