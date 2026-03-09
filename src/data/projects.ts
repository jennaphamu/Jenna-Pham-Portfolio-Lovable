import stanfordImg from "@/assets/stanford-card.jpg";
import ucsfImg from "@/assets/ucsf-card.jpg";
import datathonImg from "@/assets/datathon-card.jpg";
import aaciImg from "@/assets/aaci-card.jpg";
import baccImg from "@/assets/bacc-card.jpg";
import mentorshipImg from "@/assets/mentorship-card.jpg";
import teachingImg from "@/assets/teaching-card.jpg";

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
    image: stanfordImg,
    link: "#",
    colorClass: "bg-card",
  },
  {
    id: "1",
    title: "UCSF Oral & Maxillofacial Surgery",
    description:
      "Coordinating two residency programs across UCSF and affiliates — managing schedules, onboarding, compliance for 40+ residents, and directing a $2M+ budget while growing Instagram reach by 77.8%.",
    tags: ["Health Operations", "Program Coordination", "Budget Management"],
    image: ucsfImg,
    link: "#",
    colorClass: "bg-card",
  },
  {
    id: "2",
    title: "Best Visualization — Data@UCI Datathon",
    description:
      "Awarded Best Visualization for merging global datasets on pollution and happiness using Python, Tableau, and Folium — demonstrating data storytelling for environmental health impact.",
    tags: ["Python", "Tableau", "Data Visualization"],
    image: datathonImg,
    link: "#",
    colorClass: "bg-card",
  },
  {
    id: "3",
    title: "AACI Patient Navigation",
    description:
      "Developed 15 personalized care plans, conducted outreach to 500+ community members, and provided Vietnamese interpretation for 25+ visits — connecting patients to Medi-Cal, housing, and behavioral health services.",
    tags: ["Community Health", "Patient Care", "Health Equity"],
    image: aaciImg,
    link: "#",
    colorClass: "bg-card",
  },
  {
    id: "4",
    title: "Bay Area Cancer Connections",
    description:
      "Digitizing fundraising operations, organizing donor groups, and conducting market research to uncover new program opportunities for cancer support services.",
    tags: ["Digital Health", "Nonprofit", "Market Research"],
    image: baccImg,
    link: "#",
    colorClass: "bg-card",
  },
  {
    id: "5",
    title: "UCI Merage Student Mentorship",
    description:
      "Mentored 15+ students on interviewing, networking, and public speaking. Organized 10+ professional events serving 1,000+ students with marketing campaigns that elevated engagement.",
    tags: ["Leadership", "Mentorship", "Event Management"],
    image: mentorshipImg,
    link: "#",
    colorClass: "bg-card",
  },
  {
    id: "6",
    title: "English Teaching — Vietnam & Cambodia",
    description:
      "Designed culturally immersive English lessons incorporating Vietnamese literature and poetry. Led daily classes and home visits to improve education access for rural students.",
    tags: ["Education", "Cross-Cultural", "Service"],
    image: teachingImg,
    link: "#",
    colorClass: "bg-card",
  },
];
