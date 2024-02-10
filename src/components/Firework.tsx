import * as THREE from "three";
import React, { JSX, useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    ["right_v_022_01_-_Default_0"]: THREE.Mesh;
    ["right_v_030_01_-_Default_0"]: THREE.Mesh;
    ["right_v_031_01_-_Default_0"]: THREE.Mesh;
    ["right_v_032_01_-_Default_0"]: THREE.Mesh;
    ["right_v_034_01_-_Default_0"]: THREE.Mesh;
    ["right_v_035_01_-_Default_0"]: THREE.Mesh;
    ["right_v_026_01_-_Default_0"]: THREE.Mesh;
    ["right_v_037_01_-_Default_0"]: THREE.Mesh;
    ["right_v_023_01_-_Default_0"]: THREE.Mesh;
    ["right_v_038_01_-_Default_0"]: THREE.Mesh;
    ["right_v_027_01_-_Default_0"]: THREE.Mesh;
    ["right_v_021_01_-_Default_0"]: THREE.Mesh;
    ["right_v_028_01_-_Default_0"]: THREE.Mesh;
    ["right_v_025_01_-_Default_0"]: THREE.Mesh;
    ["right_v_033_01_-_Default_0"]: THREE.Mesh;
    ["right_v_039_01_-_Default_0"]: THREE.Mesh;
    ["right_v_06_01_-_Default_0"]: THREE.Mesh;
    ["right_v_013_01_-_Default_0"]: THREE.Mesh;
    ["right_v_09_01_-_Default_0"]: THREE.Mesh;
    ["right_v_017_01_-_Default_0"]: THREE.Mesh;
    ["right_v_05_01_-_Default_0"]: THREE.Mesh;
    ["right_v__01_-_Default_0"]: THREE.Mesh;
    ["right_v_01_01_-_Default_0"]: THREE.Mesh;
    ["right_v_08_01_-_Default_0"]: THREE.Mesh;
    ["right_v_010_01_-_Default_0"]: THREE.Mesh;
    ["right_v_014_01_-_Default_0"]: THREE.Mesh;
    ["right_v_012_01_-_Default_0"]: THREE.Mesh;
    ["right_v_02_01_-_Default_0"]: THREE.Mesh;
    ["right_v_015_01_-_Default_0"]: THREE.Mesh;
    ["right_v_018_01_-_Default_0"]: THREE.Mesh;
    ["right_v_024_01_-_Default_0"]: THREE.Mesh;
    ["right_v_029_01_-_Default_0"]: THREE.Mesh;
    ["right_v_036_01_-_Default_0"]: THREE.Mesh;
    ["right_v_016_01_-_Default_0"]: THREE.Mesh;
    ["right_v_019_01_-_Default_0"]: THREE.Mesh;
    ["right_v_020_01_-_Default_0"]: THREE.Mesh;
    ["right_v_04_01_-_Default_0"]: THREE.Mesh;
    ["right_v_03_01_-_Default_0"]: THREE.Mesh;
    ["right_v_07_01_-_Default_0"]: THREE.Mesh;
    ["right_v_011_01_-_Default_0"]: THREE.Mesh;
    ["right_v_053_01_-_Default_0"]: THREE.Mesh;
    ["right_v_063_01_-_Default_0"]: THREE.Mesh;
    ["right_v_065_01_-_Default_0"]: THREE.Mesh;
    ["right_v_068_01_-_Default_0"]: THREE.Mesh;
    ["right_v_074_01_-_Default_0"]: THREE.Mesh;
    ["right_v_072_01_-_Default_0"]: THREE.Mesh;
    ["right_v_077_01_-_Default_0"]: THREE.Mesh;
    ["right_v_070_01_-_Default_0"]: THREE.Mesh;
    ["right_v_078_01_-_Default_0"]: THREE.Mesh;
    ["right_v_079_01_-_Default_0"]: THREE.Mesh;
    ["right_v_067_01_-_Default_0"]: THREE.Mesh;
    ["right_v_075_01_-_Default_0"]: THREE.Mesh;
    ["right_v_069_01_-_Default_0"]: THREE.Mesh;
    ["right_v_066_01_-_Default_0"]: THREE.Mesh;
    ["right_v_064_01_-_Default_0"]: THREE.Mesh;
    ["right_v_073_01_-_Default_0"]: THREE.Mesh;
    ["right_v_076_01_-_Default_0"]: THREE.Mesh;
    ["right_v_071_01_-_Default_0"]: THREE.Mesh;
    ["right_v_041_01_-_Default_0"]: THREE.Mesh;
    ["right_v_040_01_-_Default_0"]: THREE.Mesh;
    ["right_v_057_01_-_Default_0"]: THREE.Mesh;
    ["right_v_058_01_-_Default_0"]: THREE.Mesh;
    ["right_v_048_01_-_Default_0"]: THREE.Mesh;
    ["right_v_059_01_-_Default_0"]: THREE.Mesh;
    ["right_v_051_01_-_Default_0"]: THREE.Mesh;
    ["right_v_049_01_-_Default_0"]: THREE.Mesh;
    ["right_v_054_01_-_Default_0"]: THREE.Mesh;
    ["right_v_055_01_-_Default_0"]: THREE.Mesh;
    ["right_v_056_01_-_Default_0"]: THREE.Mesh;
    ["right_v_047_01_-_Default_0"]: THREE.Mesh;
    ["right_v_060_01_-_Default_0"]: THREE.Mesh;
    ["right_v_061_01_-_Default_0"]: THREE.Mesh;
    ["right_v_062_01_-_Default_0"]: THREE.Mesh;
    ["right_v_045_01_-_Default_0"]: THREE.Mesh;
    ["right_v_052_01_-_Default_0"]: THREE.Mesh;
    ["right_v_050_01_-_Default_0"]: THREE.Mesh;
    ["right_v_043_01_-_Default_0"]: THREE.Mesh;
    ["right_v_044_01_-_Default_0"]: THREE.Mesh;
    ["right_v_046_01_-_Default_0"]: THREE.Mesh;
    ["right_v_042_01_-_Default_0"]: THREE.Mesh;
    ["right_v_080_01_-_Default_0"]: THREE.Mesh;
    ["right_v_081_01_-_Default_0"]: THREE.Mesh;
    ["right_v_082_01_-_Default_0"]: THREE.Mesh;
    ["right_v_083_01_-_Default_0"]: THREE.Mesh;
    ["right_v_084_01_-_Default_0"]: THREE.Mesh;
    ["right_v_085_01_-_Default_0"]: THREE.Mesh;
    ["right_v_086_01_-_Default_0"]: THREE.Mesh;
    ["right_v_087_01_-_Default_0"]: THREE.Mesh;
    ["right_v_088_01_-_Default_0"]: THREE.Mesh;
    ["right_v_089_01_-_Default_0"]: THREE.Mesh;
    ["right_v_090_01_-_Default_0"]: THREE.Mesh;
    ["right_v_091_01_-_Default_0"]: THREE.Mesh;
    ["right_v_092_01_-_Default_0"]: THREE.Mesh;
    ["right_v_093_01_-_Default_0"]: THREE.Mesh;
    ["right_v_094_01_-_Default_0"]: THREE.Mesh;
    ["right_v_095_01_-_Default_0"]: THREE.Mesh;
    ["right_v_096_01_-_Default_0"]: THREE.Mesh;
    ["right_v_097_01_-_Default_0"]: THREE.Mesh;
    ["right_v_098_01_-_Default_0"]: THREE.Mesh;
    ["right_v_099_01_-_Default_0"]: THREE.Mesh;
    ["right_v_100_01_-_Default_0"]: THREE.Mesh;
    ["right_v_101_01_-_Default_0"]: THREE.Mesh;
    ["right_v_102_01_-_Default_0"]: THREE.Mesh;
    ["right_v_103_01_-_Default_0"]: THREE.Mesh;
    ["right_v_104_01_-_Default_0"]: THREE.Mesh;
    ["right_v_105_01_-_Default_0"]: THREE.Mesh;
    ["right_v_106_01_-_Default_0"]: THREE.Mesh;
    ["right_v_107_01_-_Default_0"]: THREE.Mesh;
    ["right_v_108_01_-_Default_0"]: THREE.Mesh;
    ["right_v_109_01_-_Default_0"]: THREE.Mesh;
    ["right_v_110_01_-_Default_0"]: THREE.Mesh;
    ["right_v_111_01_-_Default_0"]: THREE.Mesh;
    ["right_v_112_01_-_Default_0"]: THREE.Mesh;
    ["right_v_113_01_-_Default_0"]: THREE.Mesh;
    ["right_v_114_01_-_Default_0"]: THREE.Mesh;
    ["right_v_115_01_-_Default_0"]: THREE.Mesh;
    ["right_v_116_01_-_Default_0"]: THREE.Mesh;
    ["right_v_117_01_-_Default_0"]: THREE.Mesh;
    ["right_v_118_01_-_Default_0"]: THREE.Mesh;
    ["right_v_119_01_-_Default_0"]: THREE.Mesh;
  };
  materials: {
    ["01_-_Default"]: THREE.MeshStandardMaterial;
  };
  animations: GLTFAction[];
};

type ActionName = "Take 001";
interface GLTFAction extends THREE.AnimationClip {
  name: ActionName;
}
export type ContextType = Record<
  string,
  React.ForwardRefExoticComponent<JSX.IntrinsicElements["mesh"]>
>;

export function Firework(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  const { nodes, materials, animations } = useGLTF(
    "/dragon-year/firework.glb"
  ) as GLTFResult;
  const { actions, mixer } = useAnimations(animations, group);

  useEffect(() => {
    actions["Take 001"]?.play();
  }, [actions, mixer]);

  return (
    // @ts-expect-error ref
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={2.549}
          userData={{ name: "Sketchfab_model" }}
        >
          <group
            name="cc2916efacb04ef6abcfd7f7f49e7326fbx"
            rotation={[Math.PI / 2, 0, 0]}
            userData={{ name: "cc2916efacb04ef6abcfd7f7f49e7326.fbx" }}
          >
            <group name="Object_2" userData={{ name: "Object_2" }}>
              <group name="RootNode" userData={{ name: "RootNode" }}>
                <group
                  name="Group001"
                  position={[0.02, 10.163, 0.09]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  userData={{ name: "Group001" }}
                >
                  <group
                    name="right_v_022"
                    position={[-0.01, 0.09, -10.163]}
                    rotation={[Math.PI / 2, 0.519, 0]}
                    scale={[1, 1.752, 1.752]}
                    userData={{ name: "right v 022" }}
                  >
                    <mesh
                      name="right_v_022_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_022_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 022_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_030"
                    position={[-0.092, 0.105, -10.183]}
                    rotation={[Math.PI / 2, -0.519, 0]}
                    scale={[1.752, 1.752, 1]}
                    userData={{ name: "right v 030" }}
                  >
                    <mesh
                      name="right_v_030_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_030_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 030_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_031"
                    position={[0.007, 0.126, -10.163]}
                    rotation={[Math.PI / 2, -0.519, 0]}
                    scale={[1.752, 1.752, 1]}
                    userData={{ name: "right v 031" }}
                  >
                    <mesh
                      name="right_v_031_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_031_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 031_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_032"
                    position={[0.009, 0.117, -9.647]}
                    rotation={[Math.PI / 2, -0.519, 0]}
                    scale={[1, 1.752, 1.752]}
                    userData={{ name: "right v 032" }}
                  >
                    <mesh
                      name="right_v_032_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_032_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 032_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_034"
                    position={[-0.003, 0.097, -9.802]}
                    rotation={[Math.PI / 2, -0.519, 0]}
                    scale={[1.752, 1.752, 1]}
                    userData={{ name: "right v 034" }}
                  >
                    <mesh
                      name="right_v_034_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_034_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 034_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_035"
                    position={[0.02, 0.099, -9.819]}
                    rotation={[Math.PI / 2, -0.519, 0]}
                    scale={[1.752, 1.752, 1]}
                    userData={{ name: "right v 035" }}
                  >
                    <mesh
                      name="right_v_035_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_035_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 035_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_026"
                    position={[-0.01, 0.09, -10.163]}
                    rotation={[Math.PI / 2, 0.519, 0]}
                    scale={[1, 1.752, 1.752]}
                    userData={{ name: "right v 026" }}
                  >
                    <mesh
                      name="right_v_026_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_026_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 026_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_037"
                    position={[0.021, 0.101, -9.799]}
                    rotation={[Math.PI / 2, -0.519, 0]}
                    scale={[1.752, 1.752, 1]}
                    userData={{ name: "right v 037" }}
                  >
                    <mesh
                      name="right_v_037_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_037_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 037_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_023"
                    position={[-0.01, 0.09, -10.163]}
                    rotation={[Math.PI / 2, 0.519, 0]}
                    scale={[-1, -1.752, -1.752]}
                    userData={{ name: "right v 023" }}
                  >
                    <mesh
                      name="right_v_023_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_023_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 023_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_038"
                    position={[0.005, 0.093, -10.144]}
                    rotation={[Math.PI / 2, -0.519, 0]}
                    scale={[1.752, 1.752, 1]}
                    userData={{ name: "right v 038" }}
                  >
                    <mesh
                      name="right_v_038_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_038_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 038_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_027"
                    position={[-0.01, 0.09, -10.163]}
                    rotation={[Math.PI / 2, 0.519, 0]}
                    scale={[1, 1.752, 1.752]}
                    userData={{ name: "right v 027" }}
                  >
                    <mesh
                      name="right_v_027_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_027_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 027_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_021"
                    position={[-0.01, 0.09, -10.163]}
                    rotation={[Math.PI / 2, 0.519, 0]}
                    scale={[1, 1.752, 1.752]}
                    userData={{ name: "right v 021" }}
                  >
                    <mesh
                      name="right_v_021_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_021_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 021_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_028"
                    position={[-0.01, 0.09, -10.163]}
                    rotation={[Math.PI / 2, 0.519, 0]}
                    scale={[1, 1.752, 1.752]}
                    userData={{ name: "right v 028" }}
                  >
                    <mesh
                      name="right_v_028_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_028_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 028_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_025"
                    position={[-0.01, 0.09, -10.163]}
                    rotation={[Math.PI / 2, 0.519, 0]}
                    scale={[1, 1.752, 1.752]}
                    userData={{ name: "right v 025" }}
                  >
                    <mesh
                      name="right_v_025_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_025_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 025_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_033"
                    position={[0.015, 0.1, -9.8]}
                    rotation={[Math.PI / 2, -0.519, 0]}
                    scale={[-1, -1.752, -1.752]}
                    userData={{ name: "right v 033" }}
                  >
                    <mesh
                      name="right_v_033_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_033_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 033_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_039"
                    position={[-0.12, 0.111, -10.147]}
                    rotation={[Math.PI / 2, -0.519, 0]}
                    scale={[1.752, 1.752, 1]}
                    userData={{ name: "right v 039" }}
                  >
                    <mesh
                      name="right_v_039_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_039_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 039_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_06"
                    position={[-0.009, 0.09, -10.163]}
                    rotation={[Math.PI / 2, -1.571, 0]}
                    scale={[1, 1.752, 1.752]}
                    userData={{ name: "right v 06" }}
                  >
                    <mesh
                      name="right_v_06_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_06_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 06_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_013"
                    position={[-0.01, 0.09, -10.163]}
                    rotation={[-Math.PI / 2, 0, Math.PI]}
                    scale={[1.752, 1.752, 1]}
                    userData={{ name: "right v 013" }}
                  >
                    <mesh
                      name="right_v_013_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_013_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 013_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_09"
                    position={[-0.009, 0.09, -10.163]}
                    rotation={[Math.PI / 2, -1.571, 0]}
                    scale={[1, 1.752, 1.752]}
                    userData={{ name: "right v 09" }}
                  >
                    <mesh
                      name="right_v_09_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_09_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 09_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_017"
                    position={[-0.01, 0.09, -10.163]}
                    rotation={[-Math.PI / 2, 0, Math.PI]}
                    scale={[1.752, 1.752, 1]}
                    userData={{ name: "right v 017" }}
                  >
                    <mesh
                      name="right_v_017_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_017_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 017_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_05"
                    position={[-0.009, 0.09, -10.163]}
                    rotation={[Math.PI / 2, -1.571, 0]}
                    scale={[1, 1.752, 1.752]}
                    userData={{ name: "right v 05" }}
                  >
                    <mesh
                      name="right_v_05_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_05_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 05_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_"
                    position={[-0.009, 0.09, -10.163]}
                    rotation={[Math.PI / 2, -1.571, 0]}
                    scale={[1, 1.752, 1.752]}
                    userData={{ name: "right v " }}
                  >
                    <mesh
                      name="right_v__01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v__01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v _01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_01"
                    position={[-0.009, 0.09, -10.163]}
                    rotation={[Math.PI / 2, -1.571, 0]}
                    scale={[1, 1.752, 1.752]}
                    userData={{ name: "right v 01" }}
                  >
                    <mesh
                      name="right_v_01_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_01_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 01_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_08"
                    position={[-0.009, 0.09, -10.163]}
                    rotation={[Math.PI / 2, -1.571, 0]}
                    scale={[1, 1.752, 1.752]}
                    userData={{ name: "right v 08" }}
                  >
                    <mesh
                      name="right_v_08_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_08_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 08_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_010"
                    position={[-0.01, 0.09, -10.163]}
                    rotation={[Math.PI / 2, 0.003, Math.PI / 2]}
                    scale={[1.752, 1.752, 1]}
                    userData={{ name: "right v 010" }}
                  >
                    <mesh
                      name="right_v_010_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_010_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 010_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_014"
                    position={[-0.01, 0.09, -10.163]}
                    rotation={[-Math.PI / 2, 0, -Math.PI]}
                    scale={[-1.752, -1.752, -1]}
                    userData={{ name: "right v 014" }}
                  >
                    <mesh
                      name="right_v_014_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_014_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 014_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_012"
                    position={[-0.01, 0.09, -10.163]}
                    rotation={[-Math.PI / 2, 0, Math.PI]}
                    scale={[1.752, 1.752, 1]}
                    userData={{ name: "right v 012" }}
                  >
                    <mesh
                      name="right_v_012_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_012_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 012_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_02"
                    position={[-0.009, 0.09, -10.163]}
                    rotation={[Math.PI / 2, -1.571, 0]}
                    scale={[1, 1.752, 1.752]}
                    userData={{ name: "right v 02" }}
                  >
                    <mesh
                      name="right_v_02_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_02_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 02_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_015"
                    position={[-0.01, 0.09, -10.163]}
                    rotation={[-Math.PI / 2, 0, Math.PI]}
                    scale={[1.752, 1.752, 1]}
                    userData={{ name: "right v 015" }}
                  >
                    <mesh
                      name="right_v_015_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_015_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 015_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_018"
                    position={[-0.01, 0.09, -10.163]}
                    rotation={[-Math.PI / 2, 0, Math.PI]}
                    scale={[1.752, 1.752, 1]}
                    userData={{ name: "right v 018" }}
                  >
                    <mesh
                      name="right_v_018_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_018_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 018_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_024"
                    position={[-0.01, 0.09, -10.163]}
                    rotation={[Math.PI / 2, 0.519, 0]}
                    scale={[1, 1.752, 1.752]}
                    userData={{ name: "right v 024" }}
                  >
                    <mesh
                      name="right_v_024_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_024_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 024_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_029"
                    position={[-0.01, 0.09, -10.163]}
                    rotation={[Math.PI / 2, 0.519, 0]}
                    scale={[1, 1.752, 1.752]}
                    userData={{ name: "right v 029" }}
                  >
                    <mesh
                      name="right_v_029_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_029_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 029_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_036"
                    position={[0.041, 0.202, -10.122]}
                    rotation={[Math.PI / 2, -0.519, 0]}
                    scale={[1, 1.752, 1.752]}
                    userData={{ name: "right v 036" }}
                  >
                    <mesh
                      name="right_v_036_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_036_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 036_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_016"
                    position={[-0.01, 0.09, -10.163]}
                    rotation={[-Math.PI / 2, 0, Math.PI]}
                    scale={[1.752, 1.752, 1]}
                    userData={{ name: "right v 016" }}
                  >
                    <mesh
                      name="right_v_016_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_016_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 016_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_019"
                    position={[-0.01, 0.09, -10.163]}
                    rotation={[-Math.PI / 2, 0, Math.PI]}
                    scale={[1.752, 1.752, 1]}
                    userData={{ name: "right v 019" }}
                  >
                    <mesh
                      name="right_v_019_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_019_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 019_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_020"
                    position={[-0.01, 0.09, -10.163]}
                    rotation={[Math.PI / 2, 0.519, 0]}
                    scale={[1, 1.752, 1.752]}
                    userData={{ name: "right v 020" }}
                  >
                    <mesh
                      name="right_v_020_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_020_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 020_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_04"
                    position={[-0.009, 0.09, -10.163]}
                    rotation={[Math.PI / 2, -1.571, 0]}
                    scale={[1, 1.752, 1.752]}
                    userData={{ name: "right v 04" }}
                  >
                    <mesh
                      name="right_v_04_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_04_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 04_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_03"
                    position={[-0.009, 0.09, -10.163]}
                    rotation={[Math.PI / 2, -1.571, 0]}
                    scale={[-1, -1.752, -1.752]}
                    userData={{ name: "right v 03" }}
                  >
                    <mesh
                      name="right_v_03_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_03_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 03_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_07"
                    position={[-0.009, 0.09, -10.163]}
                    rotation={[Math.PI / 2, -1.571, 0]}
                    scale={[1, 1.752, 1.752]}
                    userData={{ name: "right v 07" }}
                  >
                    <mesh
                      name="right_v_07_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_07_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 07_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_011"
                    position={[-0.01, 0.09, -10.163]}
                    rotation={[-Math.PI / 2, 0, Math.PI]}
                    scale={[1.752, 1.752, 1]}
                    userData={{ name: "right v 011" }}
                  >
                    <mesh
                      name="right_v_011_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_011_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 011_01 - Default_0" }}
                    />
                  </group>
                </group>
                <group
                  name="Group002"
                  position={[-4.037, 0.248, -0.025]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  userData={{ name: "Group002" }}
                >
                  <group
                    name="right_v_053"
                    position={[0.001, -0.025, -0.248]}
                    rotation={[-Math.PI / 2, 0, -Math.PI]}
                    scale={[1.752, 1.752, 1]}
                    userData={{ name: "right v 053" }}
                  >
                    <mesh
                      name="right_v_053_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_053_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 053_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_063"
                    position={[0.001, -0.025, -0.248]}
                    rotation={[Math.PI / 2, 0.519, 0]}
                    scale={[-1, -1.752, -1.752]}
                    userData={{ name: "right v 063" }}
                  >
                    <mesh
                      name="right_v_063_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_063_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 063_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_065"
                    position={[0.001, -0.025, -0.248]}
                    rotation={[Math.PI / 2, 0.519, 0]}
                    scale={[1, 1.752, 1.752]}
                    userData={{ name: "right v 065" }}
                  >
                    <mesh
                      name="right_v_065_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_065_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 065_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_068"
                    position={[0.001, -0.025, -0.248]}
                    rotation={[Math.PI / 2, 0.519, 0]}
                    scale={[1, 1.752, 1.752]}
                    userData={{ name: "right v 068" }}
                  >
                    <mesh
                      name="right_v_068_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_068_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 068_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_074"
                    position={[0.007, -0.018, 0.114]}
                    rotation={[Math.PI / 2, -0.519, 0]}
                    scale={[1.752, 1.752, 1]}
                    userData={{ name: "right v 074" }}
                  >
                    <mesh
                      name="right_v_074_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_074_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 074_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_072"
                    position={[0.02, 0.001, 0.268]}
                    rotation={[Math.PI / 2, -0.519, 0]}
                    scale={[1.752, 1.752, 1]}
                    userData={{ name: "right v 072" }}
                  >
                    <mesh
                      name="right_v_072_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_072_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 072_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_077"
                    position={[0.032, -0.014, 0.117]}
                    rotation={[Math.PI / 2, -0.519, 0]}
                    scale={[1.752, 1.752, 1]}
                    userData={{ name: "right v 077" }}
                  >
                    <mesh
                      name="right_v_077_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_077_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 077_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_070"
                    position={[-0.082, -0.01, -0.268]}
                    rotation={[Math.PI / 2, -0.519, 0]}
                    scale={[1.752, 1.752, 1]}
                    userData={{ name: "right v 070" }}
                  >
                    <mesh
                      name="right_v_070_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_070_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 070_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_078"
                    position={[0.015, -0.022, -0.228]}
                    rotation={[Math.PI / 2, -0.519, 0]}
                    scale={[1.752, 1.752, 1]}
                    userData={{ name: "right v 078" }}
                  >
                    <mesh
                      name="right_v_078_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_078_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 078_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_079"
                    position={[-0.109, -0.004, -0.232]}
                    rotation={[Math.PI / 2, -0.519, 0]}
                    scale={[1.752, 1.752, 1]}
                    userData={{ name: "right v 079" }}
                  >
                    <mesh
                      name="right_v_079_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_079_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 079_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_067"
                    position={[0.001, -0.025, -0.248]}
                    rotation={[Math.PI / 2, 0.519, 0]}
                    scale={[1, 1.752, 1.752]}
                    userData={{ name: "right v 067" }}
                  >
                    <mesh
                      name="right_v_067_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_067_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 067_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_075"
                    position={[0.03, -0.016, 0.096]}
                    rotation={[Math.PI / 2, -0.519, 0]}
                    scale={[1.752, 1.752, 1]}
                    userData={{ name: "right v 075" }}
                  >
                    <mesh
                      name="right_v_075_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_075_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 075_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_069"
                    position={[0.001, -0.025, -0.248]}
                    rotation={[Math.PI / 2, 0.519, 0]}
                    scale={[1, 1.752, 1.752]}
                    userData={{ name: "right v 069" }}
                  >
                    <mesh
                      name="right_v_069_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_069_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 069_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_066"
                    position={[0.001, -0.025, -0.248]}
                    rotation={[Math.PI / 2, 0.519, 0]}
                    scale={[1, 1.752, 1.752]}
                    userData={{ name: "right v 066" }}
                  >
                    <mesh
                      name="right_v_066_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_066_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 066_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_064"
                    position={[0.001, -0.025, -0.248]}
                    rotation={[Math.PI / 2, 0.519, 0]}
                    scale={[1, 1.752, 1.752]}
                    userData={{ name: "right v 064" }}
                  >
                    <mesh
                      name="right_v_064_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_064_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 064_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_073"
                    position={[0.026, -0.015, 0.115]}
                    rotation={[Math.PI / 2, -0.519, 0]}
                    scale={[-1, -1.752, -1.752]}
                    userData={{ name: "right v 073" }}
                  >
                    <mesh
                      name="right_v_073_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_073_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 073_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_076"
                    position={[0.052, 0.087, -0.207]}
                    rotation={[Math.PI / 2, -0.519, 0]}
                    scale={[1.752, 1.752, 1]}
                    userData={{ name: "right v 076" }}
                  >
                    <mesh
                      name="right_v_076_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_076_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 076_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_071"
                    position={[0.017, 0.011, -0.248]}
                    rotation={[Math.PI / 2, -0.519, 0]}
                    scale={[1.752, 1.752, 1]}
                    userData={{ name: "right v 071" }}
                  >
                    <mesh
                      name="right_v_071_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_071_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 071_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_041"
                    position={[0.001, -0.025, -0.248]}
                    rotation={[Math.PI / 2, -1.571, 0]}
                    scale={[1, 1.752, 1.752]}
                    userData={{ name: "right v 041" }}
                  >
                    <mesh
                      name="right_v_041_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_041_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 041_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_040"
                    position={[0.001, -0.025, -0.248]}
                    rotation={[Math.PI / 2, -1.571, 0]}
                    scale={[1, 1.752, 1.752]}
                    userData={{ name: "right v 040" }}
                  >
                    <mesh
                      name="right_v_040_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_040_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 040_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_057"
                    position={[0.001, -0.025, -0.248]}
                    rotation={[-Math.PI / 2, 0, -Math.PI]}
                    scale={[1.752, 1.752, 1]}
                    userData={{ name: "right v 057" }}
                  >
                    <mesh
                      name="right_v_057_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_057_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 057_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_058"
                    position={[0.001, -0.025, -0.248]}
                    rotation={[-Math.PI / 2, 0, -Math.PI]}
                    scale={[1.752, 1.752, 1]}
                    userData={{ name: "right v 058" }}
                  >
                    <mesh
                      name="right_v_058_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_058_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 058_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_048"
                    position={[0.001, -0.025, -0.248]}
                    rotation={[Math.PI / 2, -1.571, 0]}
                    scale={[1, 1.752, 1.752]}
                    userData={{ name: "right v 048" }}
                  >
                    <mesh
                      name="right_v_048_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_048_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 048_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_059"
                    position={[0.001, -0.025, -0.248]}
                    rotation={[-Math.PI / 2, 0, -Math.PI]}
                    scale={[1.752, 1.752, 1]}
                    userData={{ name: "right v 059" }}
                  >
                    <mesh
                      name="right_v_059_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_059_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 059_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_051"
                    position={[0.001, -0.025, -0.248]}
                    rotation={[-Math.PI / 2, 0, -Math.PI]}
                    scale={[1.752, 1.752, 1]}
                    userData={{ name: "right v 051" }}
                  >
                    <mesh
                      name="right_v_051_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_051_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 051_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_049"
                    position={[0.001, -0.025, -0.248]}
                    rotation={[Math.PI / 2, -1.571, 0]}
                    scale={[1, 1.752, 1.752]}
                    userData={{ name: "right v 049" }}
                  >
                    <mesh
                      name="right_v_049_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_049_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 049_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_054"
                    position={[0.001, -0.025, -0.248]}
                    rotation={[-Math.PI / 2, 0, Math.PI]}
                    scale={[-1.752, -1.752, -1]}
                    userData={{ name: "right v 054" }}
                  >
                    <mesh
                      name="right_v_054_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_054_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 054_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_055"
                    position={[0.001, -0.025, -0.248]}
                    rotation={[-Math.PI / 2, 0, -Math.PI]}
                    scale={[1.752, 1.752, 1]}
                    userData={{ name: "right v 055" }}
                  >
                    <mesh
                      name="right_v_055_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_055_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 055_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_056"
                    position={[0.001, -0.025, -0.248]}
                    rotation={[-Math.PI / 2, 0, -Math.PI]}
                    scale={[1.752, 1.752, 1]}
                    userData={{ name: "right v 056" }}
                  >
                    <mesh
                      name="right_v_056_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_056_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 056_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_047"
                    position={[0.001, -0.025, -0.248]}
                    rotation={[Math.PI / 2, -1.571, 0]}
                    scale={[1, 1.752, 1.752]}
                    userData={{ name: "right v 047" }}
                  >
                    <mesh
                      name="right_v_047_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_047_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 047_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_060"
                    position={[0.001, -0.025, -0.248]}
                    rotation={[Math.PI / 2, 0.519, 0]}
                    scale={[1, 1.752, 1.752]}
                    userData={{ name: "right v 060" }}
                  >
                    <mesh
                      name="right_v_060_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_060_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 060_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_061"
                    position={[0.001, -0.025, -0.248]}
                    rotation={[Math.PI / 2, 0.519, 0]}
                    scale={[1, 1.752, 1.752]}
                    userData={{ name: "right v 061" }}
                  >
                    <mesh
                      name="right_v_061_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_061_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 061_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_062"
                    position={[0.001, -0.025, -0.248]}
                    rotation={[Math.PI / 2, 0.519, 0]}
                    scale={[1, 1.752, 1.752]}
                    userData={{ name: "right v 062" }}
                  >
                    <mesh
                      name="right_v_062_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_062_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 062_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_045"
                    position={[0.001, -0.025, -0.248]}
                    rotation={[Math.PI / 2, -1.571, 0]}
                    scale={[1, 1.752, 1.752]}
                    userData={{ name: "right v 045" }}
                  >
                    <mesh
                      name="right_v_045_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_045_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 045_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_052"
                    position={[0.001, -0.025, -0.248]}
                    rotation={[-Math.PI / 2, 0, -Math.PI]}
                    scale={[1.752, 1.752, 1]}
                    userData={{ name: "right v 052" }}
                  >
                    <mesh
                      name="right_v_052_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_052_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 052_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_050"
                    position={[0.001, -0.025, -0.248]}
                    rotation={[Math.PI / 2, 0.003, Math.PI / 2]}
                    scale={[1.752, 1.752, 1]}
                    userData={{ name: "right v 050" }}
                  >
                    <mesh
                      name="right_v_050_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_050_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 050_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_043"
                    position={[0.001, -0.025, -0.248]}
                    rotation={[Math.PI / 2, -1.571, 0]}
                    scale={[-1, -1.752, -1.752]}
                    userData={{ name: "right v 043" }}
                  >
                    <mesh
                      name="right_v_043_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_043_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 043_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_044"
                    position={[0.001, -0.025, -0.248]}
                    rotation={[Math.PI / 2, -1.571, 0]}
                    scale={[1, 1.752, 1.752]}
                    userData={{ name: "right v 044" }}
                  >
                    <mesh
                      name="right_v_044_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_044_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 044_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_046"
                    position={[0.001, -0.025, -0.248]}
                    rotation={[Math.PI / 2, -1.571, 0]}
                    scale={[1, 1.752, 1.752]}
                    userData={{ name: "right v 046" }}
                  >
                    <mesh
                      name="right_v_046_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_046_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 046_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_042"
                    position={[0.001, -0.025, -0.248]}
                    rotation={[Math.PI / 2, -1.571, 0]}
                    scale={[1, 1.752, 1.752]}
                    userData={{ name: "right v 042" }}
                  >
                    <mesh
                      name="right_v_042_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_042_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 042_01 - Default_0" }}
                    />
                  </group>
                </group>
                <group
                  name="Group003"
                  position={[-3.503, 10.163, 0.09]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  userData={{ name: "Group003" }}
                >
                  <group
                    name="right_v_080"
                    position={[0.041, 0.202, -10.122]}
                    rotation={[Math.PI / 2, -0.519, 0]}
                    scale={[1, 1.752, 1.752]}
                    userData={{ name: "right v 080" }}
                  >
                    <mesh
                      name="right_v_080_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_080_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 080_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_081"
                    position={[-0.01, 0.09, -10.163]}
                    rotation={[Math.PI / 2, 0.519, 0]}
                    scale={[1, 1.752, 1.752]}
                    userData={{ name: "right v 081" }}
                  >
                    <mesh
                      name="right_v_081_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_081_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 081_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_082"
                    position={[-0.092, 0.105, -10.183]}
                    rotation={[Math.PI / 2, -0.519, 0]}
                    scale={[1.752, 1.752, 1]}
                    userData={{ name: "right v 082" }}
                  >
                    <mesh
                      name="right_v_082_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_082_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 082_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_083"
                    position={[0.007, 0.126, -10.163]}
                    rotation={[Math.PI / 2, -0.519, 0]}
                    scale={[1.752, 1.752, 1]}
                    userData={{ name: "right v 083" }}
                  >
                    <mesh
                      name="right_v_083_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_083_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 083_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_084"
                    position={[0.009, 0.117, -9.647]}
                    rotation={[Math.PI / 2, -0.519, 0]}
                    scale={[1, 1.752, 1.752]}
                    userData={{ name: "right v 084" }}
                  >
                    <mesh
                      name="right_v_084_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_084_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 084_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_085"
                    position={[-0.003, 0.097, -9.802]}
                    rotation={[Math.PI / 2, -0.519, 0]}
                    scale={[1.752, 1.752, 1]}
                    userData={{ name: "right v 085" }}
                  >
                    <mesh
                      name="right_v_085_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_085_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 085_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_086"
                    position={[0.02, 0.099, -9.819]}
                    rotation={[Math.PI / 2, -0.519, 0]}
                    scale={[1.752, 1.752, 1]}
                    userData={{ name: "right v 086" }}
                  >
                    <mesh
                      name="right_v_086_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_086_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 086_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_087"
                    position={[-0.01, 0.09, -10.163]}
                    rotation={[Math.PI / 2, 0.519, 0]}
                    scale={[1, 1.752, 1.752]}
                    userData={{ name: "right v 087" }}
                  >
                    <mesh
                      name="right_v_087_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_087_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 087_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_088"
                    position={[0.021, 0.101, -9.799]}
                    rotation={[Math.PI / 2, -0.519, 0]}
                    scale={[1.752, 1.752, 1]}
                    userData={{ name: "right v 088" }}
                  >
                    <mesh
                      name="right_v_088_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_088_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 088_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_089"
                    position={[-0.01, 0.09, -10.163]}
                    rotation={[Math.PI / 2, 0.519, 0]}
                    scale={[-1, -1.752, -1.752]}
                    userData={{ name: "right v 089" }}
                  >
                    <mesh
                      name="right_v_089_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_089_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 089_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_090"
                    position={[0.005, 0.093, -10.144]}
                    rotation={[Math.PI / 2, -0.519, 0]}
                    scale={[1.752, 1.752, 1]}
                    userData={{ name: "right v 090" }}
                  >
                    <mesh
                      name="right_v_090_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_090_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 090_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_091"
                    position={[-0.01, 0.09, -10.163]}
                    rotation={[Math.PI / 2, 0.519, 0]}
                    scale={[1, 1.752, 1.752]}
                    userData={{ name: "right v 091" }}
                  >
                    <mesh
                      name="right_v_091_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_091_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 091_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_092"
                    position={[-0.01, 0.09, -10.163]}
                    rotation={[Math.PI / 2, 0.519, 0]}
                    scale={[1, 1.752, 1.752]}
                    userData={{ name: "right v 092" }}
                  >
                    <mesh
                      name="right_v_092_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_092_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 092_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_093"
                    position={[-0.01, 0.09, -10.163]}
                    rotation={[Math.PI / 2, 0.519, 0]}
                    scale={[1, 1.752, 1.752]}
                    userData={{ name: "right v 093" }}
                  >
                    <mesh
                      name="right_v_093_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_093_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 093_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_094"
                    position={[-0.01, 0.09, -10.163]}
                    rotation={[Math.PI / 2, 0.519, 0]}
                    scale={[1, 1.752, 1.752]}
                    userData={{ name: "right v 094" }}
                  >
                    <mesh
                      name="right_v_094_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_094_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 094_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_095"
                    position={[0.015, 0.1, -9.8]}
                    rotation={[Math.PI / 2, -0.519, 0]}
                    scale={[-1, -1.752, -1.752]}
                    userData={{ name: "right v 095" }}
                  >
                    <mesh
                      name="right_v_095_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_095_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 095_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_096"
                    position={[-0.12, 0.111, -10.147]}
                    rotation={[Math.PI / 2, -0.519, 0]}
                    scale={[1.752, 1.752, 1]}
                    userData={{ name: "right v 096" }}
                  >
                    <mesh
                      name="right_v_096_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_096_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 096_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_097"
                    position={[-0.009, 0.09, -10.163]}
                    rotation={[Math.PI / 2, -1.571, 0]}
                    scale={[1, 1.752, 1.752]}
                    userData={{ name: "right v 097" }}
                  >
                    <mesh
                      name="right_v_097_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_097_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 097_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_098"
                    position={[-0.01, 0.09, -10.163]}
                    rotation={[-Math.PI / 2, 0, Math.PI]}
                    scale={[1.752, 1.752, 1]}
                    userData={{ name: "right v 098" }}
                  >
                    <mesh
                      name="right_v_098_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_098_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 098_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_099"
                    position={[-0.009, 0.09, -10.163]}
                    rotation={[Math.PI / 2, -1.571, 0]}
                    scale={[1, 1.752, 1.752]}
                    userData={{ name: "right v 099" }}
                  >
                    <mesh
                      name="right_v_099_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_099_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 099_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_100"
                    position={[-0.01, 0.09, -10.163]}
                    rotation={[-Math.PI / 2, 0, Math.PI]}
                    scale={[1.752, 1.752, 1]}
                    userData={{ name: "right v 100" }}
                  >
                    <mesh
                      name="right_v_100_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_100_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 100_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_101"
                    position={[-0.009, 0.09, -10.163]}
                    rotation={[Math.PI / 2, -1.571, 0]}
                    scale={[1, 1.752, 1.752]}
                    userData={{ name: "right v 101" }}
                  >
                    <mesh
                      name="right_v_101_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_101_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 101_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_102"
                    position={[-0.009, 0.09, -10.163]}
                    rotation={[Math.PI / 2, -1.571, 0]}
                    scale={[1, 1.752, 1.752]}
                    userData={{ name: "right v 102" }}
                  >
                    <mesh
                      name="right_v_102_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_102_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 102_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_103"
                    position={[-0.009, 0.09, -10.163]}
                    rotation={[Math.PI / 2, -1.571, 0]}
                    scale={[1, 1.752, 1.752]}
                    userData={{ name: "right v 103" }}
                  >
                    <mesh
                      name="right_v_103_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_103_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 103_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_104"
                    position={[-0.009, 0.09, -10.163]}
                    rotation={[Math.PI / 2, -1.571, 0]}
                    scale={[1, 1.752, 1.752]}
                    userData={{ name: "right v 104" }}
                  >
                    <mesh
                      name="right_v_104_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_104_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 104_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_105"
                    position={[-0.01, 0.09, -10.163]}
                    rotation={[Math.PI / 2, 0.003, Math.PI / 2]}
                    scale={[1.752, 1.752, 1]}
                    userData={{ name: "right v 105" }}
                  >
                    <mesh
                      name="right_v_105_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_105_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 105_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_106"
                    position={[-0.01, 0.09, -10.163]}
                    rotation={[-Math.PI / 2, 0, -Math.PI]}
                    scale={[-1.752, -1.752, -1]}
                    userData={{ name: "right v 106" }}
                  >
                    <mesh
                      name="right_v_106_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_106_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 106_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_107"
                    position={[-0.01, 0.09, -10.163]}
                    rotation={[-Math.PI / 2, 0, Math.PI]}
                    scale={[1.752, 1.752, 1]}
                    userData={{ name: "right v 107" }}
                  >
                    <mesh
                      name="right_v_107_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_107_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 107_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_108"
                    position={[-0.009, 0.09, -10.163]}
                    rotation={[Math.PI / 2, -1.571, 0]}
                    scale={[1, 1.752, 1.752]}
                    userData={{ name: "right v 108" }}
                  >
                    <mesh
                      name="right_v_108_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_108_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 108_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_109"
                    position={[-0.01, 0.09, -10.163]}
                    rotation={[-Math.PI / 2, 0, Math.PI]}
                    scale={[1.752, 1.752, 1]}
                    userData={{ name: "right v 109" }}
                  >
                    <mesh
                      name="right_v_109_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_109_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 109_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_110"
                    position={[-0.01, 0.09, -10.163]}
                    rotation={[-Math.PI / 2, 0, Math.PI]}
                    scale={[1.752, 1.752, 1]}
                    userData={{ name: "right v 110" }}
                  >
                    <mesh
                      name="right_v_110_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_110_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 110_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_111"
                    position={[-0.01, 0.09, -10.163]}
                    rotation={[Math.PI / 2, 0.519, 0]}
                    scale={[1, 1.752, 1.752]}
                    userData={{ name: "right v 111" }}
                  >
                    <mesh
                      name="right_v_111_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_111_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 111_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_112"
                    position={[-0.01, 0.09, -10.163]}
                    rotation={[Math.PI / 2, 0.519, 0]}
                    scale={[1, 1.752, 1.752]}
                    userData={{ name: "right v 112" }}
                  >
                    <mesh
                      name="right_v_112_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_112_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 112_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_113"
                    position={[-0.01, 0.09, -10.163]}
                    rotation={[-Math.PI / 2, 0, Math.PI]}
                    scale={[1.752, 1.752, 1]}
                    userData={{ name: "right v 113" }}
                  >
                    <mesh
                      name="right_v_113_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_113_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 113_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_114"
                    position={[-0.01, 0.09, -10.163]}
                    rotation={[-Math.PI / 2, 0, Math.PI]}
                    scale={[1.752, 1.752, 1]}
                    userData={{ name: "right v 114" }}
                  >
                    <mesh
                      name="right_v_114_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_114_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 114_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_115"
                    position={[-0.01, 0.09, -10.163]}
                    rotation={[Math.PI / 2, 0.519, 0]}
                    scale={[1, 1.752, 1.752]}
                    userData={{ name: "right v 115" }}
                  >
                    <mesh
                      name="right_v_115_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_115_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 115_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_116"
                    position={[-0.009, 0.09, -10.163]}
                    rotation={[Math.PI / 2, -1.571, 0]}
                    scale={[1, 1.752, 1.752]}
                    userData={{ name: "right v 116" }}
                  >
                    <mesh
                      name="right_v_116_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_116_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 116_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_117"
                    position={[-0.009, 0.09, -10.163]}
                    rotation={[Math.PI / 2, -1.571, 0]}
                    scale={[-1, -1.752, -1.752]}
                    userData={{ name: "right v 117" }}
                  >
                    <mesh
                      name="right_v_117_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_117_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 117_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_118"
                    position={[-0.009, 0.09, -10.163]}
                    rotation={[Math.PI / 2, -1.571, 0]}
                    scale={[1, 1.752, 1.752]}
                    userData={{ name: "right v 118" }}
                  >
                    <mesh
                      name="right_v_118_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_118_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 118_01 - Default_0" }}
                    />
                  </group>
                  <group
                    name="right_v_119"
                    position={[-0.01, 0.09, -10.163]}
                    rotation={[-Math.PI / 2, 0, Math.PI]}
                    scale={[1.752, 1.752, 1]}
                    userData={{ name: "right v 119" }}
                  >
                    <mesh
                      name="right_v_119_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["right_v_119_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                      userData={{ name: "right v 119_01 - Default_0" }}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/dragon-year/firework.glb");
