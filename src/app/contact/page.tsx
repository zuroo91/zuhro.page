"use client";

import { motion } from "framer-motion";
import { Mail, Github, Phone } from "lucide-react";
import Footer from "@/components/footer";

export default function ContactPage() {
  const contacts = [
    {
      icon: <Mail size={26} />,
      title: "Email",
      value: "zuhro91.45@gmail.com",
      link: "mailto:zuhro91.45@gmail.com",
    },
    {
      icon: <Github size={26} />,
      title: "GitHub",
      value: "github.com/zuroo91",
      link: "https://github.com/zuroo91",
    },
    {
      icon: <Phone size={26} />,
      title: "Phone",
      value: "+62 895-1039-0661",
      link: "tel:+6289510390661",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col justify-between">
      {/* Hero */}
      <div className="pt-32 pb-16 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-extrabold"
        >
          Get In <span className="text-rose-600">Touch</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-gray-500 max-w-xl mx-auto"
        >
          You can reach me through these platforms
        </motion.p>
      </div>

      {/* Contact List (NO CARD) */}
      <div className="max-w-2xl mx-auto w-full px-6 pb-24 space-y-8">
        {contacts.map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            className="group flex items-center justify-between border-b border-gray-200 pb-4 hover:border-rose-500 transition"
          >
            <div className="flex items-center gap-4">
              <div className="text-rose-500">{item.icon}</div>

              <div>
                <p className="text-sm text-gray-500">{item.title}</p>
                <p className="font-medium group-hover:text-rose-600 transition">
                  {item.value}
                </p>
              </div>
            </div>

            <span className="text-sm text-gray-400 group-hover:text-rose-500 transition">
              →
            </span>
          </motion.a>
        ))}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
