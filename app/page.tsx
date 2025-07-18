"use client"

import { useState, useEffect, useRef } from "react"
import {
  Code2,
  Palette,
  Rocket,
  Zap,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Play,
  Pause,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"

export default function CreativePortfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentSection, setCurrentSection] = useState("home")
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const skills = [
    { name: "React & Next.js", level: 95, color: "from-cyan-400 to-blue-500" },
    { name: "TypeScript", level: 90, color: "from-blue-400 to-purple-500" },
    { name: "UI/UX Design", level: 85, color: "from-purple-400 to-pink-500" },
    { name: "Node.js", level: 88, color: "from-green-400 to-teal-500" },
    { name: "Python", level: 82, color: "from-yellow-400 to-orange-500" },
    { name: "3D Graphics", level: 75, color: "from-pink-400 to-red-500" },
  ]

  const projects = [
    {
      title: "NeuroAI Dashboard",
      description: "AI-powered analytics platform with real-time data visualization",
      tech: ["React", "D3.js", "Python", "TensorFlow"],
      image: "/placeholder.svg?height=300&width=400",
      color: "from-cyan-500 to-blue-600",
    },
    {
      title: "CryptoVerse",
      description: "Cryptocurrency trading platform with advanced charting",
      tech: ["Next.js", "WebSocket", "Chart.js", "Node.js"],
      image: "/placeholder.svg?height=300&width=400",
      color: "from-purple-500 to-pink-600",
    },
    {
      title: "MetaSpace",
      description: "Virtual reality social platform for remote collaboration",
      tech: ["Three.js", "WebRTC", "React", "Express"],
      image: "/placeholder.svg?height=300&width=400",
      color: "from-green-500 to-teal-600",
    },
    {
      title: "QuantumUI",
      description: "Component library with physics-based animations",
      tech: ["React", "Framer Motion", "Storybook", "TypeScript"],
      image: "/placeholder.svg?height=300&width=400",
      color: "from-orange-500 to-red-600",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative" ref={containerRef}>
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-teal-900/20" />
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transition: "all 0.3s ease-out",
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-full blur-2xl animate-pulse delay-1000" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            ALEX.DEV
          </div>

          <div className="hidden md:flex space-x-8 backdrop-blur-md bg-white/10 rounded-full px-6 py-3 border border-white/20">
            {["home", "about", "skills", "projects", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-all duration-300 ${
                  currentSection === section ? "text-cyan-400 font-semibold" : "text-white/70 hover:text-white"
                }`}
              >
                {section}
              </button>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsPlaying(!isPlaying)}
            className="backdrop-blur-md bg-white/10 border border-white/20 text-white hover:bg-white/20"
          >
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative z-10 px-6">
        <div className="text-center max-w-4xl">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              CREATIVE
            </h1>
            <h2 className="text-4xl md:text-6xl font-light text-white/90">Web Developer</h2>
          </div>

          <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            Crafting digital experiences that push the boundaries of what's possible on the web
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              onClick={() => scrollToSection("projects")}
              className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <span className="relative z-10 flex items-center">
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>

            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg backdrop-blur-md"
            >
              Let's Connect
            </Button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 animate-bounce delay-1000">
          <div className="w-4 h-4 bg-cyan-400 rounded-full blur-sm" />
        </div>
        <div className="absolute top-1/3 right-20 animate-bounce delay-2000">
          <div className="w-6 h-6 bg-purple-400 rounded-full blur-sm" />
        </div>
        <div className="absolute bottom-1/4 left-1/4 animate-bounce">
          <div className="w-3 h-3 bg-pink-400 rounded-full blur-sm" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative z-10 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 border border-white/20">
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  About Me
                </h2>
                <p className="text-white/80 text-lg leading-relaxed mb-6">
                  I'm a passionate full-stack developer who believes in creating digital experiences that are not just
                  functional, but truly memorable. With 6+ years of experience, I specialize in building cutting-edge
                  web applications that combine beautiful design with powerful functionality.
                </p>
                <p className="text-white/80 text-lg leading-relaxed mb-8">
                  My approach blends technical expertise with creative vision, resulting in projects that stand out in
                  today's digital landscape.
                </p>

                <div className="flex space-x-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="backdrop-blur-md bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
                  >
                    <Github className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="backdrop-blur-md bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-2xl opacity-50 animate-pulse" />
                <Image
                  src="/placeholder.svg?height=320&width=320"
                  alt="Alex - Creative Developer"
                  width={320}
                  height={320}
                  className="relative z-10 rounded-full border-4 border-white/20 backdrop-blur-md"
                />
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-bounce" />
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-bounce delay-1000" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative z-10 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Technical Arsenal
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                  <span className="text-white/70">{skill.level}%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20">
              <Code2 className="h-12 w-12 mx-auto mb-4 text-cyan-400" />
              <h3 className="text-2xl font-bold text-white">50+</h3>
              <p className="text-white/70">Projects</p>
            </div>
            <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20">
              <Palette className="h-12 w-12 mx-auto mb-4 text-purple-400" />
              <h3 className="text-2xl font-bold text-white">6+</h3>
              <p className="text-white/70">Years</p>
            </div>
            <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20">
              <Rocket className="h-12 w-12 mx-auto mb-4 text-pink-400" />
              <h3 className="text-2xl font-bold text-white">30+</h3>
              <p className="text-white/70">Clients</p>
            </div>
            <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20">
              <Zap className="h-12 w-12 mx-auto mb-4 text-yellow-400" />
              <h3 className="text-2xl font-bold text-white">99%</h3>
              <p className="text-white/70">Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative z-10 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:rotate-1"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-80 transition-opacity duration-300`}
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button className="bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30">
                      View Project
                    </Button>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-white/70 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-sm text-white border border-white/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative z-10 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Let's Create Something Amazing
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 border border-white/20">
              <form className="space-y-6">
                <div>
                  <Input
                    placeholder="Your Name"
                    className="bg-white/10 border-white/30 text-white placeholder:text-white/50 backdrop-blur-md focus:border-cyan-400"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    className="bg-white/10 border-white/30 text-white placeholder:text-white/50 backdrop-blur-md focus:border-cyan-400"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="bg-white/10 border-white/30 text-white placeholder:text-white/50 backdrop-blur-md focus:border-cyan-400 resize-none"
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white font-semibold py-3 rounded-full transition-all duration-300 transform hover:scale-105">
                  Send Message
                </Button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white/70">Email</p>
                      <p className="text-white">alex@creative.dev</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white/70">Phone</p>
                      <p className="text-white">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white/70">Location</p>
                      <p className="text-white">San Francisco, CA</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="backdrop-blur-md bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl p-8 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4">Ready to Start?</h3>
                <p className="text-white/80 mb-6">
                  Let's discuss your vision and bring it to life with cutting-edge technology.
                </p>
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 transition-all duration-300"
                >
                  Start Your Project
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 relative z-10 px-6 border-t border-white/20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            ALEX.DEV
          </div>
          <p className="text-white/70 mb-8">Crafting the future, one line of code at a time.</p>
          <div className="flex justify-center space-x-6">
            <Button
              variant="ghost"
              size="icon"
              className="backdrop-blur-md bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
            >
              <Github className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="backdrop-blur-md bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
            >
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="backdrop-blur-md bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
            >
              <Mail className="h-5 w-5" />
            </Button>
          </div>
          <p className="text-white/50 text-sm mt-8">© {new Date().getFullYear()} Alex.Dev. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
