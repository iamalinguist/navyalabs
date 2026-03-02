import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';

export function SolutionsOverview() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

  return (
    <section className="relative w-full py-24 sm:py-32 flex items-center justify-center text-center overflow-hidden">
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
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary-foreground shadow-sm">
          An End-to-End Academic Technology Provider
        </h1>
        <p className="mt-6 text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto">
          From admissions to accreditation, Navya Labs offers a comprehensive suite of modular and integrated solutions to digitize your entire institution.
        </p>
        <div className="mt-10">
          <Button asChild size="lg" variant="secondary">
            <Link href="#solutions">Explore Our Solutions</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
