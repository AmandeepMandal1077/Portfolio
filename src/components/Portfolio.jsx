import React, { useEffect, useRef } from "react";
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
  User,
  Briefcase,
  Star,
} from "lucide-react";

const navItems = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

const heroStats = [
  {
    label: "MERN projects",
    value: "Several",
    detail: "Blogify • Gemini • Todo",
  },
  { label: "LeetCode problems", value: "600+", detail: "Rating 1900+" },
  { label: "CodeChef rating", value: "3-star", detail: "1700+ coder" },
  { label: "CGPA", value: "8.04", detail: "IIIT Kota" },
];

const marqueeStack = [
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "GSAP",
  "Tailwind",
  "JWT",
  "Cloudinary",
  "Render",
];

const highlightCards = [
  {
    title: "Blogify MERN Platform",
    copy: "JWT-secured blog system with MongoDB, Cloudinary uploads, and production-ready deployment on Render.",
    icon: <Code className="w-5 h-5 text-[#7de2d1]" />,
  },
  {
    title: "Gemini Chrome Extension",
    copy: "Manifest V3 extension that pipes Gemini-powered responses straight into any page via polished UI.",
    icon: <Globe className="w-5 h-5 text-[#7de2d1]" />,
  },
  {
    title: "Context API Todo App",
    copy: "React + Context hooks with LocalStorage persistence to keep tasks organized across sessions.",
    icon: <Star className="w-5 h-5 text-[#7de2d1]" />,
  },
];

const projects = [
  {
    title: "Full-Stack Blog Application (MERN Stack)",
    description:
      "Developed and deployed a robust blog platform using Node.js, Express.js, React.js, and MongoDB. Implemented secure user authentication with JWT and password encryption, enabling user registration and login functionalities.",
    tech: [
      "Node.js",
      "Express.js",
      "React.js",
      "MongoDB",
      "JWT",
      "Cloudinary",
      "Render",
    ],
    features: [
      "Secure user authentication with JWT and password encryption",
      "NoSQL database schema in MongoDB Atlas using Mongoose ODM",
      "Cloudinary API integration for optimized image storage",
      "CRUD operations for posts with commenting system",
      "Real-time updates and cloud deployment on Render",
    ],
    liveLink: "https://blogify-mrk9.onrender.com/",
    githubLink: "https://github.com/AmandeepMandal1077/Blogify",
  },
  {
    title: "Chrome Extension for AI-Powered Content Enhancement",
    description:
      "A Google Chrome Extension utilizing Manifest V3 to dynamically interact with web page content. Integrated Google Gemini AI API to provide context-aware AI responses and generate enhanced text content.",
    tech: [
      "Chrome Extension",
      "Manifest V3",
      "Google Gemini AI",
      "JavaScript",
      "DOM Manipulation",
    ],
    features: [
      "Dynamic DOM manipulation and text selection handling",
      "Real-time text processing with Markdown rendering",
      "Intuitive popup user interface",
      "Cross-site functionality with security best practices",
      "Context-aware AI responses using Google Gemini AI",
    ],
    githubLink: "https://github.com/AmandeepMandal1077/Gemini-Extension",
  },
  {
    title: "Todo Management Application",
    description:
      "Built a single-page application using React.js for efficient task management. Implemented scalable state management solution using React Context API and Custom Hooks.",
    tech: [
      "React.js",
      "JavaScript",
      "Context API",
      "LocalStorage",
      "Custom Hooks",
    ],
    features: [
      "Scalable state management with React Context API",
      "Custom Hooks for improved code organization",
      "Persistent task storage using Browser LocalStorage",
      "Complete CRUD operations with status toggling",
      "Real-time UI updates with dynamic state management",
    ],
    liveLink: "https://todo-with-context-api.onrender.com/",
  },
];

const skills = {
  "Programming Languages": ["C", "C++", "JavaScript"],
  "Web Technologies": [
    "React.js",
    "Node.js",
    "Express.js",
    "Next.js",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
  ],
  Databases: ["MongoDB"],
  "Tools & Platforms": [
    "Git",
    "GitHub",
    "VS Code",
    "Render",
    "Vercel",
    "MongoDB Atlas",
    "Cloudinary",
    "Postman",
    "Google Gemini API",
  ],
  Concepts: [
    "DSA",
    "Object-Oriented Programming (OOP)",
    "RESTful APIs",
    "Responsive Web Design",
  ],
  "Core Subjects": [
    "Operating System (OS)",
    "Database Management System (DBMS)",
    "Computer Networks",
  ],
};

const achievements = [
  {
    title: "Algorithmus Club Member",
    description:
      "Active member of the college's competitive programming club, contributing to a collaborative learning environment.",
    icon: <Code className="w-6 h-6" />,
  },
  {
    title: "Competitive Programmer",
    description:
      "Solved 500+ problems on Leetcode with contest rating of 1800+",
    icon: <Star className="w-6 h-6" />,
  },
  {
    title: "CodeChef 3-Star Coder",
    description:
      "Maintained a 3-star rating (1600+) on Codechef, showcasing consistent competitive programming performance.",
    icon: <Award className="w-6 h-6" />,
  },
  {
    title: "Codeforces Specialist",
    description:
      "Achieved a Specialist rating of 1400+ on Codeforces, demonstrating strong algorithmic problem-solving skills.",
    icon: <Award className="w-6 h-6" />,
  },
];

const Portfolio = () => {
  const rootRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return undefined;
    }

    const ctx = gsap.context(() => {
      gsap.from(".nav-link", {
        y: -12,
        opacity: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
      });

      gsap
        .timeline({ defaults: { ease: "power3.out", duration: 1 } })
        .from(".hero-badge", { y: 24, opacity: 0 })
        .from(
          ".hero-heading",
          {
            y: 50,
            opacity: 0,
            skewY: 3,
          },
          "-=0.6"
        )
        .from(
          ".hero-copy",
          {
            y: 40,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.5"
        )
        .from(
          ".hero-cta",
          {
            y: 25,
            opacity: 0,
            stagger: 0.1,
          },
          "-=0.4"
        );

      gsap.utils.toArray("[data-animate='section-heading']").forEach((el) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            once: true,
          },
        });
      });

      gsap.utils.toArray("[data-animate='card']").forEach((el) => {
        gsap.from(el, {
          y: 60,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        });
      });

      gsap.utils.toArray("[data-parallax-speed]").forEach((el) => {
        const speed = parseFloat(el.dataset.parallaxSpeed || "0.2");
        gsap.to(el, {
          yPercent: speed * -25,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      gsap.utils.toArray("[data-floating]").forEach((el, index) => {
        gsap.to(el, {
          y: "+=12",
          x: index % 2 === 0 ? "+=8" : "-=10",
          duration: 2.8 + index * 0.3,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      });

      gsap.to(".tech-marquee-track", {
        xPercent: -50,
        duration: 18,
        ease: "linear",
        repeat: -1,
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
      <div aria-hidden className="aurora-blur"></div>
      <div aria-hidden className="surface-noise"></div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#030712]/80 backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <nav className="flex items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-white/10 text-[#7de2d1] font-semibold flex items-center justify-center border border-white/10">
                AM
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-white/60">
                  Portfolio
                </p>
                <p className="text-lg font-semibold">Amandeep Mandal</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="nav-link text-sm font-medium uppercase tracking-[0.3em] text-white/70 hover:text-white transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
            <button
              onClick={() => scrollToSection("contact")}
              className="hidden sm:inline-flex hero-cta items-center gap-2 rounded-full border border-white/15 px-5 py-2 text-sm font-semibold text-white/90 transition hover:border-[#7de2d1]/80 hover:text-[#7de2d1]"
            >
              Let's talk
            </button>
          </nav>
        </div>
      </header>

      <main className="relative z-10">
        {/* Hero */}
        <section id="about" className="px-6 pt-16 pb-10">
          <div className="max-w-7xl mx-auto grid gap-16 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div className="hero-intro space-y-8">
              <div className="hero-badge inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/70">
                <span className="h-2 w-2 rounded-full bg-[#7de2d1]"></span>
                Full-stack developer • IIIT Kota
              </div>
              <div>
                <h1 className="hero-heading text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-white">
                  Hi, I'm
                  <span className="ml-3 bg-gradient-to-r from-[#7de2d1] to-white bg-clip-text text-transparent">
                    Amandeep
                  </span>
                </h1>
                <p className="hero-copy mt-6 text-lg text-white/70 leading-relaxed">
                  A passionate Computer Science student at IIIT Kota
                  specializing in full-stack development. I build thoughtful web
                  applications and love solving challenging algorithmic
                  problems.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="hero-cta inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#7de2d1] to-[#3dcab1] px-8 py-3 text-base font-semibold text-[#062b26] shadow-lg shadow-[#7de2d1]/30 transition hover:scale-[1.01]"
                >
                  Explore projects
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="hero-cta inline-flex items-center justify-center rounded-xl border border-white/20 px-8 py-3 text-base font-semibold text-white/80 transition hover:border-[#7de2d1]/60 hover:text-[#7de2d1]"
                >
                  Collaborate
                </button>
              </div>
              <div
                className="grid gap-4 sm:grid-cols-2"
                data-parallax-speed="0.15"
              >
                {heroStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4"
                    data-animate="card"
                  >
                    <p className="text-3xl font-semibold text-white">
                      {stat.value}
                    </p>
                    <p className="text-sm uppercase tracking-[0.25em] text-white/50">
                      {stat.label}
                    </p>
                    <p className="text-xs text-white/60 mt-1">{stat.detail}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-6 text-white/70">
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-full border border-white/15 bg-white/5 flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="font-medium">+91 8504017845</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-full border border-white/15 bg-white/5 flex items-center justify-center">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="font-medium">Bhiwadi, Rajasthan</span>
                </div>
              </div>
            </div>

            <div className="relative" data-parallax-speed="0.35">
              <div className="relative mx-auto w-full max-w-[15rem] sm:max-w-[18rem] lg:max-w-[20rem] rounded-[2.5rem] border border-white/10 bg-white/5 p-4 backdrop-blur">
                <div className="relative aspect-[3/4] overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#050f12]">
                  <img
                    src="/images/Me.jpg"
                    alt="Portrait of Amandeep Mandal"
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#031715] via-transparent to-transparent"></div>
                </div>
                <div
                  className="absolute -left-6 top-14 floating-chip rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-white/80"
                  data-floating
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                    Stack
                  </p>
                  <p className="text-white font-semibold">MERN</p>
                </div>
                <div
                  className="absolute -right-8 bottom-20 floating-chip rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-white/80"
                  data-floating
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                    FOCUS
                  </p>
                  <p className="text-white font-semibold">
                    Competitive Programming
                  </p>
                </div>
              </div>
              <div className="absolute -z-10 left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7de2d1]/20 blur-[120px]"></div>
            </div>
          </div>
        </section>

        {/* Tech marquee */}
        <section
          aria-label="Tech stack marquee"
          className="border-y border-white/10 bg-white/5"
        >
          <div className="overflow-hidden py-6">
            <div className="tech-marquee-track flex items-center gap-10 whitespace-nowrap text-xs uppercase tracking-[0.6em] text-white/60">
              {[...marqueeStack, ...marqueeStack].map((item, index) => (
                <span key={`${item}-${index}`}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 max-w-3xl" data-animate="section-heading">
              <p className="text-sm uppercase tracking-[0.4em] text-white/50">
                Product DNA
              </p>
              <h2 className="text-3xl font-semibold text-white mt-3">
                Bridging solid engineering, strong fundamentals, and expressive
                UI storytelling.
              </h2>
            </div>
            <div
              className="grid gap-6 md:grid-cols-3"
              data-parallax-speed="0.12"
            >
              {highlightCards.map((item) => (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent p-6"
                  data-animate="card"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-80 transition-opacity duration-500 bg-[radial-gradient(circle_at_top,_rgba(125,226,209,0.25),_transparent_60%)]"></div>
                  <div className="relative flex h-full flex-col gap-4">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/20 bg-white/10">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-white/70">
                      {item.copy}
                    </p>
                  </div>
                  <span className="shimmer"></span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education */}
        <section id="education" className="px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 text-center" data-animate="section-heading">
              <p className="text-sm uppercase tracking-[0.4em] text-white/50">
                Journey
              </p>
              <h2 className="text-3xl font-semibold text-white">Education</h2>
            </div>
            <div
              className="grid gap-8 md:grid-cols-2"
              data-parallax-speed="0.1"
            >
              <article
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur"
                data-animate="card"
              >
                <div className="flex items-start gap-5">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-white/50">
                      2023 — Present
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">
                      B.Tech Computer Science
                    </h3>
                    <p className="text-white/70">IIIT Kota • CGPA 8.04</p>
                  </div>
                </div>
              </article>
              <article
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur"
                data-animate="card"
              >
                <div className="flex items-start gap-5">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10">
                    <Star className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-white/50">
                      2022 — 2023
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">
                      XII Standard (PCM)
                    </h3>
                    <p className="text-white/70">
                      Presidency The International School • 91%
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 text-center" data-animate="section-heading">
              <p className="text-sm uppercase tracking-[0.4em] text-white/50">
                Selected Work
              </p>
              <h2 className="text-3xl font-semibold text-white">
                Featured Projects
              </h2>
            </div>
            <div
              className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3"
              data-parallax-speed="0.08"
            >
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="group relative flex flex-col rounded-3xl border border-white/10 bg-white/5 p-6"
                  data-animate="card"
                >
                  <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-[#7de2d1] transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-sm text-white/70 flex-1">
                    {project.description}
                  </p>
                  <div className="mt-6 space-y-3">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                      Stack
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/70"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 space-y-2 text-sm text-white/70">
                    {project.features.slice(0, 3).map((feature) => (
                      <div key={feature} className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-[#7de2d1]"></span>
                        <p>{feature}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center gap-4 text-sm font-semibold text-[#7de2d1]">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" /> Live
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-white/70 hover:text-white"
                      >
                        <Github className="w-4 h-4" /> Repo
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 text-center" data-animate="section-heading">
              <p className="text-sm uppercase tracking-[0.4em] text-white/50">
                Tooling
              </p>
              <h2 className="text-3xl font-semibold text-white">
                Technical Skills
              </h2>
            </div>
            <div
              className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
              data-parallax-speed="0.09"
            >
              {Object.entries(skills).map(([category, items]) => (
                <article
                  key={category}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6"
                  data-animate="card"
                >
                  <div className="flex items-center gap-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/10">
                      {category === "Programming Languages" && (
                        <Code className="w-5 h-5" />
                      )}
                      {category === "Web Technologies" && (
                        <Globe className="w-5 h-5" />
                      )}
                      {category === "Databases" && (
                        <Database className="w-5 h-5" />
                      )}
                      {![
                        "Programming Languages",
                        "Web Technologies",
                        "Databases",
                      ].includes(category) && <Star className="w-5 h-5" />}
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                        Toolkit
                      </p>
                      <h3 className="text-xl font-semibold text-white">
                        {category}
                      </h3>
                    </div>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/15 px-3 py-1 text-sm text-white/70"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section id="achievements" className="px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 text-center" data-animate="section-heading">
              <p className="text-sm uppercase tracking-[0.4em] text-white/50">
                Milestones
              </p>
              <h2 className="text-3xl font-semibold text-white">
                Achievements
              </h2>
            </div>
            <div
              className="grid gap-6 md:grid-cols-2"
              data-parallax-speed="0.1"
            >
              {achievements.map((achievement) => (
                <article
                  key={achievement.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6"
                  data-animate="card"
                >
                  <div className="flex gap-4">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-[#7de2d1]">
                      {achievement.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {achievement.title}
                      </h3>
                      <p className="mt-2 text-white/70">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="px-6 py-24">
          <div
            className="max-w-4xl mx-auto rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-10 text-center backdrop-blur"
            data-parallax-speed="0.18"
          >
            <p className="text-sm uppercase tracking-[0.4em] text-white/50">
              Let's build
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white">
              Got an idea, role, or hackathon team in mind? I would love to hear
              about it.
            </h2>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="tel:+918504017845"
                className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#7de2d1]/60 hover:text-[#7de2d1]"
              >
                <Phone className="w-4 h-4" /> Call
              </a>
              <a
                href="mailto:mandalamandeep@gmail.com"
                className="inline-flex items-center gap-3 rounded-full bg-[#7de2d1] px-6 py-3 text-sm font-semibold text-[#062b26] shadow-lg shadow-[#7de2d1]/30"
              >
                <Mail className="w-4 h-4" /> Email
              </a>
              <a
                href="https://github.com/AmandeepMandal1077/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white/80 transition hover:text-white"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/amandeep-mandal-66aab3289/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-[#7de2d1]"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-white/50">
        © {new Date().getFullYear()} Amandeep Mandal — built with React,
        Tailwind, and GSAP.
      </footer>
    </div>
  );
};

export default Portfolio;
