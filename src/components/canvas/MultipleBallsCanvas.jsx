import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  useTexture,
  Float,
  Decal,
} from "@react-three/drei";

const Ball = ({ imgUrl, position }) => {
  const [decal] = useTexture([
    `${imgUrl}${imgUrl.includes("?") ? "&" : "?"}tr=f-auto`,
  ]);

  return (
    <mesh position={position} scale={1.8}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color="#fff8eb"
        polygonOffset
        polygonOffsetFactor={-5}
        flatShading
      />
      <Decal
        position={[0, 0, 1]}
        rotation={[2 * Math.PI, 0, 6.25]}
        flatShading
        map={decal}
      />
    </mesh>
  );
};

const MultipleBalls = ({ technologies }) => {
  return (
    <>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      {technologies.map((tech, i) => {
        const x = (i % 4) * 2.5 - 3.5;
        const y = -Math.floor(i / 4) * 2.5 + 2;
        return (
          <Float
            key={tech.name}
            speed={1.75}
            rotationIntensity={1}
            floatIntensity={2}
          >
            <Ball imgUrl={tech.icon} position={[x, y, 0]} />
          </Float>
        );
      })}
    </>
  );
};

const MultipleBallsCanvas = ({ technologies }) => {
  return (
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={null}>
        <OrbitControls enableZoom={false} />
        <MultipleBalls technologies={technologies} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default MultipleBallsCanvas;
