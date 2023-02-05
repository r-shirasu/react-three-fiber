import '../../../Downloads/44-debug-a-r3f-application/src/style.css';
import './style.scss';

import { Canvas } from '@react-three/fiber';
import Experience from './Experience';
import { StrictMode } from 'react';

export const Three = () => {
  return (
    <StrictMode>
      <Canvas
        shadows={false}
        camera={{
          fov: 45,
          near: 0.1,
          far: 50,
          position: [-4, 3, 6],
        }}
      >
        <Experience />
      </Canvas>
    </StrictMode>
  );
};
