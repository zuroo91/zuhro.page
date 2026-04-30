"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import projects from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black py-20 px-6">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white">
          My <span className="text-rose-600">Projects</span>
        </h1>
        <p className="mt-4 text-gray-500 dark:text-gray-400">
          Selected works & creative experiments
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            {/* Image */}
            <div className="relative h-56 w-full overflow-hidden">
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black px-5 py-2 rounded-full font-semibold flex items-center gap-2 shadow-md hover:scale-105 transition"
                >
                  {project.type === "Mobile App" ? "View on GitHub" : "View Project"}
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 bg-white dark:bg-zinc-900">
              <span className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full">
                {project.type}
              </span>

              <h2 className="mt-3 text-xl font-bold text-gray-800 dark:text-white group-hover:text-rose-600 transition">
                {project.name}
              </h2>

              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
