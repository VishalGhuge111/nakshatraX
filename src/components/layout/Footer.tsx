import { motion } from 'framer-motion';
import { Rocket, Star, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-card/50 backdrop-blur-lg border-t border-border mt-20"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Rocket className="h-6 w-6 text-primary" />
              <span className="text-xl font-orbitron font-bold neon-text">
                NakshatraX
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Explore beyond Earth with advanced space mission simulation technology.
            </p>
            <div className="flex space-x-4">
              <Star className="h-5 w-5 text-space-gold" />
              <Globe className="h-5 w-5 text-primary" />
              <Rocket className="h-5 w-5 text-accent" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-orbitron font-semibold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/missions" className="text-muted-foreground hover:text-primary transition-colors">Missions</a></li>
              <li><a href="/simulator" className="text-muted-foreground hover:text-primary transition-colors">Simulator</a></li>
              <li><a href="/atlas" className="text-muted-foreground hover:text-primary transition-colors">Atlas Tracking</a></li>
              <li><a href="/leaderboard" className="text-muted-foreground hover:text-primary transition-colors">Leaderboard</a></li>
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h3 className="font-orbitron font-semibold mb-4 text-primary">Learn</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/learn" className="text-muted-foreground hover:text-primary transition-colors">Solar System</a></li>
              <li><a href="/docs" className="text-muted-foreground hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Mission Stats */}
          <div>
            <h3 className="font-orbitron font-semibold mb-4 text-primary">Mission Stats</h3>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Planets Explored</span>
                <span className="text-space-gold font-medium">8</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Active Missions</span>
                <span className="text-primary font-medium">24</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Distance Traveled</span>
                <span className="text-accent font-medium">∞ km</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 NakshatraX. Exploring the cosmos, one mission at a time.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}