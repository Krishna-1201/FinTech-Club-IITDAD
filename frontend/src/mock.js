// Mock data for IIT Delhi Abu Dhabi FinTech Club website

export const mockData = {
  // Hero section content
  hero: {
    title: "IIT Delhi – Abu Dhabi FinTech Club",
    tagline: "Innovating the Future of Finance",
    description: "Join us in exploring the intersection of technology and finance. Build the future of digital banking, cryptocurrency, and financial innovation."
  },

  // About section content  
  about: {
    mission: "To foster innovation in financial technology and create a collaborative community of future fintech leaders.",
    vision: "Bridging the gap between traditional finance and cutting-edge technology through hands-on learning and real-world applications.",
    offerings: [
      "Interactive workshops on blockchain and cryptocurrency",
      "Hackathons and coding competitions",
      "Industry networking events with fintech professionals", 
      "Research projects on emerging financial technologies",
      "Mentorship programs with industry experts"
    ]
  },

  // Past events (placeholder)
  pastEvents: [
    {
      id: 1,
      title: "Introduction to Blockchain",
      description: "A comprehensive workshop covering blockchain fundamentals and smart contract development.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500&h=300&fit=crop",
      date: "March 2024"
    },
    {
      id: 2, 
      title: "FinTech Startup Pitch Night",
      description: "Students pitched their innovative fintech ideas to a panel of industry experts.",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=500&h=300&fit=crop",
      date: "February 2024"
    },
    {
      id: 3,
      title: "Cryptocurrency Trading Workshop",
      description: "Learn the basics of crypto trading, market analysis, and risk management strategies.",
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=500&h=300&fit=crop",
      date: "January 2024"
    }
  ],

  // Upcoming events/ideas
  upcomingEvents: [
    {
      id: 1,
      title: "DeFi Deep Dive",
      description: "Exploring decentralized finance protocols and yield farming strategies.",
      status: "Planning Phase"
    },
    {
      id: 2,
      title: "AI in Finance Seminar", 
      description: "Understanding how artificial intelligence is revolutionizing financial services.",
      status: "Coming Soon"
    },
    {
      id: 3,
      title: "Mobile Payment Solutions Hackathon",
      description: "Build the next generation of digital payment platforms.",
      status: "Ideation Phase"
    }
  ],

  // Team members (secretaries)
  team: [
    {
      id: 1,
      name: "Alex Chen",
      role: "Secretary", 
      bio: "Computer Science sophomore passionate about blockchain technology and decentralized systems.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      linkedin: "#",
      email: "secretary@iitdad-fintech.com"
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Events Head",
      bio: "Economics freshman with a keen interest in financial markets and investment strategies.", 
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=300&h=300&fit=crop&crop=face",
      linkedin: "#",
      email: "events@iitdad-fintech.com"
    },
    {
      id: 3,
      name: "Mohammed Al-Rashid", 
      role: "Technical Head",
      bio: "Software Engineering sophomore specializing in machine learning and algorithmic trading.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      linkedin: "#",
      email: "tech@iitdad-fintech.com"
    },
    {
      id: 4,
      name: "Sarah Kim",
      role: "Outreach Head", 
      bio: "Business Administration freshman focused on fintech startups and venture capital.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      linkedin: "#", 
      email: "outreach@iitdad-fintech.com"
    }
  ]
};

// Mock form submission (will be replaced with backend integration)
export const submitContactForm = async (formData) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Store in localStorage for now (will be replaced with backend)
  const existingSubmissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
  const newSubmission = {
    id: Date.now(),
    ...formData,
    timestamp: new Date().toISOString()
  };
  
  existingSubmissions.push(newSubmission);
  localStorage.setItem('contactSubmissions', JSON.stringify(existingSubmissions));
  
  return { success: true, message: 'Thank you for reaching out! We\'ll get back to you soon.' };
};