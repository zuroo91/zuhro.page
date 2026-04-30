"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/skills", label: "Skills" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="px-6 py-2 bg-white/20 backdrop-blur-lg rounded-full shadow-lg flex items-center space-x-6">
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-gray-800 font-medium">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="relative group">
              {link.label}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-rose-600 transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-3 bg-white/80 backdrop-blur-md rounded-2xl shadow-md p-6 space-y-4 text-gray-800 font-medium text-center"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block hover:text-rose-600 transition"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
