import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, useGLTF } from '@react-three/drei';

const Model = () => {
    // credit:
    // https://sketchfab.com/3d-models/90s-computer-c5e4fed8e05e41719165148e4bcf6795
    // license:
    // https://creativecommons.org/licenses/by/4.0/
    const { scene } = useGLTF("/90s_computer.glb");
    return <primitive object={scene} />;
};

const RotatingModel = () => {
    const meshRef = useRef();

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.003;
        }
    });

    return (
        <mesh rotation={[0.25, 0, 0]} ref={meshRef}>
            <Model />
        </mesh>
    );
};

const ThreeModelComponent = () => {
    return (
        <Canvas style={{ width: "100%", height: "calc(100vh - 4rem - 4rem)" }}>
            <PerspectiveCamera makeDefault position={[8, 8, 8]} scale={1}/>
            <OrbitControls enableZoom={false}  enableRotate={false} />

            <ambientLight intensity={0.2} />
            <directionalLight position={[5, 10, 0]} intensity={0.8} />

            <RotatingModel/>
        </Canvas>
    );
};

export default ThreeModelComponent;
