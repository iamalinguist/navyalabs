import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Logo } from '@/components/logo';

export default function UniversityDemoPage() {
    return (
        <div className="bg-background text-foreground">
            {/* Header */}
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm">
                <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
                    <Link href="#" className="flex items-center gap-2">
                        <Logo />
                    </Link>
                    <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                        <Link href="#about" className="transition-colors hover:text-primary">About</Link>
                        <Link href="#academics" className="transition-colors hover:text-primary">Academics</Link>
                        <Link href="#admissions" className="transition-colors hover:text-primary">Admissions</Link>
                        <Link href="#news" className="transition-colors hover:text-primary">News & Events</Link>
                        <Link href="#contact" className="transition-colors hover:text-primary">Contact</Link>
                    </nav>
                     <Button asChild>
                        <Link href="/#websites">Back to Main Site</Link>
                     </Button>
                </div>
            </header>

            <main>
                {/* Hero Section */}
                <section className="relative h-[60vh] w-full">
                    <Image src="https://picsum.photos/seed/university-campus/1920/1080" alt="University Campus" fill className="object-cover"/>
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <div className="text-center text-white">
                            <h1 className="text-4xl md:text-6xl font-bold">Excellence in Education</h1>
                            <p className="mt-4 text-lg md:text-xl max-w-2xl">A tradition of learning, innovation, and community since 1958.</p>
                            <div className="mt-8 flex justify-center gap-4">
                                <Button size="lg">Apply Now</Button>
                                <Button size="lg" variant="secondary">Request Info</Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section id="about" className="py-16 sm:py-24">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-bold tracking-tight">Welcome to Navya University</h2>
                                <p className="mt-4 text-muted-foreground text-lg">
                                    Founded on the principles of academic rigor and social responsibility, Navya University is a premier institution dedicated to fostering the next generation of leaders, thinkers, and innovators. Our sprawling green campus provides a vibrant backdrop for a rich intellectual life.
                                </p>
                                <p className="mt-4 text-muted-foreground text-lg">
                                    With world-class faculty, state-of-the-art facilities, and a diverse student body, we offer a truly global education.
                                </p>
                            </div>
                             <div className="relative aspect-video rounded-lg overflow-hidden border shadow-lg">
                                <Image src="https://picsum.photos/seed/uni-students/800/450" alt="Students on campus" fill className="object-cover" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Academics/Departments Section */}
                <section id="academics" className="py-16 sm:py-24 bg-muted">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold">Academic Departments</h2>
                            <p className="mt-4 text-lg text-muted-foreground">Explore our diverse range of programs across various fields of study.</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {['Engineering & Technology', 'Arts & Humanities', 'Business & Management', 'Sciences', 'Medicine & Health', 'Social Sciences'].map(dept => (
                                <Card key={dept}>
                                    <CardHeader>
                                        <CardTitle>{dept}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">World-class faculty and cutting-edge research opportunities.</p>
                                        <Button variant="link" className="px-0 mt-2">Learn More</Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* News & Events */}
                <section id="news" className="py-16 sm:py-24">
                    <div className="container mx-auto px-4 md:px-6">
                         <div className="text-center max-w-3xl mx-auto mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold">Campus Life</h2>
                            <p className="mt-4 text-lg text-muted-foreground">Stay updated with the latest news and events happening at Navya University.</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            <Card>
                                <Image src="https://picsum.photos/seed/news-1/600/400" alt="News 1" width={600} height={400} className="rounded-t-lg object-cover aspect-video"/>
                                <CardHeader>
                                    <CardTitle>Annual Tech Fest 'Innovate 2024' a Grand Success</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground text-sm">Our annual technology festival saw record participation and groundbreaking projects from students across all departments.</p>
                                </CardContent>
                            </Card>
                             <Card>
                                <Image src="https://picsum.photos/seed/news-2/600/400" alt="News 2" width={600} height={400} className="rounded-t-lg object-cover aspect-video"/>
                                <CardHeader>
                                    <CardTitle>Dr. Sharma Awarded Prestigious Research Grant</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground text-sm">Dr. Aruna Sharma from the CS department has secured a major grant for her work in ethical AI.</p>
                                </CardContent>
                            </Card>
                             <Card>
                                <Image src="https://picsum.photos/seed/news-3/600/400" alt="News 3" width={600} height={400} className="rounded-t-lg object-cover aspect-video"/>
                                <CardHeader>
                                    <CardTitle>Convocation Ceremony 2024</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground text-sm">Join us in celebrating the achievements of our graduating class on July 30th.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                 {/* Contact Section */}
                <section id="contact" className="py-16 sm:py-24 bg-muted">
                    <div className="container mx-auto px-4 md:px-6 text-center">
                        <h2 className="text-3xl font-bold">Contact Us</h2>
                        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">We're here to help. Reach out to us through any of the channels below.</p>
                        <div className="mt-8 grid md:grid-cols-3 gap-8 text-left">
                            <div className="flex items-start gap-4">
                                <MapPin className="w-8 h-8 text-primary mt-1" />
                                <div>
                                    <h3 className="font-semibold text-lg">Our Address</h3>
                                    <p className="text-muted-foreground">123 University Drive, Knowledge Park V, Greater Noida, UP, India</p>
                                </div>
                            </div>
                             <div className="flex items-start gap-4">
                                <Phone className="w-8 h-8 text-primary mt-1" />
                                <div>
                                    <h3 className="font-semibold text-lg">Phone</h3>
                                    <p className="text-muted-foreground">Admissions: +91 123 456 7890</p>
                                    <p className="text-muted-foreground">General: +91 098 765 4321</p>
                                </div>
                            </div>
                             <div className="flex items-start gap-4">
                                <Mail className="w-8 h-8 text-primary mt-1" />
                                <div>
                                    <h3 className="font-semibold text-lg">Email</h3>
                                    <p className="text-muted-foreground">admissions@navyauni.edu</p>
                                    <p className="text-muted-foreground">contact@navyauni.edu</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
             <footer className="bg-card-foreground text-background">
                <div className="container mx-auto px-4 md:px-6 py-8 text-center">
                    <p>&copy; {new Date().getFullYear()} Navya University. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
}
