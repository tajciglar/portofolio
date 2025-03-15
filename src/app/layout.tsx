import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Theme from "./components/Theme";

export const metadata: Metadata = {
  title: "Taj's portfolio page",
  description: "Personal portfolio page for Taj created with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Theme />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}