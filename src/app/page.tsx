import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SolutionsDetailed } from "@/components/sections/solutions-detailed";
import { Leadership } from "@/components/sections/leadership";
import { Differentiators } from "@/components/sections/differentiators";
import { Cta } from "@/components/sections/cta";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <SolutionsDetailed />
        <Leadership />
        <Differentiators />
        <Cta />
        {/* Hidden links for static export crawler */}
        <div className="hidden">
          <Link href="/demos/custom-automation">Custom Automation</Link>
          <Link href="/demos/erp">ERP</Link>
          <Link href="/demos/exam-solution">Exam Solution</Link>
          <Link href="/demos/mobile-app">Mobile App</Link>
          <Link href="/demos/research">Research</Link>
          <Link href="/demos/university">University</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
