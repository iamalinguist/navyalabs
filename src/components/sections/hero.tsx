import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import { ContactForm } from "@/components/contact-form";

export function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

  return (
    <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center text-center text-white overflow-hidden">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-primary/80" />
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-primary-foreground shadow-sm">
          The Digital Infrastructure Partner for Modern Academia
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
          Navya Labs builds scalable software systems, portals, and platforms that modernize institutional workflows across the entire student and faculty lifecycle.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg">Request a Demo</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Request a Demo</DialogTitle>
                  <DialogDescription>
                    Fill out the form below and we'll get in touch to schedule a demo.
                  </DialogDescription>
                </DialogHeader>
                <ContactForm />
              </DialogContent>
            </Dialog>
          <Button asChild size="lg" variant="secondary">
            <Link href="#solutions">View Solutions</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
