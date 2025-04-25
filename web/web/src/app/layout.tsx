import "../../styles/globals.css";
import { ReactNode } from "react";
import Navbar from "../../components/Navbar";

export const metadata = {
  title: "FridgeFlow",
  description: "Behalte den Überblick über deine Lebensmittel"
};

export default function RootLayout({children}: {children: ReactNode}) {
  return(
    <html lang="de">
      <body className="bg-gray-50 text-gray-900">
        <Navbar />
        <main className="p-4">{children}</main>
      </body>
    </html>
  )
}
