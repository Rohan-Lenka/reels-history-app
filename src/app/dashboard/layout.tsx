'use client'

import { SessionProvider } from "next-auth/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased overflow-x-hidden relative bg-[#1b021b]`}
      >
        <SessionProvider> 
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
