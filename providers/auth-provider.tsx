"use client"
import { createContext } from "react";

const AuthContext = createContext({
  userId: ""
});

export function AuthProvider({children} : {children: React.ReactNode}) {
  return (
    <AuthContext.Provider value={{userId: ""}}>
      {children}
    </AuthContext.Provider>
  )
}