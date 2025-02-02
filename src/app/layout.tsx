import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Bot, Settings, BookOpen } from 'lucide-react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BeyondChats - AI Chatbot Platform',
  description: 'Transform your website with intelligent chatbot integration',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
          {/* Navigation Bar */}
          <nav className="border-b bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                  <Bot className="h-8 w-8 text-primary" />
                  <span className="text-xl font-bold text-gray-900">BeyondChats</span>
                </Link>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center gap-8">
                  <NavLink href="/setup" icon={<Settings size={18} />}>
                    Setup
                  </NavLink>
                  <NavLink href="/integrate" icon={<Bot size={18} />}>
                    Integration
                  </NavLink>
                  <NavLink href="/docs" icon={<BookOpen size={18} />}>
                    Documentation
                  </NavLink>
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-4">
                  <Button variant="outline" asChild>
                    <Link href="/login">Sign In</Link>
                  </Button>
                  <Button asChild>
                    <Link href="/register">Get Started</Link>
                  </Button>
                </div>
              </div>
            </div>
          </nav>

          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

function NavLink({ href, icon, children }: {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-primary transition-colors"
    >
      {icon}
      {children}
    </Link>
  );
}