import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Tech Rafters",
  description: "Push your code to live",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative bg-gradient-to-b from-green-50 to-green-100">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
