import "@/app/globals.css";
import "@/app/fonts";

export const metadata = {
  title: "Template Portfolio Gallery",
  description: "Template Portfolio Gallery",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-white text-black">
      <body>{children}</body>
    </html>
  );
}
