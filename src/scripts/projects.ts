import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

document.addEventListener("DOMContentLoaded", () => {
    const scene = new THREE.Scene();

    const wrapper = document.getElementById("canvas-wrapper")!;

    // set canvas dimensions
    let canvasWidth = wrapper.offsetWidth;
    let canvasHeight = wrapper.offsetHeight;

    // set perspective camera
    const camera = new THREE.PerspectiveCamera(50, canvasWidth / canvasHeight, 0.1, 1000);
    camera.position.set(8, 8, 8);
    camera.lookAt(0, 0, 0);

    // set lighting
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
    directionalLight.position.set(5, 10, 0);
    scene.add(directionalLight);

    const light = new THREE.AmbientLight(0xffffff, 0.1);
    scene.add(light);

    // render canvas
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(canvasWidth, canvasHeight);
    wrapper.appendChild(renderer.domElement);

    const loader = new GLTFLoader();
    loader.load("/90s_computer.glb", function (gltf) {
        const model = gltf.scene;

        // model and variables to track its state
        model.scale.set(3, 3, 3);

        const modelPos = new THREE.Vector3();
        model.getWorldPosition(modelPos);

        const lookTarget = camera.position.clone();
        const lookMatrix = new THREE.Matrix4();
        lookMatrix.lookAt(modelPos, lookTarget, model.up);

        const finalQuat = new THREE.Quaternion().setFromRotationMatrix(lookMatrix);
        const correction = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI / 2);
        finalQuat.multiply(correction);

        model.quaternion.copy(finalQuat);

        scene.add(model);
        renderer.render(scene, camera);
    });

    // handle window resizing
    window.addEventListener("resize", () => {
        canvasWidth = wrapper.offsetWidth;
        canvasHeight = wrapper.offsetHeight;
        camera.aspect = canvasWidth / canvasHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(canvasWidth, canvasHeight);
        renderer.render(scene, camera);
    });
});
