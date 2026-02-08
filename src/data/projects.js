import { FaBrain, FaCloud, FaMobileAlt, FaShieldAlt } from 'react-icons/fa';

export const projects = [
  {
    id: 1,
    title: "Farmer AI Assistant",
    description: "AI-powered chatbot helping farmers with crop recommendations, disease detection, and agricultural advice using machine learning.",
    tech: ["Python", "TensorFlow", "NLP", "Flask"],
    icon: FaBrain,
    color: "from-primary to-blue-500",
    github: "#",
    demo: "#"
  },
  {
    id: 2,
    title: "Weather Detection Chatbot",
    description: "Intelligent weather prediction system using ML models to provide accurate forecasts and climate insights.",
    tech: ["Python", "Scikit-learn", "API Integration", "React"],
    icon: FaCloud,
    color: "from-secondary to-purple-500",
    github: "#",
    demo: "#"
  },
  {
    id: 3,
    title: "Flutter E-commerce App",
    description: "Full-featured mobile shopping application with product catalog, cart management, and secure checkout flow.",
    tech: ["Flutter", "Dart", "Firebase", "REST API"],
    icon: FaMobileAlt,
    color: "from-accent to-green-500",
    github: "#",
    demo: "#"
  },
  {
    id: 4,
    title: "Web Security Testing",
    description: "Comprehensive security assessment toolkit using Kali Linux for penetration testing and vulnerability analysis.",
    tech: ["Kali Linux", "Bash", "Metasploit", "Wireshark"],
    icon: FaShieldAlt,
    color: "from-red-500 to-orange-500",
    github: "#",
    demo: "#"
  }
];
