"use client";
import { createContext, useContext } from "react";
import { User } from "@prisma/client";

const AuthContext = createContext<User | null>(null);

export function AuthProvider({
  children,
  user
}: {
  children: React.ReactNode;
  user: User;
}) {
  return (
    <AuthContext.Provider value={user}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const user = useContext(AuthContext);
  if (!user) {
    throw new Error("No user found");
  }
  return user;
}