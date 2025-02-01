'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, ChevronRight, MessageCircle } from "lucide-react";

export default function TestChatbotPage() {
    return (
        <Card className="shadow-sm">
            <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-800">
                    Chatbot Preview
                    <span className="ml-2 text-sm font-normal text-gray-500">
                        (Live demo environment)
                    </span>
                </CardTitle>
            </CardHeader>

            <CardContent>
                <div className="bg-gray-50 rounded-lg border border-gray-200 h-[500px] relative overflow-hidden">
                    {/* Browser Mockup */}
                    <div className="bg-white border-b p-3 flex items-center gap-2">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-400" />
                            <div className="w-3 h-3 rounded-full bg-yellow-400" />
                            <div className="w-3 h-3 rounded-full bg-green-400" />
                        </div>
                        <div className="flex-1 bg-gray-100 rounded px-3 py-1.5 text-sm text-gray-600">
                            example.com
                        </div>
                    </div>

                    {/* Website Content Preview */}
                    <div className="p-6 animate-pulse">
                        <div className="max-w-4xl mx-auto space-y-6">
                            <div className="h-8 bg-gray-200 rounded w-48 mb-8" />
                            <div className="space-y-4">
                                <div className="h-4 bg-gray-200 rounded w-full" />
                                <div className="h-4 bg-gray-200 rounded w-3/4" />
                                <div className="h-4 bg-gray-200 rounded w-5/6" />
                            </div>
                            <div className="grid grid-cols-3 gap-6 mt-8">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="aspect-video bg-gray-200 rounded-lg" />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Chatbot */}
                    <div className="absolute md:bottom-6 md:right-6 flex md:flex-col flex-col-reverse md:items-end items-center gap-3 mx-4">
                        <div className="group relative">
                            <Link
                                href="https://beyondchats.com/contact-us/"
                                className="flex items-center gap-2 p-3 bg-orange-50 rounded-lg border border-orange-100 hover:border-orange-200 transition-all duration-200"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-orange-100 rounded-full">
                                        <AlertCircle className="h-5 w-5 text-orange-600" />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-sm font-medium text-orange-800">Chatbot not working as intended? </p>
                                        <p className="text-xs text-orange-600">
                                            Share feedback
                                        </p>
                                    </div>
                                </div>
                                <ChevronRight className="h-4 w-4 text-orange-600 ml-2 opacity-70 group-hover:opacity-100 transition-opacity" />
                            </Link>

                            {/* Hover effect background */}
                            <div className="absolute inset-0 bg-orange-50 opacity-0 group-hover:opacity-100 rounded-lg shadow-sm transition-opacity -z-10" />
                        </div>

                        <Button
                            size="lg"
                            className="rounded-full shadow-md hover:shadow-lg transition-shadow"
                        >
                            <MessageCircle className="h-5 w-5 mr-2" />
                            Start Chat
                            <span className="ml-2 w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        </Button>
                    </div>
                </div>

                <div className="mt-4 text-sm text-gray-500 flex items-center gap-2">
                    <AlertCircle className="h-4 w-4" />
                    Changes may take up to 30 seconds to reflect in preview
                </div>
            </CardContent>
        </Card>
    );
}