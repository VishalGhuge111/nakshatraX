import { useState, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Text, Sphere } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  ArrowLeft, 
  Navigation, 
  Gauge, 
  Zap,
  RotateCcw,
  Settings
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import * as THREE from 'three';

// Free-roam spacecraft component
function FreeRoamSpacecraft({ position, setPosition }: any) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.position.set(position.x, position.y, position.z);
    }
  });

  return (
    <group>
      <Sphere ref={meshRef} args={[0.3, 8, 8]}>
        <meshStandardMaterial color="#00FFFF" emissive="#00FFFF" emissiveIntensity={0.4} />
      </Sphere>
      
      {/* Thrust effect */}
      <Sphere args={[0.1, 8, 8]} position={[position.x - 0.5, position.y, position.z]}>
        <meshStandardMaterial color="#FF4500" emissive="#FF4500" emissiveIntensity={0.8} />
      </Sphere>
    </group>
  );
}

// Simplified solar system for sandbox mode
function SandboxSolarSystem({ spacecraftPosition, setSpacecraftPosition }: any) {
  const planetsData = [
    { name: 'Sun', position: [0, 0, 0], size: 2, color: '#FDB813' },
    { name: 'Mercury', position: [8, 0, 0], size: 0.2, color: '#8C7853' },
    { name: 'Venus', position: [12, 0, 0], size: 0.3, color: '#FFC649' },
    { name: 'Earth', position: [16, 0, 0], size: 0.4, color: '#6B93D6' },
    { name: 'Mars', position: [20, 0, 0], size: 0.3, color: '#CD5C5C' },
    { name: 'Jupiter', position: [30, 0, 0], size: 1.2, color: '#D8CA9D' },
  ];

  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[0, 0, 0]} intensity={2} />
      <Stars radius={300} depth={50} count={5000} factor={4} />
      
      {planetsData.map((planet, index) => (
        <group key={index}>
          <Sphere args={[planet.size, 32, 32]} position={planet.position as [number, number, number]}>
            <meshStandardMaterial color={planet.color} />
          </Sphere>
          <Text
            position={[planet.position[0], planet.position[1] + planet.size + 1, planet.position[2]]}
            fontSize={0.5}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            {planet.name}
          </Text>
        </group>
      ))}
      
      <FreeRoamSpacecraft position={spacecraftPosition} setPosition={setSpacecraftPosition} />
      
      <OrbitControls 
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        minDistance={2}
        maxDistance={100}
      />
    </>
  );
}

export default function Simulator() {
  const [spacecraftPosition, setSpacecraftPosition] = useState({ x: 16, y: 0, z: 0 });
  const [velocity, setVelocity] = useState({ x: 0, y: 0, z: 0 });
  const [fuel, setFuel] = useState(100);
  const [thrust, setThrust] = useState(1);

  const controls = {
    forward: () => {
      if (fuel > 0) {
        setSpacecraftPosition(prev => ({ ...prev, x: prev.x + thrust }));
        setFuel(prev => Math.max(0, prev - thrust * 0.5));
      }
    },
    backward: () => {
      if (fuel > 0) {
        setSpacecraftPosition(prev => ({ ...prev, x: prev.x - thrust }));
        setFuel(prev => Math.max(0, prev - thrust * 0.5));
      }
    },
    up: () => {
      if (fuel > 0) {
        setSpacecraftPosition(prev => ({ ...prev, y: prev.y + thrust }));
        setFuel(prev => Math.max(0, prev - thrust * 0.5));
      }
    },
    down: () => {
      if (fuel > 0) {
        setSpacecraftPosition(prev => ({ ...prev, y: prev.y - thrust }));
        setFuel(prev => Math.max(0, prev - thrust * 0.5));
      }
    },
    left: () => {
      if (fuel > 0) {
        setSpacecraftPosition(prev => ({ ...prev, z: prev.z - thrust }));
        setFuel(prev => Math.max(0, prev - thrust * 0.5));
      }
    },
    right: () => {
      if (fuel > 0) {
        setSpacecraftPosition(prev => ({ ...prev, z: prev.z + thrust }));
        setFuel(prev => Math.max(0, prev - thrust * 0.5));
      }
    }
  };

  const resetSimulation = () => {
    setSpacecraftPosition({ x: 16, y: 0, z: 0 });
    setVelocity({ x: 0, y: 0, z: 0 });
    setFuel(100);
  };

  // Keyboard controls
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      switch (event.key.toLowerCase()) {
        case 'w': controls.forward(); break;
        case 's': controls.backward(); break;
        case 'a': controls.left(); break;
        case 'd': controls.right(); break;
        case 'q': controls.up(); break;
        case 'e': controls.down(); break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

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

        {/* Simulator Controls */}
        <div className="absolute top-4 left-4 right-4 z-40 pointer-events-none">
          <div className="flex justify-between">
            {/* Left Panel - Navigation Controls */}
            <motion.div
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="w-80 mission-overlay rounded-lg p-4 pointer-events-auto mt-16"
            >
              <h2 className="text-xl font-orbitron font-bold mb-4 text-primary">
                Flight Controls
              </h2>

              {/* Movement Controls */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold mb-3 text-muted-foreground">Navigation</h3>
                <div className="grid grid-cols-3 gap-2">
                  <Button onClick={controls.up} size="sm" variant="outline" className="text-xs">
                    ↑ Up (Q)
                  </Button>
                  <Button onClick={controls.forward} size="sm" variant="outline" className="text-xs">
                    ↑ Forward (W)
                  </Button>
                  <Button onClick={controls.down} size="sm" variant="outline" className="text-xs">
                    ↓ Down (E)
                  </Button>
                  
                  <Button onClick={controls.left} size="sm" variant="outline" className="text-xs">
                    ← Left (A)
                  </Button>
                  <Button onClick={controls.backward} size="sm" variant="outline" className="text-xs">
                    ↓ Back (S)
                  </Button>
                  <Button onClick={controls.right} size="sm" variant="outline" className="text-xs">
                    → Right (D)
                  </Button>
                </div>
              </div>

              {/* Thrust Settings */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold mb-3 text-muted-foreground">Thrust Power</h3>
                <div className="flex space-x-2">
                  <Button 
                    onClick={() => setThrust(0.5)}
                    size="sm"
                    variant={thrust === 0.5 ? "default" : "outline"}
                    className="text-xs"
                  >
                    Low
                  </Button>
                  <Button 
                    onClick={() => setThrust(1)}
                    size="sm"
                    variant={thrust === 1 ? "default" : "outline"}
                    className="text-xs"
                  >
                    Med
                  </Button>
                  <Button 
                    onClick={() => setThrust(2)}
                    size="sm"
                    variant={thrust === 2 ? "default" : "outline"}
                    className="text-xs"
                  >
                    High
                  </Button>
                </div>
              </div>

              {/* Reset Button */}
              <Button onClick={resetSimulation} variant="outline" className="w-full">
                <RotateCcw className="mr-2 h-4 w-4" />
                Reset Position
              </Button>

              {/* Instructions */}
              <div className="mt-6 p-3 border border-border rounded bg-card/50">
                <h4 className="text-sm font-semibold mb-2 text-primary">Controls</h4>
                <div className="text-xs text-muted-foreground space-y-1">
                  <p>• WASD: Move horizontally</p>
                  <p>• Q/E: Move up/down</p>
                  <p>• Mouse: Rotate view</p>
                  <p>• Scroll: Zoom in/out</p>
                </div>
              </div>
            </motion.div>

            {/* Right Panel - Status */}
            <motion.div
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="w-72 mission-overlay rounded-lg p-4 pointer-events-auto mt-16"
            >
              <h2 className="text-xl font-orbitron font-bold mb-4 text-primary">
                Spacecraft Status
              </h2>

              <div className="space-y-4">
                {/* Position */}
                <div>
                  <div className="flex items-center text-sm mb-2">
                    <Navigation className="mr-2 h-4 w-4 text-primary" />
                    Position
                  </div>
                  <div className="text-xs text-muted-foreground space-y-1">
                    <div>X: {spacecraftPosition.x.toFixed(1)} AU</div>
                    <div>Y: {spacecraftPosition.y.toFixed(1)} AU</div>
                    <div>Z: {spacecraftPosition.z.toFixed(1)} AU</div>
                  </div>
                </div>

                {/* Fuel */}
                <div>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <div className="flex items-center">
                      <Zap className="mr-2 h-4 w-4 text-space-gold" />
                      Fuel
                    </div>
                    <span className="text-space-gold font-medium">{fuel.toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-space-gold h-2 rounded-full transition-all duration-300"
                      style={{ width: `${fuel}%` }}
                    />
                  </div>
                </div>

                {/* Thrust */}
                <div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                      <Gauge className="mr-2 h-4 w-4 text-accent" />
                      Thrust Level
                    </div>
                    <span className="text-accent font-medium">{thrust}x</span>
                  </div>
                </div>

                {/* Distance from Earth */}
                <div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Distance from Earth</span>
                    <span className="font-medium">
                      {Math.sqrt(
                        Math.pow(spacecraftPosition.x - 16, 2) + 
                        Math.pow(spacecraftPosition.y, 2) + 
                        Math.pow(spacecraftPosition.z, 2)
                      ).toFixed(2)} AU
                    </span>
                  </div>
                </div>
              </div>

              {/* Warning */}
              {fuel < 20 && (
                <div className="mt-4 p-3 border border-destructive rounded bg-destructive/10">
                  <h4 className="text-sm font-semibold text-destructive mb-1">Low Fuel Warning</h4>
                  <p className="text-xs text-destructive/80">
                    Fuel levels critical. Consider returning to Earth.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>

        {/* 3D Sandbox Environment */}
        <Canvas camera={{ position: [25, 15, 25], fov: 60 }}>
          <SandboxSolarSystem 
            spacecraftPosition={spacecraftPosition}
            setSpacecraftPosition={setSpacecraftPosition}
          />
        </Canvas>

        {/* Instructions Overlay */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 pointer-events-none">
          <div className="bg-card/80 backdrop-blur-lg border border-border rounded-lg px-4 py-2">
            <p className="text-sm text-center text-muted-foreground">
              Sandbox Mode: Free exploration with unlimited possibilities
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}