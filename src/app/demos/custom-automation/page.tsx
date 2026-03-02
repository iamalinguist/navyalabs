'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from 'next/image';
import Link from 'next/link';
import { Zap, Bot, BrainCircuit, FileCheck, CheckCircle } from 'lucide-react';
import { Logo } from "@/components/logo";
import { ContactForm } from "@/components/contact-form";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const services = [
    { icon: Bot, title: "AI-Powered Chatbots", description: "Deploy intelligent chatbots for admissions, student support, and IT helpdesks, available 24/7." },
    { icon: BrainCircuit, title: "Predictive Analytics", description: "Identify at-risk students, forecast enrollment trends, and optimize resource allocation with machine learning." },
    { icon: FileCheck, title: "Document Automation", description: "Automate processing of applications, transcripts, and internal forms, reducing manual effort." },
    { icon: Zap, title: "Workflow Automation", description: "Streamline complex processes like approvals, onboarding, and reporting across departments." },
];


export default function AutomationDemoPage() {
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
                <section className="relative py-24 md:py-32 bg-muted">
                    <div className="container mx-auto px-4 md:px-6 z-10 relative">
                        <div className="max-w-3xl text-center mx-auto">
                            <h1 className="text-4xl md:text-6xl font-bold">Intelligent Automation for Education</h1>
                            <p className="mt-4 text-lg md:text-xl text-muted-foreground">
                                Leverage the power of AI and custom automation to build a more efficient, responsive, and data-driven institution.
                            </p>
                             <Dialog>
                                <DialogTrigger asChild>
                                    <Button size="lg" className="mt-8">Request a Consultation</Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px]">
                                <DialogHeader>
                                    <DialogTitle>Request a Consultation</DialogTitle>
                                    <DialogDescription>
                                    Let's discuss how we can automate your workflows.
                                    </DialogDescription>
                                </DialogHeader>
                                <ContactForm />
                                </DialogContent>
                            </Dialog>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section id="services" className="py-16 sm:py-24">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold">Our AI & Automation Solutions</h2>
                            <p className="mt-4 text-lg text-muted-foreground">Tailored solutions to solve your institution's unique challenges.</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {services.map((service, index) => (
                                <Card key={index} className="text-center">
                                    <CardHeader>
                                        <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                                            <service.icon className="w-8 h-8 text-primary" />
                                        </div>
                                        <CardTitle className="mt-4">{service.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">{service.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                 {/* Case Study Section */}
                <section id="case-study" className="py-16 sm:py-24 bg-muted">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="relative aspect-video rounded-lg overflow-hidden border shadow-lg">
                                <Image src="https://picsum.photos/seed/automation-dashboard/800/450" alt="Automation Dashboard" fill className="object-cover" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold tracking-tight">Case Study: Admissions Automation</h2>
                                <p className="mt-4 text-muted-foreground text-lg">
                                    For a leading private university, we developed a custom AI solution to automate the initial screening of over 50,000 annual applications. Our system intelligently categorized applicants, verified documents, and flagged incomplete submissions.
                                </p>
                                <ul className="mt-6 space-y-4">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-6 h-6 text-green-500 mt-1 shrink-0"/>
                                        <p><span className="font-semibold">80% reduction</span> in manual processing time for the admissions team.</p>
                                    </li>
                                     <li className="flex items-start gap-3">
                                        <CheckCircle className="w-6 h-6 text-green-500 mt-1 shrink-0"/>
                                        <p><span className="font-semibold">95% accuracy</span> in document classification and data extraction.</p>
                                    </li>
                                     <li className="flex items-start gap-3">
                                        <CheckCircle className="w-6 h-6 text-green-500 mt-1 shrink-0"/>
                                        <p>Freed up staff to focus on applicant interviews and engagement.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
