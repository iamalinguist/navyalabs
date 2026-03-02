import { Clock, CheckCircle, Database, Smile, TrendingUp, MonitorPlay } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const benefits = [
    { icon: Clock, title: "Reduced Workload", description: "Automate manual tasks and free up administrative time." },
    { icon: CheckCircle, title: "Faster Admissions", description: "Streamline application processing from submission to enrollment." },
    { icon: Database, title: "Improved Data Accuracy", description: "Centralize data to eliminate errors and ensure a single source of truth." },
    { icon: Smile, title: "Better Student Experience", description: "Provide students with seamless, modern digital services." },
    { icon: TrendingUp, title: "Institutional Efficiency", description: "Optimize resource allocation and operational performance." },
    { icon: MonitorPlay, title: "Digital Transformation", description: "Become a future-ready institution prepared for the next generation." },
];

export function Impact() {
    return (
        <section id="impact" className="py-16 sm:py-24 bg-secondary/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                        Measurable Institutional Impact
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Our solutions deliver tangible benefits that enhance efficiency, improve experiences, and drive institutional growth.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map(benefit => (
                        <Card key={benefit.title} className="bg-card shadow-sm hover:shadow-md transition-shadow">
                            <CardHeader className="flex flex-row items-start gap-4">
                                <benefit.icon className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                                <div>
                                    <CardTitle className="text-lg font-semibold">{benefit.title}</CardTitle>
                                    <CardDescription className="text-sm mt-1">{benefit.description}</CardDescription>
                                </div>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
