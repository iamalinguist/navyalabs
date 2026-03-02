'use client';
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from 'next/image';
import Link from 'next/link';
import { Bell, Calendar, CreditCard, MessageSquare, GraduationCap, ClipboardList } from 'lucide-react';
import { Logo } from "@/components/logo";

const features = [
  { icon: Bell, title: "Instant Notices", description: "Get real-time updates and announcements." },
  { icon: Calendar, title: "Timetable", description: "Access your class schedule anytime, anywhere." },
  { icon: GraduationCap, title: "Attendance", description: "Track your attendance records easily." },
  { icon: CreditCard, title: "Fee Payment", description: "Pay fees securely through the app." },
  { icon: MessageSquare, title: "Messaging", description: "Communicate with faculty and peers." },
  { icon: ClipboardList, title: "Results", description: "View your exam results as soon as they are out." },
];

export default function MobileAppDemoPage() {
    return (
        <div className="bg-background text-foreground">
             <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm">
                <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
                    <Logo />
                     <Button asChild>
                        <Link href="/">Back to Main Site</Link>
                     </Button>
                </div>
            </header>

            <main>
                {/* Hero Section */}
                <section className="py-20 md:py-32">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="text-center md:text-left">
                                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">The Campus in Your Pocket</h1>
                                <p className="mt-4 text-muted-foreground text-lg max-w-md mx-auto md:mx-0">
                                    Stay connected, informed, and organized with the official Navya University mobile app. Everything you need, just a tap away.
                                </p>
                                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                    <Button size="lg" className="flex items-center gap-2">
                                        <Image src="https://www.vectorlogo.zone/logos/google_play/google_play-icon.svg" alt="Google Play" width={24} height={24}/>
                                        Get it on Google Play
                                    </Button>
                                    <Button size="lg" variant="outline" className="flex items-center gap-2">
                                        <Image src="https://www.vectorlogo.zone/logos/apple_appstore/apple_appstore-icon.svg" alt="App Store" width={24} height={24}/>
                                        Download on the App Store
                                    </Button>
                                </div>
                            </div>
                            <div className="relative h-[500px] flex justify-center items-center">
                                <Image src="https://picsum.photos/seed/mobile-app-1/300/600" alt="App Screenshot" width={250} height={500} className="rounded-2xl border-8 border-gray-800 shadow-2xl z-10 -rotate-6"/>
                                <Image src="https://picsum.photos/seed/mobile-app-2/300/600" alt="App Screenshot 2" width={250} height={500} className="rounded-2xl border-8 border-gray-800 shadow-2xl rotate-6"/>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section id="features" className="py-16 sm:py-24 bg-muted">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold">Powerful Features</h2>
                            <p className="mt-4 text-lg text-muted-foreground">Designed for a seamless student experience.</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full">
                                        <feature.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-1">{feature.title}</h3>
                                        <p className="text-muted-foreground">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                 {/* FAQ Section */}
                <section id="faq" className="py-16 sm:py-24">
                    <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                         <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
                        </div>
                        <Accordion type="single" collapsible className="w-full">
                          <AccordionItem value="item-1">
                            <AccordionTrigger>Is the app free to use?</AccordionTrigger>
                            <AccordionContent>
                              Yes, the Navya University mobile app is completely free for all enrolled students and registered parents.
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="item-2">
                            <AccordionTrigger>What are my login credentials?</AccordionTrigger>
                            <AccordionContent>
                              You can log in using your Student Information System (SIS) username and password.
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="item-3">
                            <AccordionTrigger>Is my data secure?</AccordionTrigger>
                            <AccordionContent>
                              Absolutely. We use industry-standard encryption and security protocols to protect all your personal and academic information.
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                    </div>
                </section>
            </main>
        </div>
    );
}
