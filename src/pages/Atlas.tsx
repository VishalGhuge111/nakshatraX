import { useState } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Text, Sphere, Line } from '@react-three/drei';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Target, 
  Zap, 
  Clock, 
  Gauge,
  MapPin,
  TrendingUp
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import * as THREE from 'three';

// Atlas orbit visualization component
function AtlasOrbitVisualization() {
  // Create hyperbolic trajectory points
  const points = [];
  for (let i = -50; i <= 100; i += 2) {
    const t = i * 0.05;
    const x = t * 8;
    const y = Math.sin(t * 0.5) * 3;
    const z = t * t * 0.02;
    points.push(new THREE.Vector3(x, y, z));
  }

  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[0, 0, 0]} intensity={1.5} />
      <Stars radius={200} depth={50} count={2000} factor={4} />
      
      {/* Sun */}
      <Sphere args={[1, 32, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#FDB813" emissive="#FDB813" emissiveIntensity={0.3} />
      </Sphere>
      
      {/* Earth for reference */}
      <Sphere args={[0.3, 16, 16]} position={[8, 0, 0]}>
        <meshStandardMaterial color="#6B93D6" />
      </Sphere>
      <Text position={[8, 1.5, 0]} fontSize={0.4} color="white">Earth</Text>
      
      {/* Atlas trajectory */}
      <Line points={points} color="#FF69B4" lineWidth={3} />
      
      {/* Current Atlas position */}
      <Sphere args={[0.2, 16, 16]} position={[20, 1, 2]}>
        <meshStandardMaterial color="#FFB6C1" emissive="#FF69B4" emissiveIntensity={0.5} />
      </Sphere>
      <Text position={[20, 2.5, 2]} fontSize={0.6} color="#FF69B4">3I/ATLAS</Text>
      
      <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
    </>
  );
}

export default function Atlas() {
  const [viewMode, setViewMode] = useState<'overview' | 'tracking' | 'mission'>('overview');

  const atlasData = {
    currentDistance: "2.3 AU from Sun",
    velocity: "26.1 km/s",
    perihelion: "0.39 AU (May 2024)",
    inclination: "45.7°",
    eccentricity: "1.93 (hyperbolic)",
    nextClosestApproach: "Never (leaving solar system)"
  };

  const missionScenarios = [
    {
      name: "Fast Flyby",
      duration: "18 months",
      deltaV: "15.2 km/s",
      difficulty: "Moderate",
      success: "75%",
      description: "Quick reconnaissance mission with minimal science return"
    },
    {
      name: "Intercept & Sample",
      duration: "24 months", 
      deltaV: "22.8 km/s",
      difficulty: "Extreme",
      success: "35%",
      description: "High-risk mission to collect samples from Atlas surface"
    },
    {
      name: "Formation Flying",
      duration: "6 months",
      deltaV: "28.5 km/s", 
      difficulty: "Impossible",
      success: "5%",
      description: "Accompany Atlas for extended observation period"
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
            3I/ATLAS Tracking
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-time tracking and mission planning for the interstellar comet 3I/ATLAS, 
            our window into the cosmos beyond our solar system.
          </p>
        </motion.div>

        {/* View Mode Selector */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg border border-border bg-card p-1">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'tracking', label: 'Live Tracking' },
              { id: 'mission', label: 'Mission Planning' }
            ].map((mode) => (
              <button
                key={mode.id}
                onClick={() => setViewMode(mode.id as any)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  viewMode === mode.id
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                {mode.label}
              </button>
            ))}
          </div>
        </div>

        {/* Overview Mode */}
        {viewMode === 'overview' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-12"
          >
            {/* Atlas Stats */}
            <section>
              <h2 className="text-3xl font-orbitron font-bold mb-8 text-center text-primary">
                Current Atlas Status
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(atlasData).map(([key, value], index) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="space-card hover:neon-glow transition-all duration-300">
                      <CardHeader className="text-center">
                        <div className="flex justify-center mb-2">
                          {key.includes('distance') && <MapPin className="h-6 w-6 text-space-gold" />}
                          {key.includes('velocity') && <Zap className="h-6 w-6 text-primary" />}
                          {key.includes('perihelion') && <Target className="h-6 w-6 text-accent" />}
                          {key.includes('inclination') && <TrendingUp className="h-6 w-6 text-space-green" />}
                          {key.includes('eccentricity') && <Gauge className="h-6 w-6 text-space-purple" />}
                          {key.includes('approach') && <Clock className="h-6 w-6 text-destructive" />}
                        </div>
                        <CardTitle className="font-orbitron text-lg capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-center font-medium text-lg">{value}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Scientific Significance */}
            <section className="space-card max-w-4xl mx-auto">
              <h2 className="text-3xl font-orbitron font-bold mb-6 text-center text-primary">
                Why 3I/ATLAS Matters
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-orbitron font-semibold mb-4 text-space-gold">
                    Scientific Value
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 rounded-full bg-space-gold mt-2 flex-shrink-0" />
                      <span>Contains pristine interstellar material unchanged for millions of years</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 rounded-full bg-space-gold mt-2 flex-shrink-0" />
                      <span>Provides insights into other star systems and their formation</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 rounded-full bg-space-gold mt-2 flex-shrink-0" />
                      <span>Helps understand the distribution of elements in our galaxy</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-orbitron font-semibold mb-4 text-accent">
                    Mission Urgency
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>Limited window - Atlas will never return to our solar system</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>Technology demonstration for future interstellar missions</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>Once-in-a-generation opportunity for humanity</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </motion.div>
        )}

        {/* Live Tracking Mode */}
        {viewMode === 'tracking' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-orbitron font-bold text-center text-primary mb-8">
              Live Orbital Visualization
            </h2>
            <div className="h-[600px] rounded-lg overflow-hidden border border-border">
              <Canvas camera={{ position: [30, 20, 30], fov: 60 }}>
                <AtlasOrbitVisualization />
              </Canvas>
            </div>
            <div className="text-center text-muted-foreground">
              <p>Interactive 3D visualization of 3I/ATLAS trajectory through our solar system</p>
              <p className="text-sm mt-2">Click and drag to rotate • Scroll to zoom • Pink line shows hyperbolic orbit</p>
            </div>
          </motion.div>
        )}

        {/* Mission Planning Mode */}
        {viewMode === 'mission' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-orbitron font-bold text-center text-primary mb-8">
              Mission Scenarios
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {missionScenarios.map((scenario, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="space-card hover:neon-glow transition-all duration-300 h-full">
                    <CardHeader>
                      <CardTitle className="font-orbitron text-xl text-primary">
                        {scenario.name}
                      </CardTitle>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Duration:</span>
                          <span className="font-medium">{scenario.duration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">ΔV Required:</span>
                          <span className="font-medium text-space-gold">{scenario.deltaV}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Difficulty:</span>
                          <span className={`font-medium ${
                            scenario.difficulty === 'Moderate' ? 'text-space-green' :
                            scenario.difficulty === 'Extreme' ? 'text-space-gold' : 'text-destructive'
                          }`}>
                            {scenario.difficulty}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Success Rate:</span>
                          <span className={`font-medium ${
                            parseInt(scenario.success) > 50 ? 'text-space-green' :
                            parseInt(scenario.success) > 20 ? 'text-space-gold' : 'text-destructive'
                          }`}>
                            {scenario.success}
                          </span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm mb-4">
                        {scenario.description}
                      </p>
                      <Button 
                        className="w-full btn-hero"
                        disabled={scenario.difficulty === 'Impossible'}
                      >
                        {scenario.difficulty === 'Impossible' ? 'Not Feasible' : 'Plan Mission'}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </Layout>
  );
}