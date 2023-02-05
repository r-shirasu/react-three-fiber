import { useFrame } from '@react-three/fiber';
import { OrbitControls, useHelper } from '@react-three/drei';
import { useRef } from 'react';
import { Perf } from 'r3f-perf';
import { DirectionalLight, Mesh } from 'three';
import * as THREE from 'three';
import * as React from 'react';

export default function Experience() {
  const cubeRef = useRef<Mesh>(null!);
  const directionalLight = useRef<DirectionalLight>(null!);
  useHelper(directionalLight, THREE.DirectionalLightHelper, 1);

  useFrame((state, delta) => {
    const cube = cubeRef.current;

    cube.rotation.y += delta * 0.2;
  });

  return (
    <>
      <Perf position="top-left" />

      <OrbitControls makeDefault />

      <directionalLight ref={directionalLight} castShadow={true} position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <mesh position-x={-2} castShadow={true}>
        <sphereGeometry />
        <meshStandardMaterial color="orange" />
      </mesh>

      <mesh ref={cubeRef} position-x={2} scale={1.5} castShadow={true}>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>

      <mesh receiveShadow={true} position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
    </>
  );
}
