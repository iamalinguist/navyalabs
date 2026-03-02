import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import { ContactForm } from "@/components/contact-form";

export function Cta() {
  return (
    <section id="contact" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-gradient-to-r from-primary/80 to-primary rounded-lg shadow-xl p-8 md:p-12 text-center text-primary-foreground">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Modernize Your Institution?
          </h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-primary-foreground/90">
            Let's discuss how Navya Labs can become your long-term technology partner. Schedule a free, no-obligation consultation with our experts today.
          </p>
          <div className="mt-8">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">Request a Demo</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Request a Demo</DialogTitle>
                  <DialogDescription>
                    Fill out the form below and our experts will contact you to schedule a meeting.
                  </DialogDescription>
                </DialogHeader>
                <ContactForm />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
}
