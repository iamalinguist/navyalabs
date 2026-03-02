import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'Navya Labs | End-to-End Digital Solutions for Higher Education',
  description: 'Navya Labs provides scalable software systems, portals, and custom tools to modernize institutional workflows for colleges, universities, and research institutions.',
  metadataBase: new URL('https://navyalabs.com'), // Replace with actual domain
  openGraph: {
    title: 'Navya Labs | End-to-End Digital Solutions for Higher Education',
    description: 'Modernize your institution with our scalable software systems, portals, and custom tools.',
    // images: [ ... add a good OG image here]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground dark">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
