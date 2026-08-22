import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gallery 23",
  description: "Custom framing and archival printing in Dublin.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
