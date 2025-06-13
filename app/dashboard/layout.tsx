import { AuthContextProvider } from "../context/AuthContext";

import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return <AuthContextProvider>{children}</AuthContextProvider>;
}
