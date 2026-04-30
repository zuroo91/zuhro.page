"use client";

import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiFlutter, SiNextdotjs, SiSupabase, SiMysql, SiFigma, SiCanva } from "react-icons/si";
import { motion } from "framer-motion";

export default function Skills() {
  const skillGroups = [
    {
      title: "Frontend",
      items: [
        { icon: <FaHtml5 className="mx-auto text-6xl text-orange-500 drop-shadow-[0_0_12px_#f97316]" />, name: "HTML" },
        { icon: <FaCss3Alt className="mx-auto text-6xl text-blue-500 drop-shadow-[0_0_12px_#3b82f6]" />, name: "CSS" },
        { icon: <FaJs className="mx-auto text-6xl text-yellow-400 drop-shadow-[0_0_12px_#facc15]" />, name: "JavaScript" },
        { icon: <FaReact className="mx-auto text-6xl text-cyan-400 drop-shadow-[0_0_12px_#22d3ee]" />, name: "React" },
        { icon: <SiNextdotjs className="mx-auto text-6xl text-black drop-shadow-[0_0_12px_#000]" />, name: "Next.js" },
      ],
    },
    {
      title: "Mobile & Backend",
      items: [
        { icon: <SiFlutter className="mx-auto text-6xl text-sky-500 drop-shadow-[0_0_12px_#0ea5e9]" />, name: "Flutter" },
        { icon: <SiSupabase className="mx-auto text-6xl text-green-500 drop-shadow-[0_0_12px_#22c55e]" />, name: "Supabase" },
        { icon: <SiMysql className="mx-auto text-6xl text-blue-600 drop-shadow-[0_0_12px_#2563eb]" />, name: "MySQL" },
      ],
    },
    {
      title: "Design & Tools",
      items: [
        { icon: <SiFigma className="mx-auto text-6xl text-pink-500 drop-shadow-[0_0_12px_#ec4899]" />, name: "Figma" },
        { icon: <SiCanva className="mx-auto text-6xl text-teal-400 drop-shadow-[0_0_12px_#2dd4bf]" />, name: "Canva" },
      ],
    },
  ];

  return (
    <div className="w-full py-24 bg-white">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight">
          My <span className="text-rose-500">Skills</span>
        </h1>
        <p className="mt-3 text-gray-500 text-lg">Tools & technologies I use</p>
        <span className="block w-20 h-1 bg-rose-500 mx-auto mt-4 rounded-full"></span>
      </motion.div>

      <div className="max-w-5xl mx-auto space-y-16">
        {skillGroups.map((group, gIndex) => (
          <div key={gIndex}>
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
              {group.title}
            </h2>

            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 gap-12"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: {
                  transition: { staggerChildren: 0.2 },
                },
              }}
            >
              {group.items.map((skill, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, x: i % 2 === 0 ? -60 : 60 },
                    show: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  whileHover={{ scale: 1.08, boxShadow: "0 12px 30px rgba(244,63,94,0.25)" }}
                  className="bg-white border border-gray-200 rounded-2xl shadow-md 
                             p-10 flex flex-col items-center justify-center 
                             hover:shadow-2xl transition-all duration-300"
                >
                  {skill.icon}
                  <p className="mt-6 text-xl font-semibold text-gray-800">
                    {skill.name}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}