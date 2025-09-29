import { Canvas, extend } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { ParticleSystem } from "./particle-system";

extend({ OrbitControls });

function Scene() {
  return (
    <>
      <ParticleSystem />
      <OrbitControls enableDamping enablePan={false} makeDefault />
    </>
  );
}

export function ThreeGradientBackground() {
  return (
    <div className="fixed inset-0 w-full h-full z-0">
      <Canvas
        camera={{ position: [0, 4, 35], fov: 60 }}
        gl={{ alpha: false }}
        onCreated={({ gl, scene }) => {
          gl.setSize(window.innerWidth, window.innerHeight);
          scene.background = new THREE.Color(0x0a0010);
        }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
