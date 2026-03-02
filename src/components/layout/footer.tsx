import { Logo } from "@/components/logo";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-secondary/50 border-t">
            <div className="container mx-auto px-4 md:px-6 py-12">
                <div className="grid gap-8 md:grid-cols-3">
                    <div className="space-y-4">
                        <Logo />
                        <p className="text-muted-foreground max-w-xs">
                           The digital infrastructure partner for modern colleges, universities, and research institutions.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="#solutions" className="text-muted-foreground hover:text-primary">Solutions</Link></li>
                            <li><Link href="#process" className="text-muted-foreground hover:text-primary">Process</Link></li>
                            <li><Link href="#leadership" className="text-muted-foreground hover:text-primary">Leadership</Link></li>
                            <li><Link href="#contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Contact Us</h3>
                        <div className="space-y-2 text-muted-foreground">
                            <p>Email: <a href="mailto:contact@navyalabs.com" className="hover:text-primary">contact@navyalabs.com</a></p>
                            <p>Phone: +91 12345 67890</p>
                            <div className="flex space-x-4 mt-4">
                                <a href="#" className="text-muted-foreground hover:text-primary"><Twitter className="h-5 w-5" /></a>
                                <a href="#" className="text-muted-foreground hover:text-primary"><Linkedin className="h-5 w-5" /></a>
                                <a href="#" className="text-muted-foreground hover:text-primary"><Github className="h-5 w-5" /></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Navya Labs. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
