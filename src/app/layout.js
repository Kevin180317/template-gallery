import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import { Providers } from "./providers";
export const metadata = {
  title: "John Doe Photography | Professional Photographer Portfolio",
  description: "Explore the professional portfolio of John Doe, a skilled photographer specializing in portrait, landscape, and event photography. Capture your moments with exceptional quality.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" className='dark'>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
