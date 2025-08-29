import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Sun, 
  Globe, 
  Moon, 
  Rocket, 
  Telescope,
  Atom,
  Orbit,
  Zap
} from 'lucide-react';
import Layout from '@/components/layout/Layout';

export default function Learn() {
  const topics = [
    {
      icon: <Sun className="h-8 w-8 text-space-gold" />,
      title: "Our Solar System",
      description: "Learn about the Sun, planets, moons, and other celestial bodies in our cosmic neighborhood.",
      facts: [
        "The Sun contains 99.86% of the Solar System's mass",
        "Jupiter is larger than all other planets combined",
        "One day on Venus is longer than its year",
        "Saturn's rings are made of ice and rock particles"
      ]
    },
    {
      icon: <Telescope className="h-8 w-8 text-primary" />,
      title: "Interstellar Objects",
      description: "Discover rare visitors from beyond our solar system and what they can teach us.",
      facts: [
        "3I/ATLAS travels at ~26 km/s through space",
        "Interstellar objects visit once every few decades",
        "They carry information about other star systems",
        "Studying them requires precise timing and planning"
      ]
    },
    {
      icon: <Rocket className="h-8 w-8 text-accent" />,
      title: "Space Missions",
      description: "Explore the history and future of human space exploration and robotic missions.",
      facts: [
        "Voyager 1 is now in interstellar space",
        "The Parker Solar Probe will 'touch' the Sun",
        "Mars missions take 6-9 months to travel",
        "Ion drives can accelerate for years continuously"
      ]
    },
    {
      icon: <Orbit className="h-8 w-8 text-space-green" />,
      title: "Orbital Mechanics",
      description: "Understand the physics of how spacecraft navigate through the cosmos.",
      facts: [
        "Gravity assists can double spacecraft speed",
        "Lower orbits are actually faster than higher ones",
        "Hohmann transfers are most fuel-efficient",
        "Escape velocity from Earth is 11.2 km/s"
      ]
    }
  ];

  const planetData = [
    {
      name: "Mercury",
      distance: "58 million km",
      period: "88 days",
      fact: "Closest to the Sun, with extreme temperature variations"
    },
    {
      name: "Venus",
      distance: "108 million km", 
      period: "225 days",
      fact: "Hottest planet due to runaway greenhouse effect"
    },
    {
      name: "Earth",
      distance: "150 million km",
      period: "365 days", 
      fact: "The only known planet with life in the universe"
    },
    {
      name: "Mars",
      distance: "228 million km",
      period: "687 days",
      fact: "The Red Planet with the largest volcano in the solar system"
    },
    {
      name: "Jupiter",
      distance: "778 million km",
      period: "12 years",
      fact: "Gas giant with over 80 moons and a Great Red Spot storm"
    },
    {
      name: "Saturn",
      distance: "1.4 billion km",
      period: "29 years",
      fact: "Famous for its spectacular ring system made of ice and rock"
    },
    {
      name: "Uranus",
      distance: "2.9 billion km",
      period: "84 years",
      fact: "Ice giant that rotates on its side at a 98° tilt"
    },
    {
      name: "Neptune",
      distance: "4.5 billion km",
      period: "165 years",
      fact: "Windiest planet with speeds up to 2,100 km/h"
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-orbitron font-bold mb-6 text-primary">
            Learn Space Science
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the wonders of our solar system, understand orbital mechanics, 
            and learn about the incredible missions that expand human knowledge.
          </p>
        </motion.div>

        {/* Educational Topics */}
        <section className="mb-20">
          <h2 className="text-3xl font-orbitron font-bold mb-8 text-center text-primary">
            Educational Topics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {topics.map((topic, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="space-card hover:neon-glow transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      {topic.icon}
                      <CardTitle className="font-orbitron text-xl">
                        {topic.title}
                      </CardTitle>
                    </div>
                    <p className="text-muted-foreground">
                      {topic.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {topic.facts.map((fact, factIndex) => (
                        <div key={factIndex} className="flex items-start space-x-2">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <p className="text-sm text-muted-foreground">{fact}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Solar System Overview */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-orbitron font-bold mb-4 text-primary">
              Solar System Overview
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore detailed information about each planet in our solar system.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {planetData.map((planet, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="space-card hover:neon-glow transition-all duration-300">
                  <CardHeader className="text-center">
                    <Globe className="h-8 w-8 text-primary mx-auto mb-2" />
                    <CardTitle className="font-orbitron text-lg">
                      {planet.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <p className="text-xs text-muted-foreground">Distance from Sun</p>
                      <p className="text-sm font-medium text-space-gold">{planet.distance}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Orbital Period</p>
                      <p className="text-sm font-medium text-primary">{planet.period}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Interesting Fact</p>
                      <p className="text-sm">{planet.fact}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 3I/ATLAS Special Section */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-card max-w-4xl mx-auto"
          >
            <div className="text-center mb-8">
              <Atom className="h-12 w-12 text-space-purple mx-auto mb-4" />
              <h2 className="text-3xl font-orbitron font-bold mb-4 text-primary">
                3I/ATLAS: The Interstellar Visitor
              </h2>
              <p className="text-lg text-muted-foreground">
                A rare opportunity to study a visitor from beyond our solar system.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-orbitron font-semibold mb-4 text-space-gold">
                  Scientific Importance
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Provides insights into other star systems</li>
                  <li>• Contains pristine materials from interstellar space</li>
                  <li>• Helps us understand planetary formation processes</li>
                  <li>• Offers clues about the galaxy's chemical evolution</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-orbitron font-semibold mb-4 text-accent">
                  Mission Challenges
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Extremely high velocity (~26 km/s)</li>
                  <li>• Limited time window for interception</li>
                  <li>• Requires precise trajectory calculations</li>
                  <li>• Demands advanced propulsion technology</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </Layout>
  );
}