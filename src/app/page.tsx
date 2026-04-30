"use client";

import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 pt-32">
      <div className="flex items-center space-x-8">
        <div className="relative w-56 h-56">
          <Image
            src="/zuroo.jpg"
            alt="Profile"
            width={224}
            height={224}
            className="w-56 h-56 object-cover rounded-full border-4 border-white shadow-lg"
          />
          <div className="absolute inset-0 rounded-full animate-pulse shadow-[0_0_35px_10px_rgba(244,63,94,0.7)]"></div>
        </div>
        <div className="text-left">
          <h1 className="text-4xl font-extrabold text-gray-900">zuhro</h1>
          <TypeAnimation
            sequence={[
              "Welcome to my page", 1500,
              "Web Developer", 1500,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="block text-gray-600 mt-3 text-lg"
          />
        </div>
      </div>

      <div className="flex justify-center gap-6 mt-12">
        <Link
          href="https://drive.google.com/file/d/1uvyNX-ytHuyXzFe-2i69lbMiSNVCVopB/view?usp=drivesdk"
          target="_blank"
          className="px-10 py-3 bg-rose-500 hover:bg-rose-600 
                     text-white font-semibold rounded-xl 
                     shadow-md transition transform hover:scale-105 text-lg"
        >
          View CV
        </Link>
        <Link
          href="/projects"
          className="px-10 py-3 bg-green-500 hover:bg-green-600 
                     text-white font-semibold rounded-xl 
                     shadow-md transition transform hover:scale-105 text-lg"
        >
          Projects
        </Link>
      </div>
    </div>
  );
}
