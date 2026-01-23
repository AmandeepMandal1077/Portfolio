import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code,
  Database,
  Globe,
  Award,
  Briefcase,
  Star,
  Trophy,
  Sparkles,
} from "lucide-react";

import {
  TextReveal,
  MagneticButton,
  SpotlightCard,
  AnimatedCounter,
  TiltCard,
  StaggeredList,
} from "./animations";
import MobileMenu from "./MobileMenu";

const navItems = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "hackathon", label: "Hackathon" },
  { id: "skills", label: "Skills" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

const heroStats = [
  {
    label: "LeetCode problems",
    value: "600+",
    detail: "Knight • Top 3.05%",
    isNumeric: true,
  },
  {
    label: "LeetCode rating",
    value: "1900+",
    detail: "Knight badge",
    isNumeric: true,
  },
  {
    label: "CodeChef rating",
    value: "1700+",
    detail: "3-star coder",
    isNumeric: true,
  },
  { label: "CGPA", value: "8.09", detail: "IIIT Kota", isNumeric: false },
];

const marqueeStack = [
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "TypeScript",
  "Tailwind",
  "Docker",
  "Kubernetes",
  "Prisma",
  "JWT",
];

const highlightCards = [
  {
    title: "EduNode Learning Platform",
    copy: "Full backend for an online school with Stripe payments, Cloudinary media, and Vitest testing.",
    icon: <Code className="w-5 h-5 text-[#7de2d1]" />,
  },
  {
    title: "CF-Tracker for Codeforces",
    copy: "Syncs Codeforces history, renders problems with LaTeX, and uses Gemini AI for hints.",
    icon: <Globe className="w-5 h-5 text-[#7de2d1]" />,
  },
  {
    title: "Blogify MERN Platform",
    copy: "JWT-secured blog with MongoDB, Cloudinary uploads, and production deployment on Render.",
    icon: <Star className="w-5 h-5 text-[#7de2d1]" />,
  },
];

const projects = [
  {
    title: "EduNode — Online Learning Platform",
    description:
      "Built the entire backend logic for an online school platform using Node.js and TypeScript. Integrated Stripe payments with webhooks, Cloudinary media uploads, JWT auth, and comprehensive test coverage with Vitest.",
    tech: [
      "Node.js",
      "Express",
      "MongoDB",
      "TypeScript",
      "Stripe",
      "Cloudinary",
      "Vitest",
    ],
    features: [
      "Stripe payments with webhook integration for instant course access",
      "Media system with Cloudinary and Multer for video/image uploads",
      "Progress tracking to show students course completion status",
      "Secure authentication with JWTs, HTTP-only cookies, and Zod validation",
    ],
    githubLink: "https://github.com/AmandeepMandal1077/EduNode",
  },
  {
    title: "CF-Tracker — Codeforces Upsolving Tool",
    description:
      "A website that syncs Codeforces history to automatically find unsolved problems for targeted upsolving practice. Features Puppeteer scraping, Monaco Editor, and Gemini AI integration.",
    tech: [
      "Next.js",
      "PostgreSQL",
      "Prisma",
      "Puppeteer",
      "Gemini AI",
      "Clerk",
    ],
    features: [
      "Puppeteer scraper to extract and render problems with full LaTeX support",
      "Gemini AI provides logic hints without revealing the solution",
      "Dashboard to manage bookmarks and track upsolving progress",
      "Monaco Editor for a VS Code-like coding experience",
    ],
    githubLink: "https://github.com/AmandeepMandal1077/cf-tracker",
    liveLink: "https://cf-tracker-pearl.vercel.app/",
  },
  {
    title: "Blogify — Full-Stack Blog Platform",
    description:
      "A blogging platform using Node.js and EJS for server-rendered pages. Features secure JWT authentication, Cloudinary image management, and MongoDB commenting system.",
    tech: ["Node.js", "Express", "MongoDB", "EJS", "JWT", "Cloudinary"],
    features: [
      "Server-side rendering with EJS for fast initial page loads",
      "Secure login with JWT and HTTP-only cookies",
      "Cloudinary integration for optimized image delivery",
      "Commenting system for user engagement on blog posts",
    ],
    liveLink: "https://blogify-mrk9.onrender.com/",
    githubLink: "https://github.com/AmandeepMandal1077/Blogify",
  },
];

const hackathonProject = {
  title: "LinkSuraksha — Secure Payment System",
  event: "SuRaksha Cyber Hackathon (Canara Bank)",
  period: "June 2025 - July 2025",
  description:
    "Team's idea selected among the top 105 entries from 1000+ submissions. A privacy-first transaction system allowing secure simulated digital payments without exposing bank details.",
  tech: ["Node.js", "React", "Cryptography", "Security"],
  githubLink: "https://github.com/AmandeepMandal1077/LinkSuraksha-Readme",
};

const skills = {
  "Programming Languages": [
    "C",
    "C++",
    "JavaScript",
    "TypeScript",
    "Java",
    "Python",
  ],
  "Web Technologies": [
    "React",
    "Node.js",
    "Express.js",
    "Next.js",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "MongoDB",
    "PostgreSQL",
  ],
  "Tools & Platforms": [
    "Git",
    "GitHub",
    "VS Code",
    "Render",
    "Vercel",
    "Cloudinary",
    "Postman",
    "Google Gemini API",
    "Docker",
    "Kubernetes",
  ],
  Concepts: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "RESTful APIs",
    "Responsive Design",
  ],
  "Core Subjects": [
    "Operating Systems",
    "Database Management (DBMS)",
    "Computer Networks",
  ],
};

const achievements = [
  {
    title: "TCS CodeVita Round 2",
    description:
      "Ranked 1,667th in TCS CodeVita — Round 2, competing against thousands of participants.",
    icon: <Trophy className="w-6 h-6" />,
  },
  {
    title: "LeetCode Knight",
    description:
      "Solved 600+ problems with contest rating of 1900+, placed among Top 3.05% globally.",
    icon: <Star className="w-6 h-6" />,
  },
  {
    title: "CodeChef 3-Star",
    description:
      "Maintained a 3-star rating (1700+) on CodeChef, demonstrating consistent competitive performance.",
    icon: <Award className="w-6 h-6" />,
  },
  {
    title: "Codeforces Specialist",
    description:
      "Achieved Specialist rating of 1400+ on Codeforces with strong algorithmic problem-solving.",
    icon: <Award className="w-6 h-6" />,
  },
  {
    title: "Hacktoberfest 2025 Supercontributor",
    description:
      "Earned badge for 6 quality PRs; placed among top 10,000 participants globally.",
    icon: <Sparkles className="w-6 h-6" />,
  },
  {
    title: "Algorithmus Club Core Member",
    description:
      "Actively contribute as a core member, mentoring 5+ junior members in competitive programming.",
    icon: <Code className="w-6 h-6" />,
  },
];

const Portfolio = () => {
  const rootRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return undefined;
    }

    const ctx = gsap.context(() => {
      // Tech marquee animation
      gsap.to(".tech-marquee-track", {
        xPercent: -50,
        duration: 20,
        ease: "linear",
        repeat: -1,
      });

      // Parallax effect for hero image
      gsap.to(".hero-image-container", {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-image-container",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      ref={rootRef}
      className="relative min-h-screen w-full overflow-hidden bg-[#030712] text-white"
    >
      {/* Animated background */}
      <motion.div
        className="aurora-blur"
        style={{ y: backgroundY }}
        aria-hidden
      />
      <div aria-hidden className="surface-noise" />

      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7de2d1] to-[#35bfb3] origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#030712]/80 backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <nav className="flex items-center justify-between gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-gradient-to-br from-[#7de2d1] to-[#35bfb3] text-[#030712] font-bold flex items-center justify-center text-sm sm:text-base">
                AM
              </div>
              <div className="hidden sm:block">
                <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                  Portfolio
                </p>
                <p className="text-base sm:text-lg font-semibold">
                  Amandeep Mandal
                </p>
              </div>
            </motion.div>

            <div className="hidden lg:flex items-center gap-6">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-sm font-medium uppercase tracking-[0.2em] text-white/70 hover:text-[#7de2d1] transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <MagneticButton>
                <motion.button
                  onClick={() => scrollToSection("contact")}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#7de2d1] to-[#35bfb3] px-5 py-2 text-sm font-semibold text-[#030712] shadow-lg shadow-[#7de2d1]/20 transition hover:shadow-[#7de2d1]/40"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Let's talk
                </motion.button>
              </MagneticButton>
              <MobileMenu navItems={navItems} onNavigate={scrollToSection} />
            </div>
          </nav>
        </div>
      </header>

      <main className="relative z-10">
        {/* Hero */}
        <section id="about" className="px-4 sm:px-6 pt-12 sm:pt-16 pb-10">
          <div className="max-w-7xl mx-auto grid gap-12 lg:gap-16 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div className="hero-intro space-y-6 sm:space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/70"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7de2d1] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7de2d1]" />
                </span>
                Full-stack Developer • IIIT Kota '27
              </motion.div>

              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                  <TextReveal>Hi, I'm</TextReveal>{" "}
                  <motion.span
                    initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{
                      delay: 0.5,
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="inline-block bg-gradient-to-r from-[#7de2d1] via-[#35bfb3] to-[#7de2d1] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient"
                  >
                    Amandeep
                  </motion.span>
                </h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="mt-4 sm:mt-6 text-base sm:text-lg text-white/70 leading-relaxed max-w-xl"
                >
                  A passionate Computer Science student specializing in
                  full-stack development. I build thoughtful web applications
                  and love solving challenging algorithmic problems.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="flex flex-wrap gap-3 sm:gap-4"
              >
                <MagneticButton strength={0.2}>
                  <motion.button
                    onClick={() => scrollToSection("projects")}
                    className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#7de2d1] to-[#35bfb3] px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold text-[#030712] shadow-lg shadow-[#7de2d1]/30"
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 20px 40px rgba(125, 226, 209, 0.4)",
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Explore Projects
                  </motion.button>
                </MagneticButton>
                <MagneticButton strength={0.2}>
                  <motion.button
                    onClick={() => scrollToSection("contact")}
                    className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold text-white/80 transition hover:border-[#7de2d1]/60 hover:text-[#7de2d1]"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Collaborate
                  </motion.button>
                </MagneticButton>
              </motion.div>

              {/* Stats Grid */}
              <div className="grid gap-3 sm:gap-4 grid-cols-2">
                {heroStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                    className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm px-4 sm:px-5 py-3 sm:py-4 group hover:border-[#7de2d1]/30 transition-colors"
                  >
                    <p className="text-2xl sm:text-3xl font-bold text-white group-hover:text-[#7de2d1] transition-colors">
                      {stat.isNumeric ? (
                        <AnimatedCounter value={stat.value} />
                      ) : (
                        stat.value
                      )}
                    </p>
                    <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-white/50 mt-1">
                      {stat.label}
                    </p>
                    <p className="text-xs text-white/60 mt-1">{stat.detail}</p>
                  </motion.div>
                ))}
              </div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
                className="flex flex-wrap gap-4 sm:gap-6 text-white/70"
              >
                <a
                  href="tel:+918504017845"
                  className="flex items-center gap-2 sm:gap-3 hover:text-[#7de2d1] transition-colors"
                >
                  <div className="h-9 w-9 sm:h-11 sm:w-11 rounded-full border border-white/15 bg-white/5 flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="font-medium text-sm sm:text-base">
                    +91 8504017845
                  </span>
                </a>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="h-9 w-9 sm:h-11 sm:w-11 rounded-full border border-white/15 bg-white/5 flex items-center justify-center">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="font-medium text-sm sm:text-base">
                    Bhiwadi, Rajasthan
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative hero-image-container hidden md:block"
            >
              <div className="relative mx-auto w-full max-w-[16rem] lg:max-w-[20rem] rounded-[2.5rem] border border-white/10 bg-white/5 p-4 backdrop-blur">
                <div className="relative aspect-[3/4] overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#050f12]">
                  <img
                    src="/images/Me.jpg"
                    alt="Portrait of Amandeep Mandal"
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#031715] via-transparent to-transparent" />
                </div>

                {/* Floating chips */}
                <motion.div
                  animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -left-4 lg:-left-8 top-14 floating-chip rounded-2xl border border-white/20 bg-white/10 backdrop-blur-lg px-4 py-3 text-sm text-white/80"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                    Stack
                  </p>
                  <p className="text-white font-semibold">MERN</p>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 12, 0], x: [0, -8, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute -right-4 lg:-right-10 bottom-20 floating-chip rounded-2xl border border-white/20 bg-white/10 backdrop-blur-lg px-4 py-3 text-sm text-white/80"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                    Focus
                  </p>
                  <p className="text-white font-semibold">CP & Dev</p>
                </motion.div>
              </div>

              <div className="absolute -z-10 left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7de2d1]/20 blur-[100px]" />
            </motion.div>
          </div>
        </section>

        {/* Tech Marquee */}
        <section
          aria-label="Tech stack marquee"
          className="border-y border-white/10 bg-white/5 overflow-hidden"
        >
          <div className="py-5 sm:py-6">
            <div className="tech-marquee-track flex items-center gap-8 sm:gap-12 whitespace-nowrap text-xs sm:text-sm uppercase tracking-[0.4em] text-white/60 font-medium">
              {[...marqueeStack, ...marqueeStack].map((item, index) => (
                <span
                  key={`${item}-${index}`}
                  className="flex items-center gap-2"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#7de2d1]/50" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="px-4 sm:px-6 py-16 sm:py-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-10 sm:mb-12 max-w-3xl"
            >
              <p className="text-sm uppercase tracking-[0.4em] text-[#7de2d1]">
                Featured Work
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-3">
                Building products with solid engineering and expressive UI
                design.
              </h2>
            </motion.div>

            <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
              {highlightCards.map((item, index) => (
                <SpotlightCard
                  key={item.title}
                  className="group rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent p-5 sm:p-6"
                >
                  <div className="relative flex h-full flex-col gap-4">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/20 bg-white/10 group-hover:border-[#7de2d1]/50 transition-colors">
                      {item.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-[#7de2d1] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-white/70">
                      {item.copy}
                    </p>
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </section>

        {/* Education */}
        <section id="education" className="px-4 sm:px-6 py-16 sm:py-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-10 sm:mb-12 text-center"
            >
              <p className="text-sm uppercase tracking-[0.4em] text-[#7de2d1]">
                Journey
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">
                Education
              </h2>
            </motion.div>

            <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
              <TiltCard className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur">
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl border border-white/15 bg-gradient-to-br from-[#7de2d1]/20 to-transparent">
                    <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-[#7de2d1]" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-white/50">
                      2023 — 2027 (Expected)
                    </p>
                    <h3 className="mt-2 text-xl sm:text-2xl font-bold text-white">
                      B.Tech Computer Science
                    </h3>
                    <p className="text-white/70 mt-1">
                      Indian Institute of Information Technology, Kota
                    </p>
                    <p className="text-[#7de2d1] font-semibold mt-2">
                      CGPA: 8.09
                    </p>
                  </div>
                </div>
              </TiltCard>

              <TiltCard className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur">
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl border border-white/15 bg-gradient-to-br from-[#7de2d1]/20 to-transparent">
                    <Star className="w-5 h-5 sm:w-6 sm:h-6 text-[#7de2d1]" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-white/50">
                      2022 — 2023
                    </p>
                    <h3 className="mt-2 text-xl sm:text-2xl font-bold text-white">
                      XII Standard (PCM)
                    </h3>
                    <p className="text-white/70 mt-1">
                      Presidency The International School, Bhiwadi (CBSE)
                    </p>
                    <p className="text-[#7de2d1] font-semibold mt-2">
                      Percentage: 91%
                    </p>
                  </div>
                </div>
              </TiltCard>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="px-4 sm:px-6 py-16 sm:py-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-10 sm:mb-12 text-center"
            >
              <p className="text-sm uppercase tracking-[0.4em] text-[#7de2d1]">
                Selected Work
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">
                Featured Projects
              </h2>
            </motion.div>

            <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 xl:grid-cols-3">
              {projects.map((project, index) => (
                <SpotlightCard
                  key={project.title}
                  className="group flex flex-col rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-6"
                >
                  <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#7de2d1]/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#7de2d1] transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-3 sm:mt-4 text-sm text-white/70 flex-1">
                    {project.description}
                  </p>

                  <div className="mt-5 sm:mt-6 space-y-3">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                      Tech Stack
                    </p>
                    <StaggeredList
                      className="flex flex-wrap gap-2"
                      staggerDelay={0.05}
                    >
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/70 hover:border-[#7de2d1]/50 hover:text-white transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </StaggeredList>
                  </div>

                  <div className="mt-5 sm:mt-6 space-y-2">
                    {project.features.slice(0, 3).map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-2 text-sm text-white/70"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#7de2d1] flex-shrink-0" />
                        <p>{feature}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 sm:mt-6 flex items-center gap-4 text-sm font-semibold">
                    {project.liveLink && (
                      <motion.a
                        href={project.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-[#7de2d1] hover:text-white transition-colors"
                        whileHover={{ x: 3 }}
                      >
                        <ExternalLink className="w-4 h-4" /> Live
                      </motion.a>
                    )}
                    {project.githubLink && (
                      <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                        whileHover={{ x: 3 }}
                      >
                        <Github className="w-4 h-4" /> Code
                      </motion.a>
                    )}
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </section>

        {/* Hackathon */}
        <section id="hackathon" className="px-4 sm:px-6 py-16 sm:py-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-10 sm:mb-12 text-center"
            >
              <p className="text-sm uppercase tracking-[0.4em] text-[#7de2d1]">
                Competition
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">
                Hackathon
              </h2>
            </motion.div>

            <TiltCard
              tiltIntensity={5}
              className="mx-auto max-w-3xl rounded-3xl border border-[#7de2d1]/30 bg-gradient-to-br from-[#7de2d1]/10 via-white/5 to-transparent p-6 sm:p-8"
            >
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="inline-flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7de2d1] to-[#35bfb3]">
                  <Trophy className="w-7 h-7 sm:w-8 sm:h-8 text-[#030712]" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="px-3 py-1 rounded-full bg-[#7de2d1]/20 text-[#7de2d1] text-xs font-semibold">
                      Top 105 / 1000+
                    </span>
                    <span className="text-sm text-white/50">
                      {hackathonProject.period}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {hackathonProject.title}
                  </h3>
                  <p className="text-[#7de2d1] font-medium mt-1">
                    {hackathonProject.event}
                  </p>
                  <p className="mt-4 text-white/70">
                    {hackathonProject.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {hackathonProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-[#7de2d1]/30 px-3 py-1 text-xs text-white/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <motion.a
                    href={hackathonProject.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#7de2d1] hover:text-white transition-colors"
                    whileHover={{ x: 3 }}
                  >
                    <Github className="w-4 h-4" /> View on GitHub
                  </motion.a>
                </div>
              </div>
            </TiltCard>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="px-4 sm:px-6 py-16 sm:py-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-10 sm:mb-12 text-center"
            >
              <p className="text-sm uppercase tracking-[0.4em] text-[#7de2d1]">
                Tooling
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">
                Technical Skills
              </h2>
            </motion.div>

            <div className="grid gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
              {Object.entries(skills).map(
                ([category, items], categoryIndex) => (
                  <SpotlightCard
                    key={category}
                    className="rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-6"
                  >
                    <div className="flex items-center gap-4">
                      <div className="inline-flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl border border-white/15 bg-gradient-to-br from-[#7de2d1]/20 to-transparent">
                        {category === "Programming Languages" && (
                          <Code className="w-5 h-5 text-[#7de2d1]" />
                        )}
                        {category === "Web Technologies" && (
                          <Globe className="w-5 h-5 text-[#7de2d1]" />
                        )}
                        {category === "Tools & Platforms" && (
                          <Database className="w-5 h-5 text-[#7de2d1]" />
                        )}
                        {![
                          "Programming Languages",
                          "Web Technologies",
                          "Tools & Platforms",
                        ].includes(category) && (
                          <Star className="w-5 h-5 text-[#7de2d1]" />
                        )}
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                          Toolkit
                        </p>
                        <h3 className="text-lg sm:text-xl font-bold text-white">
                          {category}
                        </h3>
                      </div>
                    </div>
                    <StaggeredList
                      className="mt-5 sm:mt-6 flex flex-wrap gap-2"
                      staggerDelay={0.03}
                    >
                      {items.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-white/15 px-3 py-1 text-sm text-white/70 hover:border-[#7de2d1]/50 hover:text-white transition-colors cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </StaggeredList>
                  </SpotlightCard>
                ),
              )}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section id="achievements" className="px-4 sm:px-6 py-16 sm:py-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-10 sm:mb-12 text-center"
            >
              <p className="text-sm uppercase tracking-[0.4em] text-[#7de2d1]">
                Milestones
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">
                Achievements
              </h2>
            </motion.div>

            <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
              {achievements.map((achievement, index) => (
                <SpotlightCard
                  key={achievement.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-6 group"
                >
                  <div className="flex gap-4">
                    <div className="inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl border border-white/15 bg-gradient-to-br from-[#7de2d1]/20 to-transparent text-[#7de2d1] group-hover:from-[#7de2d1]/30 transition-colors flex-shrink-0">
                      {achievement.icon}
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#7de2d1] transition-colors">
                        {achievement.title}
                      </h3>
                      <p className="mt-2 text-sm text-white/70">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="px-4 sm:px-6 py-20 sm:py-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 sm:p-12 text-center backdrop-blur relative overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-[#7de2d1]/20 blur-[80px]" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-[#35bfb3]/20 blur-[80px]" />

            <div className="relative">
              <p className="text-sm uppercase tracking-[0.4em] text-[#7de2d1]">
                Let's Build
              </p>
              <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                Got an idea, role, or hackathon team in mind?
                <br className="hidden sm:block" />
                <span className="text-white/70">
                  {" "}
                  I'd love to hear about it.
                </span>
              </h2>

              <div className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-3 sm:gap-4">
                <MagneticButton strength={0.15}>
                  <motion.a
                    href="tel:+918504017845"
                    className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-5 sm:px-6 py-3 text-sm font-semibold text-white transition hover:border-[#7de2d1]/60 hover:text-[#7de2d1]"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Phone className="w-4 h-4" /> Call
                  </motion.a>
                </MagneticButton>

                <MagneticButton strength={0.15}>
                  <motion.a
                    href="mailto:mandalamandeep@gmail.com"
                    className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#7de2d1] to-[#35bfb3] px-5 sm:px-6 py-3 text-sm font-semibold text-[#030712] shadow-lg shadow-[#7de2d1]/30"
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 20px 40px rgba(125, 226, 209, 0.4)",
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Mail className="w-4 h-4" /> Email
                  </motion.a>
                </MagneticButton>

                <MagneticButton strength={0.15}>
                  <motion.a
                    href="https://github.com/AmandeepMandal1077/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 rounded-full border border-white/15 px-5 sm:px-6 py-3 text-sm font-semibold text-white/80 transition hover:text-white"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Github className="w-4 h-4" /> GitHub
                  </motion.a>
                </MagneticButton>

                <MagneticButton strength={0.15}>
                  <motion.a
                    href="https://www.linkedin.com/in/amandeep-mandal-66aab3289/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 rounded-full border border-[#7de2d1]/50 px-5 sm:px-6 py-3 text-sm font-semibold text-[#7de2d1]"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Linkedin className="w-4 h-4" /> LinkedIn
                  </motion.a>
                </MagneticButton>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-6 sm:py-8 text-center text-sm text-white/50 px-4">
        <p>
          © {new Date().getFullYear()} Amandeep Mandal — Built with React,
          Tailwind, Framer Motion & GSAP
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;
