import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, PenSquare, Code, Rocket, Presentation, Wrench } from 'lucide-react';

const processSteps = [
    {
        step: 1,
        icon: Search,
        title: "Needs Assessment",
        description: "We start by deeply understanding your institution's unique challenges, goals, and existing workflows."
    },
    {
        step: 2,
        icon: PenSquare,
        title: "Solution Design",
        description: "Our architects design a bespoke, scalable solution blueprint tailored to your specific requirements."
    },
    {
        step: 3,
        icon: Code,
        title: "Development & Customization",
        description: "Our engineering team builds and customizes the platform, ensuring a perfect fit for your processes."
    },
    {
        step: 4,
        icon: Rocket,
        title: "Deployment",
        description: "We handle the complete, seamless deployment and integration with your existing campus IT infrastructure."
    },
    {
        step: 5,
        icon: Presentation,
        title: "Training",
        description: "Comprehensive training for staff and faculty ensures smooth adoption and maximum utilization."
    },
    {
        step: 6,
        icon: Wrench,
        title: "Ongoing Support",
        description: "Our partnership continues with dedicated long-term support, maintenance, and future-ready upgrades."
    }
];

export function Process() {
    return (
        <section id="process" className="py-16 sm:py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                        Our Implementation Journey
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        We follow a structured, collaborative process to ensure your digital transformation is seamless and successful.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {processSteps.map((step) => (
                       <div key={step.step} className="relative">
                           <Card className="h-full bg-card shadow-lg hover:shadow-xl transition-shadow duration-300">
                               <CardHeader>
                                   <div className="flex items-center gap-4">
                                       <div className="flex-shrink-0 bg-primary text-primary-foreground h-12 w-12 rounded-full flex items-center justify-center text-xl font-bold">
                                           {step.step}
                                       </div>
                                       <CardTitle className="text-xl font-semibold">{step.title}</CardTitle>
                                   </div>
                               </CardHeader>
                               <CardContent>
                                   <p className="text-muted-foreground">{step.description}</p>
                               </CardContent>
                           </Card>
                       </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
