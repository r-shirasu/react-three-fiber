import { OrbitControls } from '@react-three/drei';
import { Perf } from 'r3f-perf';
import { DepthOfField, EffectComposer } from '@react-three/postprocessing';

export default function Experience() {
  return (
    <>
      <color args={['#ffffff']} attach="background" />

      <EffectComposer multisampling={4}>
        <DepthOfField focusDistance={0.025} focalLength={0.025} bokehScale={6} />
      </EffectComposer>

      <Perf position="top-left" />

      <OrbitControls makeDefault />

      <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <mesh castShadow position-x={-2}>
        <sphereGeometry />
        <meshStandardMaterial color="orange" />
      </mesh>

      <mesh castShadow position-x={2} scale={1.5}>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>

      <mesh receiveShadow position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
    </>
  );
}
