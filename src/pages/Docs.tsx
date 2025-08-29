import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  BookOpen, 
  Rocket, 
  Navigation, 
  Target,
  Gamepad2,
  Zap,
  Settings,
  HelpCircle
} from 'lucide-react';
import Layout from '@/components/layout/Layout';

export default function Docs() {
  const sections = [
    {
      icon: <Rocket className="h-8 w-8 text-primary" />,
      title: "Getting Started",
      description: "Learn the basics of space mission planning and execution",
      content: [
        "Choose your rocket type based on mission requirements",
        "Select mission objectives: planet exploration, system tour, or Atlas intercept",
        "Plan your trajectory considering fuel efficiency and time constraints", 
        "Launch when orbital mechanics are favorable",
        "Monitor fuel, velocity, and position throughout the mission"
      ]
    },
    {
      icon: <Navigation className="h-8 w-8 text-space-gold" />,
      title: "Navigation Controls",
      description: "Master spacecraft movement and camera controls",
      content: [
        "Mouse drag: Rotate camera view in 3D space",
        "Scroll wheel: Zoom in and out of the solar system",
        "Arrow keys: Fine movement control in simulator mode",
        "WASD keys: Primary movement (W=forward, S=back, A/D=strafe)",
        "Q/E keys: Vertical movement (up/down) in free-roam mode"
      ]
    },
    {
      icon: <Target className="h-8 w-8 text-accent" />,
      title: "Mission Types",
      description: "Understanding different mission objectives and requirements",
      content: [
        "Planet Exploration: Visit and study specific planets in detail",
        "Solar System Tour: Complete circuit of multiple celestial bodies",
        "Atlas Intercept: Advanced mission to catch the interstellar comet",
        "Free Exploration: Sandbox mode with unlimited fuel and time",
        "Each mission type has different success criteria and scoring"
      ]
    },
    {
      icon: <Zap className="h-8 w-8 text-space-green" />,
      title: "Propulsion Systems",
      description: "Choose the right rocket technology for your mission",
      content: [
        "Falcon Heavy: High thrust, fast acceleration, moderate fuel efficiency",
        "Ion Drive: Low thrust, continuous acceleration, extremely fuel efficient",
        "Solar Sail: No fuel required, uses solar wind, slow but unlimited range",
        "Each system has trade-offs between speed, fuel consumption, and capability",
        "Mission success often depends on choosing the right propulsion type"
      ]
    },
    {
      icon: <Gamepad2 className="h-8 w-8 text-space-purple" />,
      title: "Game Mechanics",
      description: "Understand scoring, fuel management, and success conditions",
      content: [
        "Fuel consumption varies by thrust level and propulsion system",
        "Mission time affects your final score multiplier", 
        "Precision landings and intercepts earn bonus points",
        "Fuel efficiency bonuses for completing missions with reserves",
        "Failed missions can be restarted with different strategies"
      ]
    },
    {
      icon: <Settings className="h-8 w-8 text-muted-foreground" />,
      title: "Advanced Features",
      description: "Utilize advanced tools and simulation features",
      content: [
        "Real-time orbital mechanics simulation with gravitational influences",
        "Atlas tracking shows current position and trajectory predictions",
        "Mission planning tools help optimize launch windows",
        "Leaderboard tracking for competitive play",
        "Educational content explains real space science concepts"
      ]
    }
  ];

  const troubleshooting = [
    {
      question: "My spacecraft isn't moving when I press controls",
      answer: "Check your fuel levels - movement requires fuel except in sandbox mode. Also ensure you've selected a thrust level in the mission control panel."
    },
    {
      question: "I can't catch up to the Atlas comet",
      answer: "Atlas moves at 26 km/s on a hyperbolic trajectory. Use the Ion Drive for sustained acceleration and plan your intercept trajectory carefully. This is meant to be extremely challenging!"
    },
    {
      question: "The 3D view is laggy or stuttering",
      answer: "Try zooming closer to reduce the number of rendered objects. Close other browser tabs to free up memory. The simulation is computationally intensive."
    },
    {
      question: "My mission score seems low despite success",
      answer: "Scores are based on efficiency, speed, and fuel conservation. Try completing missions faster with less fuel waste for higher scores."
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
            Mission Documentation
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Complete guide to mastering NakshatraX space missions. 
            Learn navigation, understand game mechanics, and become an elite space commander.
          </p>
        </motion.div>

        {/* Documentation Sections */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="space-card hover:neon-glow transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      {section.icon}
                      <CardTitle className="font-orbitron text-xl">
                        {section.title}
                      </CardTitle>
                    </div>
                    <p className="text-muted-foreground">
                      {section.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-2">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Quick Reference */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-card max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-orbitron font-bold mb-8 text-center text-primary">
              Quick Reference Guide
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-orbitron font-semibold mb-4 text-space-gold">
                  Essential Controls
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Camera Rotation:</span>
                    <span>Mouse Drag</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Zoom:</span>
                    <span>Mouse Wheel</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Movement:</span>
                    <span>WASD + Q/E</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Launch Mission:</span>
                    <span>Mission Panel</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-orbitron font-semibold mb-4 text-accent">
                  Mission Tips
                </h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• Start with planetary missions before attempting Atlas intercept</p>
                  <p>• Monitor fuel consumption - running out means mission failure</p>
                  <p>• Use gravitational assists to save fuel on long journeys</p>
                  <p>• Practice in simulator mode to learn controls safely</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Troubleshooting */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-orbitron font-bold mb-4 text-primary">
              Troubleshooting
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Common issues and solutions to help you succeed in your missions.
            </p>
          </motion.div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {troubleshooting.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="space-card">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <HelpCircle className="h-5 w-5 text-primary" />
                      <CardTitle className="font-orbitron text-lg">
                        {item.question}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center space-card max-w-2xl mx-auto"
        >
          <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-orbitron font-bold mb-4 text-primary">
            Ready for Launch?
          </h2>
          <p className="text-muted-foreground mb-6">
            Now that you understand the fundamentals, it's time to put your knowledge to the test. 
            Start with a simple planetary mission or dive straight into the challenge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/missions"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary-glow transition-colors"
            >
              <Rocket className="mr-2 h-4 w-4" />
              Start First Mission
            </a>
            <a 
              href="/simulator"
              className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-md font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Navigation className="mr-2 h-4 w-4" />
              Practice in Simulator
            </a>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}