'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { MessageCircle, Code, ExternalLink } from 'lucide-react';

export default function Layout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  const tabs = [
    {
      href: '/integrate/test-chatbot',
      icon: <MessageCircle className="h-4 w-4 mr-2" />,
      label: 'Test Chatbot'
    },
    {
      href: '/integrate/integration-code',
      icon: <Code className="h-4 w-4 mr-2" />,
      label: 'Integrate Code'
    },
    {
      href: '/integrate/test-integration',
      icon: <ExternalLink className="h-4 w-4 mr-2" />,
      label: 'Test Integration'
    }
  ];

  function cn(...classes: (string | undefined | false)[]): string {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <div className="max-w-6xl mx-auto p-4 space-y-6">
      <Card>
        <div className="p-6">
          {/* Tab Navigation */}
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {tabs.map((tab) => (
              <Link
                key={tab.href}
                href={tab.href}
                className={cn(
                  'flex items-center justify-center p-2 rounded-md border transition-colors',
                  pathname === tab.href
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-background hover:bg-accent'
                )}
              >
                {tab.icon}
                {tab.label}
              </Link>
            ))}
          </div>

          {/* Page Content */}
          <div className="space-y-4">
            {children}
          </div>
        </div>
      </Card>
    </div>
  );
}


