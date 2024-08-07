import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Announcment from "./components/Announcment";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Announcment />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
