import '../../../Downloads/44-debug-a-r3f-application/src/style.css';

import { Canvas } from '@react-three/fiber';
import Experience from './Experience';
import { StrictMode } from 'react';
import './styles.css';

export const Three = () => {
  return (
    <StrictMode>
      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-4, 3, 6],
        }}
        style={{ touchAction: 'none' }}
      >
        <Experience />
      </Canvas>
    </StrictMode>
  );
};
