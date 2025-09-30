'use client';

import { motion } from 'framer-motion';
import { Coffee, MapPin, Clock, Instagram } from 'lucide-react';

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: 'easeOut' },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <motion.section
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="relative min-h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
                Kona Coffee
                <br />
                <span className="text-primary">Donut</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
                Where Hawaiian tradition meets artisanal craftsmanship. Each donut is handmade with premium Kona coffee and island-inspired flavors.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium text-lg hover:bg-accent transition-colors"
                >
                  View Menu
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-border rounded-full font-medium text-lg hover:bg-muted transition-colors"
                >
                  Order Now
                </motion.button>
              </div>
            </motion.div>

            {/* Hero Image Placeholder */}
            <motion.div
              variants={fadeInUp}
              className="relative h-[400px] md:h-[600px] rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden"
            >
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                <Coffee size={120} strokeWidth={1} />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 right-20 w-32 h-32 rounded-full bg-accent/10 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-20 left-20 w-40 h-40 rounded-full bg-primary/10 blur-3xl"
        />
      </motion.section>

      {/* About Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1 }}
        className="py-24 px-6 md:px-12 bg-muted/30"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-6xl font-bold">
                Crafted with Aloha
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our journey began with a simple question: What if we combined the rich, volcanic essence of 100% Kona coffee with the artistry of handcrafted donuts?
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every morning, we hand-craft small batches using traditional techniques and the finest ingredients sourced from Hawaiian farms. The result? A unique fusion that honors both coffee culture and pastry excellence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] rounded-3xl bg-gradient-to-br from-accent/20 to-primary/20"
            >
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                <Coffee size={100} strokeWidth={1} />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Features Grid */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Makes Us Special
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every detail matters in creating the perfect donut experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Coffee,
                title: '100% Kona Coffee',
                description: 'Premium beans sourced directly from Hawaiian coffee farms, roasted to perfection.',
              },
              {
                icon: Clock,
                title: 'Fresh Daily',
                description: 'Small batches made every morning to ensure maximum freshness and quality.',
              },
              {
                icon: MapPin,
                title: 'Island Inspired',
                description: 'Unique flavors that celebrate Hawaiian culture and tropical ingredients.',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="p-8 rounded-2xl bg-muted/50 hover:bg-muted transition-colors"
              >
                <feature.icon className="w-12 h-12 mb-6 text-primary" strokeWidth={1.5} />
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="py-32 px-6 md:px-12 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10"
      >
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-5xl md:text-6xl font-bold">
            Experience the Taste of Aloha
          </h2>
          <p className="text-xl text-muted-foreground">
            Visit us today and discover your new favorite donut
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-primary text-primary-foreground rounded-full font-medium text-lg hover:bg-accent transition-colors"
            >
              Find Location
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 border-2 border-border rounded-full font-medium text-lg hover:bg-muted transition-colors flex items-center justify-center gap-2"
            >
              <Instagram size={20} />
              Follow Us
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Kona Coffee Donut</h3>
              <p className="text-muted-foreground">Handcrafted with Aloha</p>
            </div>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Menu
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Kona Coffee Donut. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
