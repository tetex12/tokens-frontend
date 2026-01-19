import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tokens Frontend',
  description: 'A Next.js frontend application with authentication',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white">
        {children}
      </body>
    </html>
  );
}
