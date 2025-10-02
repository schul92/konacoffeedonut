'use client';

import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-6 flex justify-between items-center">
          <div className="text-xl md:text-2xl font-medium">
            Kona Coffee Donut<span className="text-orange-500">?</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-10 text-base">
            <a href="#menu" className="hover:opacity-60 transition-opacity">Menu</a>
            <a href="#about" className="hover:opacity-60 transition-opacity">About Us</a>
            <a href="#location" className="hover:opacity-60 transition-opacity">Location</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? '×' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t px-4 py-6 space-y-4">
            <a href="#menu" className="block text-lg" onClick={() => setMenuOpen(false)}>Menu</a>
            <a href="#about" className="block text-lg" onClick={() => setMenuOpen(false)}>About Us</a>
            <a href="#location" className="block text-lg" onClick={() => setMenuOpen(false)}>Location</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-medium">
            Kona Coffee Donut<span className="text-orange-500">?</span>
          </h1>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 md:py-16 bg-black text-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-medium mb-2">
                Kona Coffee Donut<span className="text-orange-500">?</span>
              </h3>
              <p className="opacity-60">Handcrafted with Aloha</p>
            </div>
            <div className="flex gap-8 text-base">
              <a href="#menu" className="opacity-60 hover:opacity-100 transition-opacity">
                Menu
              </a>
              <a href="#about" className="opacity-60 hover:opacity-100 transition-opacity">
                About Us
              </a>
              <a href="#location" className="opacity-60 hover:opacity-100 transition-opacity">
                Location
              </a>
              <a
                href="https://imdonut.nyc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:text-orange-400 transition-colors"
              >
                I'm donut ?
              </a>
            </div>
          </div>

          {/* Collaboration Partners */}
          <div className="pt-8 border-t border-white/10">
            <p className="text-center text-sm opacity-60 mb-6">In collaboration with</p>
            <div className="flex justify-center items-center gap-8 md:gap-12 mb-8">
              <img
                src="/honolulu_coffee.webp"
                alt="Honolulu Coffee"
                className="h-12 md:h-16 object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src="/mochi_land_circle.png"
                alt="Mochiland"
                className="h-12 md:h-16 object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 text-center opacity-40 text-sm">
            <p>&copy; 2025 Kona Coffee Donut? All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
