"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import GoogleLogoIcon from "@/components/icons/GoogleLogoIcon";

export default function RegistrationPage() {
    const [isVerificationOpen, setIsVerificationOpen] = useState(false);
    const [verificationCode, setVerificationCode] = useState("");
    const [resendTimer, setResendTimer] = useState(30);

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsVerificationOpen(true);
    };

    // Handle verification
    const handleVerification = () => {
        if (verificationCode === "123456") { // Simple hardcoded verification
            window.location.href = "/setup";
        } else {
            alert("Verfication Code is Incorrect!")
        }
    };

    // Resend countdown timer
    useEffect(() => {
        if (resendTimer > 0 && isVerificationOpen) {
            const timer = setInterval(() => {
                setResendTimer((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [resendTimer, isVerificationOpen]);

    return (
        <div className="min-h-screen lg:grid lg:grid-cols-2">
            {/* Left Form Panel */}
            <form onSubmit={handleSubmit} className="p-8 lg:p-12">
                <div className="mx-auto max-w-md space-y-8">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold">Get Started</h1>
                        <p className="text-muted-foreground">
                            Create your account in 30 seconds
                        </p>
                    </div>

                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" placeholder="John Doe" required />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="john@company.com" required />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" type="password" required />
                        </div>

                        <Button className="w-full" type="submit">
                            Create Account
                        </Button>

                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-background px-2 text-muted-foreground">
                                    OR
                                </span>
                            </div>
                        </div>

                        <Button variant="outline" className="w-full">
                            <GoogleLogoIcon className="mr-2" />
                            Continue with Google
                        </Button>
                    </div>
                </div>
            </form>

            {/* Verification Dialog */}
            <Dialog open={isVerificationOpen} onOpenChange={setIsVerificationOpen}>
                <DialogContent className="sm:max-w-[425px]">
                    <div className="space-y-4 text-center">
                        <DialogTitle className="text-2xl font-bold">Verify Your Email</DialogTitle>
                        <p className="text-muted-foreground">
                            We've sent a 6-digit code to your email
                        </p>

                        <Input
                            value={verificationCode}
                            onChange={(e) => setVerificationCode(e.target.value)}
                            placeholder="Enter verification code"
                            className="text-center"
                        />

                        <Button
                            className="w-full"
                            onClick={handleVerification}
                            disabled={verificationCode.length !== 6}
                        >
                            Verify
                        </Button>

                        <div className="text-sm text-muted-foreground">
                            {resendTimer > 0 ? (
                                `Resend code in ${resendTimer}s`
                            ) : (
                                <button
                                    onClick={() => setResendTimer(30)}
                                    className="text-primary hover:underline"
                                >
                                    Resend Code
                                </button>
                            )}
                        </div>
                    </div>
                </DialogContent>
            </Dialog>

            {/* Right Illustration */}
            <div className="hidden bg-muted lg:block">
                <img
                    src="https://images.unsplash.com/photo-1673255745677-e36f618550d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWl8ZW58MHx8MHx8fDI%3D"
                    alt="Chatbot illustration"
                    className="h-full w-full object-cover"
                />
            </div>
        </div>
    );
}