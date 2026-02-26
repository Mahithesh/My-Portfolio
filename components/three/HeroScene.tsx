'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function FloatingLaptop() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.y = Math.sin(t * 0.5) * 0.4;
    groupRef.current.rotation.x = Math.cos(t * 0.4) * 0.12;
    groupRef.current.position.y = Math.sin(t * 0.8) * 0.12;
  });

  return (
    <Float speed={1.7} rotationIntensity={0.4} floatIntensity={1.2}>
      <group ref={groupRef}>
        <mesh position={[0, -0.18, 0]}>
          <boxGeometry args={[1.55, 0.1, 1.05]} />
          <meshStandardMaterial color="#161a20" metalness={0.5} roughness={0.25} />
        </mesh>
        <mesh position={[0, 0.45, -0.42]} rotation={[-0.6, 0, 0]}>
          <boxGeometry args={[1.45, 0.9, 0.08]} />
          <meshStandardMaterial color="#0f141b" metalness={0.5} roughness={0.2} />
        </mesh>
        <mesh position={[0, 0.47, -0.37]} rotation={[-0.6, 0, 0]}>
          <planeGeometry args={[1.23, 0.69]} />
          <meshBasicMaterial color="#31d0ff" transparent opacity={0.7} />
        </mesh>
      </group>
    </Float>
  );
}

function ParticleCloud() {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 180;
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 6;
    positions[i + 1] = (Math.random() - 0.5) * 4;
    positions[i + 2] = (Math.random() - 0.5) * 4;
  }

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.03;
    pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#5bff98" size={0.03} transparent opacity={0.8} sizeAttenuation />
    </points>
  );
}

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0.2, 3], fov: 48 }} dpr={[1, 1.7]} gl={{ antialias: true }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 3, 2]} intensity={1.2} color="#31d0ff" />
      <directionalLight position={[-2, -1, -2]} intensity={0.4} color="#5bff98" />
      <FloatingLaptop />
      <ParticleCloud />
      <Environment preset="city" />
    </Canvas>
  );
}
