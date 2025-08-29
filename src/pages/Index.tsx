import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Rocket, 
  Target, 
  Zap, 
  Globe, 
  Users, 
  Brain,
  ChevronRight,
  Play
} from 'lucide-react';
import Layout from '@/components/layout/Layout';

const Index = () => {
  const features = [
    {
      icon: <Rocket className="h-8 w-8 text-primary" />,
      title: "Interactive Missions",
      description: "Launch rockets, navigate space, and complete challenging objectives with realistic physics."
    },
    {
      icon: <Target className="h-8 w-8 text-space-gold" />,
      title: "Real-time Orbit Tracking",
      description: "Track the 3I/ATLAS interstellar object and plan precise interception missions."
    },
    {
      icon: <Brain className="h-8 w-8 text-accent" />,
      title: "AI Co-pilot",
      description: "Get intelligent mission guidance and real-time assistance from your AI companion."
    },
    {
      icon: <Users className="h-8 w-8 text-space-green" />,
      title: "Gamification",
      description: "Compete with others, earn achievements, and climb the mission leaderboards."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-6xl md:text-8xl font-orbitron font-bold mb-6 bg-gradient-neon bg-clip-text text-transparent">
              NakshatraX
            </h1>
            <p className="text-2xl md:text-3xl font-orbitron mb-4 text-primary-glow">
              Explore Beyond Earth
            </p>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Advanced space mission simulation platform for exploring the solar system, 
              intercepting interstellar objects, and pushing the boundaries of human spaceflight.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="btn-hero text-lg px-8 py-6">
                <Link to="/missions">
                  <Play className="mr-2 h-5 w-5" />
                  Start Mission
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link to="/learn">
                  <Globe className="mr-2 h-5 w-5" />
                  Explore Solar System
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Project Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 text-primary">
              Mission: Intercept 3I/ATLAS
            </h2>
            <p className="text-lg text-muted-foreground">
              The 3I/ATLAS comet represents a rare opportunity to study an interstellar visitor. 
              With its hyperbolic trajectory and incredible speed of 26 km/s, this mission requires 
              precise calculations, advanced propulsion, and perfect timing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-card"
            >
              <h3 className="text-2xl font-orbitron font-semibold mb-4 text-space-gold">
                The Challenge
              </h3>
              <p className="text-muted-foreground mb-4">
                Interstellar objects like 3I/ATLAS visit our solar system only once every few decades. 
                This comet's hyperbolic orbit means we have a limited window to intercept and study it.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Speed: ~26 km/s (extremely fast)</li>
                <li>• Origin: Beyond our solar system</li>
                <li>• Opportunity: Once in a lifetime</li>
                <li>• Mission complexity: Extreme</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-card"
            >
              <h3 className="text-2xl font-orbitron font-semibold mb-4 text-accent">
                Our Solution
              </h3>
              <p className="text-muted-foreground mb-4">
                NakshatraX provides advanced simulation tools to plan and execute this critical mission, 
                combining real orbital mechanics with cutting-edge spacecraft technology.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Real-time trajectory calculation</li>
                <li>• Multiple propulsion options</li>
                <li>• Mission success optimization</li>
                <li>• Educational mission insights</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 text-primary">
              Platform Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience space exploration like never before with our comprehensive mission simulation platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="space-card hover:neon-glow transition-all duration-300 h-full">
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                      {feature.icon}
                    </div>
                    <CardTitle className="font-orbitron text-xl">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center space-card"
          >
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 text-primary">
              Ready to Launch?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Begin your journey into deep space. Plan missions, explore planets, 
              and make history by intercepting the 3I/ATLAS comet.
            </p>
            <Button asChild size="lg" className="btn-hero text-lg px-8 py-6">
              <Link to="/missions">
                <Rocket className="mr-2 h-5 w-5" />
                Launch Your First Mission
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
