import {useFrame, extend, useThree} from '@react-three/fiber'
import { useRef } from 'react';
import { Group, Mesh } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

extend({ OrbitControls })

export default function Experience() {
  const cubeRef = useRef<Mesh>(null);
  const groupRef = useRef<Group>(null);

  const {camera, gl} = useThree();

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
        <orbitControls args={ [ camera, gl.domElement ] } />

        <group ref={groupRef}>
          <mesh position-x={-2}>
            <sphereGeometry/>
            <meshBasicMaterial color="orange"/>
          </mesh>
          <mesh ref={cubeRef} rotation-y={Math.PI * 0.25} position-x={2} scale={1.5}>
            <boxGeometry/>
            <meshBasicMaterial color="mediumpurple"/>
          </mesh>
        </group>
        <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
          <planeGeometry/>
          <meshBasicMaterial color="greenyellow"/>
        </mesh>
      </>
  );
}
