import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import GoogleLogoIcon from "@/components/icons/GoogleLogoIcon"

export default function RegistrationPage() {
    return (
        <div className="min-h-screen lg:grid lg:grid-cols-2">
            {/* Left Form Panel */}
            <div className="p-8 lg:p-12">
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
                            <Input id="name" placeholder="John Doe" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="john@company.com" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" type="password" />
                        </div>

                        <Button className="w-full">Create Account</Button>

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
            </div>

            {/* Right Illustration */}
            <div className="hidden bg-muted lg:block">
                <img
                    src="https://images.unsplash.com/photo-1673255745677-e36f618550d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWl8ZW58MHx8MHx8fDI%3D"
                    alt="Chatbot illustration"
                    className="h-full w-full object-cover"
                />
            </div>
        </div>
    )
}