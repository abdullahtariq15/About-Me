import React from "react";
import { Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { Linkedin, Youtube, Instagram, Link, BarChart2, Database, LineChart, FileSpreadsheet, Table2, Layers } from "lucide-react";
import imgPortrait from "@assets/MAB_1779195290080.png";
import imgMateenFeedback from "@assets/A_Mateen_topmate_feedback_1779193043821.jpg";
import imgBilalFeedback from "@assets/Bilal_topmate_feedback_1779193043823.jpg";
import imgGhulamRazaReview from "@assets/Ghulam_Raza_topmate_review_1779193043823.jpg";
import imgHassanZafarReview from "@assets/Hassan_Zafar_Review_topmate_1779193043824.jpg";
import imgMuaazReview from "@assets/Muaaz_topmate_review_1779193043824.jpg";

const queryClient = new QueryClient();

const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/abdullahtariq15/",
    description: "Professional updates and thoughts",
    testId: "link-linkedin",
  },
  {
    name: "YouTube — @MAB1",
    icon: Youtube,
    url: "https://www.youtube.com/@mab1",
    description: "Personal channel — tech, ideas, and experiments",
    testId: "link-youtube-mab1",
  },
  {
    name: "YouTube — @AnalystAB",
    icon: Youtube,
    url: "https://www.youtube.com/@AnalystAB",
    description: "Data and analytics content",
    testId: "link-youtube-analyst",
  },
  {
    name: "Topmate",
    icon: Link,
    url: "https://topmate.io/abdullahtariq15/",
    description: "Book a 1:1 session with me",
    testId: "link-topmate",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/m.abdullah.tariq",
    description: "Behind the scenes and daily life",
    testId: "link-instagram",
  },
];

const SKILLS = [
  {
    category: "Visualisation",
    icon: BarChart2,
    color: "primary",
    tools: ["Power BI", "Tableau", "Superset", "Metabase"],
  },
  {
    category: "Data & Databases",
    icon: Database,
    color: "accent",
    tools: ["SQL", "PostgreSQL", "MySQL"],
  },
  {
    category: "Analytics & Modelling",
    icon: LineChart,
    color: "primary",
    tools: ["DAX", "Power Query (M)", "Data Modelling", "KPI Design", "Executive Dashboards"],
  },
  {
    category: "Spreadsheets",
    icon: FileSpreadsheet,
    color: "accent",
    tools: ["Excel", "Pivot Tables", "Google Sheets"],
  },
  {
    category: "Reporting",
    icon: Table2,
    color: "primary",
    tools: ["SSRS", "Ad-hoc Reports", "Storytelling with Data"],
  },
  {
    category: "Cloud & Automation",
    icon: Layers,
    color: "accent",
    tools: ["SharePoint", "Teams", "Power Automate", "AI Assistants/LLMs"],
  },
];

const TESTIMONIAL_IMAGES = [
  { src: imgMateenFeedback, alt: "Testimonial from Abdul Mateen", testId: "testimonial-mateen" },
  { src: imgBilalFeedback, alt: "Testimonial from Muhammad Bilal", testId: "testimonial-bilal" },
  { src: imgGhulamRazaReview, alt: "Testimonial from Ghulam Raza", testId: "testimonial-ghulam" },
  { src: imgHassanZafarReview, alt: "Testimonial from Hassan Zafar", testId: "testimonial-hassan" },
  { src: imgMuaazReview, alt: "Testimonial from Muaaz", testId: "testimonial-muaaz" },
];

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

function Home() {
  return (
    <div className="min-h-[100dvh] w-full bg-background text-foreground overflow-x-hidden selection:bg-primary/20 selection:text-primary">
      <div className="noise-bg" />
      {/* Ambient gradient blobs */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-5%] w-[45%] h-[45%] rounded-full bg-primary/8 blur-[130px]" />
        <div className="absolute bottom-[-15%] right-[-5%] w-[50%] h-[50%] rounded-full bg-primary/6 blur-[150px]" />
        <div className="absolute top-[40%] right-[10%] w-[30%] h-[30%] rounded-full bg-accent/6 blur-[100px]" />
      </div>
      <main className="max-w-4xl mx-auto px-6 py-24 md:py-32 lg:py-48 flex flex-col gap-32 md:gap-48 relative z-10">

        {/* HERO SECTION */}
        <section className="flex flex-col md:flex-row items-center justify-between gap-12 min-h-[50vh]">
          {/* Left: text */}
          <div className="flex flex-col gap-6 flex-1">
            <FadeIn>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif tracking-tight leading-[1.05] text-foreground">
                Abdullah<br />Tariq
              </h1>
            </FadeIn>

            <FadeIn delay={0.1} className="flex flex-col gap-1.5">
              <p className="text-lg md:text-xl text-primary font-medium tracking-wide">Data Analyst / Business Intelligence Analyst</p>
              <p className="text-sm md:text-base text-muted-foreground font-light max-w-md leading-relaxed">
                Turning raw data into clear decisions — through dashboards, reports, and insight that actually gets used.
              </p>
            </FadeIn>

            <FadeIn delay={0.2} className="flex flex-wrap gap-3 mt-2">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`hero-${link.testId}`}
                  className="group flex items-center justify-center w-11 h-11 rounded-full bg-secondary border border-border/50 text-muted-foreground hover:text-foreground hover:bg-secondary/80 hover:border-primary/30 transition-all duration-300"
                  aria-label={link.name}
                >
                  <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                </a>
              ))}
            </FadeIn>
          </div>

          {/* Right: portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative shrink-0 w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80"
          >
            <div className="absolute inset-0 rounded-full bg-primary/15 blur-2xl scale-110" />
            <img
              src={imgPortrait}
              alt="Abdullah Tariq"
              className="relative w-full h-full object-cover object-top rounded-full border-2 border-primary/30 shadow-2xl shadow-primary/10"
            />
          </motion.div>
        </section>

        {/* ABOUT SECTION */}
        <section className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">
          <FadeIn className="w-full md:w-1/3">
            <h2 className="text-sm uppercase tracking-widest text-muted-foreground font-medium mb-6 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-primary/50" />
              About
            </h2>
          </FadeIn>
          <FadeIn delay={0.1} className="w-full md:w-2/3">
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-xl md:text-3xl leading-relaxed text-foreground/90 font-serif">
                I help organisations make sense of their data — building dashboards, BI systems, and reports that drive real decisions.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mt-8 font-light">
                With hands-on experience in Power BI, SQL, and Excel, I specialise in turning messy, siloed data into clean, actionable insight. When I'm not building dashboards, I'm mentoring the next generation of data professionals on Topmate and creating content on YouTube.
              </p>
            </div>
          </FadeIn>
        </section>

        {/* SKILLS SECTION */}
        <section className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">
          <FadeIn className="w-full md:w-1/3">
            <h2 className="text-sm uppercase tracking-widest text-muted-foreground font-medium mb-6 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-primary/50" />
              Skills
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Tools and technologies I use to analyse, visualise, and communicate data.
            </p>
          </FadeIn>
          <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SKILLS.map((skill, i) => (
              <motion.div
                key={skill.category}
                data-testid={`skill-${skill.category.toLowerCase().replace(/\s+/g, '-')}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className={`group p-5 rounded-2xl border transition-all duration-500 ${
                  skill.color === "accent"
                    ? "bg-accent/5 border-accent/20 hover:bg-accent/10 hover:border-accent/40"
                    : "bg-primary/5 border-primary/20 hover:bg-primary/10 hover:border-primary/40"
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    skill.color === "accent" ? "bg-accent/15 text-accent" : "bg-primary/15 text-primary"
                  }`}>
                    <skill.icon className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{skill.category}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {skill.tools.map((tool) => (
                    <span
                      key={tool}
                      className={`text-xs px-2.5 py-1 rounded-full border font-light ${
                        skill.color === "accent"
                          ? "text-accent/80 border-accent/20 bg-accent/8"
                          : "text-primary/80 border-primary/20 bg-primary/8"
                      }`}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section className="flex flex-col gap-12">
          <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">
            <FadeIn className="w-full md:w-1/3 md:sticky md:top-12">
              <h2 className="text-sm uppercase tracking-widest text-muted-foreground font-medium mb-4 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-primary/50" />
                Testimonials
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                What people say after a 1:1 session on Topmate.
              </p>
              <a
                href="https://topmate.io/abdullahtariq15/"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="cta-topmate"
                className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium hover:bg-primary/20 hover:border-primary/40 transition-all duration-300"
              >
                <Link className="w-3.5 h-3.5" />
                Book a session
              </a>
            </FadeIn>

            <div className="w-full md:w-2/3 columns-1 sm:columns-2 gap-4 space-y-4">
              {TESTIMONIAL_IMAGES.map((t, i) => (
                <motion.div
                  key={t.testId}
                  data-testid={t.testId}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="break-inside-avoid overflow-hidden rounded-2xl border border-amber-500/30 hover:border-amber-500/60 hover:shadow-lg hover:shadow-amber-900/20 transition-all duration-500 group p-2"
                  style={{ backgroundColor: "#0d1f3c" }}
                >
                  <img
                    src={t.src}
                    alt={t.alt}
                    className="w-full h-auto block rounded-xl group-hover:scale-[1.01] transition-transform duration-500 origin-top"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CONNECT SECTION */}
        <section className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">
          <FadeIn className="w-full md:w-1/3">
            <h2 className="text-sm uppercase tracking-widest text-muted-foreground font-medium mb-6 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-primary/50" />
              Connect
            </h2>
          </FadeIn>
          <FadeIn delay={0.1} className="w-full md:w-2/3 flex flex-col gap-4">
            {SOCIAL_LINKS.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`connect-${link.testId}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="group flex flex-col sm:flex-row sm:items-center justify-between p-6 rounded-2xl bg-secondary/30 border border-border/50 hover:bg-secondary/50 hover:border-primary/30 transition-all duration-500"
              >
                <div className="flex items-center gap-4 mb-2 sm:mb-0">
                  <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-muted-foreground group-hover:text-primary group-hover:scale-110 transition-all duration-500">
                    <link.icon className="w-4 h-4" />
                  </div>
                  <span className="text-lg font-medium text-foreground">{link.name}</span>
                </div>
                <span className="text-muted-foreground text-sm sm:text-right group-hover:text-foreground/80 transition-colors duration-300">
                  {link.description}
                </span>
              </motion.a>
            ))}
          </FadeIn>
        </section>

        {/* FOOTER */}
        <footer className="mt-24 pt-12 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <FadeIn className="flex flex-col items-center md:items-start gap-1">
            <span className="text-foreground font-serif text-xl italic">Made with curiosity.</span>
            <span className="text-sm text-muted-foreground">© 2026 Abdullah Tariq. All rights reserved.</span>
          </FadeIn>
          <FadeIn delay={0.1} className="flex gap-6">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={`footer-${link.name}`}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`footer-${link.testId}`}
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                aria-label={link.name}
              >
                <link.icon className="w-4 h-4" />
              </a>
            ))}
          </FadeIn>
        </footer>

      </main>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Home />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
