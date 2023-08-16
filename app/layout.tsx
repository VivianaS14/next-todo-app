import "./globals.css";
import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";

import TaskProvider from "@context/TaskContext";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  weight: ["200", "400", "600"],
});

export const metadata: Metadata = {
  title: "To-Do Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={bricolage.className}>
        <TaskProvider>{children}</TaskProvider>
      </body>
    </html>
  );
}
