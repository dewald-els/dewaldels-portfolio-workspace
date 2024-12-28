"use client";

import Navbar from "@/components/navbar/navbar";
import Progress from "@/components/progress/progress";
import SectionContact from "@/components/sections/section-contact";
import SectionProjects from "@/components/sections/section-projects";
import "nes.css/css/nes.min.css";
import { useRef } from "react";

enum PageSection {
  Start,
  About,
  Projects,
  Contact,
}

export default function Home() {
  const contactSectionRef = useRef<HTMLDivElement>(null);
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const projectsSectionRef = useRef<HTMLDivElement>(null);
  const startSectionRef = useRef<HTMLDivElement>(null);

  const handleGoToSectionClick = (section: PageSection) => {
    switch (section) {
      case PageSection.Start:
        startSectionRef.current?.scrollIntoView();
        break;
      case PageSection.About:
        aboutSectionRef.current?.scrollIntoView();
        break;
      case PageSection.Projects:
        projectsSectionRef.current?.scrollIntoView();
        break;
      case PageSection.Contact:
        contactSectionRef.current?.scrollIntoView();
        break;
    }
  };

  return (
    <>
      <Navbar />
      <div className="mb-48 max-w-4xl mx-auto px-4">
        <header
          className="flex flex-col items-center justify-center mb-8 pt-8"
          ref={startSectionRef}
        >
          <div className="flex flex-col gap-4 mb-8">
            <h2 className="text-3xl nes-text is-primary">Portfolio of</h2>
            <h1 className="text-5xl font-bold">Dewald Els</h1>
          </div>

          <div className="inline-flex flex-col gap-4">
            <button
              className="nes-btn w-60"
              onClick={() => handleGoToSectionClick(PageSection.About)}
            >
              About
            </button>
            <button
              className="nes-btn is-primary w-60"
              onClick={() => handleGoToSectionClick(PageSection.Projects)}
            >
              Projects
            </button>
            <button
              className="nes-btn is-warning w-60"
              onClick={() => handleGoToSectionClick(PageSection.Contact)}
            >
              Contact
            </button>
          </div>
        </header>

        <main>
          <div ref={aboutSectionRef} className="pt-8">
            <section className="nes-container with-title mb-8">
              <h3 className="title">About</h3>
              <p>
                Hello! My name is Dewald Els. I&apos;m a full stack web
                developer.
              </p>
            </section>
          </div>

          <div ref={projectsSectionRef} className="pt-8">
            <SectionProjects />
          </div>

          <div ref={contactSectionRef} className="pt-8">
            <SectionContact />
          </div>
        </main>
      </div>
      <Progress />
    </>
  );
}
