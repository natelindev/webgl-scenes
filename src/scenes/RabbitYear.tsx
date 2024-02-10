import * as THREE from "three";
import { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import {
  useGLTF,
  MeshReflectorMaterial,
  Stage,
  useAnimations,
  Text,
  OrbitControls,
} from "@react-three/drei";
import { GLTF } from "three-stdlib";
import React, { JSX } from "react";

type GLTFResult1 = GLTF & {
  nodes: {
    Object_2: THREE.Mesh;
    Object_3: THREE.Mesh;
    Object_4: THREE.Mesh;
  };
  materials: {
    Material: THREE.MeshStandardMaterial;
    ["Material.002"]: THREE.MeshStandardMaterial;
    ["Material.003"]: THREE.MeshStandardMaterial;
  };
};
type GLTFResult2 = GLTF & {
  nodes: {
    Object_4: THREE.Mesh;
    Object_5: THREE.Mesh;
    Object_6: THREE.Mesh;
    Object_8: THREE.Mesh;
    Object_10: THREE.Mesh;
    Object_12: THREE.Mesh;
    Object_14: THREE.Mesh;
    Object_16: THREE.Mesh;
    Object_18: THREE.Mesh;
    Object_20: THREE.Mesh;
    Object_22: THREE.Mesh;
    Object_24: THREE.Mesh;
  };
  materials: {
    Body: THREE.MeshStandardMaterial;
    Cheek: THREE.MeshStandardMaterial;
    EyesEars: THREE.MeshStandardMaterial;
  };
};

type GLTFResult3 = GLTF & {
  nodes: {
    defaultMaterial: THREE.Mesh;
    defaultMaterial_1: THREE.Mesh;
    defaultMaterial_2: THREE.Mesh;
  };
  materials: {
    lambert1: THREE.MeshStandardMaterial;
  };
};

export function Rabbit3(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/rabbit-year/rabbit3.glb"
  ) as unknown as GLTFResult3;
  return (
    <group {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          userData={{ name: "Sketchfab_model" }}
        >
          <group
            name="Collada_visual_scene_group"
            rotation={[Math.PI / 2, 0, 0]}
            userData={{ name: "Collada visual scene group" }}
          >
            <group
              name="hojas_low"
              scale={0.01}
              userData={{ name: "hojas_low" }}
            >
              <mesh
                name="defaultMaterial"
                castShadow
                receiveShadow
                geometry={nodes.defaultMaterial.geometry}
                material={materials.lambert1}
                userData={{ name: "defaultMaterial" }}
              />
            </group>
            <group
              name="zanahoria_low"
              scale={0.01}
              userData={{ name: "zanahoria_low" }}
            >
              <mesh
                name="defaultMaterial_1"
                castShadow
                receiveShadow
                geometry={nodes.defaultMaterial_1.geometry}
                material={materials.lambert1}
                userData={{ name: "defaultMaterial" }}
              />
            </group>
            <group
              name="cuerpo_low"
              scale={0.01}
              userData={{ name: "cuerpo_low" }}
            >
              <mesh
                name="defaultMaterial_2"
                castShadow
                receiveShadow
                geometry={nodes.defaultMaterial_2.geometry}
                material={materials.lambert1}
                userData={{ name: "defaultMaterial" }}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

export function Rabbit2(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/rabbit-year/rabbit2.glb"
  ) as unknown as GLTFResult2;
  return (
    <group {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          userData={{ name: "Sketchfab_model" }}
        >
          <group name="root" userData={{ name: "root" }}>
            <group
              name="GLTF_SceneRootNode"
              rotation={[Math.PI / 2, 0, 0]}
              userData={{ name: "GLTF_SceneRootNode" }}
            >
              <group
                name="Rabbit_1"
                scale={[5.14, 3.7, 2.71]}
                userData={{ name: "Rabbit_1" }}
              >
                <mesh
                  name="Object_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4.geometry}
                  material={materials.Body}
                  userData={{ name: "Object_4" }}
                />
                <mesh
                  name="Object_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_5.geometry}
                  material={materials.Cheek}
                  userData={{ name: "Object_5" }}
                />
                <mesh
                  name="Object_6"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_6.geometry}
                  material={materials.EyesEars}
                  userData={{ name: "Object_6" }}
                />
              </group>
              <group
                name="Cube005_3"
                position={[-2.04, 0.9, 0]}
                scale={[0.51, 0.37, 0.27]}
                userData={{ name: "Cube.005_3" }}
              >
                <mesh
                  name="Object_8"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_8.geometry}
                  material={materials.Body}
                  userData={{ name: "Object_8" }}
                />
              </group>
              <group
                name="Cube006_4"
                position={[-2.04, 0.48, 0]}
                scale={[0.22, 0.22, 0.15]}
                userData={{ name: "Cube.006_4" }}
              >
                <mesh
                  name="Object_10"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_10.geometry}
                  material={materials.Body}
                  userData={{ name: "Object_10" }}
                />
              </group>
              <group
                name="Cube007_5"
                position={[-1.89, 0.62, 0]}
                rotation={[0, 0, 0.59]}
                scale={0.04}
                userData={{ name: "Cube.007_5" }}
              >
                <mesh
                  name="Object_12"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_12.geometry}
                  material={materials.Body}
                  userData={{ name: "Object_12" }}
                />
              </group>
              <group
                name="Cube008_6"
                position={[-1.99, 0.41, 0]}
                rotation={[0, 0, -0.06]}
                scale={0.04}
                userData={{ name: "Cube.008_6" }}
              >
                <mesh
                  name="Object_14"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_14.geometry}
                  material={materials.Body}
                  userData={{ name: "Object_14" }}
                />
              </group>
              <group
                name="Cube009_7"
                position={[-1.83, 1.23, 0]}
                rotation={[0, 0, -0.53]}
                scale={[0.07, 0.02, 0.07]}
                userData={{ name: "Cube.009_7" }}
              >
                <mesh
                  name="Object_16"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_16.geometry}
                  material={materials.Body}
                  userData={{ name: "Object_16" }}
                />
              </group>
              <group
                name="Sphere003_8"
                position={[-1.75, 0.87, 0.15]}
                rotation={[-3.03, -0.48, -3.11]}
                scale={[-0.11, 0.11, 0.02]}
                userData={{ name: "Sphere.003_8" }}
              >
                <mesh
                  name="Object_18"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_18.geometry}
                  material={materials.Cheek}
                  userData={{ name: "Object_18" }}
                />
              </group>
              <group
                name="Sphere004_9"
                position={[-1.9, 0.93, 0.21]}
                rotation={[0, 0.17, 0]}
                scale={[0.03, 0.04, 0.01]}
                userData={{ name: "Sphere.004_9" }}
              >
                <mesh
                  name="Object_20"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_20.geometry}
                  material={materials.EyesEars}
                  userData={{ name: "Object_20" }}
                />
              </group>
              <group
                name="Sphere005_10"
                position={[-2.04, 0.88, 0.22]}
                rotation={[-Math.PI, 0, 0]}
                scale={[-0.02, 0.01, 0]}
                userData={{ name: "Sphere.005_10" }}
              >
                <mesh
                  name="Object_22"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_22.geometry}
                  material={materials.EyesEars}
                  userData={{ name: "Object_22" }}
                />
              </group>
              <group
                name="Plane001_11"
                position={[-2.04, 0.88, 0.22]}
                scale={[0.01, 0.01, 0]}
                userData={{ name: "Plane.001_11" }}
              >
                <mesh
                  name="Object_24"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_24.geometry}
                  material={materials.EyesEars}
                  userData={{ name: "Object_24" }}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

export function Rabbit1(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/rabbit-year/rabbit1.glb"
  ) as unknown as GLTFResult1;
  return (
    <group {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          userData={{ name: "Sketchfab_model" }}
        >
          <group
            name="������objcleanermaterialmergergles"
            userData={{ name: "������.obj.cleaner.materialmerger.gles" }}
          >
            <mesh
              name="Object_2"
              castShadow
              receiveShadow
              geometry={nodes.Object_2.geometry}
              material={materials.Material}
              userData={{ name: "Object_2" }}
            />
            <mesh
              name="Object_3"
              castShadow
              receiveShadow
              geometry={nodes.Object_3.geometry}
              material={materials["Material.002"]}
              userData={{ name: "Object_3" }}
            />
            <mesh
              name="Object_4"
              castShadow
              receiveShadow
              geometry={nodes.Object_4.geometry}
              material={materials["Material.003"]}
              userData={{ name: "Object_4" }}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

type GLTFResult4 = GLTF & {
  nodes: {
    Object_85: THREE.SkinnedMesh;
    Object_86: THREE.SkinnedMesh;
    Object_87: THREE.SkinnedMesh;
    Object_88: THREE.SkinnedMesh;
    Object_89: THREE.SkinnedMesh;
    Object_90: THREE.SkinnedMesh;
    Object_91: THREE.SkinnedMesh;
    Object_92: THREE.SkinnedMesh;
    _rootJoint: THREE.Bone;
  };
  materials: {
    lambert5: THREE.MeshStandardMaterial;
    lambert6: THREE.MeshStandardMaterial;
    lambert8: THREE.MeshStandardMaterial;
    material: THREE.MeshStandardMaterial;
    EYEE: THREE.MeshStandardMaterial;
    lambert2: THREE.MeshStandardMaterial;
    rab_bone_text_re_RREYEE: THREE.MeshStandardMaterial;
    lambert10: THREE.MeshStandardMaterial;
  };
  animations: GLTFAction[];
};

type ActionName = "Take 001";
interface GLTFAction extends THREE.AnimationClip {
  name: ActionName;
}

export function Rabbit4(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  const { nodes, materials, animations } = useGLTF(
    "/rabbit-year/rabbit4.glb"
  ) as unknown as GLTFResult4;

  const { actions, mixer } = useAnimations(animations, group);
  useEffect(() => {
    actions["Take 001"]?.play();
  }, [actions, mixer]);

  return (
    /* @ts-expect-error */
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          userData={{ name: "Sketchfab_model" }}
        >
          <group
            name="e9b7c0e050784958a2736d881918ca73fbx"
            rotation={[Math.PI / 2, 0, 0]}
            userData={{ name: "e9b7c0e050784958a2736d881918ca73.fbx" }}
          >
            <group name="Object_2" userData={{ name: "Object_2" }}>
              <group name="RootNode" userData={{ name: "RootNode" }}>
                <group
                  name="left"
                  position={[-1000.1, 0, 0]}
                  userData={{ name: "left" }}
                >
                  <group name="Object_5" userData={{ name: "Object_5" }} />
                </group>
                <group
                  name="rab_bone_text_re_RRleft"
                  position={[-1000.1, 0, 0]}
                  userData={{ name: "rab_bone_text_re_RR:left" }}
                >
                  <group name="Object_7" userData={{ name: "Object_7" }} />
                </group>
                <group
                  name="polySurface21"
                  userData={{ name: "polySurface21" }}
                >
                  <group
                    name="polySurface22"
                    userData={{ name: "polySurface22" }}
                  >
                    <group
                      name="transform27"
                      userData={{ name: "transform27" }}
                    />
                  </group>
                  <group
                    name="polySurface23"
                    userData={{ name: "polySurface23" }}
                  >
                    <group
                      name="transform26"
                      userData={{ name: "transform26" }}
                    />
                  </group>
                  <group
                    name="polySurface24"
                    userData={{ name: "polySurface24" }}
                  >
                    <group
                      name="transform25"
                      userData={{ name: "transform25" }}
                    />
                  </group>
                  <group
                    name="polySurface25"
                    userData={{ name: "polySurface25" }}
                  >
                    <group
                      name="transform24"
                      userData={{ name: "transform24" }}
                    />
                  </group>
                  <group
                    name="polySurface26"
                    userData={{ name: "polySurface26" }}
                  >
                    <group
                      name="transform23"
                      userData={{ name: "transform23" }}
                    />
                  </group>
                  <group
                    name="polySurface27"
                    userData={{ name: "polySurface27" }}
                  >
                    <group
                      name="transform22"
                      userData={{ name: "transform22" }}
                    />
                  </group>
                  <group
                    name="polySurface28"
                    userData={{ name: "polySurface28" }}
                  >
                    <group
                      name="transform21"
                      userData={{ name: "transform21" }}
                    />
                  </group>
                  <group
                    name="polySurface29"
                    userData={{ name: "polySurface29" }}
                  >
                    <group
                      name="transform20"
                      userData={{ name: "transform20" }}
                    />
                  </group>
                  <group
                    name="polySurface31"
                    userData={{ name: "polySurface31" }}
                  >
                    <group
                      name="transform19"
                      userData={{ name: "transform19" }}
                    />
                  </group>
                  <group
                    name="polySurface32"
                    userData={{ name: "polySurface32" }}
                  >
                    <group
                      name="transform18"
                      userData={{ name: "transform18" }}
                    />
                  </group>
                  <group
                    name="polySurface33"
                    userData={{ name: "polySurface33" }}
                  >
                    <group
                      name="transform17"
                      userData={{ name: "transform17" }}
                    />
                  </group>
                  <group
                    name="polySurface34"
                    userData={{ name: "polySurface34" }}
                  >
                    <group
                      name="transform16"
                      userData={{ name: "transform16" }}
                    />
                  </group>
                  <group
                    name="polySurface35"
                    userData={{ name: "polySurface35" }}
                  >
                    <group
                      name="transform15"
                      userData={{ name: "transform15" }}
                    />
                  </group>
                  <group
                    name="polySurface36"
                    userData={{ name: "polySurface36" }}
                  >
                    <group
                      name="transform14"
                      userData={{ name: "transform14" }}
                    />
                  </group>
                  <group
                    name="polySurface37"
                    userData={{ name: "polySurface37" }}
                  >
                    <group
                      name="transform13"
                      userData={{ name: "transform13" }}
                    />
                  </group>
                  <group
                    name="polySurface38"
                    userData={{ name: "polySurface38" }}
                  >
                    <group
                      name="transform12"
                      userData={{ name: "transform12" }}
                    />
                  </group>
                  <group
                    name="polySurface39"
                    userData={{ name: "polySurface39" }}
                  >
                    <group
                      name="transform11"
                      userData={{ name: "transform11" }}
                    />
                  </group>
                  <group
                    name="polySurface40"
                    userData={{ name: "polySurface40" }}
                  >
                    <group
                      name="transform10"
                      userData={{ name: "transform10" }}
                    />
                  </group>
                  <group
                    name="polySurface43"
                    userData={{ name: "polySurface43" }}
                  >
                    <group
                      name="transform9"
                      userData={{ name: "transform9" }}
                    />
                  </group>
                  <group
                    name="polySurface44"
                    userData={{ name: "polySurface44" }}
                  >
                    <group
                      name="transform8"
                      userData={{ name: "transform8" }}
                    />
                  </group>
                  <group
                    name="polySurface45"
                    userData={{ name: "polySurface45" }}
                  >
                    <group
                      name="transform7"
                      userData={{ name: "transform7" }}
                    />
                  </group>
                  <group
                    name="polySurface46"
                    userData={{ name: "polySurface46" }}
                  >
                    <group
                      name="transform6"
                      userData={{ name: "transform6" }}
                    />
                  </group>
                  <group
                    name="polySurface48"
                    userData={{ name: "polySurface48" }}
                  >
                    <group
                      name="transform5"
                      userData={{ name: "transform5" }}
                    />
                  </group>
                  <group
                    name="polySurface49"
                    userData={{ name: "polySurface49" }}
                  >
                    <group
                      name="transform4"
                      userData={{ name: "transform4" }}
                    />
                  </group>
                  <group
                    name="polySurface50"
                    userData={{ name: "polySurface50" }}
                  >
                    <group
                      name="transform3"
                      userData={{ name: "transform3" }}
                    />
                  </group>
                  <group
                    name="polySurface51"
                    userData={{ name: "polySurface51" }}
                  >
                    <group
                      name="transform2"
                      userData={{ name: "transform2" }}
                    />
                  </group>
                  <group name="transform1" userData={{ name: "transform1" }} />
                </group>
                <group
                  name="Character2_Reference"
                  userData={{ name: "Character2_Reference" }}
                >
                  <group name="Object_63" userData={{ name: "Object_63" }}>
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_85"
                      geometry={nodes.Object_85.geometry}
                      material={materials.lambert5}
                      skeleton={nodes.Object_85.skeleton}
                      userData={{ name: "Object_85" }}
                    />
                    <skinnedMesh
                      name="Object_86"
                      geometry={nodes.Object_86.geometry}
                      material={materials.lambert6}
                      skeleton={nodes.Object_86.skeleton}
                      userData={{ name: "Object_86" }}
                    />
                    <skinnedMesh
                      name="Object_87"
                      geometry={nodes.Object_87.geometry}
                      material={materials.lambert8}
                      skeleton={nodes.Object_87.skeleton}
                      userData={{ name: "Object_87" }}
                    />
                    <skinnedMesh
                      name="Object_88"
                      geometry={nodes.Object_88.geometry}
                      material={materials.material}
                      skeleton={nodes.Object_88.skeleton}
                      userData={{ name: "Object_88" }}
                    />
                    <skinnedMesh
                      name="Object_89"
                      geometry={nodes.Object_89.geometry}
                      material={materials.EYEE}
                      skeleton={nodes.Object_89.skeleton}
                      userData={{ name: "Object_89" }}
                    />
                    <skinnedMesh
                      name="Object_90"
                      geometry={nodes.Object_90.geometry}
                      material={materials.lambert2}
                      skeleton={nodes.Object_90.skeleton}
                      userData={{ name: "Object_90" }}
                    />
                    <skinnedMesh
                      name="Object_91"
                      geometry={nodes.Object_91.geometry}
                      material={materials.rab_bone_text_re_RREYEE}
                      skeleton={nodes.Object_91.skeleton}
                      userData={{ name: "Object_91" }}
                    />
                    <skinnedMesh
                      name="Object_92"
                      geometry={nodes.Object_92.geometry}
                      material={materials.lambert10}
                      skeleton={nodes.Object_92.skeleton}
                      userData={{ name: "Object_92" }}
                    />
                  </group>
                </group>
                <group
                  name="polySurface52"
                  userData={{ name: "polySurface52" }}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

export function Lantern(props: React.JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/rabbit-year/lantern.glb") as any;
  return (
    <group {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          userData={{ name: "Sketchfab_model" }}
        >
          <group
            name="b8742b80c00a4ea4b4022be9e996af7bfbx"
            rotation={[Math.PI / 2, 0, 0]}
            userData={{ name: "b8742b80c00a4ea4b4022be9e996af7b.fbx" }}
          >
            <group name="RootNode" userData={{ name: "RootNode" }}>
              <group
                name="Lantern"
                position={[-0.49, -56.64, 0.99]}
                rotation={[-Math.PI / 2, 0, 0]}
                userData={{ name: "Lantern" }}
              >
                <group
                  name="B"
                  position={[0, -16.41, -90.42]}
                  rotation={[-Math.PI / 2, 0, Math.PI]}
                  scale={1.15}
                  userData={{ name: "B" }}
                >
                  <mesh
                    name="B_Material_#2_0"
                    castShadow
                    receiveShadow
                    geometry={nodes["B_Material_#2_0"].geometry}
                    material={materials.Material_2}
                    userData={{ name: "B_Material #2_0" }}
                  />
                </group>
                <group
                  name="A"
                  position={[0, 1.98, 0]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={1.17}
                  userData={{ name: "A" }}
                >
                  <mesh
                    name="A_Material_#1_0"
                    castShadow
                    receiveShadow
                    geometry={nodes["A_Material_#1_0"].geometry}
                    material={materials.Material_1}
                    userData={{ name: "A_Material #1_0" }}
                  />
                  <mesh
                    name="A_Material_#1_0_1"
                    castShadow
                    receiveShadow
                    geometry={nodes["A_Material_#1_0_1"].geometry}
                    material={materials.Material_1}
                    userData={{ name: "A_Material #1_0" }}
                  />
                  <mesh
                    name="A_Material_#1_0_2"
                    castShadow
                    receiveShadow
                    geometry={nodes["A_Material_#1_0_2"].geometry}
                    material={materials.Material_1}
                    userData={{ name: "A_Material #1_0" }}
                  />
                </group>
                <group
                  name="G"
                  position={[0, 1.98, 193.41]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={1.17}
                  userData={{ name: "G" }}
                >
                  <mesh
                    name="G_Material_#1_0"
                    castShadow
                    receiveShadow
                    geometry={nodes["G_Material_#1_0"].geometry}
                    material={materials.Material_1}
                    userData={{ name: "G_Material #1_0" }}
                  />
                </group>
                <group
                  name="E"
                  position={[0, 1.98, 70.84]}
                  rotation={[Math.PI / 2, -0.52, 0]}
                  scale={1.17}
                  userData={{ name: "E" }}
                >
                  <mesh
                    name="E_Material_#1_0"
                    castShadow
                    receiveShadow
                    geometry={nodes["E_Material_#1_0"].geometry}
                    material={materials.Material_1}
                    userData={{ name: "E_Material #1_0" }}
                  />
                </group>
                <group
                  name="C"
                  position={[0, 1.99, -29.13]}
                  rotation={[Math.PI / 2, 0.45, 0]}
                  scale={1.17}
                  userData={{ name: "C" }}
                >
                  <mesh
                    name="C_Material_#1_0"
                    castShadow
                    receiveShadow
                    geometry={nodes["C_Material_#1_0"].geometry}
                    material={materials.Material_1}
                    userData={{ name: "C_Material #1_0" }}
                  />
                </group>
                <group
                  name="I"
                  position={[0, -72.89, 193.06]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={1.17}
                  userData={{ name: "I" }}
                >
                  <mesh
                    name="I_Material_#2_0"
                    castShadow
                    receiveShadow
                    geometry={nodes["I_Material_#2_0"].geometry}
                    material={materials.Material_2}
                    userData={{ name: "I_Material #2_0" }}
                  />
                </group>
                <group
                  name="H"
                  position={[0, 1.98, 193.03]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={1.17}
                  userData={{ name: "H" }}
                >
                  <mesh
                    name="H_Material_#2_0"
                    castShadow
                    receiveShadow
                    geometry={nodes["H_Material_#2_0"].geometry}
                    material={materials.Material_2}
                    userData={{ name: "H_Material #2_0" }}
                  />
                  <mesh
                    name="H_Material_#2_0_1"
                    castShadow
                    receiveShadow
                    geometry={nodes["H_Material_#2_0_1"].geometry}
                    material={materials.Material_2}
                    userData={{ name: "H_Material #2_0" }}
                  />
                </group>
                <group
                  name="F"
                  position={[0, 1.98, 70.55]}
                  rotation={[Math.PI / 2, -0.52, 0]}
                  scale={1.17}
                  userData={{ name: "F" }}
                >
                  <mesh
                    name="F_Material_#2_0"
                    castShadow
                    receiveShadow
                    geometry={nodes["F_Material_#2_0"].geometry}
                    material={materials.Material_2}
                    userData={{ name: "F_Material #2_0" }}
                  />
                  <mesh
                    name="F_Material_#2_0_1"
                    castShadow
                    receiveShadow
                    geometry={nodes["F_Material_#2_0_1"].geometry}
                    material={materials.Material_2}
                    userData={{ name: "F_Material #2_0" }}
                  />
                </group>
                <group
                  name="D"
                  position={[0, 1.99, -29.38]}
                  rotation={[Math.PI / 2, 0.45, 0]}
                  scale={1.17}
                  userData={{ name: "D" }}
                >
                  <mesh
                    name="D_Material_#2_0"
                    castShadow
                    receiveShadow
                    geometry={nodes["D_Material_#2_0"].geometry}
                    material={materials.Material_2}
                    userData={{ name: "D_Material #2_0" }}
                  />
                  <mesh
                    name="D_Material_#2_0_1"
                    castShadow
                    receiveShadow
                    geometry={nodes["D_Material_#2_0_1"].geometry}
                    material={materials.Material_2}
                    userData={{ name: "D_Material #2_0" }}
                  />
                </group>
                <group
                  name="J"
                  position={[0, 1.98, 0]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={1.17}
                  userData={{ name: "J" }}
                >
                  <mesh
                    name="J_Material_#2_0"
                    castShadow
                    receiveShadow
                    geometry={nodes["J_Material_#2_0"].geometry}
                    material={materials.Material_2}
                    userData={{ name: "J_Material #2_0" }}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

export function Lantern2(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/rabbit-year/lantern2.glb") as any;
  return (
    <group {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          userData={{ name: "Sketchfab_model" }}
        >
          <group name="root" userData={{ name: "root" }}>
            <group
              name="GLTF_SceneRootNode"
              rotation={[Math.PI / 2, 0, 0]}
              userData={{ name: "GLTF_SceneRootNode" }}
            >
              <group
                name="denglongobj_0"
                position={[1.02, -2.76, -0.19]}
                scale={54.56}
                userData={{ name: "denglong.obj_0" }}
              >
                <group
                  name="g_polySurface140_xd_denglong_1"
                  userData={{ name: "g polySurface140 xd denglong_1" }}
                >
                  <group
                    name="polySurface140_xd_denglong_1001_2"
                    userData={{ name: "polySurface140 xd denglong_1001_2" }}
                  >
                    <mesh
                      name="Object_6"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_6.geometry}
                      material={materials["1001"]}
                      userData={{ name: "Object_6" }}
                    />
                  </group>
                </group>
                <group
                  name="g_xd_denglong_polySurface141_3"
                  userData={{ name: "g xd denglong polySurface141_3" }}
                >
                  <group
                    name="xd_denglong_polySurface141_1001_4"
                    userData={{ name: "xd denglong polySurface141_1001_4" }}
                  >
                    <mesh
                      name="Object_9"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_9.geometry}
                      material={materials["1001"]}
                      userData={{ name: "Object_9" }}
                    />
                  </group>
                </group>
                <group
                  name="g_xd_denglong_polySurface139_5"
                  userData={{ name: "g xd denglong polySurface139_5" }}
                >
                  <group
                    name="xd_denglong_polySurface139_1001_6"
                    userData={{ name: "xd denglong polySurface139_1001_6" }}
                  >
                    <mesh
                      name="Object_12"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_12.geometry}
                      material={materials["1001"]}
                      userData={{ name: "Object_12" }}
                    />
                  </group>
                </group>
                <group
                  name="g_xd_denglong_polySurface137_7"
                  userData={{ name: "g xd denglong polySurface137_7" }}
                >
                  <group
                    name="xd_denglong_polySurface137_1001_8"
                    userData={{ name: "xd denglong polySurface137_1001_8" }}
                  >
                    <mesh
                      name="Object_15"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_15.geometry}
                      material={materials["1001"]}
                      userData={{ name: "Object_15" }}
                    />
                  </group>
                </group>
                <group
                  name="g_xd_denglong_polySurface101_9"
                  userData={{ name: "g xd denglong polySurface101_9" }}
                >
                  <group
                    name="xd_denglong_polySurface101_1001_10"
                    userData={{ name: "xd denglong polySurface101_1001_10" }}
                  >
                    <mesh
                      name="Object_18"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_18.geometry}
                      material={materials["1001"]}
                      userData={{ name: "Object_18" }}
                    />
                  </group>
                </group>
                <group
                  name="g_xd_denglong_polySurface133_11"
                  userData={{ name: "g xd denglong polySurface133_11" }}
                >
                  <group
                    name="xd_denglong_polySurface133_1001_12"
                    userData={{ name: "xd denglong polySurface133_1001_12" }}
                  >
                    <mesh
                      name="Object_21"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_21.geometry}
                      material={materials["1001"]}
                      userData={{ name: "Object_21" }}
                    />
                  </group>
                </group>
                <group
                  name="g_pasted__polySurface1_pasted__pPlane9_group_13"
                  userData={{
                    name: "g pasted__polySurface1 pasted__pPlane9 group_13",
                  }}
                >
                  <group
                    name="pasted__polySurface1_pasted__pPlane9_group_1001_14"
                    userData={{
                      name: "pasted__polySurface1 pasted__pPlane9 group_1001_14",
                    }}
                  >
                    <mesh
                      name="Object_24"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_24.geometry}
                      material={materials["1001"]}
                      userData={{ name: "Object_24" }}
                    />
                  </group>
                </group>
                <group
                  name="g_xd_denglong_szxddenglongpolySurface124_15"
                  userData={{
                    name: "g xd denglong sz:xddenglongpolySurface124_15",
                  }}
                >
                  <group
                    name="xd_denglong_szxddenglongpolySurface124_1001_16"
                    userData={{
                      name: "xd denglong sz:xddenglongpolySurface124_1001_16",
                    }}
                  >
                    <mesh
                      name="Object_27"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_27.geometry}
                      material={materials["1001"]}
                      userData={{ name: "Object_27" }}
                    />
                  </group>
                </group>
                <group
                  name="g_xd_denglong_szpolySurface122xddenglong_17"
                  userData={{
                    name: "g xd denglong sz:polySurface122xddenglong_17",
                  }}
                >
                  <group
                    name="xd_denglong_szpolySurface122xddenglong_1001_18"
                    userData={{
                      name: "xd denglong sz:polySurface122xddenglong_1001_18",
                    }}
                  >
                    <mesh
                      name="Object_30"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_30.geometry}
                      material={materials["1001"]}
                      userData={{ name: "Object_30" }}
                    />
                  </group>
                </group>
                <group
                  name="g_xd_denglong_polySurface106_19"
                  userData={{ name: "g xd denglong polySurface106_19" }}
                >
                  <group
                    name="xd_denglong_polySurface106_1001_20"
                    userData={{ name: "xd denglong polySurface106_1001_20" }}
                  >
                    <mesh
                      name="Object_33"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_33.geometry}
                      material={materials["1001"]}
                      userData={{ name: "Object_33" }}
                    />
                  </group>
                </group>
                <group
                  name="g_xd_denglong_polySurface107_21"
                  userData={{ name: "g xd denglong polySurface107_21" }}
                >
                  <group
                    name="xd_denglong_polySurface107_1001_22"
                    userData={{ name: "xd denglong polySurface107_1001_22" }}
                  >
                    <mesh
                      name="Object_36"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_36.geometry}
                      material={materials["1001"]}
                      userData={{ name: "Object_36" }}
                    />
                  </group>
                </group>
                <group
                  name="g_xd_denglong_polySurface108_23"
                  userData={{ name: "g xd denglong polySurface108_23" }}
                >
                  <group
                    name="xd_denglong_polySurface108_1001_24"
                    userData={{ name: "xd denglong polySurface108_1001_24" }}
                  >
                    <mesh
                      name="Object_39"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_39.geometry}
                      material={materials["1001"]}
                      userData={{ name: "Object_39" }}
                    />
                  </group>
                </group>
                <group
                  name="g_xd_denglong_polySurface110_25"
                  userData={{ name: "g xd denglong polySurface110_25" }}
                >
                  <group
                    name="xd_denglong_polySurface110_1001_26"
                    userData={{ name: "xd denglong polySurface110_1001_26" }}
                  >
                    <mesh
                      name="Object_42"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_42.geometry}
                      material={materials["1001"]}
                      userData={{ name: "Object_42" }}
                    />
                  </group>
                </group>
                <group
                  name="g_xd_denglong_polySurface127_27"
                  userData={{ name: "g xd denglong polySurface127_27" }}
                >
                  <group
                    name="xd_denglong_polySurface127_1001_28"
                    userData={{ name: "xd denglong polySurface127_1001_28" }}
                  >
                    <mesh
                      name="Object_45"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_45.geometry}
                      material={materials["1001"]}
                      userData={{ name: "Object_45" }}
                    />
                  </group>
                </group>
                <group
                  name="g_xd_denglong_polySurface109_29"
                  userData={{ name: "g xd denglong polySurface109_29" }}
                >
                  <group
                    name="xd_denglong_polySurface109_1001_30"
                    userData={{ name: "xd denglong polySurface109_1001_30" }}
                  >
                    <mesh
                      name="Object_48"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_48.geometry}
                      material={materials["1001"]}
                      userData={{ name: "Object_48" }}
                    />
                  </group>
                </group>
                <group
                  name="g_xd_denglong_polySurface138_31"
                  userData={{ name: "g xd denglong polySurface138_31" }}
                >
                  <group
                    name="xd_denglong_polySurface138_1001_32"
                    userData={{ name: "xd denglong polySurface138_1001_32" }}
                  >
                    <mesh
                      name="Object_51"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_51.geometry}
                      material={materials["1001"]}
                      userData={{ name: "Object_51" }}
                    />
                  </group>
                </group>
                <group
                  name="g_xd_denglong_polySurface126_33"
                  userData={{ name: "g xd denglong polySurface126_33" }}
                >
                  <group
                    name="xd_denglong_polySurface126_1001_34"
                    userData={{ name: "xd denglong polySurface126_1001_34" }}
                  >
                    <mesh
                      name="Object_54"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_54.geometry}
                      material={materials["1001"]}
                      userData={{ name: "Object_54" }}
                    />
                  </group>
                </group>
                <group
                  name="g_xd_denglong_polySurface120_35"
                  userData={{ name: "g xd denglong polySurface120_35" }}
                >
                  <group
                    name="xd_denglong_polySurface120_1001_36"
                    userData={{ name: "xd denglong polySurface120_1001_36" }}
                  >
                    <mesh
                      name="Object_57"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_57.geometry}
                      material={materials["1001"]}
                      userData={{ name: "Object_57" }}
                    />
                  </group>
                </group>
                <group
                  name="g_xd_denglong_polySurface123_37"
                  userData={{ name: "g xd denglong polySurface123_37" }}
                >
                  <group
                    name="xd_denglong_polySurface123_1001_38"
                    userData={{ name: "xd denglong polySurface123_1001_38" }}
                  >
                    <mesh
                      name="Object_60"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_60.geometry}
                      material={materials["1001"]}
                      userData={{ name: "Object_60" }}
                    />
                  </group>
                </group>
                <group
                  name="g_xd_denglong_polySurface121_39"
                  userData={{ name: "g xd denglong polySurface121_39" }}
                >
                  <group
                    name="xd_denglong_polySurface121_1001_40"
                    userData={{ name: "xd denglong polySurface121_1001_40" }}
                  >
                    <mesh
                      name="Object_63"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_63.geometry}
                      material={materials["1001"]}
                      userData={{ name: "Object_63" }}
                    />
                  </group>
                </group>
                <group
                  name="g_xd_denglong_polySurface118_41"
                  userData={{ name: "g xd denglong polySurface118_41" }}
                >
                  <group
                    name="xd_denglong_polySurface118_1001_42"
                    userData={{ name: "xd denglong polySurface118_1001_42" }}
                  >
                    <mesh
                      name="Object_66"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_66.geometry}
                      material={materials["1001"]}
                      userData={{ name: "Object_66" }}
                    />
                  </group>
                </group>
                <group
                  name="g_xd_denglong_polySurface132_43"
                  userData={{ name: "g xd denglong polySurface132_43" }}
                >
                  <group
                    name="xd_denglong_polySurface132_1001_44"
                    userData={{ name: "xd denglong polySurface132_1001_44" }}
                  >
                    <mesh
                      name="Object_69"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_69.geometry}
                      material={materials["1001"]}
                      userData={{ name: "Object_69" }}
                    />
                  </group>
                </group>
                <group
                  name="g_xd_denglong_polySurface114_45"
                  userData={{ name: "g xd denglong polySurface114_45" }}
                >
                  <group
                    name="xd_denglong_polySurface114_1001_46"
                    userData={{ name: "xd denglong polySurface114_1001_46" }}
                  >
                    <mesh
                      name="Object_72"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_72.geometry}
                      material={materials["1001"]}
                      userData={{ name: "Object_72" }}
                    />
                  </group>
                </group>
                <group
                  name="g_xd_denglong_polySurface115_47"
                  userData={{ name: "g xd denglong polySurface115_47" }}
                >
                  <group
                    name="xd_denglong_polySurface115_1001_48"
                    userData={{ name: "xd denglong polySurface115_1001_48" }}
                  >
                    <mesh
                      name="Object_75"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_75.geometry}
                      material={materials["1001"]}
                      userData={{ name: "Object_75" }}
                    />
                  </group>
                </group>
                <group
                  name="g_xd_denglong_polySurface131_49"
                  userData={{ name: "g xd denglong polySurface131_49" }}
                >
                  <group
                    name="xd_denglong_polySurface131_1001_50"
                    userData={{ name: "xd denglong polySurface131_1001_50" }}
                  >
                    <mesh
                      name="Object_78"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_78.geometry}
                      material={materials["1001"]}
                      userData={{ name: "Object_78" }}
                    />
                  </group>
                </group>
                <group
                  name="g_xd_denglong_polySurface113_51"
                  userData={{ name: "g xd denglong polySurface113_51" }}
                >
                  <group
                    name="xd_denglong_polySurface113_1001_52"
                    userData={{ name: "xd denglong polySurface113_1001_52" }}
                  >
                    <mesh
                      name="Object_81"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_81.geometry}
                      material={materials["1001"]}
                      userData={{ name: "Object_81" }}
                    />
                  </group>
                </group>
                <group
                  name="g_xd_denglong_polySurface112_53"
                  userData={{ name: "g xd denglong polySurface112_53" }}
                >
                  <group
                    name="xd_denglong_polySurface112_1001_54"
                    userData={{ name: "xd denglong polySurface112_1001_54" }}
                  >
                    <mesh
                      name="Object_84"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_84.geometry}
                      material={materials["1001"]}
                      userData={{ name: "Object_84" }}
                    />
                  </group>
                </group>
                <group
                  name="g_xd_denglong_polySurface136_55"
                  userData={{ name: "g xd denglong polySurface136_55" }}
                >
                  <group
                    name="xd_denglong_polySurface136_1001_56"
                    userData={{ name: "xd denglong polySurface136_1001_56" }}
                  >
                    <mesh
                      name="Object_87"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_87.geometry}
                      material={materials["1001"]}
                      userData={{ name: "Object_87" }}
                    />
                  </group>
                </group>
                <group
                  name="g_xd_denglong_polySurface134_57"
                  userData={{ name: "g xd denglong polySurface134_57" }}
                >
                  <group
                    name="xd_denglong_polySurface134_1001_58"
                    userData={{ name: "xd denglong polySurface134_1001_58" }}
                  >
                    <mesh
                      name="Object_90"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_90.geometry}
                      material={materials["1001"]}
                      userData={{ name: "Object_90" }}
                    />
                  </group>
                </group>
                <group
                  name="g_xd_denglong_polySurface135_59"
                  userData={{ name: "g xd denglong polySurface135_59" }}
                >
                  <group
                    name="xd_denglong_polySurface135_1001_60"
                    userData={{ name: "xd denglong polySurface135_1001_60" }}
                  >
                    <mesh
                      name="Object_93"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_93.geometry}
                      material={materials["1001"]}
                      userData={{ name: "Object_93" }}
                    />
                  </group>
                </group>
                <group
                  name="g_xd_denglong_polySurface142_61"
                  userData={{ name: "g xd denglong polySurface142_61" }}
                >
                  <group
                    name="xd_denglong_polySurface142_1001_62"
                    userData={{ name: "xd denglong polySurface142_1001_62" }}
                  >
                    <mesh
                      name="Object_96"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_96.geometry}
                      material={materials["1001"]}
                      userData={{ name: "Object_96" }}
                    />
                  </group>
                </group>
                <group
                  name="g_xd_denglong_polySurface119_63"
                  userData={{ name: "g xd denglong polySurface119_63" }}
                >
                  <group
                    name="xd_denglong_polySurface119_1001_64"
                    userData={{ name: "xd denglong polySurface119_1001_64" }}
                  >
                    <mesh
                      name="Object_99"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_99.geometry}
                      material={materials["1001"]}
                      userData={{ name: "Object_99" }}
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

export default function RabbitYear() {
  return (
    <Canvas dpr={[1, 2]} shadows camera={{ fov: 90 }}>
      <color attach="background" args={["#101010"]} />
      <fog attach="fog" args={["#101010", 10, 20]} />
      <Suspense fallback={null}>
        <OrbitControls />
        <Stage environment={"warehouse"} intensity={0.5}>
          <Text
            scale={[1, 1, 1]}
            position={[0, 9.5, 0]}
            color="red" // default
            anchorX="center" // default
            anchorY="middle" // default
          >
            Happy New Year
          </Text>
          <Lantern2 scale={0.03} position={[6, 9, 0]} />
          <Lantern2 scale={0.03} position={[-6, 9, 0]} />
          <Lantern scale={0.01} position={[8, 8, 0]} />
          <Lantern scale={0.01} position={[-8, 8, 0]} />
          <Rabbit1 scale={1} position={[0, 3.6, 0]} />
          <Rabbit2 scale={0.2} position={[2.5, 5, 0]} />
          <Rabbit3 scale={1} position={[3, 2.9, 0]} />
          <Rabbit4 scale={0.2} position={[-2.5, 3.6, 0]} />
        </Stage>
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3.5, 0]}>
          <planeGeometry args={[170, 170]} />
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
      </Suspense>
    </Canvas>
  );
}

useGLTF.preload("/rabbit-year/rabbit1.glb");
useGLTF.preload("/rabbit-year/rabbit2.glb");
useGLTF.preload("/rabbit-year/rabbit3.glb");
useGLTF.preload("/rabbit-year/rabbit4.glb");
useGLTF.preload("/rabbit-year/lantern.glb");
useGLTF.preload("/rabbit-year/lantern2.glb");
