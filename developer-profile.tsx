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
    id: "oregano-disease-detector",
    title: "Aplicación reconocedora de enfermedades en oréganos",
    description: "App móvil basada en IA para identificar enfermedades en cultivos de orégano a partir de imágenes, ayudando a agricultores a tomar decisiones rápidas.",
    tech: ["Flutter", "TensorFlow", "Firebase", "Python"],
    icon: <Smartphone className="w-6 h-6" />,
    demoUrl: "",
    githubUrl: "",
    image: "/oreganoai.jpeg",
    features: [
      "Reconocimiento de imágenes",
      "Diagnóstico automático",
      "Historial de cultivos",
      "Notificaciones de alerta",
      "Soporte multilenguaje"
    ],
    timeline: "4 meses",
    team: "Equipo de 3",
    gradient: "from-green-400 to-green-700",
    hoverGradient: "from-green-500 to-green-800",
  },
  {
    id: "english-certification-simulator",
    title: "App de simulacros de exámenes de certificación de inglés",
    description: "Aplicación web y móvil para practicar exámenes de certificación de inglés (TOEFL, Cambridge) con resultados y retroalimentación instantánea.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    icon: <Code2 className="w-6 h-6" />,
    demoUrl: "",
    githubUrl: "",
    image: "/simulapp.PNG",
    features: [
      "Simulacros de exámenes",
      "Corrección automática",
      "Estadísticas de progreso",
      "Banco de preguntas actualizado",
      "Soporte multiplataforma"
    ],
    timeline: "3 meses",
    team: "Equipo de 2",
    gradient: "from-blue-400 to-indigo-600",
    hoverGradient: "from-blue-500 to-indigo-700",
  },
  {
    id: "tacna-incidents",
    title: "Aplicación de reporte de incidencias y peligros en la ciudad de Tacna",
    description: "Plataforma para que ciudadanos reporten incidencias y peligros urbanos en Tacna, con geolocalización y seguimiento de casos.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Mapbox"],
    icon: <Database className="w-6 h-6" />,
    demoUrl: "",
    githubUrl: "",
    image: "/alertatacna.jpeg",
    features: [
      "Reporte geolocalizado",
      "Seguimiento de casos",
      "Panel de administración",
      "Notificaciones a usuarios",
      "Mapa interactivo"
    ],
    timeline: "5 meses",
    team: "Equipo de 4",
    gradient: "from-orange-400 to-red-600",
    hoverGradient: "from-orange-500 to-red-700",
  },
  {
    id: "water-awareness",
    title: "Sistema web de concientización del cuidado del agua",
    description: "Sitio web educativo e interactivo para promover el uso responsable del agua mediante juegos, retos y recursos didácticos.",
    tech: ["React", "Firebase", "Tailwind CSS"],
    icon: <Globe className="w-6 h-6" />,
    demoUrl: "https://proyectorecursoshidricosu3.azurewebsites.net/",
    githubUrl: "",
    image: "/aguatopia.PNG",
    features: [
      "Juegos interactivos",
      "Recursos educativos",
      "Retos y logros",
      "Foro de usuarios",
      "Estadísticas de ahorro"
    ],
    timeline: "2 meses",
    team: "Equipo de 2",
    gradient: "from-cyan-400 to-blue-600",
    hoverGradient: "from-cyan-500 to-blue-700",
  },
  {
    id: "native-languages",
    title: "Web de aprendizaje de idiomas originarios",
    description: "Plataforma web para aprender idiomas originarios peruanos con lecciones, ejercicios y audio de hablantes nativos.",
    tech: ["Next.js", "TypeScript", "Supabase", "Audio API"],
    icon: <Globe className="w-6 h-6" />,
    demoUrl: "",
    githubUrl: "",
    image: "",
    features: [
      "Lecciones interactivas",
      "Ejercicios prácticos",
      "Audio de hablantes nativos",
      "Seguimiento de progreso",
      "Foro de comunidad"
    ],
    timeline: "6 meses",
    team: "Equipo de 3",
    gradient: "from-yellow-400 to-orange-600",
    hoverGradient: "from-yellow-500 to-orange-700",
  },
  {
    id: "news-veracity",
    title: "Web detectora de veracidad de noticias o hechos",
    description: "Herramienta web que analiza noticias y hechos para detectar su veracidad usando IA y fuentes confiables.",
    tech: ["React", "Python", "FastAPI", "NLP", "MongoDB"],
    icon: <Database className="w-6 h-6" />,
    demoUrl: "",
    githubUrl: "",
    image: "/placeholder.svg?height=200&width=400",
    features: [
      "Análisis de texto con IA",
      "Consulta de fuentes confiables",
      "Historial de búsquedas",
      "Interfaz intuitiva",
      "Alertas de fake news"
    ],
    timeline: "4 meses",
    team: "Equipo de 3",
    gradient: "from-pink-400 to-red-600",
    hoverGradient: "from-pink-500 to-red-700",
  },
  {
    id: "3d-glasses-shop",
    title: "Sistema web para venta de lentes con tecnología 3D y reconocimiento facial",
    description: "E-commerce avanzado para venta de lentes, permite probar modelos en 3D y utiliza reconocimiento facial para recomendaciones.",
    tech: ["Next.js", "Three.js", "TensorFlow.js", "Stripe"],
    icon: <ShoppingCart className="w-6 h-6" />,
    demoUrl: "",
    githubUrl: "",
    image: "/placeholder.svg?height=200&width=400",
    features: [
      "Prueba virtual 3D",
      "Reconocimiento facial",
      "Recomendaciones personalizadas",
      "Pasarela de pagos",
      "Gestión de inventario"
    ],
    timeline: "6 meses",
    team: "Equipo de 4",
    gradient: "from-purple-400 to-indigo-600",
    hoverGradient: "from-purple-500 to-indigo-700",
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
        {/* ...código anterior... */}
        <CardHeader className="relative">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center overflow-hidden">
              <img
                src="/perfil-linkedin.jfif"
                alt="Gabriel Melendez Huarachi"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Gabriel Melendez Huarachi</h1>
              <p className="text-xl text-gray-600 mb-3">Ingeniero de Sistemas | Movile developer and Machine Learning solutions</p>
              <p className="text-gray-700 mb-4 max-w-2xl">
                Soy una persona proactiva, organizada y responsable, con buenas relaciones interpersonales. Cuento con capacidades bilingües y gran interés por los avances tecnológicos. Busco aplicar mis habilidades en ingeniería de datos, computación en la nube y aprendizaje profundo para contribuir a una organización innovadora.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                <Badge variant="secondary">AWS Data Engineering</Badge>
                <Badge variant="secondary">Power BI</Badge>
                <Badge variant="secondary">Deep Learning (Nvidia)</Badge>
                <Badge variant="secondary">Flutter</Badge>
                <Badge variant="secondary">Liderazgo</Badge>
                <Badge variant="secondary">Comunicación</Badge>
                <Badge variant="secondary">Trabajo en equipo</Badge>
              </div>
              <div className="flex justify-center md:justify-start gap-3 mb-2">
                <Button variant="outline" size="sm" asChild>
                  <a href="https://github.com/gabrielfmh" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href="mailto:gabrielfarimelendezhuarachi@gmail.com">
                    <Mail className="w-4 h-4 mr-2" />
                    Email
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://gabrielfmh.github.io/" target="_blank" rel="noopener noreferrer">
                    <Globe className="w-4 h-4 mr-2" />
                    Portfolio
                  </a>
                </Button>
              </div>
              <div className="flex justify-center md:justify-start gap-3 mb-2">
                <span className="text-gray-600 text-sm">(+51) 991164894</span>
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
        {/* ...código posterior... */}
      </Card>

      {/* Projects Section */}
      <Card>
        <CardHeader>
          <h2 >Featured Projects</h2>
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
            <CardContent className="grid md:grid-cols-2 gap-6"> {/* Modified this line */}
              {/* Left Half: Project Details */}
              <div className="space-y-6">
                {/* Key Features */}
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

                {/* Timeline and Team */}
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
              </div>

              {/* Right Half: Project Image */}
              <div className="w-full h-full min-h-[300px] bg-gray-100 rounded-lg flex items-center justify-center"> {/* Added min-h for better visual */}
                <img
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}