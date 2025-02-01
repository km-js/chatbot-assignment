'use client';

import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Button } from "@/components/ui/button";
import { ExternalLink, MessageCircle, Check, AlertCircle, Github, Twitter, Linkedin } from 'lucide-react';

export default function TestIntegrationPage() {
  const [status, setStatus] = useState<'pending' | 'success' | 'error'>('error');
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (status === 'success') {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      const timer = setTimeout(() => setShowConfetti(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const runTest = () => {
    setStatus('pending');
    setTimeout(() => {
      // Simulate 80% success rate
      Math.random() < 0.8 ? setStatus('success') : setStatus('error');
    }, 2000);
  };

  return (
    <div className="space-y-6">
      {status === 'success' ? (
        <div className="text-center space-y-6">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
            <Check className="h-8 w-8 text-green-600" />
          </div>

          <h3 className="text-2xl font-bold">Integration Successful!</h3>
          <p className="text-muted-foreground">Your chatbot is now fully integrated with your website</p>

          <div className="grid grid-cols-2 gap-4">
            <Button className="h-14" asChild>
              <a href="/admin" target="_blank">
                <ExternalLink className="h-4 w-4 mr-2" />
                Explore Admin Panel
              </a>
            </Button>
            <Button className="h-14" variant="secondary" asChild>
              <a href="/chat">
                <MessageCircle className="h-4 w-4 mr-2" />
                Start Chatting
              </a>
            </Button>
          </div>

          <div className="pt-6">
            <p className="text-muted-foreground mb-4">Share your success</p>
            <div className="flex justify-center gap-4">
              <Button variant="outline" size="icon">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      ) : status === 'error' ? (
        <div className="text-center space-y-6">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100">
            <AlertCircle className="h-8 w-8 text-red-600" />
          </div>

          <h3 className="text-2xl font-bold">Integration Not Detected</h3>
          <div className="text-muted-foreground text-left">
            We couldn't verify the integration. Please ensure you've:
            <ul className="list-disc list-inside text-left mt-2">
              <li>Added the integration code correctly</li>
              <li>Published your changes</li>
              <li>Cleared your cache if needed</li>
            </ul>
          </div>

          <Button onClick={runTest} variant="secondary">
            Retry Test
          </Button>
        </div>
      ) : (
        <div className="text-center space-y-6">
          <Button
            size="lg"
            onClick={runTest}
            disabled={status === 'pending'}
          >
            {status === 'pending' ? (
              <div className="flex items-center gap-2">
                <span className="animate-spin">🌀</span>
                Testing Integration...
              </div>
            ) : (
              <>
                <ExternalLink className="h-4 w-4 mr-2" />
                Test Integration
              </>
            )}
          </Button>

          <div className="bg-yellow-50 p-4 rounded-lg text-left">
            <div className="flex items-center gap-3">
              <AlertCircle className="h-5 w-5 text-yellow-600" />
              <div>
                <h4 className="font-medium">Integration Pending</h4>
                <p className="text-sm text-yellow-700">
                  Complete the integration steps first and publish your changes
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}