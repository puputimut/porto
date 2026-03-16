import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Eviana Putri Zarfi — MAN 1 Banda Aceh",
  author: "Eviana Putri Zarfi",
  description: "I am a student from MAN 1 Banda Aceh with a strong passion for learning, growing, and trying new things.",
  lang: "en",
  siteLogo: "/alejandro-small.jpg", 
  navLinks: [
    { text: "Skills", href: "#experience" },
    { text: "Goals", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "Instagram", href: "#" },
    { text: "LinkedIn", href: "#" },
    { text: "Github", href: "#" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://your-website-url.vercel.app", 
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Eviana Putri Zarfi",
    specialty: "Student & Lifelong Learner",
    summary:
      "I am a student from MAN 1 Banda Aceh who has a strong passion for learning, growing, and trying new things. I believe that every day is an opportunity to improve myself and become a better person.",
    email: "your.email@example.com",
  },
  experience: [
    {
      company: "Skill Development",
      position: "Learning Biology",
      startDate: "Ongoing",
      endDate: "Present",
      summary: "I am learning biology to increase my knowledge about living things, the environment, and various processes that occur in nature.",
    },
    {
      company: "Skill Development",
      position: "Content Creation & Writing",
      startDate: "Ongoing",
      endDate: "Present",
      summary: [
        "Starting to learn how to create simple content to share information, ideas, and useful things.",
        "Enjoying writing thoughts, experiences, or simple ideas as a way to express myself."
      ],
    },
    {
      company: "Personal Growth",
      position: "Self Development & Communication",
      startDate: "Ongoing",
      endDate: "Present",
      summary: [
        "Interested in learning about self-development, such as building good habits, discipline, and becoming a better person.",
        "Learning how to communicate well, express my opinions, and listen to others.",
        "Trying to take lessons from every experience so I can continue to grow."
      ],
    },
  ],
  projects: [
    {
      name: "Continuous Improvement",
      summary: "Continue learning, improving myself, and gaining new experiences and knowledge.",
      linkPreview: "#",
      linkSource: "#",
      image: "/spotifu.png",
    },
    {
      name: "Achieve My Dreams",
      summary: "Work towards achieving my dreams step by step with effort and a strong desire to learn.",
      linkPreview: "#",
      linkSource: "#",
      image: "/shopify-clon.png",
    },
    {
      name: "Positive Impact",
      summary: "Become a better person every day and become someone who is useful to others.",
      linkPreview: "#",
      linkSource: "#",
      image: "/clone-ig.png",
    },
  ],
  about: {
    description: `Hi! I’m Eviana Putri Zarfi.

I am a student from MAN 1 Banda Aceh who has a strong passion for learning, growing, and trying new things. I believe that every day is an opportunity to improve myself and become a better person.

I enjoy learning many things that can broaden my knowledge and experiences. For me, learning does not only happen at school, but also through experiences, the environment around us, and the people we meet.

Even though my journey is still long, I always try to learn new skills, gain new experiences, and open opportunities for a better future. I believe that with effort and a strong desire to learn, everyone can achieve their dreams.

For me, every small step taken today will bring us closer to a better future.`,
    image: "/alejandro-big.jpg",
  },
};