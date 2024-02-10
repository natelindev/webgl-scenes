import * as THREE from "three";
import React, { JSX, useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    pCylinder30_Generic_Map_0: THREE.Mesh;
    pPlane58_Generic_Map_0: THREE.Mesh;
    pCylinder28_Generic_Map_0: THREE.Mesh;
    pPlane57_Generic_Map_0: THREE.Mesh;
    pCylinder29_Generic_Map_0: THREE.Mesh;
    pPlane56_Generic_Map_0: THREE.Mesh;
    pCylinder31_Generic_Map_0: THREE.Mesh;
    pPlane55_Generic_Map_0: THREE.Mesh;
    pCylinder32_Generic_Map_0: THREE.Mesh;
    pPlane54_Generic_Map_0: THREE.Mesh;
    pPlane53_Generic_Map_0: THREE.Mesh;
    pCylinder33_Generic_Map_0: THREE.Mesh;
    pCylinder11_Generic_Map_0: THREE.Mesh;
    pPlane52_Generic_Map_0: THREE.Mesh;
    pPlane51_Generic_Map_0: THREE.Mesh;
    pPlane59_Generic_Map_0: THREE.Mesh;
    pPlane60_Generic_Map_0: THREE.Mesh;
    pPlane61_Generic_Map_0: THREE.Mesh;
    pPlane62_Generic_Map_0: THREE.Mesh;
    pPlane63_Generic_Map_0: THREE.Mesh;
    pPlane50_Generic_Map_0: THREE.Mesh;
    pPlane48_Generic_Map_0: THREE.Mesh;
    pPlane47_Generic_Map_0: THREE.Mesh;
    pPlane46_Generic_Map_0: THREE.Mesh;
    pPlane49_Generic_Map_0: THREE.Mesh;
    pPlane66_Generic_Map_0: THREE.Mesh;
    pPlane67_Generic_Map_0: THREE.Mesh;
    pPlane68_Generic_Map_0: THREE.Mesh;
    pPlane69_Generic_Map_0: THREE.Mesh;
    pPlane70_Generic_Map_0: THREE.Mesh;
    pPlane41_Generic_Map_0: THREE.Mesh;
    pPlane44_Generic_Map_0: THREE.Mesh;
    pPlane42_Generic_Map_0: THREE.Mesh;
    pPlane43_Generic_Map_0: THREE.Mesh;
    pPlane41_Generic_Map_0_1: THREE.Mesh;
    pPlane44_Generic_Map_0_1: THREE.Mesh;
    pPlane42_Generic_Map_0_1: THREE.Mesh;
    pPlane43_Generic_Map_0_1: THREE.Mesh;
    pPlane41_Generic_Map_0_2: THREE.Mesh;
    pPlane44_Generic_Map_0_2: THREE.Mesh;
    pPlane42_Generic_Map_0_2: THREE.Mesh;
    pPlane43_Generic_Map_0_2: THREE.Mesh;
    pCylinder24_Generic_Map_0: THREE.Mesh;
    pPlane41_Generic_Map_0_3: THREE.Mesh;
    pPlane44_Generic_Map_0_3: THREE.Mesh;
    pPlane42_Generic_Map_0_3: THREE.Mesh;
    pPlane43_Generic_Map_0_3: THREE.Mesh;
    pPlane41_Generic_Map_0_4: THREE.Mesh;
    pPlane44_Generic_Map_0_4: THREE.Mesh;
    pPlane42_Generic_Map_0_4: THREE.Mesh;
    pPlane43_Generic_Map_0_4: THREE.Mesh;
    pPlane45_Generic_Map_0: THREE.Mesh;
    pPlane41_Generic_Map_0_5: THREE.Mesh;
    pPlane44_Generic_Map_0_5: THREE.Mesh;
    pPlane42_Generic_Map_0_5: THREE.Mesh;
    pPlane43_Generic_Map_0_5: THREE.Mesh;
    pCylinder36_Generic_Map_0: THREE.Mesh;
    pCylinder37_Generic_Map_0: THREE.Mesh;
    pPlane36_Generic_Map_0: THREE.Mesh;
    pPlane37_Generic_Map_0: THREE.Mesh;
    pPlane32_Generic_Map_0: THREE.Mesh;
    pPlane33_Generic_Map_0: THREE.Mesh;
    pPlane29_Generic_Map_0: THREE.Mesh;
    pPlane31_Generic_Map_0: THREE.Mesh;
    pPlane30_Generic_Map_0: THREE.Mesh;
    pPlane40_Generic_Map_0: THREE.Mesh;
    pPlane39_Generic_Map_0: THREE.Mesh;
    pPlane38_Generic_Map_0: THREE.Mesh;
    pPlane35_Generic_Map_0: THREE.Mesh;
    pPlane34_Generic_Map_0: THREE.Mesh;
    pCylinder7_Generic_Map_0: THREE.Mesh;
    pPlane14_Generic_Map_0: THREE.Mesh;
    pCylinder34_Generic_Map_0: THREE.Mesh;
    pCylinder35_Generic_Map_0: THREE.Mesh;
    pPlane25_Generic_Map_0: THREE.Mesh;
    pPlane26_Generic_Map_0: THREE.Mesh;
    pPlane27_Generic_Map_0: THREE.Mesh;
    pPlane28_Generic_Map_0: THREE.Mesh;
    pCube92_Generic_Map_0: THREE.Mesh;
    pCylinder4_Generic_Map_0: THREE.Mesh;
    pCylinder1_Generic_Map_0: THREE.Mesh;
    pCube232_Generic_Map_0: THREE.Mesh;
    pCube233_Generic_Map_0: THREE.Mesh;
    pCube234_Generic_Map_0: THREE.Mesh;
    pCube235_Generic_Map_0: THREE.Mesh;
    pCube236_Generic_Map_0: THREE.Mesh;
    pCube237_Generic_Map_0: THREE.Mesh;
    pCube238_Generic_Map_0: THREE.Mesh;
    pCube239_Generic_Map_0: THREE.Mesh;
    pCube240_Generic_Map_0: THREE.Mesh;
    pCylinder1_Generic_Map_0_1: THREE.Mesh;
    pCylinder4_Generic_Map_0_1: THREE.Mesh;
    pCube241_Generic_Map_0: THREE.Mesh;
    pCube242_Generic_Map_0: THREE.Mesh;
    pCube243_Generic_Map_0: THREE.Mesh;
    pCube244_Generic_Map_0: THREE.Mesh;
    pCube245_Generic_Map_0: THREE.Mesh;
    pCube246_Generic_Map_0: THREE.Mesh;
    pCube247_Generic_Map_0: THREE.Mesh;
    pCube248_Generic_Map_0: THREE.Mesh;
    pCube249_Generic_Map_0: THREE.Mesh;
    pCube250_Generic_Map_0: THREE.Mesh;
    pCube93_Generic_Map_0: THREE.Mesh;
    pCube94_Generic_Map_0: THREE.Mesh;
    pCube95_Generic_Map_0: THREE.Mesh;
    pCube96_Generic_Map_0: THREE.Mesh;
    pCube97_Generic_Map_0: THREE.Mesh;
    pCube98_Generic_Map_0: THREE.Mesh;
    pCube99_Generic_Map_0: THREE.Mesh;
    pCube100_Generic_Map_0: THREE.Mesh;
    pCube101_Generic_Map_0: THREE.Mesh;
    pCube102_Generic_Map_0: THREE.Mesh;
    pCube103_Generic_Map_0: THREE.Mesh;
    pCube104_Generic_Map_0: THREE.Mesh;
    pCube105_Generic_Map_0: THREE.Mesh;
    pCube106_Generic_Map_0: THREE.Mesh;
    pCube107_Generic_Map_0: THREE.Mesh;
    pCube108_Generic_Map_0: THREE.Mesh;
    pCube109_Generic_Map_0: THREE.Mesh;
    pCube110_Generic_Map_0: THREE.Mesh;
    pCylinder3_Generic_Map_0: THREE.Mesh;
    pPlane6_Generic_Map_0: THREE.Mesh;
    pPlane20_Generic_Map_0: THREE.Mesh;
    pCube2_Generic_Map_0: THREE.Mesh;
    pCube4_Generic_Map_0: THREE.Mesh;
    pCube8_Generic_Map_0: THREE.Mesh;
    pCube116_Generic_Map_0: THREE.Mesh;
    pCube7_Generic_Map_0: THREE.Mesh;
    pCube146_Generic_Map_0: THREE.Mesh;
    pCube147_Generic_Map_0: THREE.Mesh;
    pCube119_Generic_Map_0: THREE.Mesh;
    pCube117_Generic_Map_0: THREE.Mesh;
    pCube120_Generic_Map_0: THREE.Mesh;
    pCube149_Generic_Map_0: THREE.Mesh;
    pCube148_Generic_Map_0: THREE.Mesh;
    pCube223_Generic_Map_0: THREE.Mesh;
    pCube224_Generic_Map_0: THREE.Mesh;
    pCube1_Generic_Map_0: THREE.Mesh;
    pCube132_Generic_Map_0: THREE.Mesh;
    pCube138_Generic_Map_0: THREE.Mesh;
    pCube133_Generic_Map_0: THREE.Mesh;
    pCube134_Generic_Map_0: THREE.Mesh;
    pCube144_Generic_Map_0: THREE.Mesh;
    pCube145_Generic_Map_0: THREE.Mesh;
    pCube141_Generic_Map_0: THREE.Mesh;
    pCube137_Generic_Map_0: THREE.Mesh;
    pCube136_Generic_Map_0: THREE.Mesh;
    pCube135_Generic_Map_0: THREE.Mesh;
    pCube121_Generic_Map_0: THREE.Mesh;
    pCube114_Generic_Map_0: THREE.Mesh;
    pCube113_Generic_Map_0: THREE.Mesh;
    pCube112_Generic_Map_0: THREE.Mesh;
    pCube115_Generic_Map_0: THREE.Mesh;
    pCube10_Generic_Map_0: THREE.Mesh;
    pCube13_Generic_Map_0: THREE.Mesh;
    pCube11_Generic_Map_0: THREE.Mesh;
    pCube9_Generic_Map_0: THREE.Mesh;
    pCube6_Generic_Map_0: THREE.Mesh;
    pCube12_Generic_Map_0: THREE.Mesh;
    pCube126_Generic_Map_0: THREE.Mesh;
    pCube122_Generic_Map_0: THREE.Mesh;
    pCube123_Generic_Map_0: THREE.Mesh;
    pCube125_Generic_Map_0: THREE.Mesh;
    pCube124_Generic_Map_0: THREE.Mesh;
    pCube127_Generic_Map_0: THREE.Mesh;
    pCube129_Generic_Map_0: THREE.Mesh;
    pCube131_Generic_Map_0: THREE.Mesh;
    pCube130_Generic_Map_0: THREE.Mesh;
    pCube128_Generic_Map_0: THREE.Mesh;
    pCube15_Generic_Map_0: THREE.Mesh;
    pCylinder2_Generic_Map_0: THREE.Mesh;
    pCube16_Generic_Map_0: THREE.Mesh;
    pCube33_Generic_Map_0: THREE.Mesh;
    pCube34_Generic_Map_0: THREE.Mesh;
    pCube32_Generic_Map_0: THREE.Mesh;
    pCube31_Generic_Map_0: THREE.Mesh;
    pCube170_Generic_Map_0: THREE.Mesh;
    pCube167_Generic_Map_0: THREE.Mesh;
    pCube175_Generic_Map_0: THREE.Mesh;
    pCube214_Generic_Map_0: THREE.Mesh;
    pCube211_Generic_Map_0: THREE.Mesh;
    pCube212_Generic_Map_0: THREE.Mesh;
    pCube177_Generic_Map_0_1: THREE.Mesh;
    pCube178_Generic_Map_0: THREE.Mesh;
    pCube185_Generic_Map_0: THREE.Mesh;
    pCube186_Generic_Map_0: THREE.Mesh;
    pCube73_Generic_Map_0: THREE.Mesh;
    pCube76_Generic_Map_0: THREE.Mesh;
    pCube41_Generic_Map_0: THREE.Mesh;
    pCube44_Generic_Map_0: THREE.Mesh;
    pCube209_Generic_Map_0: THREE.Mesh;
    pCube210_Generic_Map_0: THREE.Mesh;
    pCube213_Generic_Map_0: THREE.Mesh;
    pCube225_Generic_Map_0: THREE.Mesh;
    pCube62_Generic_Map_0: THREE.Mesh;
    pPlane19_Generic_Map_0: THREE.Mesh;
    polySurface6_Generic_Map_0: THREE.Mesh;
    polySurface7_Generic_Map_0: THREE.Mesh;
    pCube230_Generic_Map_0: THREE.Mesh;
    pCube231_Generic_Map_0: THREE.Mesh;
    pCube68_Generic_Map_0: THREE.Mesh;
    pCube218_Generic_Map_0: THREE.Mesh;
    pCube219_Generic_Map_0: THREE.Mesh;
    pCube18_Generic_Map_0: THREE.Mesh;
    pCube70_Generic_Map_0: THREE.Mesh;
    pCube169_Generic_Map_0: THREE.Mesh;
    pCube168_Generic_Map_0: THREE.Mesh;
    pCube69_Generic_Map_0: THREE.Mesh;
    pCube81_Generic_Map_0: THREE.Mesh;
    pCube80_Generic_Map_0: THREE.Mesh;
    pCube79_Generic_Map_0: THREE.Mesh;
    pCube78_Generic_Map_0: THREE.Mesh;
    pCube71_Generic_Map_0: THREE.Mesh;
    pCube72_Generic_Map_0: THREE.Mesh;
    pCube193_Generic_Map_0: THREE.Mesh;
    pPlane18_Generic_Map_0: THREE.Mesh;
    polySurface8_Generic_Map_0: THREE.Mesh;
    pCube21_Generic_Map_0: THREE.Mesh;
    pCube22_Generic_Map_0: THREE.Mesh;
    pCube54_Generic_Map_0: THREE.Mesh;
    pCube56_Generic_Map_0: THREE.Mesh;
    pCube55_Generic_Map_0: THREE.Mesh;
    pCube57_Generic_Map_0: THREE.Mesh;
    pCube216_Generic_Map_0: THREE.Mesh;
    pCube35_Generic_Map_0: THREE.Mesh;
    pCube39_Generic_Map_0: THREE.Mesh;
    pCube217_Generic_Map_0: THREE.Mesh;
    pCube184_Generic_Map_0: THREE.Mesh;
    pCube229_Generic_Map_0: THREE.Mesh;
    pCube197_Generic_Map_0: THREE.Mesh;
    pCube198_Generic_Map_0: THREE.Mesh;
    pCube199_Generic_Map_0: THREE.Mesh;
    pCube200_Generic_Map_0: THREE.Mesh;
    pCube150_Generic_Map_0: THREE.Mesh;
    pCube194_Generic_Map_0: THREE.Mesh;
    pCube195_Generic_Map_0: THREE.Mesh;
    pCube196_Generic_Map_0: THREE.Mesh;
    pCube37_Generic_Map_0: THREE.Mesh;
    pCube40_Generic_Map_0: THREE.Mesh;
    pCube77_Generic_Map_0: THREE.Mesh;
    pCube60_Generic_Map_0: THREE.Mesh;
    pCube61_Generic_Map_0: THREE.Mesh;
    pCube27_Generic_Map_0: THREE.Mesh;
    pCube25_Generic_Map_0: THREE.Mesh;
    pCube24_Generic_Map_0: THREE.Mesh;
    pCube23_Generic_Map_0: THREE.Mesh;
    pCube28_Generic_Map_0: THREE.Mesh;
    pCube26_Generic_Map_0: THREE.Mesh;
    pPlane1_Generic_Map_0: THREE.Mesh;
    pCube59_Generic_Map_0: THREE.Mesh;
    pCube14_Generic_Map_0: THREE.Mesh;
    polySurface5_Generic_Map_0: THREE.Mesh;
    pCube226_Generic_Map_0: THREE.Mesh;
    pCube160_Generic_Map_0: THREE.Mesh;
    pCube161_Generic_Map_0: THREE.Mesh;
    pCube162_Generic_Map_0: THREE.Mesh;
    pCube163_Generic_Map_0: THREE.Mesh;
    pCube177_Generic_Map_0: THREE.Mesh;
    pCube182_Generic_Map_0: THREE.Mesh;
    pCube203_Generic_Map_0: THREE.Mesh;
    pCube204_Generic_Map_0: THREE.Mesh;
    pCube205_Generic_Map_0: THREE.Mesh;
    pCube206_Generic_Map_0: THREE.Mesh;
    pCube227_Generic_Map_0: THREE.Mesh;
    pCube228_Generic_Map_0: THREE.Mesh;
    pCube19_Generic_Map_0: THREE.Mesh;
    pCube20_Generic_Map_0: THREE.Mesh;
    pCube158_Generic_Map_0: THREE.Mesh;
    pCube180_Generic_Map_0: THREE.Mesh;
    pCube159_Generic_Map_0: THREE.Mesh;
    pCube179_Generic_Map_0: THREE.Mesh;
    pCube5_Generic_Map_0: THREE.Mesh;
    pCylinder5_Generic_Map_0: THREE.Mesh;
    pCube165_Generic_Map_0: THREE.Mesh;
    pCube215_Generic_Map_0: THREE.Mesh;
    pCube30_Generic_Map_0: THREE.Mesh;
    pCube45_Generic_Map_0: THREE.Mesh;
    pCube46_Generic_Map_0: THREE.Mesh;
    pCube29_Generic_Map_0: THREE.Mesh;
    pCube17_Generic_Map_0: THREE.Mesh;
    pCube47_Generic_Map_0: THREE.Mesh;
    pCube48_Generic_Map_0: THREE.Mesh;
    pCube220_Generic_Map_0: THREE.Mesh;
    pCube221_Generic_Map_0: THREE.Mesh;
    pCube49_Generic_Map_0: THREE.Mesh;
    pCube50_Generic_Map_0: THREE.Mesh;
    pCube222_Generic_Map_0: THREE.Mesh;
    pCube265_Generic_Map_0: THREE.Mesh;
    pCube266_Generic_Map_0: THREE.Mesh;
    pCube267_Generic_Map_0: THREE.Mesh;
    pCube268_Generic_Map_0: THREE.Mesh;
    pCube269_Generic_Map_0: THREE.Mesh;
    pCube270_Generic_Map_0: THREE.Mesh;
    pCube262_Generic_Map_0: THREE.Mesh;
    pPlane65_Generic_Map_0: THREE.Mesh;
    pPlane64_Generic_Map_0: THREE.Mesh;
    pCube264_Generic_Map_0: THREE.Mesh;
    pCube262_Generic_Map_0_1: THREE.Mesh;
    pPlane65_Generic_Map_0_1: THREE.Mesh;
    pPlane64_Generic_Map_0_1: THREE.Mesh;
    pCube264_Generic_Map_0_1: THREE.Mesh;
    pCube253_Generic_Map_0: THREE.Mesh;
    pCube252_Generic_Map_0: THREE.Mesh;
    pCube251_Generic_Map_0: THREE.Mesh;
    pCube254_Generic_Map_0: THREE.Mesh;
    pCube255_Generic_Map_0: THREE.Mesh;
    pCube256_Generic_Map_0: THREE.Mesh;
    pCube257_Generic_Map_0: THREE.Mesh;
    pCube258_Generic_Map_0: THREE.Mesh;
    pCube259_Generic_Map_0: THREE.Mesh;
    pCube260_Generic_Map_0: THREE.Mesh;
    pCube261_Generic_Map_0: THREE.Mesh;
  };
  materials: {
    Generic_Map: THREE.MeshStandardMaterial;
  };
  animations: GLTFAction[];
};

type ActionName = "Wheel Rotation";
interface GLTFAction extends THREE.AnimationClip {
  name: ActionName;
}
export type ContextType = Record<
  string,
  React.ForwardRefExoticComponent<JSX.IntrinsicElements["mesh"]>
>;

export function House(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  const { nodes, materials, animations } = useGLTF(
    "/dragon-year/house.glb"
  ) as GLTFResult;
  const { actions, mixer } = useAnimations(animations, group);

  useEffect(() => {
    actions["Wheel Rotation"]?.play();
  }, [actions, mixer]);

  return (
    // @ts-expect-error ref
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          userData={{ name: "Sketchfab_model" }}
        >
          <group
            name="16f305f35c144a9688084e6a4d413aebfbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
            userData={{ name: "16f305f35c144a9688084e6a4d413aeb.fbx" }}
          >
            <group name="Object_2" userData={{ name: "Object_2" }}>
              <group name="RootNode" userData={{ name: "RootNode" }}>
                <group
                  name="WoodenOrientalWatermill"
                  position={[1.124, 421.53, 77.03]}
                  userData={{ name: "WoodenOrientalWatermill" }}
                >
                  <group
                    name="group91"
                    position={[-29.089, 6.454, -78.801]}
                    userData={{ name: "group91" }}
                  >
                    <group
                      name="group90"
                      position={[510.965, 13.25, 16.821]}
                      userData={{ name: "group90" }}
                    >
                      <group
                        name="pCylinder30"
                        position={[0, -23.574, 0]}
                        userData={{ name: "pCylinder30" }}
                      >
                        <mesh
                          name="pCylinder30_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCylinder30_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCylinder30_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pPlane58"
                        position={[0.515, 22.313, -0.72]}
                        userData={{ name: "pPlane58" }}
                      >
                        <mesh
                          name="pPlane58_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pPlane58_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pPlane58_Generic_Map_0" }}
                        />
                      </group>
                    </group>
                    <group
                      name="group89"
                      position={[21.708, 244.367, 272.09]}
                      userData={{ name: "group89" }}
                    >
                      <group
                        name="pCylinder28"
                        position={[0, -16.775, 0]}
                        userData={{ name: "pCylinder28" }}
                      >
                        <mesh
                          name="pCylinder28_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCylinder28_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCylinder28_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pPlane57"
                        position={[0.225, 18.825, -1.267]}
                        userData={{ name: "pPlane57" }}
                      >
                        <mesh
                          name="pPlane57_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pPlane57_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pPlane57_Generic_Map_0" }}
                        />
                      </group>
                    </group>
                    <group
                      name="group88"
                      position={[289.632, 240.007, 272.09]}
                      userData={{ name: "group88" }}
                    >
                      <group
                        name="pCylinder29"
                        position={[0, -21.135, 0]}
                        userData={{ name: "pCylinder29" }}
                      >
                        <mesh
                          name="pCylinder29_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCylinder29_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCylinder29_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pPlane56"
                        position={[0.356, 23.185, -1.869]}
                        userData={{ name: "pPlane56" }}
                      >
                        <mesh
                          name="pPlane56_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pPlane56_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pPlane56_Generic_Map_0" }}
                        />
                      </group>
                    </group>
                    <group
                      name="group87"
                      position={[289.632, 240.007, -252.867]}
                      userData={{ name: "group87" }}
                    >
                      <group
                        name="pCylinder31"
                        position={[0, -21.135, 0]}
                        userData={{ name: "pCylinder31" }}
                      >
                        <mesh
                          name="pCylinder31_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCylinder31_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCylinder31_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pPlane55"
                        position={[0.356, 23.185, -1.172]}
                        userData={{ name: "pPlane55" }}
                      >
                        <mesh
                          name="pPlane55_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pPlane55_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pPlane55_Generic_Map_0" }}
                        />
                      </group>
                    </group>
                    <group
                      name="group86"
                      position={[21.708, 244.367, -272.09]}
                      userData={{ name: "group86" }}
                    >
                      <group
                        name="pCylinder32"
                        position={[0, -16.775, 0]}
                        userData={{ name: "pCylinder32" }}
                      >
                        <mesh
                          name="pCylinder32_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCylinder32_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCylinder32_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pPlane54"
                        position={[0.225, 18.825, -0.707]}
                        userData={{ name: "pPlane54" }}
                      >
                        <mesh
                          name="pPlane54_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pPlane54_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pPlane54_Generic_Map_0" }}
                        />
                      </group>
                    </group>
                    <group
                      name="group85"
                      position={[-510.965, 61.123, -115.613]}
                      userData={{ name: "group85" }}
                    >
                      <group
                        name="pPlane53"
                        position={[0.063, 22.417, -1.356]}
                        userData={{ name: "pPlane53" }}
                      >
                        <mesh
                          name="pPlane53_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pPlane53_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pPlane53_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pCylinder33"
                        position={[0, -20.367, 0]}
                        userData={{ name: "pCylinder33" }}
                      >
                        <mesh
                          name="pCylinder33_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCylinder33_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCylinder33_Generic_Map_0" }}
                        />
                      </group>
                    </group>
                    <group
                      name="group83"
                      position={[-510.965, 64.698, 153.951]}
                      userData={{ name: "group83" }}
                    >
                      <group
                        name="pCylinder11"
                        position={[0, -16.382, 0]}
                        userData={{ name: "pCylinder11" }}
                      >
                        <mesh
                          name="pCylinder11_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCylinder11_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCylinder11_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pPlane52"
                        position={[0.063, 23.153, -1.25]}
                        userData={{ name: "pPlane52" }}
                      >
                        <mesh
                          name="pPlane52_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pPlane52_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pPlane52_Generic_Map_0" }}
                        />
                      </group>
                    </group>
                  </group>
                  <group
                    name="group92"
                    position={[-7.273, -217.558, -66.139]}
                    userData={{ name: "group92" }}
                  >
                    <group
                      name="pPlane51"
                      position={[-414.432, 7.354, 103.436]}
                      userData={{ name: "pPlane51" }}
                    >
                      <mesh
                        name="pPlane51_Generic_Map_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pPlane51_Generic_Map_0.geometry}
                        material={materials.Generic_Map}
                        userData={{ name: "pPlane51_Generic_Map_0" }}
                      />
                    </group>
                    <group
                      name="group84"
                      position={[-342.062, 18.223, -85.159]}
                      userData={{ name: "group84" }}
                    >
                      <group
                        name="pPlane59"
                        position={[-66.966, 2.966, 4.167]}
                        userData={{ name: "pPlane59" }}
                      >
                        <mesh
                          name="pPlane59_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pPlane59_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pPlane59_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pPlane60"
                        position={[-51.838, 5.269, 17.87]}
                        userData={{ name: "pPlane60" }}
                      >
                        <mesh
                          name="pPlane60_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pPlane60_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pPlane60_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pPlane61"
                        position={[73.002, -11.068, -2.005]}
                        userData={{ name: "pPlane61" }}
                      >
                        <mesh
                          name="pPlane61_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pPlane61_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pPlane61_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pPlane62"
                        position={[56.971, 25.136, 9.51]}
                        userData={{ name: "pPlane62" }}
                      >
                        <mesh
                          name="pPlane62_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pPlane62_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pPlane62_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pPlane63"
                        position={[12.516, 36.489, -1.468]}
                        userData={{ name: "pPlane63" }}
                      >
                        <mesh
                          name="pPlane63_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pPlane63_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pPlane63_Generic_Map_0" }}
                        />
                      </group>
                    </group>
                    <group
                      name="pPlane50"
                      position={[-354.35, 54.911, 96.437]}
                      userData={{ name: "pPlane50" }}
                    >
                      <mesh
                        name="pPlane50_Generic_Map_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pPlane50_Generic_Map_0.geometry}
                        material={materials.Generic_Map}
                        userData={{ name: "pPlane50_Generic_Map_0" }}
                      />
                    </group>
                    <group
                      name="pPlane48"
                      position={[403.602, -26.305, 59.828]}
                      userData={{ name: "pPlane48" }}
                    >
                      <mesh
                        name="pPlane48_Generic_Map_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pPlane48_Generic_Map_0.geometry}
                        material={materials.Generic_Map}
                        userData={{ name: "pPlane48_Generic_Map_0" }}
                      />
                    </group>
                    <group
                      name="pPlane47"
                      position={[-399.723, 43.558, 90.274]}
                      userData={{ name: "pPlane47" }}
                    >
                      <mesh
                        name="pPlane47_Generic_Map_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pPlane47_Generic_Map_0.geometry}
                        material={materials.Generic_Map}
                        userData={{ name: "pPlane47_Generic_Map_0" }}
                      />
                    </group>
                    <group
                      name="pPlane46"
                      position={[-275.925, 21.388, 82.339]}
                      userData={{ name: "pPlane46" }}
                    >
                      <mesh
                        name="pPlane46_Generic_Map_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pPlane46_Generic_Map_0.geometry}
                        material={materials.Generic_Map}
                        userData={{ name: "pPlane46_Generic_Map_0" }}
                      />
                    </group>
                    <group
                      name="pPlane49"
                      position={[-292.431, 23.691, 70.331]}
                      userData={{ name: "pPlane49" }}
                    >
                      <mesh
                        name="pPlane49_Generic_Map_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pPlane49_Generic_Map_0.geometry}
                        material={materials.Generic_Map}
                        userData={{ name: "pPlane49_Generic_Map_0" }}
                      />
                    </group>
                    <group
                      name="pPlane66"
                      position={[233.132, 6.316, 197.796]}
                      rotation={[-0.117, 0.283, 0]}
                      userData={{ name: "pPlane66" }}
                    >
                      <mesh
                        name="pPlane66_Generic_Map_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pPlane66_Generic_Map_0.geometry}
                        material={materials.Generic_Map}
                        userData={{ name: "pPlane66_Generic_Map_0" }}
                      />
                    </group>
                    <group
                      name="pPlane67"
                      position={[207.296, 1.517, 203.3]}
                      rotation={[-0.286, 0.772, -0.199]}
                      userData={{ name: "pPlane67" }}
                    >
                      <mesh
                        name="pPlane67_Generic_Map_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pPlane67_Generic_Map_0.geometry}
                        material={materials.Generic_Map}
                        userData={{ name: "pPlane67_Generic_Map_0" }}
                      />
                    </group>
                    <group
                      name="pPlane68"
                      position={[196.148, -0.826, 200.6]}
                      rotation={[-0.117, 0.283, 0]}
                      scale={1.15}
                      userData={{ name: "pPlane68" }}
                    >
                      <mesh
                        name="pPlane68_Generic_Map_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pPlane68_Generic_Map_0.geometry}
                        material={materials.Generic_Map}
                        userData={{ name: "pPlane68_Generic_Map_0" }}
                      />
                    </group>
                    <group
                      name="pPlane69"
                      position={[31.638, 6.316, 197.796]}
                      rotation={[-0.117, 0.283, 0]}
                      userData={{ name: "pPlane69" }}
                    >
                      <mesh
                        name="pPlane69_Generic_Map_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pPlane69_Generic_Map_0.geometry}
                        material={materials.Generic_Map}
                        userData={{ name: "pPlane69_Generic_Map_0" }}
                      />
                    </group>
                    <group
                      name="pPlane70"
                      position={[60.824, 1.517, 203.3]}
                      rotation={[-0.852, 0.536, 0.607]}
                      userData={{ name: "pPlane70" }}
                    >
                      <mesh
                        name="pPlane70_Generic_Map_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pPlane70_Generic_Map_0.geometry}
                        material={materials.Generic_Map}
                        userData={{ name: "pPlane70_Generic_Map_0" }}
                      />
                    </group>
                  </group>
                  <group
                    name="group95"
                    position={[-26.067, -209.369, -52.037]}
                    userData={{ name: "group95" }}
                  >
                    <group
                      name="group94"
                      position={[331.155, 105.401, 116.186]}
                      userData={{ name: "group94" }}
                    >
                      <group
                        name="group79"
                        position={[0, 9.368, 0]}
                        userData={{ name: "group79" }}
                      >
                        <group
                          name="group78"
                          position={[17.956, -14.066, 19.11]}
                          userData={{ name: "group78" }}
                        >
                          <group
                            name="pPlane41"
                            position={[-2.72, -5.831, -2.171]}
                            userData={{ name: "pPlane41" }}
                          >
                            <mesh
                              name="pPlane41_Generic_Map_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.pPlane41_Generic_Map_0.geometry}
                              material={materials.Generic_Map}
                              userData={{ name: "pPlane41_Generic_Map_0" }}
                            />
                          </group>
                          <group
                            name="pPlane44"
                            position={[-2.042, 2.612, -5.922]}
                            userData={{ name: "pPlane44" }}
                          >
                            <mesh
                              name="pPlane44_Generic_Map_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.pPlane44_Generic_Map_0.geometry}
                              material={materials.Generic_Map}
                              userData={{ name: "pPlane44_Generic_Map_0" }}
                            />
                          </group>
                          <group
                            name="pPlane42"
                            position={[-5.106, 8.344, 4.754]}
                            userData={{ name: "pPlane42" }}
                          >
                            <mesh
                              name="pPlane42_Generic_Map_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.pPlane42_Generic_Map_0.geometry}
                              material={materials.Generic_Map}
                              userData={{ name: "pPlane42_Generic_Map_0" }}
                            />
                          </group>
                          <group
                            name="pPlane43"
                            position={[0.362, -4.19, 1.324]}
                            userData={{ name: "pPlane43" }}
                          >
                            <mesh
                              name="pPlane43_Generic_Map_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.pPlane43_Generic_Map_0.geometry}
                              material={materials.Generic_Map}
                              userData={{ name: "pPlane43_Generic_Map_0" }}
                            />
                          </group>
                        </group>
                        <group
                          name="group77"
                          position={[-6.922, -5.166, -4.342]}
                          userData={{ name: "group77" }}
                        >
                          <group
                            name="pPlane41_1"
                            position={[2.271, -7.027, 4.217]}
                            userData={{ name: "pPlane41" }}
                          >
                            <mesh
                              name="pPlane41_Generic_Map_0_1"
                              castShadow
                              receiveShadow
                              geometry={nodes.pPlane41_Generic_Map_0_1.geometry}
                              material={materials.Generic_Map}
                              userData={{ name: "pPlane41_Generic_Map_0" }}
                            />
                          </group>
                          <group
                            name="pPlane44_1"
                            position={[-3.889, 2.345, 7.184]}
                            userData={{ name: "pPlane44" }}
                          >
                            <mesh
                              name="pPlane44_Generic_Map_0_1"
                              castShadow
                              receiveShadow
                              geometry={nodes.pPlane44_Generic_Map_0_1.geometry}
                              material={materials.Generic_Map}
                              userData={{ name: "pPlane44_Generic_Map_0" }}
                            />
                          </group>
                          <group
                            name="pPlane42_1"
                            position={[6.11, 12.171, 0.222]}
                            userData={{ name: "pPlane42" }}
                          >
                            <mesh
                              name="pPlane42_Generic_Map_0_1"
                              castShadow
                              receiveShadow
                              geometry={nodes.pPlane42_Generic_Map_0_1.geometry}
                              material={materials.Generic_Map}
                              userData={{ name: "pPlane42_Generic_Map_0" }}
                            />
                          </group>
                          <group
                            name="pPlane43_1"
                            position={[1.988, -4.901, -1.586]}
                            userData={{ name: "pPlane43" }}
                          >
                            <mesh
                              name="pPlane43_Generic_Map_0_1"
                              castShadow
                              receiveShadow
                              geometry={nodes.pPlane43_Generic_Map_0_1.geometry}
                              material={materials.Generic_Map}
                              userData={{ name: "pPlane43_Generic_Map_0" }}
                            />
                          </group>
                        </group>
                        <group
                          name="group76"
                          position={[13.894, 2.946, -6.897]}
                          userData={{ name: "group76" }}
                        >
                          <group
                            name="pPlane41_2"
                            position={[-2.891, -10.005, 2.746]}
                            userData={{ name: "pPlane41" }}
                          >
                            <mesh
                              name="pPlane41_Generic_Map_0_2"
                              castShadow
                              receiveShadow
                              geometry={nodes.pPlane41_Generic_Map_0_2.geometry}
                              material={materials.Generic_Map}
                              userData={{ name: "pPlane41_Generic_Map_0" }}
                            />
                          </group>
                          <group
                            name="pPlane44_2"
                            position={[-9.908, 2.899, 3.047]}
                            userData={{ name: "pPlane44" }}
                          >
                            <mesh
                              name="pPlane44_Generic_Map_0_2"
                              castShadow
                              receiveShadow
                              geometry={nodes.pPlane44_Generic_Map_0_2.geometry}
                              material={materials.Generic_Map}
                              userData={{ name: "pPlane44_Generic_Map_0" }}
                            />
                          </group>
                          <group
                            name="pPlane42_2"
                            position={[5.815, 12.501, 10.367]}
                            userData={{ name: "pPlane42" }}
                          >
                            <mesh
                              name="pPlane42_Generic_Map_0_2"
                              castShadow
                              receiveShadow
                              geometry={nodes.pPlane42_Generic_Map_0_2.geometry}
                              material={materials.Generic_Map}
                              userData={{ name: "pPlane42_Generic_Map_0" }}
                            />
                          </group>
                          <group
                            name="pPlane43_2"
                            position={[2.707, -6.314, -1.309]}
                            userData={{ name: "pPlane43" }}
                          >
                            <mesh
                              name="pPlane43_Generic_Map_0_2"
                              castShadow
                              receiveShadow
                              geometry={nodes.pPlane43_Generic_Map_0_2.geometry}
                              material={materials.Generic_Map}
                              userData={{ name: "pPlane43_Generic_Map_0" }}
                            />
                          </group>
                        </group>
                      </group>
                      <group
                        name="pCylinder24"
                        position={[5.06, -15.21, 4.504]}
                        userData={{ name: "pCylinder24" }}
                      >
                        <mesh
                          name="pCylinder24_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCylinder24_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCylinder24_Generic_Map_0" }}
                        />
                      </group>
                    </group>
                    <group
                      name="group93"
                      position={[-280.19, -82.839, -64.181]}
                      userData={{ name: "group93" }}
                    >
                      <group
                        name="group80"
                        position={[-8.822, 18.067, -27.567]}
                        userData={{ name: "group80" }}
                      >
                        <group
                          name="group78_1"
                          position={[14.001, -17.135, 28.713]}
                          userData={{ name: "group78" }}
                        >
                          <group
                            name="pPlane41_3"
                            position={[-2.382, -7.104, -3.508]}
                            userData={{ name: "pPlane41" }}
                          >
                            <mesh
                              name="pPlane41_Generic_Map_0_3"
                              castShadow
                              receiveShadow
                              geometry={nodes.pPlane41_Generic_Map_0_3.geometry}
                              material={materials.Generic_Map}
                              userData={{ name: "pPlane41_Generic_Map_0" }}
                            />
                          </group>
                          <group
                            name="pPlane44_3"
                            position={[-0.239, 3.182, -7.628]}
                            userData={{ name: "pPlane44" }}
                          >
                            <mesh
                              name="pPlane44_Generic_Map_0_3"
                              castShadow
                              receiveShadow
                              geometry={nodes.pPlane44_Generic_Map_0_3.geometry}
                              material={materials.Generic_Map}
                              userData={{ name: "pPlane44_Generic_Map_0" }}
                            />
                          </group>
                          <group
                            name="pPlane42_3"
                            position={[-7.656, 10.165, 3.69]}
                            userData={{ name: "pPlane42" }}
                          >
                            <mesh
                              name="pPlane42_Generic_Map_0_3"
                              castShadow
                              receiveShadow
                              geometry={nodes.pPlane42_Generic_Map_0_3.geometry}
                              material={materials.Generic_Map}
                              userData={{ name: "pPlane42_Generic_Map_0" }}
                            />
                          </group>
                          <group
                            name="pPlane43_3"
                            position={[-0.056, -5.105, 1.671]}
                            userData={{ name: "pPlane43" }}
                          >
                            <mesh
                              name="pPlane43_Generic_Map_0_3"
                              castShadow
                              receiveShadow
                              geometry={nodes.pPlane43_Generic_Map_0_3.geometry}
                              material={materials.Generic_Map}
                              userData={{ name: "pPlane43_Generic_Map_0" }}
                            />
                          </group>
                        </group>
                        <group
                          name="group77_1"
                          position={[-6.488, -6.293, -7.549]}
                          userData={{ name: "group77" }}
                        >
                          <group
                            name="pPlane41_4"
                            position={[1.121, -8.561, 5.726]}
                            userData={{ name: "pPlane41" }}
                          >
                            <mesh
                              name="pPlane41_Generic_Map_0_4"
                              castShadow
                              receiveShadow
                              geometry={nodes.pPlane41_Generic_Map_0_4.geometry}
                              material={materials.Generic_Map}
                              userData={{ name: "pPlane41_Generic_Map_0" }}
                            />
                          </group>
                          <group
                            name="pPlane44_4"
                            position={[-7.116, 2.857, 6.957]}
                            userData={{ name: "pPlane44" }}
                          >
                            <mesh
                              name="pPlane44_Generic_Map_0_4"
                              castShadow
                              receiveShadow
                              geometry={nodes.pPlane44_Generic_Map_0_4.geometry}
                              material={materials.Generic_Map}
                              userData={{ name: "pPlane44_Generic_Map_0" }}
                            />
                          </group>
                          <group
                            name="pPlane42_4"
                            position={[7.03, 14.827, 2.462]}
                            userData={{ name: "pPlane42" }}
                          >
                            <mesh
                              name="pPlane42_Generic_Map_0_4"
                              castShadow
                              receiveShadow
                              geometry={nodes.pPlane42_Generic_Map_0_4.geometry}
                              material={materials.Generic_Map}
                              userData={{ name: "pPlane42_Generic_Map_0" }}
                            />
                          </group>
                          <group
                            name="pPlane43_4"
                            position={[2.885, -5.971, -1.129]}
                            userData={{ name: "pPlane43" }}
                          >
                            <mesh
                              name="pPlane43_Generic_Map_0_4"
                              castShadow
                              receiveShadow
                              geometry={nodes.pPlane43_Generic_Map_0_4.geometry}
                              material={materials.Generic_Map}
                              userData={{ name: "pPlane43_Generic_Map_0" }}
                            />
                          </group>
                          <group
                            name="pPlane45"
                            position={[24.007, -44.899, 99.691]}
                            userData={{ name: "pPlane45" }}
                          >
                            <mesh
                              name="pPlane45_Generic_Map_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.pPlane45_Generic_Map_0.geometry}
                              material={materials.Generic_Map}
                              userData={{ name: "pPlane45_Generic_Map_0" }}
                            />
                          </group>
                        </group>
                        <group
                          name="group76_1"
                          position={[18.655, 3.589, -3.013]}
                          userData={{ name: "group76" }}
                        >
                          <group
                            name="pPlane41_5"
                            position={[-4.354, -12.189, 2.152]}
                            userData={{ name: "pPlane41" }}
                          >
                            <mesh
                              name="pPlane41_Generic_Map_0_5"
                              castShadow
                              receiveShadow
                              geometry={nodes.pPlane41_Generic_Map_0_5.geometry}
                              material={materials.Generic_Map}
                              userData={{ name: "pPlane41_Generic_Map_0" }}
                            />
                          </group>
                          <group
                            name="pPlane44_5"
                            position={[-12.628, 3.532, -0.028]}
                            userData={{ name: "pPlane44" }}
                          >
                            <mesh
                              name="pPlane44_Generic_Map_0_5"
                              castShadow
                              receiveShadow
                              geometry={nodes.pPlane44_Generic_Map_0_5.geometry}
                              material={materials.Generic_Map}
                              userData={{ name: "pPlane44_Generic_Map_0" }}
                            />
                          </group>
                          <group
                            name="pPlane42_5"
                            position={[3.027, 15.23, 14.161]}
                            userData={{ name: "pPlane42" }}
                          >
                            <mesh
                              name="pPlane42_Generic_Map_0_5"
                              castShadow
                              receiveShadow
                              geometry={nodes.pPlane42_Generic_Map_0_5.geometry}
                              material={materials.Generic_Map}
                              userData={{ name: "pPlane42_Generic_Map_0" }}
                            />
                          </group>
                          <group
                            name="pPlane43_5"
                            position={[3.622, -7.692, -0.547]}
                            userData={{ name: "pPlane43" }}
                          >
                            <mesh
                              name="pPlane43_Generic_Map_0_5"
                              castShadow
                              receiveShadow
                              geometry={nodes.pPlane43_Generic_Map_0_5.geometry}
                              material={materials.Generic_Map}
                              userData={{ name: "pPlane43_Generic_Map_0" }}
                            />
                          </group>
                        </group>
                      </group>
                      <group
                        name="pCylinder36"
                        position={[-1.803, -13.284, -15.188]}
                        userData={{ name: "pCylinder36" }}
                      >
                        <mesh
                          name="pCylinder36_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCylinder36_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCylinder36_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pCylinder37"
                        position={[10.419, -34.092, 54.502]}
                        userData={{ name: "pCylinder37" }}
                      >
                        <mesh
                          name="pCylinder37_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCylinder37_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCylinder37_Generic_Map_0" }}
                        />
                      </group>
                    </group>
                  </group>
                  <group
                    name="group97"
                    position={[-101.923, 54.673, -63.643]}
                    userData={{ name: "group97" }}
                  >
                    <group
                      name="pPlane36"
                      position={[312.477, -21.887, 230.269]}
                      userData={{ name: "pPlane36" }}
                    >
                      <mesh
                        name="pPlane36_Generic_Map_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pPlane36_Generic_Map_0.geometry}
                        material={materials.Generic_Map}
                        userData={{ name: "pPlane36_Generic_Map_0" }}
                      />
                    </group>
                    <group
                      name="pPlane37"
                      position={[226.174, -23.198, 230.103]}
                      userData={{ name: "pPlane37" }}
                    >
                      <mesh
                        name="pPlane37_Generic_Map_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pPlane37_Generic_Map_0.geometry}
                        material={materials.Generic_Map}
                        userData={{ name: "pPlane37_Generic_Map_0" }}
                      />
                    </group>
                    <group
                      name="pPlane32"
                      position={[-273.341, 22.66, 146.763]}
                      userData={{ name: "pPlane32" }}
                    >
                      <mesh
                        name="pPlane32_Generic_Map_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pPlane32_Generic_Map_0.geometry}
                        material={materials.Generic_Map}
                        userData={{ name: "pPlane32_Generic_Map_0" }}
                      />
                    </group>
                    <group
                      name="pPlane33"
                      position={[-18.246, 22.66, 146.763]}
                      userData={{ name: "pPlane33" }}
                    >
                      <mesh
                        name="pPlane33_Generic_Map_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pPlane33_Generic_Map_0.geometry}
                        material={materials.Generic_Map}
                        userData={{ name: "pPlane33_Generic_Map_0" }}
                      />
                    </group>
                    <group
                      name="pPlane29"
                      position={[138.584, -23.198, 230.103]}
                      userData={{ name: "pPlane29" }}
                    >
                      <mesh
                        name="pPlane29_Generic_Map_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pPlane29_Generic_Map_0.geometry}
                        material={materials.Generic_Map}
                        userData={{ name: "pPlane29_Generic_Map_0" }}
                      />
                    </group>
                    <group
                      name="pPlane31"
                      position={[226.193, -23.198, 230.103]}
                      userData={{ name: "pPlane31" }}
                    >
                      <mesh
                        name="pPlane31_Generic_Map_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pPlane31_Generic_Map_0.geometry}
                        material={materials.Generic_Map}
                        userData={{ name: "pPlane31_Generic_Map_0" }}
                      />
                    </group>
                    <group
                      name="pPlane30"
                      position={[312.496, -21.887, 230.269]}
                      userData={{ name: "pPlane30" }}
                    >
                      <mesh
                        name="pPlane30_Generic_Map_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pPlane30_Generic_Map_0.geometry}
                        material={materials.Generic_Map}
                        userData={{ name: "pPlane30_Generic_Map_0" }}
                      />
                    </group>
                    <group
                      name="pPlane40"
                      position={[312.477, -21.424, -227.387]}
                      userData={{ name: "pPlane40" }}
                    >
                      <mesh
                        name="pPlane40_Generic_Map_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pPlane40_Generic_Map_0.geometry}
                        material={materials.Generic_Map}
                        userData={{ name: "pPlane40_Generic_Map_0" }}
                      />
                    </group>
                    <group
                      name="pPlane39"
                      position={[226.174, -18.374, -228.739]}
                      userData={{ name: "pPlane39" }}
                    >
                      <mesh
                        name="pPlane39_Generic_Map_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pPlane39_Generic_Map_0.geometry}
                        material={materials.Generic_Map}
                        userData={{ name: "pPlane39_Generic_Map_0" }}
                      />
                    </group>
                    <group
                      name="pPlane38"
                      position={[138.584, -23.026, -228.739]}
                      userData={{ name: "pPlane38" }}
                    >
                      <mesh
                        name="pPlane38_Generic_Map_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pPlane38_Generic_Map_0.geometry}
                        material={materials.Generic_Map}
                        userData={{ name: "pPlane38_Generic_Map_0" }}
                      />
                    </group>
                    <group
                      name="pPlane35"
                      position={[-18.246, 22.66, -143.256]}
                      userData={{ name: "pPlane35" }}
                    >
                      <mesh
                        name="pPlane35_Generic_Map_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pPlane35_Generic_Map_0.geometry}
                        material={materials.Generic_Map}
                        userData={{ name: "pPlane35_Generic_Map_0" }}
                      />
                    </group>
                    <group
                      name="pPlane34"
                      position={[-273.341, 22.66, -143.256]}
                      userData={{ name: "pPlane34" }}
                    >
                      <mesh
                        name="pPlane34_Generic_Map_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pPlane34_Generic_Map_0.geometry}
                        material={materials.Generic_Map}
                        userData={{ name: "pPlane34_Generic_Map_0" }}
                      />
                    </group>
                  </group>
                  <group
                    name="group71"
                    position={[-31.162, 93.224, -65.92]}
                    userData={{ name: "group71" }}
                  >
                    <group
                      name="pCylinder7"
                      position={[-471.499, -37.912, 3.517]}
                      userData={{ name: "pCylinder7" }}
                    >
                      <mesh
                        name="pCylinder7_Generic_Map_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pCylinder7_Generic_Map_0.geometry}
                        material={materials.Generic_Map}
                        userData={{ name: "pCylinder7_Generic_Map_0" }}
                      />
                    </group>
                    <group
                      name="pPlane14"
                      position={[-343.633, -58.38, 138.489]}
                      userData={{ name: "pPlane14" }}
                    >
                      <mesh
                        name="pPlane14_Generic_Map_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pPlane14_Generic_Map_0.geometry}
                        material={materials.Generic_Map}
                        userData={{ name: "pPlane14_Generic_Map_0" }}
                      />
                    </group>
                    <group
                      name="pCylinder34"
                      position={[156.461, 134.341, -231.501]}
                      userData={{ name: "pCylinder34" }}
                    >
                      <mesh
                        name="pCylinder34_Generic_Map_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pCylinder34_Generic_Map_0.geometry}
                        material={materials.Generic_Map}
                        userData={{ name: "pCylinder34_Generic_Map_0" }}
                      />
                    </group>
                    <group
                      name="pCylinder35"
                      position={[471.499, -149.369, 3.517]}
                      userData={{ name: "pCylinder35" }}
                    >
                      <mesh
                        name="pCylinder35_Generic_Map_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pCylinder35_Generic_Map_0.geometry}
                        material={materials.Generic_Map}
                        userData={{ name: "pCylinder35_Generic_Map_0" }}
                      />
                    </group>
                    <group
                      name="pPlane25"
                      position={[-89.449, -58.38, 138.489]}
                      userData={{ name: "pPlane25" }}
                    >
                      <mesh
                        name="pPlane25_Generic_Map_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pPlane25_Generic_Map_0.geometry}
                        material={materials.Generic_Map}
                        userData={{ name: "pPlane25_Generic_Map_0" }}
                      />
                    </group>
                    <group
                      name="pPlane26"
                      position={[157.996, 147.589, 233.558]}
                      userData={{ name: "pPlane26" }}
                    >
                      <mesh
                        name="pPlane26_Generic_Map_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pPlane26_Generic_Map_0.geometry}
                        material={materials.Generic_Map}
                        userData={{ name: "pPlane26_Generic_Map_0" }}
                      />
                    </group>
                    <group
                      name="pPlane27"
                      position={[-91.104, -58.38, -130.451]}
                      userData={{ name: "pPlane27" }}
                    >
                      <mesh
                        name="pPlane27_Generic_Map_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pPlane27_Generic_Map_0.geometry}
                        material={materials.Generic_Map}
                        userData={{ name: "pPlane27_Generic_Map_0" }}
                      />
                    </group>
                    <group
                      name="pPlane28"
                      position={[-343.633, -58.38, -130.451]}
                      userData={{ name: "pPlane28" }}
                    >
                      <mesh
                        name="pPlane28_Generic_Map_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pPlane28_Generic_Map_0.geometry}
                        material={materials.Generic_Map}
                        userData={{ name: "pPlane28_Generic_Map_0" }}
                      />
                    </group>
                  </group>
                  <group
                    name="group37"
                    position={[521.603, -228.904, -63.716]}
                    userData={{ name: "group37" }}
                  >
                    <group
                      name="group36"
                      position={[0, 6.358, 0]}
                      rotation={[-0.759, 0, 0]}
                      userData={{ name: "group36" }}
                    >
                      <group
                        name="group10"
                        position={[38.338, 0, 0]}
                        userData={{ name: "group10" }}
                      >
                        <group
                          name="group9"
                          position={[29.076, 0, 0]}
                          userData={{ name: "group9" }}
                        >
                          <group
                            name="pCube92"
                            position={[0, 4.927, -0.118]}
                            userData={{ name: "pCube92" }}
                          >
                            <mesh
                              name="pCube92_Generic_Map_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.pCube92_Generic_Map_0.geometry}
                              material={materials.Generic_Map}
                              userData={{ name: "pCube92_Generic_Map_0" }}
                            />
                          </group>
                          <group
                            name="pCylinder4"
                            position={[0.077, 1.094, 0]}
                            userData={{ name: "pCylinder4" }}
                          >
                            <mesh
                              name="pCylinder4_Generic_Map_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.pCylinder4_Generic_Map_0.geometry}
                              material={materials.Generic_Map}
                              userData={{ name: "pCylinder4_Generic_Map_0" }}
                            />
                          </group>
                          <group
                            name="pCylinder1"
                            position={[0.077, 1.094, 0]}
                            userData={{ name: "pCylinder1" }}
                          >
                            <mesh
                              name="pCylinder1_Generic_Map_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.pCylinder1_Generic_Map_0.geometry}
                              material={materials.Generic_Map}
                              userData={{ name: "pCylinder1_Generic_Map_0" }}
                            />
                          </group>
                          <group
                            name="pCube232"
                            position={[0, 4.927, -0.118]}
                            userData={{ name: "pCube232" }}
                          >
                            <mesh
                              name="pCube232_Generic_Map_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.pCube232_Generic_Map_0.geometry}
                              material={materials.Generic_Map}
                              userData={{ name: "pCube232_Generic_Map_0" }}
                            />
                          </group>
                          <group
                            name="pCube233"
                            position={[0, 1.455, -4.707]}
                            userData={{ name: "pCube233" }}
                          >
                            <mesh
                              name="pCube233_Generic_Map_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.pCube233_Generic_Map_0.geometry}
                              material={materials.Generic_Map}
                              userData={{ name: "pCube233_Generic_Map_0" }}
                            />
                          </group>
                          <group
                            name="pCube234"
                            position={[0, -1.568, -4.657]}
                            userData={{ name: "pCube234" }}
                          >
                            <mesh
                              name="pCube234_Generic_Map_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.pCube234_Generic_Map_0.geometry}
                              material={materials.Generic_Map}
                              userData={{ name: "pCube234_Generic_Map_0" }}
                            />
                          </group>
                          <group
                            name="pCube235"
                            position={[0, -3.988, -2.844]}
                            userData={{ name: "pCube235" }}
                          >
                            <mesh
                              name="pCube235_Generic_Map_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.pCube235_Generic_Map_0.geometry}
                              material={materials.Generic_Map}
                              userData={{ name: "pCube235_Generic_Map_0" }}
                            />
                          </group>
                          <group
                            name="pCube236"
                            position={[0, -4.886, 0.044]}
                            userData={{ name: "pCube236" }}
                          >
                            <mesh
                              name="pCube236_Generic_Map_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.pCube236_Generic_Map_0.geometry}
                              material={materials.Generic_Map}
                              userData={{ name: "pCube236_Generic_Map_0" }}
                            />
                          </group>
                          <group
                            name="pCube237"
                            position={[0, -3.92, 2.91]}
                            userData={{ name: "pCube237" }}
                          >
                            <mesh
                              name="pCube237_Generic_Map_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.pCube237_Generic_Map_0.geometry}
                              material={materials.Generic_Map}
                              userData={{ name: "pCube237_Generic_Map_0" }}
                            />
                          </group>
                          <group
                            name="pCube238"
                            position={[0, -1.457, 4.665]}
                            userData={{ name: "pCube238" }}
                          >
                            <mesh
                              name="pCube238_Generic_Map_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.pCube238_Generic_Map_0.geometry}
                              material={materials.Generic_Map}
                              userData={{ name: "pCube238_Generic_Map_0" }}
                            />
                          </group>
                          <group
                            name="pCube239"
                            position={[0, 1.567, 4.642]}
                            userData={{ name: "pCube239" }}
                          >
                            <mesh
                              name="pCube239_Generic_Map_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.pCube239_Generic_Map_0.geometry}
                              material={materials.Generic_Map}
                              userData={{ name: "pCube239_Generic_Map_0" }}
                            />
                          </group>
                          <group
                            name="pCube240"
                            position={[0, 4.004, 2.851]}
                            userData={{ name: "pCube240" }}
                          >
                            <mesh
                              name="pCube240_Generic_Map_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.pCube240_Generic_Map_0.geometry}
                              material={materials.Generic_Map}
                              userData={{ name: "pCube240_Generic_Map_0" }}
                            />
                          </group>
                        </group>
                        <group
                          name="group7"
                          position={[-29.076, 0, 0]}
                          userData={{ name: "group7" }}
                        >
                          <group
                            name="pCylinder1_1"
                            position={[0.077, 1.094, 0]}
                            userData={{ name: "pCylinder1" }}
                          >
                            <mesh
                              name="pCylinder1_Generic_Map_0_1"
                              castShadow
                              receiveShadow
                              geometry={
                                nodes.pCylinder1_Generic_Map_0_1.geometry
                              }
                              material={materials.Generic_Map}
                              userData={{ name: "pCylinder1_Generic_Map_0" }}
                            />
                          </group>
                          <group
                            name="pCylinder4_1"
                            position={[0.077, 1.094, 0]}
                            userData={{ name: "pCylinder4" }}
                          >
                            <mesh
                              name="pCylinder4_Generic_Map_0_1"
                              castShadow
                              receiveShadow
                              geometry={
                                nodes.pCylinder4_Generic_Map_0_1.geometry
                              }
                              material={materials.Generic_Map}
                              userData={{ name: "pCylinder4_Generic_Map_0" }}
                            />
                          </group>
                          <group
                            name="pCube241"
                            position={[0, 4.927, -0.118]}
                            userData={{ name: "pCube241" }}
                          >
                            <mesh
                              name="pCube241_Generic_Map_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.pCube241_Generic_Map_0.geometry}
                              material={materials.Generic_Map}
                              userData={{ name: "pCube241_Generic_Map_0" }}
                            />
                          </group>
                          <group
                            name="pCube242"
                            position={[0, 4.927, -0.118]}
                            userData={{ name: "pCube242" }}
                          >
                            <mesh
                              name="pCube242_Generic_Map_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.pCube242_Generic_Map_0.geometry}
                              material={materials.Generic_Map}
                              userData={{ name: "pCube242_Generic_Map_0" }}
                            />
                          </group>
                          <group
                            name="pCube243"
                            position={[0, 4.004, 2.851]}
                            userData={{ name: "pCube243" }}
                          >
                            <mesh
                              name="pCube243_Generic_Map_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.pCube243_Generic_Map_0.geometry}
                              material={materials.Generic_Map}
                              userData={{ name: "pCube243_Generic_Map_0" }}
                            />
                          </group>
                          <group
                            name="pCube244"
                            position={[0, 1.567, 4.642]}
                            userData={{ name: "pCube244" }}
                          >
                            <mesh
                              name="pCube244_Generic_Map_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.pCube244_Generic_Map_0.geometry}
                              material={materials.Generic_Map}
                              userData={{ name: "pCube244_Generic_Map_0" }}
                            />
                          </group>
                          <group
                            name="pCube245"
                            position={[0, -1.457, 4.665]}
                            userData={{ name: "pCube245" }}
                          >
                            <mesh
                              name="pCube245_Generic_Map_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.pCube245_Generic_Map_0.geometry}
                              material={materials.Generic_Map}
                              userData={{ name: "pCube245_Generic_Map_0" }}
                            />
                          </group>
                          <group
                            name="pCube246"
                            position={[0, -3.92, 2.91]}
                            userData={{ name: "pCube246" }}
                          >
                            <mesh
                              name="pCube246_Generic_Map_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.pCube246_Generic_Map_0.geometry}
                              material={materials.Generic_Map}
                              userData={{ name: "pCube246_Generic_Map_0" }}
                            />
                          </group>
                          <group
                            name="pCube247"
                            position={[0, -4.886, 0.044]}
                            userData={{ name: "pCube247" }}
                          >
                            <mesh
                              name="pCube247_Generic_Map_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.pCube247_Generic_Map_0.geometry}
                              material={materials.Generic_Map}
                              userData={{ name: "pCube247_Generic_Map_0" }}
                            />
                          </group>
                          <group
                            name="pCube248"
                            position={[0, -3.988, -2.844]}
                            userData={{ name: "pCube248" }}
                          >
                            <mesh
                              name="pCube248_Generic_Map_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.pCube248_Generic_Map_0.geometry}
                              material={materials.Generic_Map}
                              userData={{ name: "pCube248_Generic_Map_0" }}
                            />
                          </group>
                          <group
                            name="pCube249"
                            position={[0, -1.568, -4.657]}
                            userData={{ name: "pCube249" }}
                          >
                            <mesh
                              name="pCube249_Generic_Map_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.pCube249_Generic_Map_0.geometry}
                              material={materials.Generic_Map}
                              userData={{ name: "pCube249_Generic_Map_0" }}
                            />
                          </group>
                          <group
                            name="pCube250"
                            position={[0, 1.455, -4.707]}
                            userData={{ name: "pCube250" }}
                          >
                            <mesh
                              name="pCube250_Generic_Map_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.pCube250_Generic_Map_0.geometry}
                              material={materials.Generic_Map}
                              userData={{ name: "pCube250_Generic_Map_0" }}
                            />
                          </group>
                        </group>
                        <group
                          name="group8"
                          position={[1.565, 0.736, -0.843]}
                          userData={{ name: "group8" }}
                        >
                          <group
                            name="pCube93"
                            position={[0.004, 0.112, -0.138]}
                            userData={{ name: "pCube93" }}
                          >
                            <mesh
                              name="pCube93_Generic_Map_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.pCube93_Generic_Map_0.geometry}
                              material={materials.Generic_Map}
                              userData={{ name: "pCube93_Generic_Map_0" }}
                            />
                          </group>
                          <group
                            name="pCube94"
                            position={[0.004, 0.112, -0.138]}
                            userData={{ name: "pCube94" }}
                          >
                            <mesh
                              name="pCube94_Generic_Map_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.pCube94_Generic_Map_0.geometry}
                              material={materials.Generic_Map}
                              userData={{ name: "pCube94_Generic_Map_0" }}
                            />
                          </group>
                          <group
                            name="pCube95"
                            position={[0.004, 0.112, -0.138]}
                            userData={{ name: "pCube95" }}
                          >
                            <mesh
                              name="pCube95_Generic_Map_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.pCube95_Generic_Map_0.geometry}
                              material={materials.Generic_Map}
                              userData={{ name: "pCube95_Generic_Map_0" }}
                            />
                          </group>
                          <group
                            name="pCube96"
                            position={[0.004, 0.112, -0.138]}
                            userData={{ name: "pCube96" }}
                          >
                            <mesh
                              name="pCube96_Generic_Map_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.pCube96_Generic_Map_0.geometry}
                              material={materials.Generic_Map}
                              userData={{ name: "pCube96_Generic_Map_0" }}
                            />
                          </group>
                          <group
                            name="pCube97"
                            position={[0.004, 0.112, -0.138]}
                            userData={{ name: "pCube97" }}
                          >
                            <mesh
                              name="pCube97_Generic_Map_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.pCube97_Generic_Map_0.geometry}
                              material={materials.Generic_Map}
                              userData={{ name: "pCube97_Generic_Map_0" }}
                            />
                          </group>
                          <group
                            name="pCube98"
                            position={[0.004, 0.112, -0.138]}
                            userData={{ name: "pCube98" }}
                          >
                            <mesh
                              name="pCube98_Generic_Map_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.pCube98_Generic_Map_0.geometry}
                              material={materials.Generic_Map}
                              userData={{ name: "pCube98_Generic_Map_0" }}
                            />
                          </group>
                          <group
                            name="pCube99"
                            position={[0.004, 0.112, -0.138]}
                            userData={{ name: "pCube99" }}
                          >
                            <mesh
                              name="pCube99_Generic_Map_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.pCube99_Generic_Map_0.geometry}
                              material={materials.Generic_Map}
                              userData={{ name: "pCube99_Generic_Map_0" }}
                            />
                          </group>
                          <group
                            name="pCube100"
                            position={[0.004, 0.112, -0.138]}
                            userData={{ name: "pCube100" }}
                          >
                            <mesh
                              name="pCube100_Generic_Map_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.pCube100_Generic_Map_0.geometry}
                              material={materials.Generic_Map}
                              userData={{ name: "pCube100_Generic_Map_0" }}
                            />
                          </group>
                          <group
                            name="pCube101"
                            position={[0.004, 0.112, -0.138]}
                            userData={{ name: "pCube101" }}
                          >
                            <mesh
                              name="pCube101_Generic_Map_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.pCube101_Generic_Map_0.geometry}
                              material={materials.Generic_Map}
                              userData={{ name: "pCube101_Generic_Map_0" }}
                            />
                          </group>
                          <group
                            name="pCube102"
                            position={[0.004, 0.112, -0.138]}
                            userData={{ name: "pCube102" }}
                          >
                            <mesh
                              name="pCube102_Generic_Map_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.pCube102_Generic_Map_0.geometry}
                              material={materials.Generic_Map}
                              userData={{ name: "pCube102_Generic_Map_0" }}
                            />
                          </group>
                          <group
                            name="pCube103"
                            position={[0.004, 0.112, -0.138]}
                            userData={{ name: "pCube103" }}
                          >
                            <mesh
                              name="pCube103_Generic_Map_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.pCube103_Generic_Map_0.geometry}
                              material={materials.Generic_Map}
                              userData={{ name: "pCube103_Generic_Map_0" }}
                            />
                          </group>
                          <group
                            name="pCube104"
                            position={[0.004, 0.112, -0.138]}
                            userData={{ name: "pCube104" }}
                          >
                            <mesh
                              name="pCube104_Generic_Map_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.pCube104_Generic_Map_0.geometry}
                              material={materials.Generic_Map}
                              userData={{ name: "pCube104_Generic_Map_0" }}
                            />
                          </group>
                          <group
                            name="pCube105"
                            position={[0.004, 0.112, -0.138]}
                            userData={{ name: "pCube105" }}
                          >
                            <mesh
                              name="pCube105_Generic_Map_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.pCube105_Generic_Map_0.geometry}
                              material={materials.Generic_Map}
                              userData={{ name: "pCube105_Generic_Map_0" }}
                            />
                          </group>
                          <group
                            name="pCube106"
                            position={[0.004, 0.112, -0.138]}
                            userData={{ name: "pCube106" }}
                          >
                            <mesh
                              name="pCube106_Generic_Map_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.pCube106_Generic_Map_0.geometry}
                              material={materials.Generic_Map}
                              userData={{ name: "pCube106_Generic_Map_0" }}
                            />
                          </group>
                          <group
                            name="pCube107"
                            position={[0.004, 0.112, -0.138]}
                            userData={{ name: "pCube107" }}
                          >
                            <mesh
                              name="pCube107_Generic_Map_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.pCube107_Generic_Map_0.geometry}
                              material={materials.Generic_Map}
                              userData={{ name: "pCube107_Generic_Map_0" }}
                            />
                          </group>
                          <group
                            name="pCube108"
                            position={[0.004, 0.112, -0.138]}
                            userData={{ name: "pCube108" }}
                          >
                            <mesh
                              name="pCube108_Generic_Map_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.pCube108_Generic_Map_0.geometry}
                              material={materials.Generic_Map}
                              userData={{ name: "pCube108_Generic_Map_0" }}
                            />
                          </group>
                          <group
                            name="pCube109"
                            position={[0.004, 0.112, -0.138]}
                            userData={{ name: "pCube109" }}
                          >
                            <mesh
                              name="pCube109_Generic_Map_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.pCube109_Generic_Map_0.geometry}
                              material={materials.Generic_Map}
                              userData={{ name: "pCube109_Generic_Map_0" }}
                            />
                          </group>
                          <group
                            name="pCube110"
                            position={[0.004, 0.112, -0.138]}
                            userData={{ name: "pCube110" }}
                          >
                            <mesh
                              name="pCube110_Generic_Map_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.pCube110_Generic_Map_0.geometry}
                              material={materials.Generic_Map}
                              userData={{ name: "pCube110_Generic_Map_0" }}
                            />
                          </group>
                        </group>
                      </group>
                      <group
                        name="pCylinder3"
                        position={[-3.492, 1.094, 0.841]}
                        userData={{ name: "pCylinder3" }}
                      >
                        <mesh
                          name="pCylinder3_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCylinder3_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCylinder3_Generic_Map_0" }}
                        />
                      </group>
                    </group>
                    <group
                      name="pPlane6"
                      position={[113.389, 7.17, 1.333]}
                      userData={{ name: "pPlane6" }}
                    >
                      <mesh
                        name="pPlane6_Generic_Map_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pPlane6_Generic_Map_0.geometry}
                        material={materials.Generic_Map}
                        userData={{ name: "pPlane6_Generic_Map_0" }}
                      />
                    </group>
                    <group
                      name="pPlane20"
                      position={[-16.346, 7.17, 1.333]}
                      userData={{ name: "pPlane20" }}
                    >
                      <mesh
                        name="pPlane20_Generic_Map_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pPlane20_Generic_Map_0.geometry}
                        material={materials.Generic_Map}
                        userData={{ name: "pPlane20_Generic_Map_0" }}
                      />
                    </group>
                  </group>
                  <group
                    name="group44"
                    position={[-29.247, -353.678, -57.617]}
                    userData={{ name: "group44" }}
                  >
                    <group
                      name="group43"
                      position={[0, 0.037, 0]}
                      userData={{ name: "group43" }}
                    >
                      <group
                        name="pCube2"
                        position={[-15.357, -58.053, 260.955]}
                        userData={{ name: "pCube2" }}
                      >
                        <mesh
                          name="pCube2_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube2_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube2_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pCube4"
                        position={[11.923, 6.827, 261.349]}
                        userData={{ name: "pCube4" }}
                      >
                        <mesh
                          name="pCube4_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube4_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube4_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pCube8"
                        position={[11.923, -44.34, 260.499]}
                        userData={{ name: "pCube8" }}
                      >
                        <mesh
                          name="pCube8_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube8_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube8_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pCube116"
                        position={[-460.318, -58.053, 260.007]}
                        userData={{ name: "pCube116" }}
                      >
                        <mesh
                          name="pCube116_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube116_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube116_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pCube7"
                        position={[460.577, -58.053, 260.007]}
                        userData={{ name: "pCube7" }}
                      >
                        <mesh
                          name="pCube7_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube7_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube7_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pCube146"
                        position={[-461.091, 6.827, 4.492]}
                        userData={{ name: "pCube146" }}
                      >
                        <mesh
                          name="pCube146_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube146_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube146_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pCube147"
                        position={[-461.091, -44.34, 3.642]}
                        userData={{ name: "pCube147" }}
                      >
                        <mesh
                          name="pCube147_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube147_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube147_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pCube119"
                        position={[-460.318, -58.053, -264.407]}
                        userData={{ name: "pCube119" }}
                      >
                        <mesh
                          name="pCube119_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube119_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube119_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pCube117"
                        position={[11.923, -44.34, -266.081]}
                        userData={{ name: "pCube117" }}
                      >
                        <mesh
                          name="pCube117_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube117_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube117_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pCube120"
                        position={[460.577, -58.053, -264.407]}
                        userData={{ name: "pCube120" }}
                      >
                        <mesh
                          name="pCube120_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube120_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube120_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pCube149"
                        position={[461.027, 6.827, 4.492]}
                        userData={{ name: "pCube149" }}
                      >
                        <mesh
                          name="pCube149_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube149_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube149_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pCube148"
                        position={[461.027, -44.34, 3.642]}
                        userData={{ name: "pCube148" }}
                      >
                        <mesh
                          name="pCube148_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube148_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube148_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pCube223"
                        position={[-221.853, -58.053, 260.955]}
                        userData={{ name: "pCube223" }}
                      >
                        <mesh
                          name="pCube223_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube223_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube223_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pCube224"
                        position={[11.923, 6.827, -265.231]}
                        userData={{ name: "pCube224" }}
                      >
                        <mesh
                          name="pCube224_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube224_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube224_Generic_Map_0" }}
                        />
                      </group>
                    </group>
                    <group
                      name="pCube1"
                      position={[11.923, -67.278, 11.496]}
                      userData={{ name: "pCube1" }}
                    >
                      <mesh
                        name="pCube1_Generic_Map_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pCube1_Generic_Map_0.geometry}
                        material={materials.Generic_Map}
                        userData={{ name: "pCube1_Generic_Map_0" }}
                      />
                    </group>
                    <group
                      name="group42"
                      position={[0.66, 36.04, -264.859]}
                      userData={{ name: "group42" }}
                    >
                      <group
                        name="pCube132"
                        position={[-460.63, -21.367, -0.602]}
                        userData={{ name: "pCube132" }}
                      >
                        <mesh
                          name="pCube132_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube132_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube132_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pCube138"
                        position={[-354.222, -21.567, -0.26]}
                        userData={{ name: "pCube138" }}
                      >
                        <mesh
                          name="pCube138_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube138_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube138_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pCube133"
                        position={[-0.785, -0.375, -0.24]}
                        userData={{ name: "pCube133" }}
                      >
                        <mesh
                          name="pCube133_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube133_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube133_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pCube134"
                        position={[-0.785, 13.802, -0.24]}
                        userData={{ name: "pCube134" }}
                      >
                        <mesh
                          name="pCube134_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube134_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube134_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pCube144"
                        position={[-127.21, -21.567, -0.26]}
                        userData={{ name: "pCube144" }}
                      >
                        <mesh
                          name="pCube144_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube144_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube144_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pCube145"
                        position={[-240.375, -21.367, -0.355]}
                        userData={{ name: "pCube145" }}
                      >
                        <mesh
                          name="pCube145_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube145_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube145_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pCube141"
                        position={[-11.092, -21.367, -0.355]}
                        userData={{ name: "pCube141" }}
                      >
                        <mesh
                          name="pCube141_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube141_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube141_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pCube137"
                        position={[110.313, -21.567, -0.26]}
                        userData={{ name: "pCube137" }}
                      >
                        <mesh
                          name="pCube137_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube137_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube137_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pCube136"
                        position={[229.641, -21.367, -0.355]}
                        userData={{ name: "pCube136" }}
                      >
                        <mesh
                          name="pCube136_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube136_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube136_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pCube135"
                        position={[344.592, -21.567, -0.26]}
                        userData={{ name: "pCube135" }}
                      >
                        <mesh
                          name="pCube135_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube135_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube135_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pCube121"
                        position={[461.289, -21.367, -0.602]}
                        userData={{ name: "pCube121" }}
                      >
                        <mesh
                          name="pCube121_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube121_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube121_Generic_Map_0" }}
                        />
                      </group>
                    </group>
                    <group
                      name="group41"
                      position={[-347.231, 36.04, 261.484]}
                      userData={{ name: "group41" }}
                    >
                      <group
                        name="pCube114"
                        position={[-112.444, -21.367, 0]}
                        userData={{ name: "pCube114" }}
                      >
                        <mesh
                          name="pCube114_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube114_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube114_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pCube113"
                        position={[-118.048, 13.802, 0.115]}
                        userData={{ name: "pCube113" }}
                      >
                        <mesh
                          name="pCube113_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube113_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube113_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pCube112"
                        position={[-118.048, -0.375, 0.115]}
                        userData={{ name: "pCube112" }}
                      >
                        <mesh
                          name="pCube112_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube112_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube112_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pCube115"
                        position={[2.508, -21.567, 0.095]}
                        userData={{ name: "pCube115" }}
                      >
                        <mesh
                          name="pCube115_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube115_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube115_Generic_Map_0" }}
                        />
                      </group>
                    </group>
                    <group
                      name="group40"
                      position={[227.725, 36.04, 261.154]}
                      userData={{ name: "group40" }}
                    >
                      <group
                        name="pCube10"
                        position={[234.65, -21.367, 0.33]}
                        userData={{ name: "pCube10" }}
                      >
                        <mesh
                          name="pCube10_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube10_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube10_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pCube13"
                        position={[117.528, -21.567, 0.425]}
                        userData={{ name: "pCube13" }}
                      >
                        <mesh
                          name="pCube13_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube13_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube13_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pCube11"
                        position={[-3.028, -0.375, 0.445]}
                        userData={{ name: "pCube11" }}
                      >
                        <mesh
                          name="pCube11_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube11_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube11_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pCube9"
                        position={[-3.028, 13.802, 0.445]}
                        userData={{ name: "pCube9" }}
                      >
                        <mesh
                          name="pCube9_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube9_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube9_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pCube6"
                        position={[2.576, -21.367, 0.33]}
                        userData={{ name: "pCube6" }}
                      >
                        <mesh
                          name="pCube6_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube6_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube6_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pCube12"
                        position={[-116.751, -21.567, 0.425]}
                        userData={{ name: "pCube12" }}
                      >
                        <mesh
                          name="pCube12_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube12_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube12_Generic_Map_0" }}
                        />
                      </group>
                    </group>
                    <group
                      name="group39"
                      position={[461.949, 36.04, -1.181]}
                      userData={{ name: "group39" }}
                    >
                      <group
                        name="pCube126"
                        position={[0.095, -21.567, 122.405]}
                        userData={{ name: "pCube126" }}
                      >
                        <mesh
                          name="pCube126_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube126_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube126_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pCube122"
                        position={[0.115, 13.802, 0.041]}
                        userData={{ name: "pCube122" }}
                      >
                        <mesh
                          name="pCube122_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube122_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube122_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pCube123"
                        position={[0.115, -0.375, 0.041]}
                        userData={{ name: "pCube123" }}
                      >
                        <mesh
                          name="pCube123_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube123_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube123_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pCube125"
                        position={[0, -21.367, -6.509]}
                        userData={{ name: "pCube125" }}
                      >
                        <mesh
                          name="pCube125_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube125_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube125_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pCube124"
                        position={[0.095, -21.567, -140.284]}
                        userData={{ name: "pCube124" }}
                      >
                        <mesh
                          name="pCube124_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube124_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube124_Generic_Map_0" }}
                        />
                      </group>
                    </group>
                    <group
                      name="group38"
                      position={[-459.97, 36.04, -1.181]}
                      userData={{ name: "group38" }}
                    >
                      <group
                        name="pCube127"
                        position={[0.115, 13.802, 0.041]}
                        userData={{ name: "pCube127" }}
                      >
                        <mesh
                          name="pCube127_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube127_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube127_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pCube129"
                        position={[0.115, -0.375, 0.041]}
                        userData={{ name: "pCube129" }}
                      >
                        <mesh
                          name="pCube129_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube129_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube129_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pCube131"
                        position={[0.095, -21.567, -140.284]}
                        userData={{ name: "pCube131" }}
                      >
                        <mesh
                          name="pCube131_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube131_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube131_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pCube130"
                        position={[0, -21.367, -6.509]}
                        userData={{ name: "pCube130" }}
                      >
                        <mesh
                          name="pCube130_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube130_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube130_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pCube128"
                        position={[0.095, -21.567, 122.405]}
                        userData={{ name: "pCube128" }}
                      >
                        <mesh
                          name="pCube128_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube128_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube128_Generic_Map_0" }}
                        />
                      </group>
                    </group>
                  </group>
                  <group
                    name="group45"
                    position={[186.03, -250.663, -63.311]}
                    userData={{ name: "group45" }}
                  >
                    <group
                      name="pCube15"
                      position={[69.126, -94.492, 0]}
                      userData={{ name: "pCube15" }}
                    >
                      <mesh
                        name="pCube15_Generic_Map_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pCube15_Generic_Map_0.geometry}
                        material={materials.Generic_Map}
                        userData={{ name: "pCube15_Generic_Map_0" }}
                      />
                    </group>
                    <group
                      name="pCylinder2"
                      position={[194.861, 29.211, 0.436]}
                      userData={{ name: "pCylinder2" }}
                    >
                      <mesh
                        name="pCylinder2_Generic_Map_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pCylinder2_Generic_Map_0.geometry}
                        material={materials.Generic_Map}
                        userData={{ name: "pCylinder2_Generic_Map_0" }}
                      />
                    </group>
                  </group>
                  <group
                    name="group53"
                    position={[125.344, 287.505, -68.736]}
                    userData={{ name: "group53" }}
                  >
                    <group
                      name="pCube16"
                      position={[-0.072, -122.038, 21.958]}
                      userData={{ name: "pCube16" }}
                    >
                      <mesh
                        name="pCube16_Generic_Map_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pCube16_Generic_Map_0.geometry}
                        material={materials.Generic_Map}
                        userData={{ name: "pCube16_Generic_Map_0" }}
                      />
                    </group>
                    <group
                      name="group52"
                      position={[-1.565, -95.225, 6.283]}
                      userData={{ name: "group52" }}
                    >
                      <group
                        name="group21"
                        position={[1.415, -1.501, -1.982]}
                        userData={{ name: "group21" }}
                      >
                        <group
                          name="pCube33"
                          position={[-132.812, -5.836, -230.424]}
                          userData={{ name: "pCube33" }}
                        >
                          <mesh
                            name="pCube33_Generic_Map_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.pCube33_Generic_Map_0.geometry}
                            material={materials.Generic_Map}
                            userData={{ name: "pCube33_Generic_Map_0" }}
                          />
                        </group>
                        <group
                          name="pCube34"
                          position={[132.812, -5.836, -231.25]}
                          userData={{ name: "pCube34" }}
                        >
                          <mesh
                            name="pCube34_Generic_Map_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.pCube34_Generic_Map_0.geometry}
                            material={materials.Generic_Map}
                            userData={{ name: "pCube34_Generic_Map_0" }}
                          />
                        </group>
                        <group
                          name="pCube32"
                          position={[132.812, -5.836, 230.424]}
                          userData={{ name: "pCube32" }}
                        >
                          <mesh
                            name="pCube32_Generic_Map_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.pCube32_Generic_Map_0.geometry}
                            material={materials.Generic_Map}
                            userData={{ name: "pCube32_Generic_Map_0" }}
                          />
                        </group>
                        <group
                          name="pCube31"
                          position={[-132.812, -5.836, 231.25]}
                          userData={{ name: "pCube31" }}
                        >
                          <mesh
                            name="pCube31_Generic_Map_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.pCube31_Generic_Map_0.geometry}
                            material={materials.Generic_Map}
                            userData={{ name: "pCube31_Generic_Map_0" }}
                          />
                        </group>
                      </group>
                      <group
                        name="group51"
                        position={[1.289, -5.292, -2.687]}
                        userData={{ name: "group51" }}
                      >
                        <group
                          name="group46"
                          position={[0.024, 12.376, 231.889]}
                          userData={{ name: "group46" }}
                        >
                          <group
                            name="pCube170"
                            position={[0.239, -89.211, 0.041]}
                            userData={{ name: "pCube170" }}
                          >
                            <mesh
                              name="pCube170_Generic_Map_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.pCube170_Generic_Map_0.geometry}
                              material={materials.Generic_Map}
                              userData={{ name: "pCube170_Generic_Map_0" }}
                            />
                          </group>
                          <group
                            name="pCube167"
                            position={[-2.326, -24.417, -0.71]}
                            userData={{ name: "pCube167" }}
                          >
                            <mesh
                              name="pCube167_Generic_Map_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.pCube167_Generic_Map_0.geometry}
                              material={materials.Generic_Map}
                              userData={{ name: "pCube167_Generic_Map_0" }}
                            />
                          </group>
                          <group
                            name="pCube175"
                            position={[53.568, -15.281, 0.041]}
                            userData={{ name: "pCube175" }}
                          >
                            <mesh
                              name="pCube175_Generic_Map_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.pCube175_Generic_Map_0.geometry}
                              material={materials.Generic_Map}
                              userData={{ name: "pCube175_Generic_Map_0" }}
                            />
                          </group>
                          <group
                            name="pCube214"
                            position={[-49.574, -15.281, 0.041]}
                            userData={{ name: "pCube214" }}
                          >
                            <mesh
                              name="pCube214_Generic_Map_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.pCube214_Generic_Map_0.geometry}
                              material={materials.Generic_Map}
                              userData={{ name: "pCube214_Generic_Map_0" }}
                            />
                          </group>
                        </group>
                        <group
                          name="group47"
                          position={[134.049, 0, 3.676]}
                          userData={{ name: "group47" }}
                        >
                          <group
                            name="pCube211"
                            position={[0, -82.61, -103.808]}
                            userData={{ name: "pCube211" }}
                          >
                            <mesh
                              name="pCube211_Generic_Map_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.pCube211_Generic_Map_0.geometry}
                              material={materials.Generic_Map}
                              userData={{ name: "pCube211_Generic_Map_0" }}
                            />
                          </group>
                          <group
                            name="pCube212"
                            position={[0, -82.61, 103.808]}
                            userData={{ name: "pCube212" }}
                          >
                            <mesh
                              name="pCube212_Generic_Map_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.pCube212_Generic_Map_0.geometry}
                              material={materials.Generic_Map}
                              userData={{ name: "pCube212_Generic_Map_0" }}
                            />
                          </group>
                        </group>
                        <group
                          name="group48"
                          position={[-2.282, -42.943, -231.179]}
                          userData={{ name: "group48" }}
                        >
                          <group
                            name="pCube177_1"
                            position={[0.383, -33.892, 0.18]}
                            userData={{ name: "pCube177" }}
                          >
                            <mesh
                              name="pCube177_Generic_Map_0_1"
                              castShadow
                              receiveShadow
                              geometry={nodes.pCube177_Generic_Map_0_1.geometry}
                              material={materials.Generic_Map}
                              userData={{ name: "pCube177_Generic_Map_0" }}
                            />
                          </group>
                          <group
                            name="pCube178"
                            position={[0.02, 30.902, 0.932]}
                            userData={{ name: "pCube178" }}
                          >
                            <mesh
                              name="pCube178_Generic_Map_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.pCube178_Generic_Map_0.geometry}
                              material={materials.Generic_Map}
                              userData={{ name: "pCube178_Generic_Map_0" }}
                            />
                          </group>
                        </group>
                        <group
                          name="group49"
                          position={[-134.049, 0, 2.288]}
                          userData={{ name: "group49" }}
                        >
                          <group
                            name="pCube185"
                            position={[0, -82.61, 105.196]}
                            userData={{ name: "pCube185" }}
                          >
                            <mesh
                              name="pCube185_Generic_Map_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.pCube185_Generic_Map_0.geometry}
                              material={materials.Generic_Map}
                              userData={{ name: "pCube185_Generic_Map_0" }}
                            />
                          </group>
                          <group
                            name="pCube186"
                            position={[0, -82.61, -105.196]}
                            userData={{ name: "pCube186" }}
                          >
                            <mesh
                              name="pCube186_Generic_Map_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.pCube186_Generic_Map_0.geometry}
                              material={materials.Generic_Map}
                              userData={{ name: "pCube186_Generic_Map_0" }}
                            />
                          </group>
                        </group>
                      </group>
                      <group name="group50" userData={{ name: "group50" }}>
                        <group
                          name="pCube73"
                          position={[133.63, 95.817, -6.252]}
                          userData={{ name: "pCube73" }}
                        >
                          <mesh
                            name="pCube73_Generic_Map_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.pCube73_Generic_Map_0.geometry}
                            material={materials.Generic_Map}
                            userData={{ name: "pCube73_Generic_Map_0" }}
                          />
                        </group>
                        <group
                          name="pCube76"
                          position={[1.291, 90.222, -233.228]}
                          userData={{ name: "pCube76" }}
                        >
                          <mesh
                            name="pCube76_Generic_Map_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.pCube76_Generic_Map_0.geometry}
                            material={materials.Generic_Map}
                            userData={{ name: "pCube76_Generic_Map_0" }}
                          />
                        </group>
                        <group
                          name="pCube41"
                          position={[-0.024, -91.176, 229.203]}
                          userData={{ name: "pCube41" }}
                        >
                          <mesh
                            name="pCube41_Generic_Map_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.pCube41_Generic_Map_0.geometry}
                            material={materials.Generic_Map}
                            userData={{ name: "pCube41_Generic_Map_0" }}
                          />
                        </group>
                        <group
                          name="pCube44"
                          position={[137.209, -90.898, -2.203]}
                          userData={{ name: "pCube44" }}
                        >
                          <mesh
                            name="pCube44_Generic_Map_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.pCube44_Generic_Map_0.geometry}
                            material={materials.Generic_Map}
                            userData={{ name: "pCube44_Generic_Map_0" }}
                          />
                        </group>
                        <group
                          name="pCube209"
                          position={[1.291, 91.176, 229.203]}
                          userData={{ name: "pCube209" }}
                        >
                          <mesh
                            name="pCube209_Generic_Map_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.pCube209_Generic_Map_0.geometry}
                            material={materials.Generic_Map}
                            userData={{ name: "pCube209_Generic_Map_0" }}
                          />
                        </group>
                        <group
                          name="pCube210"
                          position={[-131.376, 96.539, -6.252]}
                          userData={{ name: "pCube210" }}
                        >
                          <mesh
                            name="pCube210_Generic_Map_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.pCube210_Generic_Map_0.geometry}
                            material={materials.Generic_Map}
                            userData={{ name: "pCube210_Generic_Map_0" }}
                          />
                        </group>
                        <group
                          name="pCube213"
                          position={[-136.534, -90.898, -2.203]}
                          userData={{ name: "pCube213" }}
                        >
                          <mesh
                            name="pCube213_Generic_Map_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.pCube213_Generic_Map_0.geometry}
                            material={materials.Generic_Map}
                            userData={{ name: "pCube213_Generic_Map_0" }}
                          />
                        </group>
                        <group
                          name="pCube225"
                          position={[-0.024, -91.176, -232.231]}
                          userData={{ name: "pCube225" }}
                        >
                          <mesh
                            name="pCube225_Generic_Map_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.pCube225_Generic_Map_0.geometry}
                            material={materials.Generic_Map}
                            userData={{ name: "pCube225_Generic_Map_0" }}
                          />
                        </group>
                      </group>
                    </group>
                    <group
                      name="pCube62"
                      position={[0.998, 121.386, 65.315]}
                      userData={{ name: "pCube62" }}
                    >
                      <mesh
                        name="pCube62_Generic_Map_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pCube62_Generic_Map_0.geometry}
                        material={materials.Generic_Map}
                        userData={{ name: "pCube62_Generic_Map_0" }}
                      />
                    </group>
                    <group
                      name="group34"
                      position={[0, 12.516, 0]}
                      userData={{ name: "group34" }}
                    >
                      <group
                        name="pPlane19"
                        position={[1.367, 102.497, 298.232]}
                        userData={{ name: "pPlane19" }}
                      >
                        <mesh
                          name="pPlane19_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pPlane19_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pPlane19_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="polySurface6"
                        position={[1.288, 100.78, 312.131]}
                        userData={{ name: "polySurface6" }}
                      >
                        <mesh
                          name="polySurface6_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.polySurface6_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "polySurface6_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="polySurface7"
                        position={[1.288, 100.78, -288.125]}
                        userData={{ name: "polySurface7" }}
                      >
                        <mesh
                          name="polySurface7_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.polySurface7_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "polySurface7_Generic_Map_0" }}
                        />
                      </group>
                    </group>
                  </group>
                  <group
                    name="group56"
                    position={[311.965, -28.476, -61.897]}
                    userData={{ name: "group56" }}
                  >
                    <group
                      name="group55"
                      position={[107.611, -145.444, -1.506]}
                      userData={{ name: "group55" }}
                    >
                      <group
                        name="pCube230"
                        position={[-226.358, 0.004, -69.415]}
                        userData={{ name: "pCube230" }}
                      >
                        <mesh
                          name="pCube230_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube230_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube230_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pCube231"
                        position={[-226.358, 0.004, 69.415]}
                        userData={{ name: "pCube231" }}
                      >
                        <mesh
                          name="pCube231_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube231_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube231_Generic_Map_0" }}
                        />
                      </group>
                    </group>
                    <group
                      name="group54"
                      position={[37.135, -123.45, -1.649]}
                      userData={{ name: "group54" }}
                    >
                      <group
                        name="pCube68"
                        position={[94.809, 0, 1.271]}
                        userData={{ name: "pCube68" }}
                      >
                        <mesh
                          name="pCube68_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube68_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube68_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pCube218"
                        position={[-49.135, 0, 84.701]}
                        userData={{ name: "pCube218" }}
                      >
                        <mesh
                          name="pCube218_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube218_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube218_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pCube219"
                        position={[-49.135, 0, -84.701]}
                        userData={{ name: "pCube219" }}
                      >
                        <mesh
                          name="pCube219_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube219_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube219_Generic_Map_0" }}
                        />
                      </group>
                    </group>
                    <group
                      name="pCube18"
                      position={[120.919, -66.367, -0.586]}
                      userData={{ name: "pCube18" }}
                    >
                      <mesh
                        name="pCube18_Generic_Map_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pCube18_Generic_Map_0.geometry}
                        material={materials.Generic_Map}
                        userData={{ name: "pCube18_Generic_Map_0" }}
                      />
                    </group>
                    <group
                      name="pCube70"
                      position={[127.81, -115.323, -77.423]}
                      userData={{ name: "pCube70" }}
                    >
                      <mesh
                        name="pCube70_Generic_Map_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pCube70_Generic_Map_0.geometry}
                        material={materials.Generic_Map}
                        userData={{ name: "pCube70_Generic_Map_0" }}
                      />
                    </group>
                    <group
                      name="group24"
                      position={[37.616, -43.948, -0.564]}
                      userData={{ name: "group24" }}
                    >
                      <group
                        name="pCube169"
                        position={[-89.518, -70.875, -76.754]}
                        userData={{ name: "pCube169" }}
                      >
                        <mesh
                          name="pCube169_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube169_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube169_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pCube168"
                        position={[-89.518, -70.875, 76.754]}
                        userData={{ name: "pCube168" }}
                      >
                        <mesh
                          name="pCube168_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube168_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube168_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pCube69"
                        position={[90.194, -71.376, 76.758]}
                        userData={{ name: "pCube69" }}
                      >
                        <mesh
                          name="pCube69_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube69_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube69_Generic_Map_0" }}
                        />
                      </group>
                    </group>
                    <group
                      name="pCube81"
                      position={[128.404, 27.085, -0.851]}
                      userData={{ name: "pCube81" }}
                    >
                      <mesh
                        name="pCube81_Generic_Map_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pCube81_Generic_Map_0.geometry}
                        material={materials.Generic_Map}
                        userData={{ name: "pCube81_Generic_Map_0" }}
                      />
                    </group>
                    <group
                      name="group26"
                      position={[45.458, -43.243, -0.573]}
                      userData={{ name: "group26" }}
                    >
                      <group
                        name="pCube80"
                        position={[-58.394, -68.943, 76.988]}
                        userData={{ name: "pCube80" }}
                      >
                        <mesh
                          name="pCube80_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube80_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube80_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pCube79"
                        position={[82.947, -69.165, -0.278]}
                        userData={{ name: "pCube79" }}
                      >
                        <mesh
                          name="pCube79_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube79_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube79_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pCube78"
                        position={[-58.394, -68.943, -77.35]}
                        userData={{ name: "pCube78" }}
                      >
                        <mesh
                          name="pCube78_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube78_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube78_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pCube71"
                        position={[2.397, 76.835, 76.348]}
                        userData={{ name: "pCube71" }}
                      >
                        <mesh
                          name="pCube71_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube71_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube71_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pCube72"
                        position={[2.397, 76.835, -76.348]}
                        userData={{ name: "pCube72" }}
                      >
                        <mesh
                          name="pCube72_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube72_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube72_Generic_Map_0" }}
                        />
                      </group>
                    </group>
                    <group
                      name="group35"
                      position={[0, 33.092, 0]}
                      userData={{ name: "group35" }}
                    >
                      <group
                        name="pCube193"
                        position={[-249.137, 77.632, -0.711]}
                        userData={{ name: "pCube193" }}
                      >
                        <mesh
                          name="pCube193_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube193_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube193_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pPlane18"
                        position={[169.989, 71.822, -0.918]}
                        userData={{ name: "pPlane18" }}
                      >
                        <mesh
                          name="pPlane18_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pPlane18_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pPlane18_Generic_Map_0" }}
                        />
                      </group>
                    </group>
                    <group
                      name="polySurface8"
                      position={[177.661, 104.914, -0.918]}
                      userData={{ name: "polySurface8" }}
                    >
                      <mesh
                        name="polySurface8_Generic_Map_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.polySurface8_Generic_Map_0.geometry}
                        material={materials.Generic_Map}
                        userData={{ name: "polySurface8_Generic_Map_0" }}
                      />
                    </group>
                  </group>
                  <group
                    name="group65"
                    position={[-324.848, -57.935, -63.923]}
                    userData={{ name: "group65" }}
                  >
                    <group
                      name="group64"
                      position={[-24.395, -153.641, -0.709]}
                      userData={{ name: "group64" }}
                    >
                      <group
                        name="group19"
                        position={[-79.458, 0, 2.27]}
                        userData={{ name: "group19" }}
                      >
                        <group
                          name="pCube21"
                          position={[0, -122.475, -131.37]}
                          userData={{ name: "pCube21" }}
                        >
                          <mesh
                            name="pCube21_Generic_Map_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.pCube21_Generic_Map_0.geometry}
                            material={materials.Generic_Map}
                            userData={{ name: "pCube21_Generic_Map_0" }}
                          />
                        </group>
                        <group
                          name="pCube22"
                          position={[0, -122.475, 131.37]}
                          userData={{ name: "pCube22" }}
                        >
                          <mesh
                            name="pCube22_Generic_Map_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.pCube22_Generic_Map_0.geometry}
                            material={materials.Generic_Map}
                            userData={{ name: "pCube22_Generic_Map_0" }}
                          />
                        </group>
                      </group>
                      <group
                        name="group63"
                        position={[2.016, 97.499, 0]}
                        userData={{ name: "group63" }}
                      >
                        <group
                          name="pCube54"
                          position={[81.053, 26.094, -0.024]}
                          userData={{ name: "pCube54" }}
                        >
                          <mesh
                            name="pCube54_Generic_Map_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.pCube54_Generic_Map_0.geometry}
                            material={materials.Generic_Map}
                            userData={{ name: "pCube54_Generic_Map_0" }}
                          />
                        </group>
                        <group
                          name="pCube56"
                          position={[-81.361, -6.652, -0.024]}
                          userData={{ name: "pCube56" }}
                        >
                          <mesh
                            name="pCube56_Generic_Map_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.pCube56_Generic_Map_0.geometry}
                            material={materials.Generic_Map}
                            userData={{ name: "pCube56_Generic_Map_0" }}
                          />
                        </group>
                        <group
                          name="pCube55"
                          position={[-81.361, -28.869, -0.024]}
                          userData={{ name: "pCube55" }}
                        >
                          <mesh
                            name="pCube55_Generic_Map_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.pCube55_Generic_Map_0.geometry}
                            material={materials.Generic_Map}
                            userData={{ name: "pCube55_Generic_Map_0" }}
                          />
                        </group>
                      </group>
                    </group>
                    <group
                      name="group62"
                      position={[-66.844, -62.702, 0.572]}
                      userData={{ name: "group62" }}
                    >
                      <group
                        name="pCube57"
                        position={[138.534, 0.004, 86.549]}
                        userData={{ name: "pCube57" }}
                      >
                        <mesh
                          name="pCube57_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube57_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube57_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pCube216"
                        position={[138.534, 0.004, -86.549]}
                        userData={{ name: "pCube216" }}
                      >
                        <mesh
                          name="pCube216_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube216_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube216_Generic_Map_0" }}
                        />
                      </group>
                    </group>
                    <group
                      name="group61"
                      position={[64.222, -25.139, 1.465]}
                      userData={{ name: "group61" }}
                    >
                      <group
                        name="pCube35"
                        position={[-0.041, 0, 146.504]}
                        userData={{ name: "pCube35" }}
                      >
                        <mesh
                          name="pCube35_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube35_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube35_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pCube39"
                        position={[-249.016, 0, -2.198]}
                        userData={{ name: "pCube39" }}
                      >
                        <mesh
                          name="pCube39_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube39_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube39_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pCube217"
                        position={[-0.041, 0, -146.504]}
                        userData={{ name: "pCube217" }}
                      >
                        <mesh
                          name="pCube217_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube217_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube217_Generic_Map_0" }}
                        />
                      </group>
                    </group>
                    <group
                      name="group60"
                      position={[50.283, 70.988, 2.331]}
                      userData={{ name: "group60" }}
                    >
                      <group
                        name="group59"
                        position={[-225.247, -37.959, -2.751]}
                        userData={{ name: "group59" }}
                      >
                        <group
                          name="pCube184"
                          position={[0, 24.034, -0.02]}
                          userData={{ name: "pCube184" }}
                        >
                          <mesh
                            name="pCube184_Generic_Map_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.pCube184_Generic_Map_0.geometry}
                            material={materials.Generic_Map}
                            userData={{ name: "pCube184_Generic_Map_0" }}
                          />
                        </group>
                        <group
                          name="pCube229"
                          position={[-1.341, -30.479, 2.545]}
                          userData={{ name: "pCube229" }}
                        >
                          <mesh
                            name="pCube229_Generic_Map_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.pCube229_Generic_Map_0.geometry}
                            material={materials.Generic_Map}
                            userData={{ name: "pCube229_Generic_Map_0" }}
                          />
                        </group>
                      </group>
                      <group
                        name="group58"
                        position={[27.188, 0, -133.083]}
                        userData={{ name: "group58" }}
                      >
                        <group
                          name="pCube197"
                          position={[195.087, -82.61, -0.692]}
                          userData={{ name: "pCube197" }}
                        >
                          <mesh
                            name="pCube197_Generic_Map_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.pCube197_Generic_Map_0.geometry}
                            material={materials.Generic_Map}
                            userData={{ name: "pCube197_Generic_Map_0" }}
                          />
                        </group>
                        <group
                          name="pCube198"
                          position={[58.704, -82.61, -0.692]}
                          userData={{ name: "pCube198" }}
                        >
                          <mesh
                            name="pCube198_Generic_Map_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.pCube198_Generic_Map_0.geometry}
                            material={materials.Generic_Map}
                            userData={{ name: "pCube198_Generic_Map_0" }}
                          />
                        </group>
                        <group
                          name="pCube199"
                          position={[-58.704, -82.61, -0.692]}
                          userData={{ name: "pCube199" }}
                        >
                          <mesh
                            name="pCube199_Generic_Map_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.pCube199_Generic_Map_0.geometry}
                            material={materials.Generic_Map}
                            userData={{ name: "pCube199_Generic_Map_0" }}
                          />
                        </group>
                        <group
                          name="pCube200"
                          position={[-195.087, -82.61, -0.692]}
                          userData={{ name: "pCube200" }}
                        >
                          <mesh
                            name="pCube200_Generic_Map_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.pCube200_Generic_Map_0.geometry}
                            material={materials.Generic_Map}
                            userData={{ name: "pCube200_Generic_Map_0" }}
                          />
                        </group>
                      </group>
                      <group
                        name="group57"
                        position={[27.188, 0, 133.083]}
                        userData={{ name: "group57" }}
                      >
                        <group
                          name="pCube150"
                          position={[-195.087, -82.61, 0]}
                          userData={{ name: "pCube150" }}
                        >
                          <mesh
                            name="pCube150_Generic_Map_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.pCube150_Generic_Map_0.geometry}
                            material={materials.Generic_Map}
                            userData={{ name: "pCube150_Generic_Map_0" }}
                          />
                        </group>
                        <group
                          name="pCube194"
                          position={[195.087, -82.61, 0]}
                          userData={{ name: "pCube194" }}
                        >
                          <mesh
                            name="pCube194_Generic_Map_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.pCube194_Generic_Map_0.geometry}
                            material={materials.Generic_Map}
                            userData={{ name: "pCube194_Generic_Map_0" }}
                          />
                        </group>
                        <group
                          name="pCube195"
                          position={[58.704, -82.61, 0]}
                          userData={{ name: "pCube195" }}
                        >
                          <mesh
                            name="pCube195_Generic_Map_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.pCube195_Generic_Map_0.geometry}
                            material={materials.Generic_Map}
                            userData={{ name: "pCube195_Generic_Map_0" }}
                          />
                        </group>
                        <group
                          name="pCube196"
                          position={[-58.704, -82.61, 0]}
                          userData={{ name: "pCube196" }}
                        >
                          <mesh
                            name="pCube196_Generic_Map_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.pCube196_Generic_Map_0.geometry}
                            material={materials.Generic_Map}
                            userData={{ name: "pCube196_Generic_Map_0" }}
                          />
                        </group>
                      </group>
                    </group>
                    <group
                      name="group31"
                      position={[57.594, 74.132, 1.465]}
                      userData={{ name: "group31" }}
                    >
                      <group
                        name="group30"
                        position={[6.628, -99.272, 0]}
                        userData={{ name: "group30" }}
                      />
                      <group
                        name="group28"
                        position={[-3.521, 4.998, -0.033]}
                        userData={{ name: "group28" }}
                      >
                        <group
                          name="pCube37"
                          position={[17.617, -88.282, 133.036]}
                          userData={{ name: "pCube37" }}
                        >
                          <mesh
                            name="pCube37_Generic_Map_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.pCube37_Generic_Map_0.geometry}
                            material={materials.Generic_Map}
                            userData={{ name: "pCube37_Generic_Map_0" }}
                          />
                        </group>
                        <group
                          name="pCube40"
                          position={[-229.787, -88.671, -1.653]}
                          userData={{ name: "pCube40" }}
                        >
                          <mesh
                            name="pCube40_Generic_Map_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.pCube40_Generic_Map_0.geometry}
                            material={materials.Generic_Map}
                            userData={{ name: "pCube40_Generic_Map_0" }}
                          />
                        </group>
                        <group
                          name="pCube77"
                          position={[-229.787, 88.671, -1.653]}
                          userData={{ name: "pCube77" }}
                        >
                          <mesh
                            name="pCube77_Generic_Map_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.pCube77_Generic_Map_0.geometry}
                            material={materials.Generic_Map}
                            userData={{ name: "pCube77_Generic_Map_0" }}
                          />
                        </group>
                        <group
                          name="pCube60"
                          position={[6.215, 91.557, 131.419]}
                          userData={{ name: "pCube60" }}
                        >
                          <mesh
                            name="pCube60_Generic_Map_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.pCube60_Generic_Map_0.geometry}
                            material={materials.Generic_Map}
                            userData={{ name: "pCube60_Generic_Map_0" }}
                          />
                        </group>
                        <group
                          name="pCube61"
                          position={[6.215, 93.167, -131.274]}
                          userData={{ name: "pCube61" }}
                        >
                          <mesh
                            name="pCube61_Generic_Map_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.pCube61_Generic_Map_0.geometry}
                            material={materials.Generic_Map}
                            userData={{ name: "pCube61_Generic_Map_0" }}
                          />
                        </group>
                      </group>
                    </group>
                    <group
                      name="group17"
                      position={[70.889, 70.988, 1.561]}
                      userData={{ name: "group17" }}
                    >
                      <group
                        name="pCube27"
                        position={[246.342, -82.61, 131.37]}
                        userData={{ name: "pCube27" }}
                      >
                        <mesh
                          name="pCube27_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube27_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube27_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pCube25"
                        position={[5.955, -82.61, 131.37]}
                        userData={{ name: "pCube25" }}
                      >
                        <mesh
                          name="pCube25_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube25_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube25_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pCube24"
                        position={[-246.342, -82.61, 131.37]}
                        userData={{ name: "pCube24" }}
                      >
                        <mesh
                          name="pCube24_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube24_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube24_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pCube23"
                        position={[-246.342, -82.61, -131.37]}
                        userData={{ name: "pCube23" }}
                      >
                        <mesh
                          name="pCube23_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube23_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube23_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pCube28"
                        position={[246.342, -82.61, -131.37]}
                        userData={{ name: "pCube28" }}
                      >
                        <mesh
                          name="pCube28_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube28_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube28_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pCube26"
                        position={[5.955, -82.61, -131.37]}
                        userData={{ name: "pCube26" }}
                      >
                        <mesh
                          name="pCube26_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube26_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube26_Generic_Map_0" }}
                        />
                      </group>
                    </group>
                    <group
                      name="group33"
                      position={[-2.636, 181.141, 0]}
                      userData={{ name: "group33" }}
                    >
                      <group
                        name="pPlane1"
                        position={[-238.525, 100.78, 1.288]}
                        userData={{ name: "pPlane1" }}
                      >
                        <mesh
                          name="pPlane1_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pPlane1_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pPlane1_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pCube59"
                        position={[349.583, 108.931, 0.998]}
                        userData={{ name: "pCube59" }}
                      >
                        <mesh
                          name="pCube59_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube59_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube59_Generic_Map_0" }}
                        />
                      </group>
                    </group>
                    <group
                      name="pCube14"
                      position={[38.666, 44.026, 1.44]}
                      userData={{ name: "pCube14" }}
                    >
                      <mesh
                        name="pCube14_Generic_Map_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pCube14_Generic_Map_0.geometry}
                        material={materials.Generic_Map}
                        userData={{ name: "pCube14_Generic_Map_0" }}
                      />
                    </group>
                    <group
                      name="polySurface5"
                      position={[-251.926, 281.921, 1.288]}
                      userData={{ name: "polySurface5" }}
                    >
                      <mesh
                        name="polySurface5_Generic_Map_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.polySurface5_Generic_Map_0.geometry}
                        material={materials.Generic_Map}
                        userData={{ name: "polySurface5_Generic_Map_0" }}
                      />
                    </group>
                    <group
                      name="pCube226"
                      position={[71.69, -9.152, -131.194]}
                      userData={{ name: "pCube226" }}
                    >
                      <mesh
                        name="pCube226_Generic_Map_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pCube226_Generic_Map_0.geometry}
                        material={materials.Generic_Map}
                        userData={{ name: "pCube226_Generic_Map_0" }}
                      />
                    </group>
                  </group>
                  <group
                    name="group67"
                    position={[-128.485, -213.436, -62.362]}
                    userData={{ name: "group67" }}
                  >
                    <group
                      name="group66"
                      position={[-9.852, 7.257, 0.031]}
                      userData={{ name: "group66" }}
                    >
                      <group
                        name="pCube160"
                        position={[-82.34, -56.017, 130.489]}
                        userData={{ name: "pCube160" }}
                      >
                        <mesh
                          name="pCube160_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube160_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube160_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pCube161"
                        position={[88.254, -56.017, 130.489]}
                        userData={{ name: "pCube161" }}
                      >
                        <mesh
                          name="pCube161_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube161_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube161_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pCube162"
                        position={[6.884, 60.201, 131.149]}
                        userData={{ name: "pCube162" }}
                      >
                        <mesh
                          name="pCube162_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube162_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube162_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pCube163"
                        position={[-47.016, 57.454, 132.132]}
                        userData={{ name: "pCube163" }}
                      >
                        <mesh
                          name="pCube163_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube163_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube163_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pCube177"
                        position={[-129.218, -122.719, 0.533]}
                        userData={{ name: "pCube177" }}
                      >
                        <mesh
                          name="pCube177_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube177_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube177_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pCube182"
                        position={[0.285, -55.096, -131.094]}
                        userData={{ name: "pCube182" }}
                      >
                        <mesh
                          name="pCube182_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube182_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube182_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pCube203"
                        position={[55.616, 57.454, 132.132]}
                        userData={{ name: "pCube203" }}
                      >
                        <mesh
                          name="pCube203_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube203_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube203_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pCube204"
                        position={[60.823, 58.549, -132.459]}
                        userData={{ name: "pCube204" }}
                      >
                        <mesh
                          name="pCube204_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube204_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube204_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pCube205"
                        position={[-41.809, 58.549, -132.459]}
                        userData={{ name: "pCube205" }}
                      >
                        <mesh
                          name="pCube205_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube205_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube205_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pCube206"
                        position={[-2.28, -122.719, -132.434]}
                        userData={{ name: "pCube206" }}
                      >
                        <mesh
                          name="pCube206_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube206_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube206_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pCube227"
                        position={[-127.877, -55.096, -2.032]}
                        userData={{ name: "pCube227" }}
                      >
                        <mesh
                          name="pCube227_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube227_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube227_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pCube228"
                        position={[6.923, 61.296, -131.458]}
                        userData={{ name: "pCube228" }}
                      >
                        <mesh
                          name="pCube228_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube228_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube228_Generic_Map_0" }}
                        />
                      </group>
                    </group>
                    <group
                      name="pCube19"
                      position={[-137.078, -120.616, 131.37]}
                      userData={{ name: "pCube19" }}
                    >
                      <mesh
                        name="pCube19_Generic_Map_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pCube19_Generic_Map_0.geometry}
                        material={materials.Generic_Map}
                        userData={{ name: "pCube19_Generic_Map_0" }}
                      />
                    </group>
                    <group
                      name="group18"
                      position={[-137.078, 1.859, 0]}
                      userData={{ name: "group18" }}
                    >
                      <group
                        name="pCube20"
                        position={[0, -122.475, -131.37]}
                        userData={{ name: "pCube20" }}
                      >
                        <mesh
                          name="pCube20_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube20_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube20_Generic_Map_0" }}
                        />
                      </group>
                    </group>
                    <group
                      name="pCube158"
                      position={[-92.193, -119.31, 132.45]}
                      userData={{ name: "pCube158" }}
                    >
                      <mesh
                        name="pCube158_Generic_Map_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pCube158_Generic_Map_0.geometry}
                        material={materials.Generic_Map}
                        userData={{ name: "pCube158_Generic_Map_0" }}
                      />
                    </group>
                    <group
                      name="group29"
                      position={[-14.308, -119.349, -0.129]}
                      userData={{ name: "group29" }}
                    >
                      <group
                        name="pCube180"
                        position={[-124.421, -0.365, -1.871]}
                        userData={{ name: "pCube180" }}
                      >
                        <mesh
                          name="pCube180_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube180_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube180_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pCube159"
                        position={[92.71, 0.039, 132.579]}
                        userData={{ name: "pCube159" }}
                      >
                        <mesh
                          name="pCube159_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube159_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube159_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pCube179"
                        position={[1.791, -0.122, -132.579]}
                        userData={{ name: "pCube179" }}
                      >
                        <mesh
                          name="pCube179_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube179_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube179_Generic_Map_0" }}
                        />
                      </group>
                    </group>
                    <group
                      name="pCube5"
                      position={[-7.744, -34.48, -0.122]}
                      userData={{ name: "pCube5" }}
                    >
                      <mesh
                        name="pCube5_Generic_Map_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pCube5_Generic_Map_0.geometry}
                        material={materials.Generic_Map}
                        userData={{ name: "pCube5_Generic_Map_0" }}
                      />
                    </group>
                    <group
                      name="pCylinder5"
                      position={[-4.499, 11.552, 133.987]}
                      userData={{ name: "pCylinder5" }}
                    >
                      <mesh
                        name="pCylinder5_Generic_Map_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pCylinder5_Generic_Map_0.geometry}
                        material={materials.Generic_Map}
                        userData={{ name: "pCylinder5_Generic_Map_0" }}
                      />
                    </group>
                  </group>
                  <group
                    name="group70"
                    position={[124.215, -25.385, -62.862]}
                    userData={{ name: "group70" }}
                  >
                    <group
                      name="group69"
                      position={[-1.429, -120.593, 0.163]}
                      userData={{ name: "group69" }}
                    >
                      <group
                        name="pCube165"
                        position={[-0.02, 0, 171.409]}
                        userData={{ name: "pCube165" }}
                      >
                        <mesh
                          name="pCube165_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube165_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube165_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pCube215"
                        position={[-0.02, 0, -171.409]}
                        userData={{ name: "pCube215" }}
                      >
                        <mesh
                          name="pCube215_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube215_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube215_Generic_Map_0" }}
                        />
                      </group>
                    </group>
                    <group
                      name="group20"
                      position={[0, 0.145, 0]}
                      userData={{ name: "group20" }}
                    >
                      <group
                        name="pCube30"
                        position={[-131.832, -44.317, 172.175]}
                        userData={{ name: "pCube30" }}
                      >
                        <mesh
                          name="pCube30_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube30_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube30_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pCube45"
                        position={[131.832, -44.317, 172.175]}
                        userData={{ name: "pCube45" }}
                      >
                        <mesh
                          name="pCube45_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube45_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube45_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pCube46"
                        position={[131.832, -44.317, -172.175]}
                        userData={{ name: "pCube46" }}
                      >
                        <mesh
                          name="pCube46_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube46_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube46_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pCube29"
                        position={[-131.832, -44.317, -172.175]}
                        userData={{ name: "pCube29" }}
                      >
                        <mesh
                          name="pCube29_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube29_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube29_Generic_Map_0" }}
                        />
                      </group>
                    </group>
                    <group
                      name="pCube17"
                      position={[65.584, -82.147, 0.379]}
                      userData={{ name: "pCube17" }}
                    >
                      <mesh
                        name="pCube17_Generic_Map_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pCube17_Generic_Map_0.geometry}
                        material={materials.Generic_Map}
                        userData={{ name: "pCube17_Generic_Map_0" }}
                      />
                    </group>
                  </group>
                  <group
                    name="group68"
                    position={[123.835, -125.231, -62.961]}
                    userData={{ name: "group68" }}
                  >
                    <group
                      name="group23"
                      position={[0.38, 0, -0.279]}
                      userData={{ name: "group23" }}
                    >
                      <group
                        name="pCube47"
                        position={[-131.832, 45.531, 218.078]}
                        userData={{ name: "pCube47" }}
                      >
                        <mesh
                          name="pCube47_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube47_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube47_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pCube48"
                        position={[131.832, 45.531, 218.078]}
                        userData={{ name: "pCube48" }}
                      >
                        <mesh
                          name="pCube48_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube48_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube48_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pCube220"
                        position={[131.832, 45.531, -218.078]}
                        userData={{ name: "pCube220" }}
                      >
                        <mesh
                          name="pCube220_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube220_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube220_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pCube221"
                        position={[-131.832, 45.531, -218.078]}
                        userData={{ name: "pCube221" }}
                      >
                        <mesh
                          name="pCube221_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube221_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube221_Generic_Map_0" }}
                        />
                      </group>
                    </group>
                    <group
                      name="pCube49"
                      position={[-0.383, 184.084, 218.078]}
                      userData={{ name: "pCube49" }}
                    >
                      <mesh
                        name="pCube49_Generic_Map_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pCube49_Generic_Map_0.geometry}
                        material={materials.Generic_Map}
                        userData={{ name: "pCube49_Generic_Map_0" }}
                      />
                    </group>
                    <group
                      name="pCube50"
                      position={[0.381, 131.574, 218.078]}
                      userData={{ name: "pCube50" }}
                    >
                      <mesh
                        name="pCube50_Generic_Map_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pCube50_Generic_Map_0.geometry}
                        material={materials.Generic_Map}
                        userData={{ name: "pCube50_Generic_Map_0" }}
                      />
                    </group>
                    <group
                      name="pCube222"
                      position={[-0.383, 184.084, -218.078]}
                      userData={{ name: "pCube222" }}
                    >
                      <mesh
                        name="pCube222_Generic_Map_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pCube222_Generic_Map_0.geometry}
                        material={materials.Generic_Map}
                        userData={{ name: "pCube222_Generic_Map_0" }}
                      />
                    </group>
                    <group
                      name="pCube265"
                      position={[0.381, -149.883, 217.547]}
                      rotation={[1.521, 0.04, 0.003]}
                      userData={{ name: "pCube265" }}
                    >
                      <mesh
                        name="pCube265_Generic_Map_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pCube265_Generic_Map_0.geometry}
                        material={materials.Generic_Map}
                        userData={{ name: "pCube265_Generic_Map_0" }}
                      />
                    </group>
                    <group
                      name="pCube266"
                      position={[0.381, -110.007, 218.078]}
                      rotation={[0, 0, -0.017]}
                      userData={{ name: "pCube266" }}
                    >
                      <mesh
                        name="pCube266_Generic_Map_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pCube266_Generic_Map_0.geometry}
                        material={materials.Generic_Map}
                        userData={{ name: "pCube266_Generic_Map_0" }}
                      />
                    </group>
                    <group
                      name="pCube267"
                      position={[0.381, -47.786, 218.078]}
                      rotation={[0, 0, 3.114]}
                      userData={{ name: "pCube267" }}
                    >
                      <mesh
                        name="pCube267_Generic_Map_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pCube267_Generic_Map_0.geometry}
                        material={materials.Generic_Map}
                        userData={{ name: "pCube267_Generic_Map_0" }}
                      />
                    </group>
                    <group
                      name="pCube268"
                      position={[0.381, -141.761, -213.043]}
                      rotation={[1.521, -0.025, -0.001]}
                      userData={{ name: "pCube268" }}
                    >
                      <mesh
                        name="pCube268_Generic_Map_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pCube268_Generic_Map_0.geometry}
                        material={materials.Generic_Map}
                        userData={{ name: "pCube268_Generic_Map_0" }}
                      />
                    </group>
                    <group
                      name="pCube269"
                      position={[0.381, -87.842, -212.513]}
                      rotation={[0, 0, -0.017]}
                      userData={{ name: "pCube269" }}
                    >
                      <mesh
                        name="pCube269_Generic_Map_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pCube269_Generic_Map_0.geometry}
                        material={materials.Generic_Map}
                        userData={{ name: "pCube269_Generic_Map_0" }}
                      />
                    </group>
                    <group
                      name="pCube270"
                      position={[0.381, 47.327, -212.513]}
                      rotation={[0, 0, -3.091]}
                      userData={{ name: "pCube270" }}
                    >
                      <mesh
                        name="pCube270_Generic_Map_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pCube270_Generic_Map_0.geometry}
                        material={materials.Generic_Map}
                        userData={{ name: "pCube270_Generic_Map_0" }}
                      />
                    </group>
                  </group>
                  <group
                    name="group102"
                    position={[-246.502, 191.169, -65.465]}
                    userData={{ name: "group102" }}
                  >
                    <group
                      name="group99"
                      position={[-128.031, 0.064, 74.312]}
                      userData={{ name: "group99" }}
                    >
                      <group
                        name="pCube262"
                        position={[26.789, -10.015, 24.894]}
                        userData={{ name: "pCube262" }}
                      >
                        <mesh
                          name="pCube262_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube262_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube262_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pPlane65"
                        position={[-1.616, -22.457, 107.932]}
                        userData={{ name: "pPlane65" }}
                      >
                        <mesh
                          name="pPlane65_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pPlane65_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pPlane65_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pPlane64"
                        position={[0.088, 37.407, -24.45]}
                        userData={{ name: "pPlane64" }}
                      >
                        <mesh
                          name="pPlane64_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pPlane64_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pPlane64_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pCube264"
                        position={[0.038, 39.067, -44.166]}
                        scale={[0.519, 0.519, 0.462]}
                        userData={{ name: "pCube264" }}
                      >
                        <mesh
                          name="pCube264_Generic_Map_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube264_Generic_Map_0.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube264_Generic_Map_0" }}
                        />
                      </group>
                    </group>
                    <group
                      name="group101"
                      position={[128.031, 0.064, 74.312]}
                      userData={{ name: "group101" }}
                    >
                      <group
                        name="pCube262_1"
                        position={[26.789, -10.015, 24.894]}
                        userData={{ name: "pCube262" }}
                      >
                        <mesh
                          name="pCube262_Generic_Map_0_1"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube262_Generic_Map_0_1.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube262_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pPlane65_1"
                        position={[-1.616, -22.457, 107.932]}
                        userData={{ name: "pPlane65" }}
                      >
                        <mesh
                          name="pPlane65_Generic_Map_0_1"
                          castShadow
                          receiveShadow
                          geometry={nodes.pPlane65_Generic_Map_0_1.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pPlane65_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pPlane64_1"
                        position={[0.088, 37.407, -24.45]}
                        userData={{ name: "pPlane64" }}
                      >
                        <mesh
                          name="pPlane64_Generic_Map_0_1"
                          castShadow
                          receiveShadow
                          geometry={nodes.pPlane64_Generic_Map_0_1.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pPlane64_Generic_Map_0" }}
                        />
                      </group>
                      <group
                        name="pCube264_1"
                        position={[0.038, 39.067, -44.166]}
                        scale={[0.519, 0.519, 0.462]}
                        userData={{ name: "pCube264" }}
                      >
                        <mesh
                          name="pCube264_Generic_Map_0_1"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube264_Generic_Map_0_1.geometry}
                          material={materials.Generic_Map}
                          userData={{ name: "pCube264_Generic_Map_0" }}
                        />
                      </group>
                    </group>
                  </group>
                  <group
                    name="group98"
                    position={[-148.033, -385.603, 328.843]}
                    userData={{ name: "group98" }}
                  >
                    <group
                      name="pCube253"
                      position={[3.852, 31.056, -101.687]}
                      scale={[0.212, 0.321, 1.974]}
                      userData={{ name: "pCube253" }}
                    >
                      <mesh
                        name="pCube253_Generic_Map_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pCube253_Generic_Map_0.geometry}
                        material={materials.Generic_Map}
                        userData={{ name: "pCube253_Generic_Map_0" }}
                      />
                    </group>
                    <group
                      name="pCube252"
                      position={[-103.065, 6.079, -19.731]}
                      rotation={[0.299, Math.PI / 2, 0]}
                      scale={[0.237, 1.198, 1.198]}
                      userData={{ name: "pCube252" }}
                    >
                      <mesh
                        name="pCube252_Generic_Map_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pCube252_Generic_Map_0.geometry}
                        material={materials.Generic_Map}
                        userData={{ name: "pCube252_Generic_Map_0" }}
                      />
                    </group>
                    <group
                      name="pCube251"
                      position={[103.065, 6.079, -19.731]}
                      rotation={[0.299, Math.PI / 2, 0]}
                      scale={[0.237, 1.198, 1.198]}
                      userData={{ name: "pCube251" }}
                    >
                      <mesh
                        name="pCube251_Generic_Map_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pCube251_Generic_Map_0.geometry}
                        material={materials.Generic_Map}
                        userData={{ name: "pCube251_Generic_Map_0" }}
                      />
                    </group>
                    <group
                      name="pCube254"
                      position={[3.852, 24.219, -79.981]}
                      rotation={[0, 0.015, 0.013]}
                      scale={[0.212, 0.321, 1.974]}
                      userData={{ name: "pCube254" }}
                    >
                      <mesh
                        name="pCube254_Generic_Map_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pCube254_Generic_Map_0.geometry}
                        material={materials.Generic_Map}
                        userData={{ name: "pCube254_Generic_Map_0" }}
                      />
                    </group>
                    <group
                      name="pCube255"
                      position={[3.852, 15.853, -58.418]}
                      scale={[0.212, 0.321, 1.974]}
                      userData={{ name: "pCube255" }}
                    >
                      <mesh
                        name="pCube255_Generic_Map_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pCube255_Generic_Map_0.geometry}
                        material={materials.Generic_Map}
                        userData={{ name: "pCube255_Generic_Map_0" }}
                      />
                    </group>
                    <group
                      name="pCube256"
                      position={[3.852, 9.016, -36.712]}
                      rotation={[0, 0.015, 0.013]}
                      scale={[0.212, 0.321, 1.974]}
                      userData={{ name: "pCube256" }}
                    >
                      <mesh
                        name="pCube256_Generic_Map_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pCube256_Generic_Map_0.geometry}
                        material={materials.Generic_Map}
                        userData={{ name: "pCube256_Generic_Map_0" }}
                      />
                    </group>
                    <group
                      name="pCube257"
                      position={[3.852, -12.729, 30.951]}
                      scale={[0.212, 0.321, 1.974]}
                      userData={{ name: "pCube257" }}
                    >
                      <mesh
                        name="pCube257_Generic_Map_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pCube257_Generic_Map_0.geometry}
                        material={materials.Generic_Map}
                        userData={{ name: "pCube257_Generic_Map_0" }}
                      />
                    </group>
                    <group
                      name="pCube258"
                      position={[3.852, -19.566, 52.656]}
                      rotation={[0, 0.015, 0.013]}
                      scale={[0.212, 0.321, 1.974]}
                      userData={{ name: "pCube258" }}
                    >
                      <mesh
                        name="pCube258_Generic_Map_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pCube258_Generic_Map_0.geometry}
                        material={materials.Generic_Map}
                        userData={{ name: "pCube258_Generic_Map_0" }}
                      />
                    </group>
                    <group
                      name="pCube259"
                      position={[3.852, -4.363, 9.387]}
                      rotation={[0.001, -0.029, -0.003]}
                      scale={[0.212, 0.321, 1.974]}
                      userData={{ name: "pCube259" }}
                    >
                      <mesh
                        name="pCube259_Generic_Map_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pCube259_Generic_Map_0.geometry}
                        material={materials.Generic_Map}
                        userData={{ name: "pCube259_Generic_Map_0" }}
                      />
                    </group>
                    <group
                      name="pCube260"
                      position={[3.852, 2.474, -12.318]}
                      rotation={[0, -0.003, -0.012]}
                      scale={[0.212, 0.321, 1.974]}
                      userData={{ name: "pCube260" }}
                    >
                      <mesh
                        name="pCube260_Generic_Map_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pCube260_Generic_Map_0.geometry}
                        material={materials.Generic_Map}
                        userData={{ name: "pCube260_Generic_Map_0" }}
                      />
                    </group>
                    <group
                      name="pCube261"
                      position={[3.852, -26.314, 79.458]}
                      rotation={[0.001, 0.04, -0.003]}
                      scale={[0.212, 0.321, 1.974]}
                      userData={{ name: "pCube261" }}
                    >
                      <mesh
                        name="pCube261_Generic_Map_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pCube261_Generic_Map_0.geometry}
                        material={materials.Generic_Map}
                        userData={{ name: "pCube261_Generic_Map_0" }}
                      />
                    </group>
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

useGLTF.preload("/dragon-year/house.glb");
