import {
  Presentation, GraduationCap, FlaskConical, Globe, MonitorSmartphone, FilePenLine,
  Wrench
} from 'lucide-react';

export const solutionCategories = [
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
