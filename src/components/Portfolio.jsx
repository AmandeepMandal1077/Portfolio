import React from "react";
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

const Portfolio = () => {
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
      liveLink: "#",
      githubLink: "#",
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
      githubLink: "#",
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
      liveLink: "#",
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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#253237ff] via-[#5c6b73ff] to-[#253237ff]">
      {/* Header */}
      <header className="bg-[#253237ff]/80 backdrop-blur-xl border-b border-[#9db4c0ff]/20 sticky top-0 z-50 shadow-lg shadow-[#9db4c0ff]/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <nav className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-[#e0fbfcff] to-[#c2dfe3ff] bg-clip-text text-transparent">
              Amandeep Mandal
            </div>
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("about")}
                className="text-[#c2dfe3ff] hover:text-[#e0fbfcff] transition-colors font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("education")}
                className="text-[#c2dfe3ff] hover:text-[#e0fbfcff] transition-colors font-medium"
              >
                Education
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-[#c2dfe3ff] hover:text-[#e0fbfcff] transition-colors font-medium"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-[#c2dfe3ff] hover:text-[#e0fbfcff] transition-colors font-medium"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("achievements")}
                className="text-[#c2dfe3ff] hover:text-[#e0fbfcff] transition-colors font-medium"
              >
                Achievements
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-[#c2dfe3ff] hover:text-[#e0fbfcff] transition-colors font-medium"
              >
                Contact
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#5c6b73ff]/50 text-[#c2dfe3ff] px-4 py-2 rounded-full text-sm font-medium mb-6 border border-[#9db4c0ff]/30">
                <User className="w-4 h-4" />
                Full-Stack Developer
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-[#e0fbfcff] mb-6 leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-[#c2dfe3ff] to-[#e0fbfcff] bg-clip-text text-transparent">
                  Amandeep
                </span>
              </h1>
              <p className="text-xl text-[#c2dfe3ff]/90 mb-8 leading-relaxed">
                A passionate Computer Science student at IIIT Kota specializing
                in full-stack development. I create innovative web applications
                and excel at solving complex algorithmic challenges.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="flex items-center gap-3 text-[#c2dfe3ff]/90">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#5c6b73ff] to-[#253237ff] rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-[#e0fbfcff]" />
                  </div>
                  <span className="font-medium">+91 8504017845</span>
                </div>
                <div className="flex items-center gap-3 text-[#c2dfe3ff]/90">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#5c6b73ff] to-[#253237ff] rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#e0fbfcff]" />
                  </div>
                  <span className="font-medium">Bhiwadi, Rajasthan</span>
                </div>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="bg-gradient-to-r from-[#5c6b73ff] to-[#253237ff] hover:from-[#5c6b73ff]/90 hover:to-[#253237ff]/90 text-[#e0fbfcff] px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-[#253237ff]/25 hover:shadow-xl hover:shadow-[#253237ff]/30"
                >
                  View Projects
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="border-2 border-[#9db4c0ff]/50 text-[#c2dfe3ff] hover:bg-[#5c6b73ff]/10 hover:border-[#c2dfe3ff] px-8 py-4 rounded-xl font-semibold transition-all duration-300"
                >
                  Get in Touch
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-r from-[#5c6b73ff]/20 to-[#253237ff]/20 rounded-3xl shadow-2xl shadow-[#253237ff]/20 flex items-center justify-center transform rotate-3 border border-[#9db4c0ff]/30">
                  <div className="w-72 h-72 bg-[#253237ff] rounded-2xl flex flex-col items-center justify-center shadow-inner border border-[#5c6b73ff]">
                    <div className="text-8xl mb-4">📷</div>
                    <div className="text-[#c2dfe3ff]/60 font-medium">
                      Your Photo Here
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#9db4c0ff] rounded-full shadow-lg shadow-[#253237ff]/50"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#c2dfe3ff] rounded-full shadow-lg shadow-[#253237ff]/50"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 bg-[#5c6b73ff]/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#e0fbfcff] mb-4">
              Education
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#5c6b73ff] to-[#9db4c0ff] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#253237ff]/80 rounded-2xl p-8 shadow-lg shadow-[#5c6b73ff]/10 border border-[#5c6b73ff]/20 hover:shadow-xl hover:shadow-[#5c6b73ff]/20 hover:border-[#9db4c0ff]/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#5c6b73ff] to-[#253237ff] rounded-xl flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-[#e0fbfcff]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#e0fbfcff] mb-2">
                    Bachelor of Technology
                  </h3>
                  <p className="text-[#c2dfe3ff] font-semibold mb-1">
                    Computer Science
                  </p>
                  <p className="text-[#c2dfe3ff]/80 mb-2">
                    Indian Institute of Information Technology, Kota
                  </p>
                  <p className="text-[#c2dfe3ff]/60 text-sm mb-3">
                    2023 - Present
                  </p>
                  <div className="bg-[#5c6b73ff]/20 text-[#c2dfe3ff] px-3 py-1 rounded-full text-sm font-medium inline-block border border-[#5c6b73ff]/30">
                    CGPA: 8.04
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#253237ff]/80 rounded-2xl p-8 shadow-lg shadow-[#5c6b73ff]/10 border border-[#5c6b73ff]/20 hover:shadow-xl hover:shadow-[#5c6b73ff]/20 hover:border-[#9db4c0ff]/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#5c6b73ff] to-[#253237ff] rounded-xl flex items-center justify-center">
                  <Star className="w-6 h-6 text-[#e0fbfcff]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#e0fbfcff] mb-2">
                    XII Standard
                  </h3>
                  <p className="text-[#c2dfe3ff] font-semibold mb-1">PCM</p>
                  <p className="text-[#c2dfe3ff]/80 mb-2">
                    Presidency The International School, Bhiwadi
                  </p>
                  <p className="text-[#c2dfe3ff]/60 text-sm mb-3">
                    2022 - 2023
                  </p>
                  <div className="bg-[#5c6b73ff]/20 text-[#c2dfe3ff] px-3 py-1 rounded-full text-sm font-medium inline-block border border-[#5c6b73ff]/30">
                    Percentage: 91%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#e0fbfcff] mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#5c6b73ff] to-[#9db4c0ff] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-[#253237ff]/80 rounded-2xl p-8 shadow-lg shadow-[#5c6b73ff]/10 border border-[#5c6b73ff]/20 hover:shadow-xl hover:shadow-[#5c6b73ff]/20 hover:border-[#9db4c0ff]/30 transition-all duration-300 group"
              >
                <h3 className="text-xl font-bold text-[#e0fbfcff] mb-4 group-hover:text-[#c2dfe3ff] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#c2dfe3ff]/80 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-[#c2dfe3ff] mb-3">
                    Key Features:
                  </h4>
                  <ul className="text-sm text-[#c2dfe3ff]/80 space-y-2">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-[#5c6b73ff] rounded-full mt-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className="bg-[#5c6b73ff]/40 text-[#c2dfe3ff] px-3 py-1 rounded-full text-xs font-medium border border-[#5c6b73ff]/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      className="flex items-center gap-2 text-[#c2dfe3ff] hover:text-[#e0fbfcff] font-medium text-sm transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      className="flex items-center gap-2 text-[#c2dfe3ff]/80 hover:text-[#e0fbfcff] font-medium text-sm transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-[#5c6b73ff]/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#e0fbfcff] mb-4">
              Technical Skills
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#5c6b73ff] to-[#9db4c0ff] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="bg-[#253237ff]/80 rounded-2xl p-8 shadow-lg shadow-[#5c6b73ff]/10 border border-[#5c6b73ff]/20 hover:shadow-xl hover:shadow-[#5c6b73ff]/20 hover:border-[#9db4c0ff]/30 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-[#e0fbfcff] mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#5c6b73ff] to-[#253237ff] rounded-lg flex items-center justify-center">
                    {category === "Programming Languages" && (
                      <Code className="w-4 h-4 text-[#e0fbfcff]" />
                    )}
                    {category === "Web Technologies" && (
                      <Globe className="w-4 h-4 text-[#e0fbfcff]" />
                    )}
                    {category === "Databases" && (
                      <Database className="w-4 h-4 text-[#e0fbfcff]" />
                    )}
                    {!(
                      "Programming Languages" &&
                      "Web Technologies" &&
                      "Databases"
                    ).includes(category) && (
                      <Star className="w-4 h-4 text-[#e0fbfcff]" />
                    )}
                  </div>
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-[#5c6b73ff]/40 text-[#c2dfe3ff]/80 px-3 py-2 rounded-lg text-sm font-medium hover:bg-[#5c6b73ff]/20 hover:text-[#e0fbfcff] hover:border hover:border-[#5c6b73ff]/50 transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#e0fbfcff] mb-4">
              Achievements
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#5c6b73ff] to-[#9db4c0ff] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-[#253237ff]/80 rounded-2xl p-8 shadow-lg shadow-[#5c6b73ff]/10 border border-[#5c6b73ff]/20 hover:shadow-xl hover:shadow-[#5c6b73ff]/20 hover:border-[#9db4c0ff]/30 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#5c6b73ff] to-[#253237ff] rounded-xl flex items-center justify-center flex-shrink-0">
                    <div className="text-[#e0fbfcff]">{achievement.icon}</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#e0fbfcff] mb-3">
                      {achievement.title}
                    </h3>
                    <p className="text-[#c2dfe3ff]/80 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-[#5c6b73ff]/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-[#e0fbfcff] mb-4">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#5c6b73ff] to-[#9db4c0ff] mx-auto mb-6"></div>
            <p className="text-xl text-[#c2dfe3ff]/80 leading-relaxed">
              I'm always open to discussing new opportunities and interesting
              projects. Feel free to reach out if you'd like to collaborate!
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="tel:+918504017845"
              className="flex items-center gap-3 bg-gradient-to-r from-[#5c6b73ff] to-[#253237ff] hover:from-[#5c6b73ff]/90 hover:to-[#253237ff]/90 text-[#e0fbfcff] px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-[#5c6b73ff]/25 hover:shadow-xl hover:shadow-[#5c6b73ff]/30"
            >
              <Phone className="w-5 h-5" />
              Call Me
            </a>
            <a
              href="mailto:your.email@gmail.com"
              className="flex items-center gap-3 bg-[#253237ff] text-[#c2dfe3ff] border border-[#5c6b73ff]/50 hover:bg-[#253237ff]/80 hover:border-[#c2dfe3ff] px-8 py-4 rounded-xl font-semibold transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              Email Me
            </a>
            <a
              href="#"
              className="flex items-center gap-3 bg-[#253237ff] text-[#c2dfe3ff]/80 border border-[#5c6b73ff]/50 hover:bg-[#253237ff]/80 hover:border-[#e0fbfcff] px-8 py-4 rounded-xl font-semibold transition-all duration-300"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a
              href="#"
              className="flex items-center gap-3 bg-[#253237ff] text-[#9db4c0ff] border border-[#5c6b73ff]/50 hover:bg-[#253237ff]/80 hover:border-[#9db4c0ff] px-8 py-4 rounded-xl font-semibold transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#253237ff] py-8 px-6 border-t border-[#5c6b73ff]">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#c2dfe3ff]/60">
            © 2025 Amandeep Mandal. Crafted with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
