import {useFrame} from '@react-three/fiber'
import { useRef } from 'react';
import { Group, Mesh } from 'three';

export default function Experience() {
  const cubeRef = useRef<Mesh>(null);
  const groupRef = useRef<Group>(null);

  useFrame((state, delta) => {
    const cube = cubeRef.current;
    const group = groupRef.current;
    if (!cube) {
      return;
    }

    if (!group) {
      return;
    }

    cube.rotation.y += delta;
    group.rotation.y += delta;
  });
  return (
      <>
        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 }/>
        <ambientLight intensity={ 0.5 } />

        <group ref={groupRef}>
          <mesh position-x={-2}>
            <sphereGeometry/>
            <meshStandardMaterial color="orange"/>
          </mesh>
          <mesh ref={cubeRef} rotation-y={Math.PI * 0.25} position-x={2} scale={1.5}>
            <boxGeometry/>
            <meshStandardMaterial color="mediumpurple"/>
          </mesh>
        </group>
        <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
          <planeGeometry/>
          <meshStandardMaterial color="greenyellow"/>
        </mesh>
      </>
  );
}
