"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen w-full flex justify-center items-start pt-20 px-10">
      <div className="w-full max-w-6xl flex gap-6">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex-1 relative rounded-2xl overflow-hidden h-[450px]"
        >
          <img
            src="/pfp.jpeg" 
            alt="foto ku"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <h1 className="text-2xl font-bold">Zuhro</h1>
            <p className="text-gray-200 text-sm">
              Pelajar SMKN 8 Malang jurusan RPL yang fokus pada pengembangan web dan mobile. Memiliki ketertarikan dalam membuat tampilan aplikasi yang rapi, responsif, dan user-friendly. Terbiasa menggunakan Flutter serta terus mengembangkan kemampuan melalui berbagai project.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          className="flex flex-col gap-6 w-1/3"
        >
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-xl font-bold mb-4 text-gray-900">Pendidikan Saat Ini</h2>
            <p className="font-semibold text-gray-800">Sekolah</p>
            <p className="text-gray-500 mb-3">SMKN 8 Malang</p>
            <p className="font-semibold text-gray-800">Jurusan</p>
            <p className="text-gray-500">Rekayasa Perangkat Lunak</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-xl font-bold mb-4 text-gray-900">Nilai Kerja</h2>
            <ul className="space-y-2 text-gray-600">
              <li> 1 Selalu berusaha meningkatkan kualitas hasil kerja</li>
              <li> 2 Terbuka terhadap feedback untuk pengembangan diri</li>
              <li> 3 Mampu bekerja mandiri maupun dalam tim</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}