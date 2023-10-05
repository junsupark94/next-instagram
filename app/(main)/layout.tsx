import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { AuthProvider } from "@/hooks/use-auth-hook";
import NavBar from "@/components/NavBar/NavBar";

import { db } from "@/lib/db";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Junsu Park's Instagram Clone",
  description: "Created by Junsu Park",
};

export default async function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  const isAuth = cookies().get("JUNSU-AUTH")?.value === "some_secret";
  const userCookie = cookies().get("INSTAGRAM-CLONE-TOKEN");

  if (!isAuth || !userCookie) {
    redirect("/signin");
  }

  const user = await db.user.findUnique({
    where: {
      id: userCookie.value
    }
  })

  if (!user) {
    redirect("http://localhost:3000/api/auth/signout")
  }

  return (
    <html lang="en" className={cn(user.dark_mode && "dark")}>
      <body className={`${inter.className} dark:bg-black dark:text-white`}>
        <AuthProvider user={user}>
          <div className="flex flex-col items-center sm:flex-row">
            <NavBar />
            {children}
          </div>
          {modal}
        </AuthProvider>
      </body>
    </html>
  );
}
