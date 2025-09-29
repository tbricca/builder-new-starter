import { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

export function ParticleSystem() {
  const pointsRef = useRef<THREE.Points>(null);
  const { size } = useThree();

  const [positions, sizes, shifts] = useMemo(() => {
    const positions: number[] = [];
    const sizes: number[] = [];
    const shifts: number[] = [];

    const pushShift = () => {
      shifts.push(
        Math.random() * Math.PI,
        Math.random() * Math.PI * 2,
        (Math.random() * 0.9 + 0.1) * Math.PI * 0.1,
        Math.random() * 0.9 + 0.1,
      );
    };

    // First batch of particles
    for (let i = 0; i < 50000; i++) {
      const vec = new THREE.Vector3()
        .randomDirection()
        .multiplyScalar(Math.random() * 0.5 + 9.5);
      positions.push(vec.x, vec.y, vec.z);
      sizes.push(Math.random() * 1.5 + 0.5);
      pushShift();
    }

    // Second batch - cylindrical distribution
    for (let i = 0; i < 100000; i++) {
      const r = 10;
      const R = 40;
      const rand = Math.pow(Math.random(), 1.5);
      const radius = Math.sqrt(R * R * rand + (1 - rand) * r * r);
      const vec = new THREE.Vector3().setFromCylindricalCoords(
        radius,
        Math.random() * 2 * Math.PI,
        (Math.random() - 0.5) * 2,
      );
      positions.push(vec.x, vec.y, vec.z);
      sizes.push(Math.random() * 1.5 + 0.5);
      pushShift();
    }

    return [
      new Float32Array(positions),
      new Float32Array(sizes),
      new Float32Array(shifts),
    ];
  }, []);

  const material = useMemo(() => {
    const mat = new THREE.PointsMaterial({
      size: 0.125,
      transparent: true,
      depthTest: false,
      blending: THREE.AdditiveBlending,
    });

    mat.onBeforeCompile = (shader) => {
      shader.uniforms.time = { value: 0 };

      shader.vertexShader = `
        uniform float time;
        attribute float sizes;
        attribute vec4 shift;
        varying vec3 vColor;
        ${shader.vertexShader}
      `
        .replace(`gl_PointSize = size;`, `gl_PointSize = size * sizes;`)
        .replace(
          `#include <color_vertex>`,
          `#include <color_vertex>
          float d = length(abs(position) / vec3(40., 10., 40));
          d = clamp(d, 0., 1.);
          vColor = mix(vec3(120., 50., 0.), vec3(40., 10., 60.), d) / 255.;
        `,
        )
        .replace(
          `#include <begin_vertex>`,
          `#include <begin_vertex>
          float t = time;
          float moveT = mod(shift.x + shift.z * t, PI2);
          float moveS = mod(shift.y + shift.z * t, PI2);
          transformed += vec3(cos(moveS) * sin(moveT), cos(moveT), sin(moveS) * sin(moveT)) * shift.w;
        `,
        );

      shader.fragmentShader = `
        varying vec3 vColor;
        ${shader.fragmentShader}
      `.replace(
        `vec4 diffuseColor = vec4( diffuse, opacity );`,
        `float d = length(gl_PointCoord.xy - 0.5);
         vec4 diffuseColor = vec4( vColor, smoothstep(0.5, 0.1, d) );`,
      );

      // Store reference to update time uniform
      mat.userData.shader = shader;
    };

    return mat;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      const time = state.clock.getElapsedTime() * 0.5;
      pointsRef.current.rotation.y = time * 0.05;

      // Update time uniform if shader is compiled
      if (material.userData.shader) {
        material.userData.shader.uniforms.time.value = time * Math.PI;
      }
    }
  });

  return (
    <points ref={pointsRef} rotation={[-0.27, 0, 0.2]} position={[0, -6, 0]}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-sizes"
          count={sizes.length}
          array={sizes}
          itemSize={1}
        />
        <bufferAttribute
          attach="attributes-shift"
          count={shifts.length / 4}
          array={shifts}
          itemSize={4}
        />
      </bufferGeometry>
      <primitive object={material} />
    </points>
  );
}
