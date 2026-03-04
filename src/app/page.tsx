import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SolutionsDetailed } from "@/components/sections/solutions-detailed";
import { Leadership } from "@/components/sections/leadership";
import { Differentiators } from "@/components/sections/differentiators";
import { Cta } from "@/components/sections/cta";
import Link from "next/link";
import { solutionCategories } from "@/lib/solutions";

const internalLinks = solutionCategories.filter(
  (category) => !category.isExternal
);

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hidden links for Next.js static export build process */}
        <div className="absolute -left-[9999px] top-0">
          {internalLinks.map((link) => (
            <Link key={link.id} href={link.sampleWorkUrl}>
              {link.title}
            </Link>
          ))}
        </div>
        <SolutionsDetailed />
        <Leadership />
        <Differentiators />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
