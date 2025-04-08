"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-sky-900 to-black text-white">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-black/70 backdrop-blur-md shadow-md p-4 flex justify-between items-center">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-sky-400"
        >
          DroneTrack
        </motion.h1>
        <nav className="space-x-4 text-sm">
          <motion.a
            href="#track"
            whileHover={{ scale: 1.1 }}
            className="hover:text-sky-300"
          >
            Live Track
          </motion.a>
          <motion.a
            href="#about"
            whileHover={{ scale: 1.1 }}
            className="hover:text-sky-300 rounded-md bg-blue-600 p-0.5 px-0.5 w-16 h-16 inline-flex items-center justify-center"
          >
            Mr.Yaka
          </motion.a>
        </nav>
      </header>

      {/* HERO */}
      <section className="text-center py-24 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-bold mb-4"
        >
          Live Drone Tracking
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-lg text-gray-300 mb-6"
        >
          Monitor your drone's location in real time using advanced GPS and
          cloud updates.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg"
        >
          Start Tracking
        </motion.button>
      </section>

      {/* DEMO TRACKING SECTION */}
      <section id="track" className="px-6 sm:px-16 py-12 bg-gray-800">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-2xl font-semibold text-center mb-6"
        >
          📡 Demo Drone Tracker
        </motion.h3>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full h-96 bg-black rounded-lg shadow-inner flex items-center justify-center"
        >
          <p className="text-gray-400 text-sm">Map loading here...</p>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer id="about" className="text-center text-sm text-gray-400 py-8">
        <p>© 2025 DroneTrack. Built by ElBalor.</p>
      </footer>
    </div>
  );
}
