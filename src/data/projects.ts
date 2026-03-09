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
    id: "7",
    title: "Stanford University School of Medicine",
    description:
      "Residency Coordinator for the Department of Anesthesiology, Perioperative and Pain Medicine — improving program operations through data systems (MedHub, Oracle), reducing procurement costs by 40%, and experimenting with AI tools to streamline administrative workflows.",
    tags: ["Health Operations", "AI & Automation", "Data Systems"],
    image:
      "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&h=500&fit=crop",
    link: "#",
    colorClass: "bg-card",
  },
  {
    id: "1",
    title: "UCSF Oral & Maxillofacial Surgery",
    description:
      "Coordinating two residency programs across UCSF and affiliates — managing schedules, onboarding, compliance for 40+ residents, and directing a $2M+ budget while growing Instagram reach by 77.8%.",
    tags: ["Health Operations", "Program Coordination", "Budget Management"],
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=500&fit=crop",
    link: "#",
    colorClass: "bg-card",
  },
  {
    id: "2",
    title: "Best Visualization — Data@UCI Datathon",
    description:
      "Awarded Best Visualization for merging global datasets on pollution and happiness using Python, Tableau, and Folium — demonstrating data storytelling for environmental health impact.",
    tags: ["Python", "Tableau", "Data Visualization"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    link: "#",
    colorClass: "bg-card",
  },
  {
    id: "3",
    title: "AACI Patient Navigation",
    description:
      "Developed 15 personalized care plans, conducted outreach to 500+ community members, and provided Vietnamese interpretation for 25+ visits — connecting patients to Medi-Cal, housing, and behavioral health services.",
    tags: ["Community Health", "Patient Care", "Health Equity"],
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop",
    link: "#",
    colorClass: "bg-card",
  },
  {
    id: "4",
    title: "Bay Area Cancer Connections",
    description:
      "Digitizing fundraising operations, organizing donor groups, and conducting market research to uncover new program opportunities for cancer support services.",
    tags: ["Digital Health", "Nonprofit", "Market Research"],
    image:
      "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=800&h=500&fit=crop",
    link: "#",
    colorClass: "bg-card",
  },
  {
    id: "5",
    title: "UCI Merage Student Mentorship",
    description:
      "Mentored 15+ students on interviewing, networking, and public speaking. Organized 10+ professional events serving 1,000+ students with marketing campaigns that elevated engagement.",
    tags: ["Leadership", "Mentorship", "Event Management"],
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=500&fit=crop",
    link: "#",
    colorClass: "bg-card",
  },
  {
    id: "6",
    title: "English Teaching — Vietnam & Cambodia",
    description:
      "Designed culturally immersive English lessons incorporating Vietnamese literature and poetry. Led daily classes and home visits to improve education access for rural students.",
    tags: ["Education", "Cross-Cultural", "Service"],
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=500&fit=crop",
    link: "#",
    colorClass: "bg-card",
  },
];
