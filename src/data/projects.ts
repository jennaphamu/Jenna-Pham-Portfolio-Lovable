export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
  colorClass: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Fintech Brand & Web Platform",
    description:
      "End-to-end brand identity and responsive web design for a fintech startup — from logo and color system to a full marketing site with animated interactions.",
    tags: ["Brand Identity", "Web Design", "Motion"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    link: "#",
    colorClass: "bg-vibrant-blue",
  },
  {
    id: "2",
    title: "E-Commerce Redesign",
    description:
      "Complete UX overhaul and visual redesign of a fashion e-commerce platform, improving conversion by 40% with a cleaner product discovery flow.",
    tags: ["UX Design", "E-Commerce", "Figma"],
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=500&fit=crop",
    link: "#",
    colorClass: "bg-vibrant-coral",
  },
  {
    id: "3",
    title: "SaaS Design System",
    description:
      "Built a scalable design system with 120+ components for a B2B SaaS product — tokens, patterns, and documentation that bridged design and engineering.",
    tags: ["Design Systems", "Components", "Documentation"],
    image:
      "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=800&h=500&fit=crop",
    link: "#",
    colorClass: "bg-vibrant-purple",
  },
  {
    id: "4",
    title: "Creative Agency Website",
    description:
      "Award-worthy portfolio site for a creative agency — bold typography, scroll-driven animations, and a narrative structure that showcases their best work.",
    tags: ["Web Design", "Animation", "Framer"],
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop",
    link: "#",
    colorClass: "bg-vibrant-yellow",
  },
  {
    id: "5",
    title: "Health & Wellness App",
    description:
      "Mobile-first product design for a wellness app — calming UI, intuitive onboarding, and data visualization that makes health tracking feel effortless.",
    tags: ["Product Design", "Mobile", "UI/UX"],
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop",
    link: "#",
    colorClass: "bg-vibrant-mint",
  },
  {
    id: "6",
    title: "Editorial Magazine Site",
    description:
      "Typographic-first editorial website for an online magazine — mastered grid layouts, reading experience, and responsive image treatments.",
    tags: ["Typography", "Editorial", "Responsive"],
    image:
      "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=800&h=500&fit=crop",
    link: "#",
    colorClass: "bg-vibrant-lavender",
  },
];
