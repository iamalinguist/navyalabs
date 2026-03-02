import { Logo } from "@/components/logo";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-card border-t border-border/50">
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
                            <li><Link href="#why-us" className="text-muted-foreground hover:text-primary">Why Navya</Link></li>
                            <li><Link href="#leadership" className="text-muted-foreground hover:text-primary">Leadership</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Contact Us</h3>
                        <div className="space-y-2 text-muted-foreground">
                            <p>For general queries:</p>
                            <p>Email: <a href="mailto:sopan.tripathi@gmail.com" className="hover:text-primary">sopan.tripathi@gmail.com</a></p>
                            <p>Phone: <a href="tel:7987876701" className="hover:text-primary">7987876701</a></p>
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
