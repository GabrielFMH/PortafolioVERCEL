"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  Globe,
  Code2,
  Database,
  Smartphone,
  ShoppingCart,
  X,
  ExternalLink,
  Calendar,
  Users,
  Star,
  Moon,
  Sun,
} from "lucide-react"
import { useTheme } from "next-themes"

interface Project {
  id: string
  title: string
  description: string
  tech: string[]
  icon: React.ReactNode
  demoUrl?: string
  githubUrl?: string
  image: string
  features: string[]
  timeline: string
  team: string
  gradient: string
  hoverGradient: string
}

const projects: Project[] = [
  {
    id: "ecommerce",
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
    tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
    icon: <ShoppingCart className="w-6 h-6" />,
    demoUrl: "https://demo-ecommerce.com",
    githubUrl: "https://github.com/dev/ecommerce",
    image: "/placeholder.svg?height=200&width=400",
    features: [
      "Payment Processing",
      "Inventory Management",
      "User Authentication",
      "Admin Dashboard",
      "Order Tracking",
    ],
    timeline: "3 months",
    team: "Solo Project",
    gradient: "from-emerald-400 to-teal-600",
    hoverGradient: "from-emerald-500 to-teal-700",
  },
  {
    id: "mobile-app",
    title: "Task Management App",
    description: "Cross-platform mobile app for team collaboration and task management with real-time updates.",
    tech: ["React Native", "Node.js", "Socket.io", "MongoDB", "Firebase"],
    icon: <Smartphone className="w-6 h-6" />,
    demoUrl: "https://app-store-link.com",
    githubUrl: "https://github.com/dev/task-app",
    image: "/placeholder.svg?height=200&width=400",
    features: ["Real-time Collaboration", "Push Notifications", "Offline Support", "Team Management", "Analytics"],
    timeline: "4 months",
    team: "Team of 3",
    gradient: "from-purple-400 to-pink-600",
    hoverGradient: "from-purple-500 to-pink-700",
  },
  {
    id: "api-service",
    title: "Microservices API",
    description:
      "Scalable microservices architecture with Docker containerization and comprehensive API documentation.",
    tech: ["Node.js", "Express", "Docker", "Redis", "PostgreSQL", "AWS"],
    icon: <Database className="w-6 h-6" />,
    githubUrl: "https://github.com/dev/microservices",
    image: "/placeholder.svg?height=200&width=400",
    features: ["Auto-scaling", "Load Balancing", "API Gateway", "Monitoring", "CI/CD Pipeline"],
    timeline: "6 months",
    team: "Team of 5",
    gradient: "from-orange-400 to-red-600",
    hoverGradient: "from-orange-500 to-red-700",
  },
  {
    id: "web-app",
    title: "Analytics Dashboard",
    description:
      "Real-time analytics dashboard with interactive charts and data visualization for business intelligence.",
    tech: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL"],
    icon: <Code2 className="w-6 h-6" />,
    demoUrl: "https://analytics-demo.com",
    githubUrl: "https://github.com/dev/analytics",
    image: "/placeholder.svg?height=200&width=400",
    features: ["Real-time Data", "Interactive Charts", "Export Reports", "User Permissions", "Custom Dashboards"],
    timeline: "5 months",
    team: "Team of 4",
    gradient: "from-blue-400 to-indigo-600",
    hoverGradient: "from-blue-500 to-indigo-700",
  },
]

export default function DeveloperProfile() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const { theme, setTheme } = useTheme()

  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Docker",
  ]

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Main Profile Card */}
      <Card className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100" />
        <CardHeader className="relative">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-4xl font-bold">
              AD
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Alex Developer</h1>
              <p className="text-xl text-gray-600 mb-3">Full Stack Developer</p>
              <p className="text-gray-700 mb-4 max-w-2xl">
                Passionate full-stack developer with 5+ years of experience building scalable web applications and
                mobile solutions. Specialized in modern JavaScript frameworks and cloud technologies.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-white/80">
                    {skill}
                  </Badge>
                ))}
              </div>
              <div className="flex justify-center md:justify-start gap-3">
                <Button variant="outline" size="sm">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
                <Button variant="outline" size="sm">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
                <Button variant="outline" size="sm">
                  <Mail className="w-4 h-4 mr-2" />
                  Email
                </Button>
                <Button variant="outline" size="sm">
                  <Globe className="w-4 h-4 mr-2" />
                  Portfolio
                </Button>
              </div>
              <div className="flex justify-center md:justify-start">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="w-10 h-10 p-0"
                >
                  <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Projects Section */}
      <Card>
        <CardHeader>
          <h2 className="text-2xl font-bold text-gray-900">Featured Projects</h2>
          <p className="text-gray-600">Click on any project icon to explore the details</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`relative group cursor-pointer transform transition-all duration-300 hover:scale-105`}
                onClick={() => setSelectedProject(project)}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-xl blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300`}
                />
                <div
                  className={`relative bg-gradient-to-br ${project.gradient} hover:${project.hoverGradient} rounded-xl p-6 h-32 flex flex-col items-center justify-center gap-3 text-white shadow-lg hover:shadow-xl transition-all duration-300`}
                >
                  <div className="text-white drop-shadow-sm">{project.icon}</div>
                  <span className="text-sm font-semibold text-center text-white drop-shadow-sm leading-tight">
                    {project.title}
                  </span>
                  <div className="absolute inset-0 bg-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="text-blue-600">{selectedProject.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                  <p className="text-gray-600">{selectedProject.description}</p>
                </div>
              </div>
              <Button variant="ghost" size="sm" onClick={() => setSelectedProject(null)}>
                <X className="w-4 h-4" />
              </Button>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Project Image */}
              <div className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                <img
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Project Details Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Timeline
                    </h4>
                    <p className="text-sm text-gray-600">{selectedProject.timeline}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      Team
                    </h4>
                    <p className="text-sm text-gray-600">{selectedProject.team}</p>
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="font-semibold mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                {selectedProject.demoUrl && (
                  <Button className="flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </Button>
                )}
                {selectedProject.githubUrl && (
                  <Button variant="outline" className="flex items-center gap-2">
                    <Github className="w-4 h-4" />
                    View Code
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
