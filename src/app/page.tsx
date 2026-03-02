import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { SolutionsOverview } from "@/components/sections/solutions-overview";
import { SolutionsDetailed } from "@/components/sections/solutions-detailed";
import { Process } from "@/components/sections/process";
import { Leadership } from "@/components/sections/leadership";
import { Differentiators } from "@/components/sections/differentiators";
import { Impact } from "@/components/sections/impact";
import { Cta } from "@/components/sections/cta";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <SolutionsOverview />
        <Hero />
        <Differentiators />
        <SolutionsDetailed />
        <Impact />
        <Process />
        <Leadership />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
