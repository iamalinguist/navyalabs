import {
  Presentation, GraduationCap, FlaskConical, Globe, MonitorSmartphone, FilePenLine,
  Wrench, ExternalLink
} from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';
import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const solutionCategories = [
    {
        id: "conference",
        title: "Conference Management",
        icon: Presentation,
        sampleWorkUrl: "https://facultyideas.web.app/",
        isExternal: true,
        features: [
            { text: "Academic conference websites" },
            { text: "Paper submission & review workflows" },
            { text: "Reviewer assignment tools" },
            { text: "Registration and payment systems" },
            { text: "Certificate generation" },
            { text: "QR-based check-in" },
            { text: "Abstract book creation" },
            { text: "Proceedings management" },
        ]
    },
    {
        id: "erp",
        title: "Modular College ERP",
        icon: GraduationCap,
        sampleWorkUrl: "/demos/erp",
        isExternal: false,
        features: [
            { text: "Attendance management" },
            { text: "Internal marks & grading" },
            { text: "Timetable scheduling" },
            { text: "Fee management" },
            { text: "Staff management" },
            { text: "Hostel management" },
            { text: "Transport tracking" },
            { text: "ID card generation" },
            { text: "Student information systems" },
        ]
    },
    {
        id: "research",
        title: "Research & Faculty Management",
        icon: FlaskConical,
        sampleWorkUrl: "/demos/research",
        isExternal: false,
        features: [
            { text: "Faculty profile platforms" },
            { text: "Publication tracking" },
            { text: "Grant management" },
            { text: "Lab and equipment booking" },
            { text: "Consultancy project tracking" },
            { text: "Research analytics dashboards" },
        ]
    },
    {
        id: "websites",
        title: "Institutional Websites",
        icon: Globe,
        sampleWorkUrl: "/demos/university",
        isExternal: false,
        features: [
            { text: "Modern responsive websites" },
            { text: "Department microsites" },
            { text: "Accessibility compliance" },
            { text: "SEO optimization" },
            { text: "Multilingual support" },
            { text: "Virtual campus tours" },
        ]
    },
    {
        id: "mobile",
        title: "Campus Mobile Apps",
        icon: MonitorSmartphone,
        sampleWorkUrl: "/demos/mobile-app",
        isExternal: false,
        features: [
            { text: "Attendance access" },
            { text: "Timetables" },
            { text: "Notifications" },
            { text: "Fee status tracking" },
            { text: "Event updates" },
            { text: "Digital ID cards" },
            { text: "Student services integration" },
        ]
    },
    {
        id: "exams",
        title: "Examination Solutions",
        icon: FilePenLine,
        sampleWorkUrl: "/demos/exam-solution",
        isExternal: false,
        features: [
            { text: "Internal exam management" },
            { text: "Question bank systems" },
            { text: "Online examinations" },
            { text: "Marks entry portals" },
            { text: "Result processing automation" },
            { text: "Hall ticket generation" },
            { text: "Grade cards & OMR integration" },
        ]
    },
    {
        id: "custom",
        title: "Custom Automation and AI",
        icon: Wrench,
        sampleWorkUrl: "/demos/custom-automation",
        isExternal: false,
        features: [
            { text: "Workflow automation" },
            { text: "Data migration from legacy systems" },
            { text: "API integrations" },
            { text: "Document approval systems" },
            { text: "Analytics dashboards" },
            { text: "Tailored institutional software" },
        ]
    }
];

export function SolutionsDetailed() {
    return (
        <section id="solutions" className="py-16 sm:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h2 className="text-3xl tracking-tight text-foreground sm:text-4xl font-bold">
                        An End-to-End Academic Technology Provider
                    </h2>
                    <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        From admissions to accreditation, Navya Labs offers a comprehensive suite of modular and integrated solutions to digitize your entire institution.
                    </p>
                </div>
                
                <div className="max-w-6xl mx-auto">
                    {solutionCategories.map((category, index) => {
                        const image = PlaceHolderImages.find(p => p.id === `solution-${category.id}`);
                        const isReversed = index % 2 !== 0;

                        return (
                            <React.Fragment key={category.id}>
                                {index > 0 && <Separator className="my-20" />}
                                <div id={category.id} className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-16 items-center scroll-mt-24">
                                    <div className={cn("md:col-span-3", isReversed && 'md:order-last')}>
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="bg-primary/10 p-3 rounded-full">
                                                <category.icon className="w-7 h-7 text-primary" />
                                            </div>
                                            <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
                                        </div>

                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 mt-6">
                                            {category.features.map((feature, featureIndex) => (
                                                <li key={feature.text} className="flex items-start gap-3">
                                                    <span className="font-bold text-primary w-5 shrink-0 text-right">{featureIndex + 1}.</span>
                                                    <span className="text-muted-foreground">{feature.text}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="mt-8 text-center">
                                            {category.sampleWorkUrl ? (
                                                <Button asChild>
                                                    <Link href={category.sampleWorkUrl} target={category.isExternal ? "_blank" : "_self"} rel={category.isExternal ? "noopener noreferrer" : ""}>
                                                        View Sample Work {category.isExternal && <ExternalLink className="ml-2" />}
                                                    </Link>
                                                </Button>
                                            ) : (
                                                <Button variant="outline" disabled>
                                                    Sample Work
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                    
                                    <div className={cn('md:col-span-2 relative aspect-square rounded-lg overflow-hidden border shadow-lg', isReversed && 'md:order-first')}>
                                        {image ? (
                                            <Image
                                                src={image.imageUrl}
                                                alt={image.description}
                                                fill
                                                className="object-cover"
                                                data-ai-hint={image.imageHint}
                                            />
                                        ) : (
                                            <div className="bg-muted/50 flex items-center justify-center w-full h-full">
                                                <p className="text-muted-foreground">Image coming soon</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </React.Fragment>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}
