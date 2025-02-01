import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Code, Zap } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto p-4 space-y-8 w-full">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">
            Welcome to BeyondChats
          </h1>
          <p className="text-muted-foreground text-lg">
            Seamlessly integrate AI chatbots with your website
          </p>

          <Button className="mt-6" size="lg" asChild>
            <Link href="/integrate">
              <Zap className="h-4 w-4 mr-2" />
              Get Started with Integration
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 text-center">
            <MessageCircle className="h-8 w-8 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Test Chatbot</h3>
            <p className="text-muted-foreground">
              Preview and interact with your chatbot before deployment
            </p>
          </Card>

          <Card className="p-6 text-center">
            <Code className="h-8 w-8 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Integration Code</h3>
            <p className="text-muted-foreground">
              Simple code snippet for seamless website integration
            </p>
          </Card>

          <Card className="p-6 text-center">
            <Zap className="h-8 w-8 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Live Testing</h3>
            <p className="text-muted-foreground">
              Verify and validate your chatbot integration
            </p>
          </Card>
        </div>

        <div className="text-center text-muted-foreground text-sm">
          <p>Already integrated? <Link href="/chat" className="text-primary underline">Start chatting →</Link></p>
        </div>
      </div>
    </div>
  );
}