export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  techStack: string[];
  category: "react" | "ui" | "fullstack";
  liveUrl: string;
  githubUrl: string;
  features: string[];
  screenshots: string[];
}

export const projects: Project[] = [
  {
    id: "taskflow",
    title: "TaskFlow",
    description: "A collaborative project management app with real-time kanban boards and team workspaces.",
    longDescription: "TaskFlow is a modern project management application designed for distributed teams. It features drag-and-drop kanban boards, real-time collaboration, and intelligent task prioritization. Built with a focus on performance and accessibility.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=500&fit=crop",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Zustand"],
    category: "react",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    features: [
      "Drag-and-drop kanban board with smooth animations",
      "Real-time collaboration via WebSocket",
      "Customizable team workspaces",
      "Advanced filtering and search",
      "Keyboard shortcuts for power users",
      "Responsive design for mobile and tablet"
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&h=500&fit=crop"
    ]
  },
  {
    id: "spectrum-ui",
    title: "Spectrum UI",
    description: "A design system and component library with 40+ accessible, themeable components.",
    longDescription: "Spectrum UI is a comprehensive component library built for modern web applications. Every component is fully accessible, themeable, and tested across browsers. The library includes a Figma plugin for seamless designer-developer handoff.",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=500&fit=crop",
    techStack: ["React", "Storybook", "Radix UI", "CSS Modules"],
    category: "ui",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    features: [
      "40+ fully accessible components",
      "Dark and light theme support",
      "Figma plugin for design tokens sync",
      "Comprehensive Storybook documentation",
      "Tree-shakeable ES module exports",
      "99% test coverage"
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=500&fit=crop"
    ]
  },
  {
    id: "weather-pulse",
    title: "Weather Pulse",
    description: "Hyper-local weather forecasting with interactive radar maps and severe weather alerts.",
    longDescription: "Weather Pulse delivers precise, hyper-local weather data with beautiful visualizations. Features include interactive radar maps, hourly and 10-day forecasts, and real-time severe weather notifications. Built with performance in mind — the entire app loads in under 1 second.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=500&fit=crop",
    techStack: ["React", "D3.js", "Mapbox GL", "TypeScript"],
    category: "react",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    features: [
      "Interactive radar and satellite maps",
      "Hourly and 10-day detailed forecast",
      "Severe weather push notifications",
      "Air quality index tracking",
      "Historical weather data charts",
      "Offline mode with cached data"
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=800&h=500&fit=crop"
    ]
  },
  {
    id: "fintrack",
    title: "FinTrack",
    description: "Personal finance dashboard with spending analytics, budgets, and goal tracking.",
    longDescription: "FinTrack helps users take control of their finances with intuitive visualizations and smart insights. Features automatic transaction categorization, custom budget alerts, and savings goal tracking with progress animations.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=500&fit=crop",
    techStack: ["React", "Recharts", "Tailwind CSS", "Framer Motion"],
    category: "fullstack",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    features: [
      "Automatic transaction categorization",
      "Custom budget creation with alerts",
      "Savings goals with progress tracking",
      "Monthly spending breakdown charts",
      "Export to CSV and PDF",
      "Multi-currency support"
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop"
    ]
  },
  {
    id: "motion-kit",
    title: "Motion Kit",
    description: "A curated collection of copy-paste animation components for React applications.",
    longDescription: "Motion Kit provides developers with production-ready animation components that can be dropped into any React project. Each animation is GPU-accelerated, accessible, and respects reduced-motion preferences.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=500&fit=crop",
    techStack: ["React", "Framer Motion", "TypeScript", "Vite"],
    category: "ui",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    features: [
      "30+ ready-to-use animation components",
      "GPU-accelerated for 60fps performance",
      "Respects prefers-reduced-motion",
      "Copy-paste integration",
      "Interactive playground docs",
      "Under 5kb gzipped per component"
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=800&h=500&fit=crop"
    ]
  },
  {
    id: "devboard",
    title: "DevBoard",
    description: "A developer productivity dashboard aggregating GitHub, CI/CD, and deployment status.",
    longDescription: "DevBoard unifies your development workflow into a single dashboard. Monitor GitHub activity, CI/CD pipelines, deployment status, and team velocity metrics. Customizable widgets let each developer tailor their view.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    techStack: ["React", "GraphQL", "Tailwind CSS", "React Query"],
    category: "fullstack",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    features: [
      "GitHub activity feed integration",
      "CI/CD pipeline monitoring",
      "Deployment status tracking",
      "Customizable widget layout",
      "Team velocity metrics",
      "Slack and Discord notifications"
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop"
    ]
  }
];
