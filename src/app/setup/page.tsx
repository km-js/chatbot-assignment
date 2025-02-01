'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, CheckCircle, Clock, ChevronRight, Globe} from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

// Define types
interface Page {
  url: string;
  status: 'completed' | 'pending' | 'in_progress';
  chunks: string[];
}

interface FormData {
  companyName: string;
  websiteUrl: string;
  description: string;
}

// Dummy data
const DUMMY_PAGES: Page[] = [
  {
    url: '/about-us',
    status: 'completed',
    chunks: [
      'Our company was founded in 2010 with a mission to revolutionize...',
      'We have over 500 employees across 3 continents...',
      'Our core values include innovation, integrity, and customer focus...'
    ]
  },
  {
    url: '/products',
    status: 'completed',
    chunks: [
      'Our flagship product helps businesses automate their workflows...',
      'Features include AI-powered analytics, real-time reporting...'
    ]
  },
  {
    url: '/services',
    status: 'pending',
    chunks: []
  },
  {
    url: '/contact',
    status: 'in_progress',
    chunks: []
  }
];

const OrganizationSetup = () => {
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    websiteUrl: '',
    description: ''
  });
  const [currentStep, setCurrentStep] = useState<'form' | 'scraping'>('form');
  const [selectedPage, setSelectedPage] = useState<Page | null>(null);
  const [autoDescription, setAutoDescription] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (name === 'websiteUrl' && value) {
      setTimeout(() => {
        setAutoDescription('Leading provider of innovative business solutions for enterprise companies.');
      }, 1000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep('scraping');
  };

  const getStatusIcon = (status: Page['status']) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'pending':
        return <Clock className="h-5 w-5 text-gray-400" />;
      case 'in_progress':
        return <Loader2 className="h-5 w-5 text-blue-500 animate-spin" />;
      default:
        return null;
    }
  };

  const getProgress = () => {
    const completed = DUMMY_PAGES.filter(page => page.status === 'completed').length;
    return Math.round((completed / DUMMY_PAGES.length) * 100);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      {currentStep === 'form' ? (
        <Card>
          <CardHeader>
            <CardTitle>Organization Setup</CardTitle>
            <CardDescription>
              Enter your organization details to get started
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Company Name</label>
                <Input
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  placeholder="Enter company name"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Website URL</label>
                <Input
                  name="websiteUrl"
                  value={formData.websiteUrl}
                  onChange={handleInputChange}
                  placeholder="https://example.com"
                  type="url"
                  required
                />
              </div>

              {autoDescription && (
                <Alert className="mt-2">
                  <Globe className="h-4 w-4" />
                  <AlertDescription>
                    Found description: {autoDescription}
                  </AlertDescription>
                </Alert>
              )}

              <div className="space-y-2">
                <label className="text-sm font-medium">Company Description</label>
                <Textarea
                  name="description"
                  value={formData.description || autoDescription}
                  onChange={handleInputChange}
                  placeholder="Describe your company"
                  required
                />
              </div>

              <Button type="submit" className="w-full">
                Continue <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Website Scraping Progress</CardTitle>
              <CardDescription>
                {getProgress()}% complete - {DUMMY_PAGES.filter(page => page.status === 'completed').length} of {DUMMY_PAGES.length} pages processed
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {DUMMY_PAGES.map((page) => (
                  <div
                    key={page.url}
                    className={`p-4 rounded-lg border ${selectedPage?.url === page.url ? 'border-blue-500 bg-blue-50' : 'border-gray-200'} 
                    cursor-pointer hover:border-blue-300 transition-colors`}
                    onClick={() => setSelectedPage(page)}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{page.url}</span>
                      {getStatusIcon(page.status)}
                    </div>

                    {selectedPage?.url === page.url && page.chunks.length > 0 && (
                      <div className="mt-4 space-y-2">
                        <h4 className="text-sm font-medium text-gray-500">Content Chunks:</h4>
                        {page.chunks.map((chunk, idx) => (
                          <div key={idx} className="p-2 bg-white rounded border border-gray-200 text-sm">
                            {chunk}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-between">
            <Button variant="outline" onClick={() => setCurrentStep('form')}>
              Back
            </Button>
            <Button>
             <Link href='/integrate'> Continue to Next Step </Link>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrganizationSetup;