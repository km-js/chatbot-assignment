import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap } from 'lucide-react';
import Link from 'next/link';
import { Outfit } from 'next/font/google';

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
});

export default function Home() {
  return (
    <div className={`min-h-screen flex bg-gradient-to-br from-gray-50 to-blue-50/50 ${outfit.className}`}>
      <div className="max-w-4xl mx-auto p-4 space-y-8 w-full">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight bg-clip-text animate-fade-in">
            🚀 BeyondChats
          </h1>
          <p className="text-lg text-muted-foreground">
            Seamlessly integrate AI chatbots with your website
          </p>
          <div className="flex justify-center gap-4">
            <Button
              className="mt-6 transform transition-all duration-200 hover:scale-105"
              size="lg"
              asChild
            >
              <Link href="/register" className="flex items-center">
                <Zap className="h-4 w-4 mr-2" />
                Get Started
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: "🤖",
              title: "Test Chatbot",
              description: "Interact with your chatbot before deployment"
            },
            {
              icon: "💻",
              title: "Integration Code",
              description: "Simple code snippet for seamless website integration"
            },
            {
              icon: "🚀",
              title: "Live Testing",
              description: "Verify and validate your chatbot integration"
            }
          ].map((card, index) => (
            <div
              key={index}
              className="transform transition-all duration-200 hover:scale-105"
            >
              <Card className="p-6 text-center">
                <div className="mb-4">
                  <span className="text-2xl ml-2">{card.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-muted-foreground">
                  {card.description}
                </p>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center text-muted-foreground text-sm border-t pt-8">
          <p>
            Already integrated? {" "}
            <Link
              href="/chat"
              className="text-primary underline hover:no-underline transition-all duration-200"
            >
              Start chatting 🚀
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}