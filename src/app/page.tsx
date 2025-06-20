import { CommandMenu } from "@/components/command-menu";
import { Metadata } from "next";
import { RESUME_DATA } from "@/data/resume-data";
import { WorkExperience } from "./components/WorkExperience";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { Summary } from "./components/Summary";
import { Skills } from "./components/Skills";
import { Header } from "./components/Header";
import { RecentCommits } from "./components/RecentCommits";
import { DemoReel } from "./components/DemoReel"; 
import VisitorInfo from "./components/VisitorInfo";
import ParticleCanvas from "./components/ParticleCanvas";
import MyEnginePortfolio from "./components/MyEnginePortfolio";
import SynapseRunnerPortfolio from "./components/SynapseRunnerPortfolio";
















export const metadata: Metadata = {
  title: `${RESUME_DATA.name} - Resume`,
  description: RESUME_DATA.about,
  openGraph: {
    title: `${RESUME_DATA.name} - Resume`,
    description: RESUME_DATA.about,
    type: "profile",
    locale: "en_US",
    images: [
      {
        url: "https://cv.jarocki.me/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${RESUME_DATA.name}'s profile picture`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${RESUME_DATA.name} - Resume`,
    description: RESUME_DATA.about,
    images: ["https://cv.jarocki.me/opengraph-image"],
  },
};

/**
 * Transform social links for command menu
 */
function getCommandMenuLinks() {
  const links = [];

  if (RESUME_DATA.personalWebsiteUrl) {
    links.push({
      url: RESUME_DATA.personalWebsiteUrl,
      title: "Personal Website",
    });
  }

  return [
    ...links,
    ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
      url: socialMediaLink.url,
      title: socialMediaLink.name,
    })),
  ];
}

export default function ResumePage() {
  return (
    <>
      {/* Partículas animadas de fondo */}
      <ParticleCanvas />

      <main
        className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-11 md:p-16"
        id="main-content"
      >
        <div className="sr-only">
          <h1>{RESUME_DATA.name}&apos;s Resume</h1>
        </div>

        <section
          className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-4"
          aria-label="Resume Content"
        >
          <Header />
          <DemoReel />
          <div className="space-y-8 print:space-y-4">
            <Summary summary={RESUME_DATA.summary} />
            <WorkExperience work={RESUME_DATA.work} />
            <Education education={RESUME_DATA.education} />
            <Skills skills={RESUME_DATA.skills} />
            <Projects projects={RESUME_DATA.projects} />

            <MyEnginePortfolio/>

            <SynapseRunnerPortfolio/>
 
            
          </div>
        </section>

        <nav className="print:hidden" aria-label="Quick navigation">
          <CommandMenu links={getCommandMenuLinks()} />
        </nav>
      </main>
    </>
  );
}
