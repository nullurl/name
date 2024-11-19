import Hero from '@/components/Hero';
import Features from '@/components/Features';
import NameGenerator from '@/components/NameGenerator';
import NameGuide from '@/components/NameGuide';
import HowItWorks from '@/components/HowItWorks';
import Pricing from '@/components/Pricing';

export default function Home() {
  return (
    <main className="flex-grow">
      <div className="flex flex-col">
        <section id="hero">
          <Hero />
        </section>
        <section id="features">
          <Features />
        </section>
        <section id="generator">
          <NameGenerator />
        </section>
        <section id="name-guide">
          <NameGuide />
        </section>
        <section id="how-it-works">
          <HowItWorks />
        </section>
        <section id="pricing">
          <Pricing />
        </section>
      </div>
    </main>
  );
}