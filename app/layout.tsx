import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abderrahim's - Portfolio",
  description: "My portfolio made with Next.js, TypeScript and Tailwind CSS",
  icons: {
    icon: '/abdou-logo.ico',
    shortcut: '/abdou-logo.ico',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={inter.className}>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
        forcedTheme="dark" // Ensure the theme is consistent during SSR
      >
        {children}
      </ThemeProvider>
      </body>
    </html>
  );
}
