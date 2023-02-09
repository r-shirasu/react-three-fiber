import { Center, OrbitControls, Sparkles, useGLTF, useTexture } from '@react-three/drei';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

type GLTFResult = GLTF & {
  nodes: {
    baked: THREE.Mesh;
    poleLightA: THREE.Mesh;
    poleLightB: THREE.Mesh;
    portalLight: THREE.Mesh;
  };
};
export default function Experience() {
  const { nodes } = useGLTF('./model/portal.glb') as unknown as GLTFResult;
  const bakedTexture = useTexture('./model/baked.jpg');
  bakedTexture.flipY = false;

  return (
    <>
      <color args={['#030202']} attach="background" />

      <OrbitControls makeDefault />

      <Center>
        <mesh geometry={nodes.baked.geometry}>
          <meshBasicMaterial map={bakedTexture} />
        </mesh>

        <mesh geometry={nodes.poleLightA.geometry} position={nodes.poleLightA.position}>
          <meshBasicMaterial color="#ffffe5" />
        </mesh>

        <mesh geometry={nodes.poleLightB.geometry} position={nodes.poleLightB.position}>
          <meshBasicMaterial color="#ffffe5" />
        </mesh>

        <mesh
          geometry={nodes.portalLight.geometry}
          position={nodes.portalLight.position}
          rotation={nodes.portalLight.rotation}
        >
          <meshBasicMaterial color="#ffffff" />
        </mesh>

        <Sparkles size={6} scale={[4, 2, 4]} position-y={1} speed={0.2} count={40} />
      </Center>
    </>
  );
}
