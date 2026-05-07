import os

file_path = 'c:/Users/Gab0ncio/Documents/repos/PortafolioVERCEL/developer-profile.tsx'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

start_marker = 'export default function DeveloperProfile() {'
idx = content.find(start_marker)

new_component = """export default function DeveloperProfile() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const skills = [
    "PHP", "Python", "Dart", "JavaScript", "FastAPI", "Laravel", "Flask", "Flutter",
    "PyTorch", "LangChain", "SQL Server", "NoSQL", "Excel", "Power BI",
    "AWS Data Engineering", "Datadog", "Docker", "Git",
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  }

  if (!mounted) return null

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 space-y-16">
      {/* Main Profile Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
      >
        <Card className="relative overflow-hidden shadow-2xl border-0 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl rounded-[2rem]">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 via-indigo-50/40 to-purple-100/40 dark:from-blue-900/20 dark:via-indigo-900/10 dark:to-purple-900/20 pointer-events-none" />
          
          <CardHeader className="relative p-8 md:p-14">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
              <motion.div 
                whileHover={{ scale: 1.05, rotate: 5 }}
                className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 p-1.5 shrink-0 shadow-2xl"
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-zinc-950">
                  <img
                    src="/perfil-linkedin.jfif"
                    alt="Gabriel Melendez Huarachi"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
              
              <div className="flex-1 text-center md:text-left space-y-6">
                <div className="space-y-2">
                  <motion.h1 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 pb-2"
                  >
                    Gabriel Melendez Huarachi
                  </motion.h1>
                  <motion.p 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-xl md:text-2xl font-medium text-zinc-600 dark:text-zinc-300"
                  >
                    Backend Developer & Data Analyst
                  </motion.p>
                </div>

                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-zinc-600 dark:text-zinc-400 max-w-3xl text-lg leading-relaxed"
                >
                  Systems Engineering graduate specializing in Backend Development (PHP, Python), Data Analysis, and Machine Learning. Proven experience in building high-performance APIs, designing data pipelines, and transforming complex information into strategic insights.
                </motion.p>

                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-wrap justify-center md:justify-start gap-2 pt-2"
                >
                  {skills.map((skill) => (
                    <motion.div key={skill} variants={itemVariants}>
                      <Badge variant="secondary" className="px-3 py-1 text-sm bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors">
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                  <motion.div variants={itemVariants}>
                    <Badge className="px-3 py-1 text-sm bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800 border">English B2</Badge>
                  </motion.div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-wrap justify-center md:justify-start gap-4 pt-4"
                >
                  <Button variant="default" className="rounded-full shadow-lg hover:shadow-xl transition-all" size="lg" asChild>
                    <a href="https://github.com/gabrielfmh" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" /> GitHub
                    </a>
                  </Button>
                  <Button variant="outline" className="rounded-full shadow-sm hover:shadow-md transition-all" size="lg" asChild>
                    <a href="https://linkedin.com/in/gabriel-melendez-huarachi-b87757212" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
                    </a>
                  </Button>
                  <Button variant="outline" className="rounded-full shadow-sm hover:shadow-md transition-all" size="lg" asChild>
                    <a href="mailto:gabmelendez@upt.pe">
                      <Mail className="w-4 h-4 mr-2" /> Email
                    </a>
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="rounded-full ml-auto md:ml-0 shadow-sm bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 w-11 h-11"
                  >
                    {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                  </Button>
                </motion.div>
              </div>
            </div>
          </CardHeader>
        </Card>
      </motion.div>

      {/* Projects Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col items-center justify-center gap-2 mb-10 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-500 dark:from-white dark:to-zinc-500">Featured Projects</h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg">Explore my recent work and technical achievements</p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-3xl blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-500`} />
              <Card className="relative h-full overflow-hidden border-0 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md shadow-xl group-hover:shadow-2xl transition-all duration-500 rounded-3xl flex flex-col">
                <div className={`h-2 w-full bg-gradient-to-r ${project.gradient}`} />
                <CardContent className="p-8 flex flex-col items-center justify-center gap-6 flex-1 text-center">
                  <div className={`p-5 rounded-2xl bg-gradient-to-br ${project.gradient} text-white shadow-lg transform group-hover:rotate-6 transition-transform duration-300`}>
                    {project.icon}
                  </div>
                  <h3 className="font-bold text-xl leading-tight text-zinc-800 dark:text-zinc-100">{project.title}</h3>
                  <div className="mt-auto pt-2 flex items-center text-sm font-bold text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    View Details <ChevronRight className="w-5 h-5 ml-1" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-zinc-900/80 backdrop-blur-md flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col bg-white dark:bg-zinc-950 rounded-[2rem] shadow-2xl border border-zinc-200/20 dark:border-zinc-800/50"
            >
              <div className={`h-3 w-full bg-gradient-to-r ${selectedProject.gradient}`} />
              
              <div className="flex-1 overflow-y-auto p-6 md:p-10">
                <div className="flex items-start justify-between mb-8">
                  <div className="flex items-center gap-5">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${selectedProject.gradient} text-white shadow-lg`}>
                      {selectedProject.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-4xl font-extrabold text-zinc-900 dark:text-white">{selectedProject.title}</h3>
                      <div className="flex items-center gap-4 mt-2">
                        <Badge variant="outline" className="dark:border-zinc-700">{selectedProject.timeline}</Badge>
                        <span className="text-sm text-zinc-500 dark:text-zinc-400">{selectedProject.team}</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 shrink-0" onClick={() => setSelectedProject(null)}>
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                  <div className="space-y-8">
                    <div>
                      <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
                        {selectedProject.description || "Un proyecto increíble desarrollado con tecnologías modernas."}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold text-xl mb-4 flex items-center gap-2 text-zinc-900 dark:text-white">
                        <Star className="w-6 h-6 text-yellow-500" />
                        Key Features
                      </h4>
                      <ul className="space-y-4">
                        {selectedProject.features.map((feature, index) => (
                          <motion.li 
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * index }}
                            key={index} 
                            className="flex items-center gap-4 text-zinc-700 dark:text-zinc-300"
                          >
                            <div className={`w-2.5 h-2.5 rounded-full shadow-sm bg-gradient-to-r ${selectedProject.gradient}`} />
                            <span className="text-base font-medium">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-xl mb-4 text-zinc-900 dark:text-white">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tech.map((tech) => (
                          <Badge key={tech} variant="secondary" className="px-3 py-1.5 text-sm font-semibold bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-6">
                      {selectedProject.demoUrl && (
                        <Button className="rounded-full shadow-lg hover:shadow-xl transition-all font-bold" size="lg" asChild>
                          <a href={selectedProject.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            <ExternalLink className="w-5 h-5" /> Live Demo
                          </a>
                        </Button>
                      )}
                      {selectedProject.githubUrl && (
                        <Button variant="outline" className="rounded-full shadow-sm hover:shadow-md transition-all font-bold" size="lg" asChild>
                          <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            <Github className="w-5 h-5" /> View Code
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>

                  <div className="w-full min-h-[300px] h-full bg-zinc-50 dark:bg-zinc-900/50 rounded-3xl flex items-center justify-center p-6 overflow-hidden border border-zinc-100 dark:border-zinc-800 shadow-inner">
                    {selectedProject.id === "powerbi-renewable-energy" ? (
                      <div className="relative w-full h-full flex flex-col items-center justify-center gap-6">
                        <motion.img
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.2 }}
                          src={selectedProject.image || "/placeholder.svg"}
                          alt={selectedProject.title}
                          className="w-full h-auto object-contain rounded-xl shadow-md"
                        />
                        <div className="flex flex-col items-center p-5 bg-white dark:bg-zinc-800 rounded-2xl shadow-xl">
                          <img src="/powerBi.png" alt="QR Code Dashboard" className="w-32 h-32 object-contain" />
                          <span className="text-sm font-bold text-zinc-500 mt-4">Escanea para ver el dashboard</span>
                        </div>
                      </div>
                    ) : (
                      <motion.img
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        src={selectedProject.image || "/placeholder.svg"}
                        alt={selectedProject.title}
                        className="w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-2xl"
                      />
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
"""

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content[:idx] + new_component)
