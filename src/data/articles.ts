export interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  slug: string;
  colorClass: string;
  author: {
    name: string;
    avatar: string;
  };
  readTime: string;
  content?: string;
}

export const articles: Article[] = [
  {
    id: "1",
    title: "FINDING BALANCE: HOW TO CREATE A SUSTAINABLE SELF-CARE ROUTINE",
    excerpt: "Develop a personalized self-care practice that fits your lifestyle with these simple strategies for physical, mental, and emotional wellbeing.",
    date: "March 19, 2025",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=800&fit=crop",
    slug: "finding-balance-sustainable-self-care",
    colorClass: "bg-vibrant-purple",
    author: {
      name: "Emma Thompson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
    },
    readTime: "5 min",
    content: `
      <p>In our fast-paced world, self-care has become more important than ever. But creating a sustainable routine that actually works for your unique lifestyle can feel overwhelming.</p>
      
      <h2>UNDERSTANDING SELF-CARE</h2>
      <p>Self-care isn't selfish—it's essential. It's about taking intentional actions to care for your physical, mental, and emotional health.</p>
      
      <h2>BUILDING YOUR ROUTINE</h2>
      <p>Start small. Choose one or two practices that resonate with you and build from there. Whether it's morning meditation, evening journaling, or weekly nature walks, consistency matters more than perfection.</p>
      
      <h2>PHYSICAL WELLNESS</h2>
      <p>Prioritize movement that brings you joy. This might be yoga, dancing, hiking, or simply walking around your neighborhood. The key is finding activities you genuinely enjoy.</p>
      
      <h2>MENTAL CLARITY</h2>
      <p>Create space for mental rest. This could include meditation, deep breathing exercises, or simply taking breaks throughout your day to check in with yourself.</p>
      
      <h2>EMOTIONAL BALANCE</h2>
      <p>Honor your emotions. Journaling, therapy, or talking with trusted friends can help you process feelings and maintain emotional wellbeing.</p>
      
      <p>Remember, self-care looks different for everyone. The most important thing is to create a routine that feels authentic and sustainable for you.</p>
    `
  },
  {
    id: "2",
    title: "THE ART OF SLOW TRAVEL: EMBRACING LOCAL EXPERIENCES",
    excerpt: "Discover the benefits of unhurried exploration and how to create meaningful connections during your travels.",
    date: "March 15, 2025",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=800&fit=crop",
    slug: "art-of-slow-travel",
    colorClass: "bg-vibrant-yellow",
    author: {
      name: "Marcus Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    },
    readTime: "7 min"
  },
  {
    id: "3",
    title: "MINIMALIST LIVING: CREATING SPACE FOR WHAT MATTERS MOST",
    excerpt: "Simplify your environment and mindset with practical approaches to minimalism that focus on value over quantity.",
    date: "March 10, 2025",
    image: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=800&h=800&fit=crop",
    slug: "minimalist-living-space",
    colorClass: "bg-vibrant-mint",
    author: {
      name: "Sarah Mitchell",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
    },
    readTime: "6 min"
  },
  {
    id: "4",
    title: "SEASONAL SKINCARE: ADAPTING YOUR ROUTINE FOR SPRING",
    excerpt: "Refresh your skincare as the weather changes with gentle products and techniques that help your skin transition smoothly.",
    date: "February 28, 2025",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&h=800&fit=crop",
    slug: "seasonal-skincare-spring",
    colorClass: "bg-vibrant-coral",
    author: {
      name: "Emma Thompson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
    },
    readTime: "5 min"
  },
  {
    id: "5",
    title: "MINDFUL MORNINGS: RITUALS THAT SET THE TONE",
    excerpt: "Transform your mornings with intentional practices that create calm, clarity, and energy for the day ahead.",
    date: "February 20, 2025",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800&h=800&fit=crop",
    slug: "mindful-morning-rituals",
    colorClass: "bg-vibrant-blue",
    author: {
      name: "Marcus Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    },
    readTime: "4 min"
  },
  {
    id: "6",
    title: "CREATIVE SPACES: DESIGNING YOUR INSPIRATION CORNER",
    excerpt: "Learn how to curate a personal space that sparks creativity and supports your artistic practice.",
    date: "February 15, 2025",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&h=800&fit=crop",
    slug: "creative-spaces-inspiration",
    colorClass: "bg-vibrant-magenta",
    author: {
      name: "Sarah Mitchell",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
    },
    readTime: "6 min"
  },
  {
    id: "7",
    title: "PLANT-BASED EATING: A BEGINNER'S GUIDE",
    excerpt: "Explore the world of plant-based nutrition with practical tips for incorporating more plants into your diet.",
    date: "February 10, 2025",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=800&fit=crop",
    slug: "plant-based-eating-guide",
    colorClass: "bg-vibrant-orange",
    author: {
      name: "Emma Thompson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
    },
    readTime: "8 min"
  },
  {
    id: "8",
    title: "DIGITAL DETOX: RECLAIMING YOUR TIME",
    excerpt: "Discover strategies for reducing screen time and creating healthier boundaries with technology.",
    date: "February 5, 2025",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=800&fit=crop",
    slug: "digital-detox-reclaiming-time",
    colorClass: "bg-vibrant-lavender",
    author: {
      name: "Marcus Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    },
    readTime: "5 min"
  },
  {
    id: "9",
    title: "SUSTAINABLE FASHION: BUILDING A CONSCIOUS WARDROBE",
    excerpt: "Make thoughtful fashion choices that reflect your values while creating a versatile, timeless wardrobe.",
    date: "January 28, 2025",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=800&fit=crop",
    slug: "sustainable-fashion-conscious-wardrobe",
    colorClass: "bg-vibrant-yellow",
    author: {
      name: "Sarah Mitchell",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
    },
    readTime: "7 min"
  }
];
