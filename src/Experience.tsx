import { useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef } from 'react';
import { Perf } from 'r3f-perf';
import { Mesh } from 'three';

export default function Experience() {
  const cubeRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    const cube = cubeRef.current;
    if (!cube) {
      return;
    }

    cube.rotation.y += delta * 0.2;
  });

  return (
    <>
      <Perf position="top-left" />

      <OrbitControls makeDefault />

      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <mesh position-x={-2}>
        <sphereGeometry />
        <meshStandardMaterial color="orange" />
      </mesh>

      <mesh ref={cubeRef} position-x={2} scale={1.5}>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
    </>
  );
}
