'use client'

import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl"
      >
        <h1 className="text-5xl md:text-7xl font-luxury text-mip-cream mb-4">MIP</h1>
        <p className="text-lg md:text-xl text-mip-cream/90 max-w-xl mx-auto">
          Experience the world's most powerful luxury perfume — elegance, passion, perfection.
        </p>
        <a
          href="#"
          className="inline-block mt-8 px-8 py-3 bg-mip-gold text-mip-dark rounded-full font-semibold shadow-lg hover:opacity-95"
        >
          Explore Collection
        </a>
      </motion.div>
    </main>
  )
}
