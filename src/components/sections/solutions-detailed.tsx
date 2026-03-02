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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

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
        <section id="solutions" className="py-16 sm:py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <Tabs defaultValue="admissions" className="flex flex-col md:flex-row gap-8 lg:gap-12">
                    <TabsList className="flex md:flex-col h-auto justify-start items-stretch w-full md:w-1/3 lg:w-1/4 bg-transparent p-0 overflow-x-auto md:overflow-x-visible">
                        {solutionCategories.map(category => (
                            <TabsTrigger key={category.id} value={category.id} className="flex items-start text-left justify-start gap-3 p-4 text-base data-[state=active]:bg-primary/10 data-[state=active]:shadow-none data-[state=active]:text-primary font-medium flex-shrink-0 h-full">
                                <category.icon className="w-5 h-5 flex-shrink-0 mt-1" />
                                {category.title}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    <div className="flex-1">
                        {solutionCategories.map(category => {
                            const image = PlaceHolderImages.find(p => p.id === `solution-${category.id}`);
                            return (
                            <TabsContent key={category.id} value={category.id} className="m-0">
                                <Card className="shadow-lg border-primary/20">
                                    <CardHeader>
                                        <CardTitle className="text-2xl font-bold flex items-center gap-3 text-primary">
                                            <category.icon className="w-7 h-7" />
                                            {category.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid md:grid-cols-2 gap-8 items-start">
                                            <ul className="grid grid-cols-1 gap-y-4">
                                                {category.features.map(feature => (
                                                    <li key={feature.text} className="flex items-start gap-3">
                                                        <feature.icon className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                                                        <span className="text-muted-foreground text-base">{feature.text}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                            {image && (
                                                <div className="relative aspect-[4/3] rounded-lg overflow-hidden border self-center">
                                                    <Image
                                                        src={image.imageUrl}
                                                        alt={image.description}
                                                        fill
                                                        className="object-cover"
                                                        data-ai-hint={image.imageHint}
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        )})}
                    </div>
                </Tabs>
            </div>
        </section>
    );
}
