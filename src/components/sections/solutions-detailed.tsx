import {
  Users, UserPlus, FileUp, ListChecks, Award, Banknote, LayoutDashboard, MonitorSmartphone,
  CalendarCheck, GraduationCap, Clock, Home, Truck, IdCard, BookUser,
  Presentation, FileText, Mail, Ticket, QrCode, Book, FileArchive,
  FilePenLine, Database, Laptop, ClipboardEdit, Calculator, ShieldCheck,
  FolderKanban, Target, BarChart3, FilePieChart, BookCopy,
  Layers, UploadCloud, Link2,
  Library, UserCog, TrendingUp, FlaskConical, CircleDollarSign, Microscope,
  Globe, Fingerprint, Search, Languages, Route,
  Bell, List, CreditCard, UserSquare,
  Wrench, GitBranch, DatabaseZap, FileCheck2, BarChartHorizontal
} from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';
import React from 'react';

const solutionCategories = [
    {
        id: "admissions",
        title: "Admissions & Student Lifecycle",
        icon: Users,
        features: [
            { icon: UserPlus, text: "Online application portals" },
            { icon: FileUp, text: "Document upload & verification" },
            { icon: ListChecks, text: "Merit list generation" },
            { icon: Award, text: "Counseling and seat allocation" },
            { icon: Banknote, text: "Fee payment integration" },
            { icon: LayoutDashboard, text: "Student onboarding dashboards" },
            { icon: MonitorSmartphone, text: "Multi-program admission handling" },
        ]
    },
    {
        id: "erp",
        title: "Modular College ERP",
        icon: GraduationCap,
        features: [
            { icon: CalendarCheck, text: "Attendance management" },
            { icon: ClipboardEdit, text: "Internal marks & grading" },
            { icon: Clock, text: "Timetable scheduling" },
            { icon: Banknote, text: "Fee management" },
            { icon: BookUser, text: "Staff management" },
            { icon: Home, text: "Hostel management" },
            { icon: Truck, text: "Transport tracking" },
            { icon: IdCard, text: "ID card generation" },
            { icon: Users, text: "Student information systems" },
        ]
    },
    {
        id: "conference",
        title: "Conference Management",
        icon: Presentation,
        features: [
            { icon: Globe, text: "Academic conference websites" },
            { icon: FileText, text: "Paper submission & review workflows" },
            { icon: Mail, text: "Reviewer assignment tools" },
            { icon: UserPlus, text: "Registration and payment systems" },
            { icon: Award, text: "Certificate generation" },
            { icon: QrCode, text: "QR-based check-in" },
            { icon: Book, text: "Abstract book creation" },
            { icon: FileArchive, text: "Proceedings management" },
        ]
    },
    {
        id: "exams",
        title: "Examination Solutions",
        icon: FilePenLine,
        features: [
            { icon: ClipboardEdit, text: "Internal exam management" },
            { icon: Database, text: "Question bank systems" },
            { icon: Laptop, text: "Online examinations" },
            { icon: FileText, text: "Marks entry portals" },
            { icon: Calculator, text: "Result processing automation" },
            { icon: Ticket, text: "Hall ticket generation" },
            { icon: Award, text: "Grade cards & OMR integration" },
        ]
    },
    {
        id: "accreditation",
        title: "Accreditation (NAAC/NBA)",
        icon: ShieldCheck,
        features: [
            { icon: FolderKanban, text: "Criterion-wise document repositories" },
            { icon: Target, text: "Evidence tracking" },
            { icon: BarChart3, text: "Data analytics dashboards" },
            { icon: FilePieChart, text: "Annual report generation" },
            { icon: BookCopy, text: "Self-study report support" },
            { icon: ShieldCheck, text: "Compliance monitoring tools" },
        ]
    },
    {
        id: "learning",
        title: "Learning & Teaching Support",
        icon: Library,
        features: [
            { icon: Layers, text: "Lightweight LMS platforms" },
            { icon: UploadCloud, text: "Assignment submission portals" },
            { icon: FolderKanban, text: "Faculty resource repositories" },
            { icon: Target, text: "Course outcome tracking" },
            { icon: Laptop, text: "Lecture capture systems" },
            { icon: Link2, text: "Integration with existing LMS" },
        ]
    },
    {
        id: "research",
        title: "Research & Faculty Management",
        icon: FlaskConical,
        features: [
            { icon: UserCog, text: "Faculty profile platforms" },
            { icon: Book, text: "Publication tracking" },
            { icon: CircleDollarSign, text: "Grant management" },
            { icon: Microscope, text: "Lab and equipment booking" },
            { icon: FileText, text: "Consultancy project tracking" },
            { icon: TrendingUp, text: "Research analytics dashboards" },
        ]
    },
    {
        id: "websites",
        title: "Institutional Websites",
        icon: Globe,
        features: [
            { icon: MonitorSmartphone, text: "Modern responsive websites" },
            { icon: Library, text: "Department microsites" },
            { icon: Fingerprint, text: "Accessibility compliance" },
            { icon: Search, text: "SEO optimization" },
            { icon: Languages, text: "Multilingual support" },
            { icon: Route, text: "Virtual campus tours" },
        ]
    },
    {
        id: "mobile",
        title: "Campus Mobile Apps",
        icon: MonitorSmartphone,
        features: [
            { icon: CalendarCheck, text: "Attendance access" },
            { icon: Clock, text: "Timetables" },
            { icon: Bell, text: "Notifications" },
            { icon: CreditCard, text: "Fee status tracking" },
            { icon: List, text: "Event updates" },
            { icon: UserSquare, text: "Digital ID cards" },
            { icon: Layers, text: "Student services integration" },
        ]
    },
    {
        id: "custom",
        title: "Custom Automation",
        icon: Wrench,
        features: [
            { icon: GitBranch, text: "Workflow automation" },
            { icon: DatabaseZap, text: "Data migration from legacy systems" },
            { icon: Link2, text: "API integrations" },
            { icon: FileCheck2, text: "Document approval systems" },
            { icon: BarChartHorizontal, text: "Analytics dashboards" },
            { icon: Wrench, text: "Tailored institutional software" },
        ]
    }
];

export function SolutionsDetailed() {
    return (
        <section id="solutions" className="py-16 sm:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h1 className="text-3xl tracking-tight text-foreground sm:text-4xl font-bold">
                        An End-to-End Academic Technology Provider
                    </h1>
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
                                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-16 items-center">
                                    <div className={cn("md:col-span-3", isReversed && 'md:order-last')}>
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="bg-primary/10 p-3 rounded-full">
                                                <category.icon className="w-7 h-7 text-primary" />
                                            </div>
                                            <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
                                        </div>

                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 mt-6">
                                            {category.features.map(feature => (
                                                <li key={feature.text} className="flex items-start gap-3">
                                                    <feature.icon className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                                                    <span className="text-muted-foreground">{feature.text}</span>
                                                </li>
                                            ))}
                                        </ul>
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
