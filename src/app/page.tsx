"use client"

import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Linkedin, Mail } from 'lucide-react'
import { motion } from 'framer-motion'  

function StarField(props) {
  const ref = useRef()
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }))

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10
    ref.current.rotation.y -= delta / 15
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.004}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

export default function MinimalistCosmicPortfolio() {
  const sectionRefs = {
    intro: useRef(null),
    about: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
    experience: useRef(null),
    contact: useRef(null)
  }

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden custom-scrollbar">
      <div className="fixed inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <StarField />
        </Canvas>
      </div>
      <div className="relative z-10">
        <section ref={sectionRefs.intro} className="h-screen flex items-center justify-center">
          <div className="text-center">
            <motion.h1
              className="text-4xl sm:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
            Hi 👋
            </motion.h1>
            <motion.h1
              className="text-3xl sm:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
             I am Gaurav Singh
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              An Frontend Developer
            </motion.p>
            <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-black transition-colors">
              Explore the Portfolio
            </Button>
          </div>
        </section>

        <section ref={sectionRefs.about} className="min-h-screen flex flex-col items-center justify-center p-8 mt-[-30vh]">
          <motion.h2
            className="text-4xl font-bold mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Me
          </motion.h2>
          <motion.div
            className="max-w-2xl text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <p className="mb-6">
              Greetings, earthlings! I'm a passionate web developer with a knack for creating out-of-this-world digital experiences. 
              With a strong foundation in React,NextJs,Firebase,NodeJs.
            </p>
            <p>
              When I'm not coding, you can find me stargazing, playing retro video games, or attempting to communicate with alien life forms through my ham radio.
            </p>
          </motion.div>
        </section>

        <section ref={sectionRefs.skills} className="min-h-screen flex flex-col items-center justify-center p-8">
          <motion.h2
            className="text-4xl font-bold mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Interstellar Skills
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {[
              { name: "Frontend Development", skills: ["React", "Next.js"] },
              { name: "Backend Development", skills: ["Node.js", "Express", "Firebase"] },
              { name: "Languages", skills: ["C", "C++", "Java", "Python", "TypeScript", "JavaScript"]},
              { name: "Database Management", skills: ["MongoDB", "Firestore"] },
              { name: "Design", skills: ["Tailwind CSS", "Framer Motion", "Shadcn", "Material UI"] },
               
            ].map((category, index) => (
              <Card key={index} className="bg-transparent border border-white hover:scale-105 transition-all ease-in-out cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-white">{category.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 text-white">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="mb-2">{skill}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </section>

        <section ref={sectionRefs.projects} className="min-h-screen flex flex-col items-center justify-center p-8 mt-14">
          <motion.h2
            className="text-4xl font-bold mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Projects
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {[
              {
                name: "NoteNinja",
                desc: "AI Powered Notes App",
                tech: ["React", "Next.js","Typescript", "Firebase", "Gemini"],
                link: "https://note-ninja-seven.vercel.app/",
                image: "/NoteNinja.jpg"  
              },
              {
                name: "Triply",
                desc: "AI Powered Travel Planner",
                tech: ["React", "Firebase", "Google Cloud", "Gemini"],
                link: "https://blog-85ce6.web.app/",
                image: "/Triply.jpg"  
              },
              {
                name: "PikClick",
                desc: "Cloud Image Storage App",
                tech: ["React", "Firebase", "Tailwind Css"],
                link: "https://pikclik-bba5c.web.app/",
                image: "/Pikclick.jpg"  
              },
              {
                name: "Firebolt",
                desc: "Modern Software as Service Website",
                tech: ["Next.js", "Framer Motion", "Tawilwind Css","React","Shadcn"],
                link: "https://firebolt-rho.vercel.app/",
                image: "/Firebolt.jpg"  
              },
              {
                name: "MovieHub",
                desc: "Search Your Favorite Movies",
                tech: ["Tawilwind Css","React","Shadcn","OmDb Api"],
                link: "https://movie-hub-xi-flax.vercel.app/",
                image: "/MovieHub.jpg"  
              },
              {
                name: "JobFinder",
                desc: "Search Your Dream Job",
                tech: ["Tawilwind Css","React","Firebase"],
                link: "https://online-job-portal-26f13.web.app/#_",
                image: "/JobFinder.jpg"  
              }
            ].map((project, index) => (
              <Card key={index} className="bg-transparent border border-white  hover:scale-105 transition-all ease-in-out cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-white">{project.name}</CardTitle>
                  <CardDescription className="text-gray-300">{project.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <img src={project.image} alt={project.name} className="mb-4 rounded-md" />
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-white bg-opacity-20 text-white">{tech}</Badge>
                    ))}
                  </div>
                  <Button variant="link" className="text-white" asChild>
                    <a href={project.link} target="_blank">
                      <ExternalLink className="mr-2 h-4 w-4" /> Visit Project
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </section>
        
        <section ref={sectionRefs.experience} className="min-h-screen flex flex-col items-center justify-center p-8 mt-24">
          <h2 className="text-4xl font-bold mb-12">Career Journey</h2>
          <div className="space-y-8 w-full max-w-2xl">
            {[
              {
                role: "Frontend Developer",
                company: "RefRelay",
                period: "2024 - Present",
                achievements: [
                  "Developed and maintained responsive UI pages using React and Material UI.",
                  "Integrated Zustand for efficient global state management across components.",
                  "Implemented robust Zod validations to ensure data integrity and form accuracy throughout the application.",
                  "Collaborated closely with backend teams to create dynamic and interactive frontend components."
                ]
              }
            ].map((job, index) => (
              <Card key={index} className="bg-transparent border border-white  hover:scale-105 transition-all ease-in-out cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-white">{job.role}</CardTitle>
                  <CardDescription className="text-gray-300">{job.company} - {job.period}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 text-white">
                    {job.achievements.map((ach, achIndex) => (
                      <li key={achIndex} className="mb-2">{ach}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section ref={sectionRefs.contact} className="min-h-screen flex flex-col items-center justify-center p-8">
          <h2 className="text-4xl font-bold mb-12">Get in Touch</h2>
          <div className="space-y-4">
            <div className="flex space-x-4">
              <a href="https://github.com/GauRav-sINGh123" target='_blank'>
              <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-black transition-colors">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </Button>
              </a>
              <a href="https://www.linkedin.com/in/gaurav-singh-746916238/" target='_blank'>
              <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-black transition-colors">
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </Button>
              </a>
            </div>
          </div>
        </section>
       
      </div>
      
    </div>
    
  )
}

// Custom scrollbar styles
const styles = `
.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: black black;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: black;
  border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #000;
}
`

export const globalStyles = <style>{styles}</style>
