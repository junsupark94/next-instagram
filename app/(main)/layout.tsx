import NavBar from "@/components/NavBar/NavBar";
import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AuthProvider } from "@/providers/auth-provider";

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
  const isAuth = cookies().get("JUNSU-AUTH")?.value === "some_secret";

  if (!isAuth) {
    redirect("/signin");
  }

  return (
    <html lang="en">
      <body className={`${inter.className} dark:bg-black dark:text-white`}>
        <AuthProvider>
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
