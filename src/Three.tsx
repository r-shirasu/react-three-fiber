import '../../../Downloads/44-debug-a-r3f-application/src/style.css';

import { Canvas } from '@react-three/fiber';
import Experience from './Experience';
import { StrictMode } from 'react';
import { Leva } from 'leva';

export const Three = () => {
  return (
    <StrictMode>
      <Leva />
      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-4, 3, 6],
        }}
      >
        <Experience />
      </Canvas>
    </StrictMode>
  );
};
