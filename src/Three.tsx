import '../../../Downloads/44-debug-a-r3f-application/src/style.css';
import './style.scss';

import { Canvas } from '@react-three/fiber';
import Experience from './Experience';
import { StrictMode } from 'react';

export const Three = () => {
  return (
    <StrictMode>
      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [4, -2, 6],
        }}
      >
        <Experience />
      </Canvas>
    </StrictMode>
  );
};
