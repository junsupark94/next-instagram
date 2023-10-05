"use client";
import { createContext } from "react";

export const AuthContext = createContext("");

export function AuthProvider({
  children,
  userId,
}: {
  children: React.ReactNode;
  userId: string;
}) {
  return (
    <AuthContext.Provider value={userId}>
      {children}
    </AuthContext.Provider>
  );
}
