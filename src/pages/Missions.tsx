import { useState, useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Stars, Text, Sphere } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  ArrowLeft, 
  Rocket, 
  Fuel, 
  Clock, 
  Target,
  Settings,
  Play,
  RotateCcw
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import * as THREE from 'three';

// Planet data with realistic relative sizes and distances (scaled for visibility)
const planetsData = [
  { name: 'Sun', distance: 0, size: 2, color: '#FDB813', orbitSpeed: 0 },
  { name: 'Mercury', distance: 8, size: 0.2, color: '#8C7853', orbitSpeed: 0.02 },
  { name: 'Venus', distance: 12, size: 0.3, color: '#FFC649', orbitSpeed: 0.015 },
  { name: 'Earth', distance: 16, size: 0.4, color: '#6B93D6', orbitSpeed: 0.01 },
  { name: 'Mars', distance: 20, size: 0.3, color: '#CD5C5C', orbitSpeed: 0.008 },
  { name: 'Jupiter', distance: 30, size: 1.2, color: '#D8CA9D', orbitSpeed: 0.005 },
  { name: 'Saturn', distance: 40, size: 1.0, color: '#FAD5A5', orbitSpeed: 0.003 },
  { name: 'Uranus', distance: 50, size: 0.8, color: '#4FD0E7', orbitSpeed: 0.002 },
  { name: 'Neptune', distance: 60, size: 0.8, color: '#4B70DD', orbitSpeed: 0.001 },
];

// Planet component with orbital motion
function Planet({ data, onClick }: { data: any; onClick: (planet: any) => void }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [angle, setAngle] = useState(Math.random() * Math.PI * 2);

  useFrame((state, delta) => {
    setAngle(prev => prev + data.orbitSpeed * delta);
    if (meshRef.current && data.distance > 0) {
      meshRef.current.position.x = Math.cos(angle) * data.distance;
      meshRef.current.position.z = Math.sin(angle) * data.distance;
    }
  });

  return (
    <group>
      {/* Orbit line */}
      {data.distance > 0 && (
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[data.distance - 0.1, data.distance + 0.1, 64]} />
          <meshBasicMaterial color="white" transparent opacity={0.1} />
        </mesh>
      )}
      
      {/* Planet */}
      <Sphere
        ref={meshRef}
        args={[data.size, 32, 32]}
        position={data.distance > 0 ? [data.distance, 0, 0] : [0, 0, 0]}
        onClick={() => onClick(data)}
      >
        <meshStandardMaterial color={data.color} />
      </Sphere>
      
      {/* Planet label */}
      <Text
        position={[
          data.distance > 0 ? data.distance : 0,
          data.size + 1,
          0
        ]}
        fontSize={0.5}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {data.name}
      </Text>
    </group>
  );
}

// Atlas comet component
function AtlasComet() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [position, setPosition] = useState(0);

  useFrame((state, delta) => {
    setPosition(prev => prev + delta * 2); // Fast hyperbolic trajectory
    if (meshRef.current) {
      // Hyperbolic path simulation
      const t = position * 0.1;
      meshRef.current.position.x = t * 10;
      meshRef.current.position.y = Math.sin(t) * 2;
      meshRef.current.position.z = t * t * 0.1;
    }
  });

  return (
    <group>
      <Sphere ref={meshRef} args={[0.3, 16, 16]} position={[50, 0, 0]}>
        <meshStandardMaterial color="#FFB6C1" emissive="#FF69B4" emissiveIntensity={0.5} />
      </Sphere>
      <Text
        position={[50, 2, 0]}
        fontSize={0.8}
        color="#FF69B4"
        anchorX="center"
        anchorY="middle"
      >
        3I/ATLAS
      </Text>
    </group>
  );
}

// Spacecraft component
function Spacecraft({ target, isLaunched }: { target: string | null, isLaunched: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [position, setPosition] = useState({ x: 16, y: 0, z: 0 }); // Start at Earth

  useFrame((state, delta) => {
    if (isLaunched && meshRef.current) {
      // Simple movement towards target (enhanced in real implementation)
      if (target === 'Atlas') {
        setPosition(prev => ({
          x: prev.x + delta * 5,
          y: prev.y + Math.sin(state.clock.elapsedTime) * 0.1,
          z: prev.z + delta * 2
        }));
      }
      meshRef.current.position.set(position.x, position.y, position.z);
    }
  });

  return (
    <Sphere ref={meshRef} args={[0.2, 8, 8]} position={[16, 0, 0]}>
      <meshStandardMaterial color="#00FFFF" emissive="#00FFFF" emissiveIntensity={0.3} />
    </Sphere>
  );
}

// Main Solar System Scene
function SolarSystemScene({ onPlanetClick, selectedTarget, isLaunched }: any) {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[0, 0, 0]} intensity={2} />
      <Stars radius={300} depth={50} count={5000} factor={4} />
      
      {planetsData.map((planet, index) => (
        <Planet 
          key={index} 
          data={planet} 
          onClick={onPlanetClick}
        />
      ))}
      
      <AtlasComet />
      <Spacecraft target={selectedTarget} isLaunched={isLaunched} />
      
      <OrbitControls 
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        minDistance={5}
        maxDistance={200}
      />
    </>
  );
}

export default function Missions() {
  const [selectedPlanet, setSelectedPlanet] = useState<any>(null);
  const [missionType, setMissionType] = useState<string>('');
  const [rocketType, setRocketType] = useState<string>('falcon-heavy');
  const [isLaunched, setIsLaunched] = useState(false);
  const [missionData, setMissionData] = useState({
    fuel: 100,
    time: 0,
    speed: 0,
    distance: 0
  });

  const rocketTypes = [
    { id: 'falcon-heavy', name: 'Falcon Heavy', fuel: 1420, speed: 11.2, description: 'Powerful reusable rocket' },
    { id: 'ion-drive', name: 'Ion Drive', fuel: 500, speed: 50, description: 'High efficiency, low thrust' },
    { id: 'solar-sail', name: 'Solar Sail', fuel: 0, speed: 20, description: 'Propellantless propulsion' }
  ];

  const missionTypes = [
    { id: 'planet', name: 'Travel to Planet', description: 'Explore a selected planet' },
    { id: 'solar-system', name: 'Explore Solar System', description: 'Free exploration mode' },
    { id: 'atlas', name: 'Intercept 3I/ATLAS', description: 'Advanced interception mission' }
  ];

  const handlePlanetClick = (planet: any) => {
    setSelectedPlanet(planet);
  };

  const handleLaunch = () => {
    if (missionType) {
      setIsLaunched(true);
    }
  };

  const handleReset = () => {
    setIsLaunched(false);
    setMissionData({ fuel: 100, time: 0, speed: 0, distance: 0 });
    setSelectedPlanet(null);
  };

  return (
    <Layout showHeaderFooter={false}>
      <div className="fixed inset-0 bg-background">
        {/* Back Button */}
        <div className="absolute top-4 left-4 z-50">
          <Button asChild variant="outline" size="sm">
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>

        {/* Mission Control Panel */}
        <div className="absolute top-4 left-4 right-4 z-40 pointer-events-none">
          <div className="flex justify-between">
            {/* Left Panel - Mission Setup */}
            <motion.div
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="w-80 mission-overlay rounded-lg p-4 pointer-events-auto mt-16"
            >
              <h2 className="text-xl font-orbitron font-bold mb-4 text-primary">
                Mission Control
              </h2>

              {/* Rocket Selection */}
              <div className="mb-4">
                <h3 className="text-sm font-semibold mb-2 text-muted-foreground">Rocket Type</h3>
                <div className="space-y-2">
                  {rocketTypes.map((rocket) => (
                    <button
                      key={rocket.id}
                      onClick={() => setRocketType(rocket.id)}
                      className={`w-full text-left p-2 rounded border transition-colors ${
                        rocketType === rocket.id
                          ? 'border-primary bg-primary/10'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <div className="font-medium text-sm">{rocket.name}</div>
                      <div className="text-xs text-muted-foreground">{rocket.description}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Mission Type */}
              <div className="mb-4">
                <h3 className="text-sm font-semibold mb-2 text-muted-foreground">Mission Type</h3>
                <div className="space-y-2">
                  {missionTypes.map((mission) => (
                    <button
                      key={mission.id}
                      onClick={() => setMissionType(mission.id)}
                      className={`w-full text-left p-2 rounded border transition-colors ${
                        missionType === mission.id
                          ? 'border-primary bg-primary/10'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <div className="font-medium text-sm">{mission.name}</div>
                      <div className="text-xs text-muted-foreground">{mission.description}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Launch Controls */}
              <div className="space-y-2">
                <Button 
                  onClick={handleLaunch}
                  disabled={!missionType || isLaunched}
                  className="w-full btn-hero"
                >
                  <Play className="mr-2 h-4 w-4" />
                  {isLaunched ? 'Mission Active' : 'Launch Mission'}
                </Button>
                <Button 
                  onClick={handleReset}
                  variant="outline"
                  className="w-full"
                >
                  <RotateCcw className="mr-2 h-4 w-4" />
                  Reset Mission
                </Button>
              </div>
            </motion.div>

            {/* Right Panel - Mission Stats */}
            <motion.div
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="w-72 mission-overlay rounded-lg p-4 pointer-events-auto mt-16"
            >
              <h2 className="text-xl font-orbitron font-bold mb-4 text-primary">
                Mission Stats
              </h2>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm">
                    <Fuel className="mr-2 h-4 w-4 text-space-gold" />
                    Fuel
                  </div>
                  <span className="text-space-gold font-medium">{missionData.fuel}%</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm">
                    <Clock className="mr-2 h-4 w-4 text-primary" />
                    Time
                  </div>
                  <span className="text-primary font-medium">{missionData.time.toFixed(1)}s</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm">
                    <Target className="mr-2 h-4 w-4 text-accent" />
                    Distance
                  </div>
                  <span className="text-accent font-medium">{missionData.distance.toFixed(1)} AU</span>
                </div>
              </div>

              {/* Selected Planet Info */}
              {selectedPlanet && (
                <div className="mt-6 p-3 border border-border rounded">
                  <h3 className="font-orbitron font-semibold text-primary mb-2">
                    {selectedPlanet.name}
                  </h3>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>Distance: {selectedPlanet.distance} AU</p>
                    <p>Size: {selectedPlanet.size} Earth radii</p>
                    <p>Orbital Speed: {(selectedPlanet.orbitSpeed * 1000).toFixed(1)} km/h</p>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>

        {/* 3D Solar System */}
        <Canvas camera={{ position: [25, 15, 25], fov: 60 }}>
          <SolarSystemScene 
            onPlanetClick={handlePlanetClick}
            selectedTarget={missionType === 'atlas' ? 'Atlas' : selectedPlanet?.name}
            isLaunched={isLaunched}
          />
        </Canvas>

        {/* Mission Success/Failure Modal */}
        {isLaunched && missionData.fuel <= 0 && (
          <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-50">
            <Card className="space-card max-w-md">
              <CardHeader>
                <CardTitle className="text-center text-2xl font-orbitron text-destructive">
                  Mission Failed
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  Your spacecraft ran out of fuel before reaching the target.
                </p>
                <Button onClick={handleReset} className="btn-hero">
                  Try Again
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </Layout>
  );
}