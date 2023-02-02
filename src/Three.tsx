import '../../../Downloads/44-debug-a-r3f-application/src/style.css';
import './style.scss';

import { Canvas } from '@react-three/fiber';
import Experience from './Experience';
import { StrictMode } from 'react';
import * as THREE from 'three'

export const Three = () => {
    const created = ({ scene }) =>
    {
        scene.background = new THREE.Color('#ff0000')
    }

  return (
    <StrictMode>
      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-4, 3, 6],
        }}
        onCreated={created}
      >
        <Experience />
      </Canvas>
    </StrictMode>
  );
};
