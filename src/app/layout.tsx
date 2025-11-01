import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import MagicalBackground from "@/components/MagicalBackground";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Ngo Chau Anh - Personal Portfolio",
  description: "A magical journey through creativity, art, and imagination",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        <MagicalBackground />
        <Navigation />
        <div className="relative z-10">
          {children}
        </div>
        <VisualEditsMessenger />
      </body>
    </html>
  );
}