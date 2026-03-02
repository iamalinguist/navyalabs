import { Award, Handshake, Wrench, BrainCircuit } from 'lucide-react';

const differentiators = [
  {
    icon: Award,
    title: "Academic-Domain Expertise",
    description: "We are not just technologists; we understand the fabric of higher education."
  },
  {
    icon: Wrench,
    title: "Custom-Built Solutions",
    description: "We avoid one-size-fits-all, tailoring every solution to your unique workflows."
  },
  {
    icon: Handshake,
    title: "Long-Term Partnership",
    description: "We invest in your success with continuous support and strategic guidance."
  },
  {
    icon: BrainCircuit,
    title: "AI Consulting",
    description: "Leverage our expertise in AI to build next-generation academic solutions."
  }
];

export function Differentiators() {
    return (
        <section id="why-us" className="py-16 sm:py-24 bg-card/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                        Why Navya Labs
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Our approach is fundamentally different. We build partnerships and platforms designed for the future of education.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    {differentiators.map((item) => (
                        <div key={item.title} className="flex flex-col items-center text-center gap-4 p-6 rounded-lg transition-all duration-300 hover:bg-card/80 hover:shadow-lg">
                           <div className="bg-primary/10 p-4 rounded-full">
                            <item.icon className="w-8 h-8 text-primary" />
                           </div>
                           <div>
                               <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                               <p className="text-muted-foreground">{item.description}</p>
                           </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
