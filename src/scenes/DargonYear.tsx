import * as THREE from "three";
import React, { useRef, JSX, Suspense, useEffect } from "react";
import {
  useGLTF,
  useAnimations,
  Stage,
  OrbitControls,
  Cloud,
  Text,
  MeshReflectorMaterial,
} from "@react-three/drei";

import { GLTF } from "three-stdlib";
import { Canvas } from "@react-three/fiber";
import { Firework } from "../components/Firework";
import { House } from "../components/House";

type GLTFResult = GLTF & {
  nodes: {
    Object_281: THREE.SkinnedMesh;
    Object_282: THREE.SkinnedMesh;
    _rootJoint: THREE.Bone;
  };
  materials: {
    MI_b09_00_drg_hair: THREE.MeshPhysicalMaterial;
    MI_b09_00_drg_eye: THREE.MeshStandardMaterial;
  };
  animations: GLTFAction[];
};

type ActionName = "Take 001";
interface GLTFAction extends THREE.AnimationClip {
  name: ActionName;
}

export type ContextType = Record<
  string,
  React.ForwardRefExoticComponent<
    JSX.IntrinsicElements["skinnedMesh"] | JSX.IntrinsicElements["bone"]
  >
>;

export function Dragon(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  const { nodes, materials, animations } = useGLTF(
    "/dragon-year/chinese_dragon.glb"
  ) as GLTFResult;
  const { actions, mixer } = useAnimations(animations, group);

  useEffect(() => {
    actions["Take 001"]?.play();
  }, [actions, mixer]);

  return (
    // @ts-expect-error ref typing
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          userData={{ name: "Sketchfab_model" }}
        >
          <group
            name="51c007ade1cb4b04bbd547e135465dbbfbx"
            rotation={[Math.PI / 2, 0, 0]}
            userData={{ name: "51c007ade1cb4b04bbd547e135465dbb.fbx" }}
          >
            <group name="Object_2" userData={{ name: "Object_2" }}>
              <group name="RootNode" userData={{ name: "RootNode" }}>
                <group name="drgon_13" userData={{ name: "drgon" }}>
                  <group name="drgon" userData={{ name: "drgon" }}>
                    <group name="Object_6" userData={{ name: "Object_6" }}>
                      <primitive object={nodes._rootJoint} />
                      <group
                        name="Object_280"
                        rotation={[-Math.PI / 2, 0, 0]}
                        userData={{ name: "Object_280" }}
                      />
                      <skinnedMesh
                        name="Object_281"
                        geometry={nodes.Object_281.geometry}
                        material={materials.MI_b09_00_drg_hair}
                        skeleton={nodes.Object_281.skeleton}
                        userData={{ name: "Object_281" }}
                      />
                      <skinnedMesh
                        name="Object_282"
                        geometry={nodes.Object_282.geometry}
                        material={materials.MI_b09_00_drg_eye}
                        skeleton={nodes.Object_282.skeleton}
                        userData={{ name: "Object_282" }}
                      />
                    </group>
                  </group>
                  <group name="drgon_12" userData={{ name: "drgon" }}>
                    <group name="drgon_1" userData={{ name: "drgon" }} />
                    <group name="drgon_2" userData={{ name: "drgon" }} />
                    <group name="drgon_3" userData={{ name: "drgon" }} />
                    <group name="drgon_4" userData={{ name: "drgon" }} />
                    <group name="drgon_5" userData={{ name: "drgon" }} />
                    <group name="drgon_6" userData={{ name: "drgon" }} />
                    <group name="drgon_7" userData={{ name: "drgon" }} />
                    <group name="drgon_8" userData={{ name: "drgon" }} />
                    <group name="drgon_9" userData={{ name: "drgon" }} />
                    <group name="drgon_10" userData={{ name: "drgon" }} />
                    <group name="drgon_11" userData={{ name: "drgon" }} />
                  </group>
                </group>
                <group
                  name="dragon"
                  rotation={[-Math.PI / 2, 0, 0]}
                  userData={{ name: "dragon" }}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

export default function DragonYear() {
  return (
    <Canvas
      dpr={[1, 2]}
      shadows
      camera={{
        position: [20, 20, 20],
        rotation: [0, 0, 0],
        fov: 90,
      }}
    >
      <color attach="background" args={["#101010"]} />
      {/* <fog attach="fog" args={["#101010", 10, 20]} /> */}
      <Suspense fallback={null}>
        <OrbitControls />
        <Stage environment={"apartment"} intensity={1}>
          <ambientLight intensity={0.5} />
          <Text scale={2} position={[0, 5, 20]} color={"red"}>
            Happy Chinese New Year
          </Text>
          <Dragon scale={0.02} rotation={[0, 0, 0]} position={[0, 5, 0]} />
          <Firework scale={0.2} position={[0, 0, 0]} />
          <Firework scale={0.2} position={[10, 0, 0]} />
          <Firework scale={0.2} position={[0, 0, -10]} />
          <Firework scale={0.2} position={[-10, 0, -10]} />
          <Firework scale={0.2} position={[10, 0, -10]} />
          <House scale={1} position={[10, 6, 0]} />
          <House scale={1} position={[-10, 6, 12]} />
        </Stage>
        <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
          <planeGeometry args={[2000, 2000]} />
          <MeshReflectorMaterial
            mirror={1}
            blur={[200, 100]}
            resolution={2048}
            mixBlur={1}
            mixStrength={40}
            roughness={1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#101010"
            metalness={0.5}
          />
        </mesh>
        <Cloud position={[0, 0, 0]} />
        <Cloud position={[0, 0, 10]} />
        <Cloud position={[10, 0, 0]} />
        <Cloud position={[10, 0, 10]} />
        <Cloud position={[-10, 0, 0]} />
        <Cloud position={[0, 0, -10]} />
        <Cloud position={[10, 0, -10]} />
        <Cloud position={[-10, 0, 10]} />
        <Cloud position={[-10, 0, -10]} />
        {/* <axesHelper args={[100]} /> */}
      </Suspense>
    </Canvas>
  );
}

useGLTF.preload("/dragon-year/chinese_dragon.glb");
