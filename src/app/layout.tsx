import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
