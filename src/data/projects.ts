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
    title: "Clinical Data Pipeline",
    description:
      "Built an end-to-end data pipeline for processing clinical trial datasets, reducing analysis turnaround from weeks to hours using Python and cloud infrastructure.",
    tags: ["Python", "Data Engineering", "Healthcare"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    link: "#",
    colorClass: "bg-vibrant-blue",
  },
  {
    id: "2",
    title: "Health Outcomes Dashboard",
    description:
      "Interactive visualization platform for tracking patient outcomes across multiple treatment cohorts, used by research teams at three major hospitals.",
    tags: ["React", "D3.js", "Medical Research"],
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    link: "#",
    colorClass: "bg-vibrant-purple",
  },
  {
    id: "3",
    title: "Predictive Risk Model",
    description:
      "Developed machine learning models to identify at-risk patient populations, improving early intervention rates by 34% in a pilot program.",
    tags: ["Machine Learning", "Statistics", "Public Health"],
    image:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&h=600&fit=crop",
    link: "#",
    colorClass: "bg-vibrant-coral",
  },
  {
    id: "4",
    title: "Genomics Research Tool",
    description:
      "Open-source tool for analyzing genomic sequence data, adopted by research labs internationally for variant classification workflows.",
    tags: ["Bioinformatics", "Open Source", "R"],
    image:
      "https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=800&h=600&fit=crop",
    link: "#",
    colorClass: "bg-vibrant-mint",
  },
  {
    id: "5",
    title: "Telemedicine Platform",
    description:
      "Designed and shipped the frontend for a telemedicine app serving rural communities, enabling 10,000+ remote consultations in its first year.",
    tags: ["React", "TypeScript", "Telehealth"],
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop",
    link: "#",
    colorClass: "bg-vibrant-yellow",
  },
  {
    id: "6",
    title: "Medical NLP System",
    description:
      "Natural language processing system for extracting structured data from unstructured clinical notes, achieving 92% accuracy on entity recognition.",
    tags: ["NLP", "Python", "Clinical Informatics"],
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop",
    link: "#",
    colorClass: "bg-vibrant-lavender",
  },
];
