import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { type GLTF } from "three/addons/loaders/GLTFLoader.js";

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
    const hemisphereLight = new THREE.HemisphereLight(0x000000, 0xffffff, 1);
    scene.add(hemisphereLight);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
    scene.add(ambientLight);

    // render canvas
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(canvasWidth, canvasHeight);
    wrapper.appendChild(renderer.domElement);

    // model and variables to track its state
    let model: GLTF["scene"];
    let rotate = true;
    let animating = false;
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    const desiredScale = new THREE.Vector3(4.5, 4.5, 4.5);
    const startScale = new THREE.Vector3(1, 1, 1);
    const startQuat = new THREE.Quaternion();
    const endQuat = new THREE.Quaternion();
    const animationDuration = 1;
    const clock = new THREE.Clock();
    let animationElapsed = 0;

    let isHovered = false;
    const baseScale = new THREE.Vector3(1, 1, 1);
    const hoverScale = new THREE.Vector3(1.25, 1.25, 1.25);

    const loader = new GLTFLoader();
    loader.load("/90s_computer.glb", function (gltf) {
        model = gltf.scene;
        model.rotation.set(0.25, 0, 0);
        model.scale.copy(startScale);
        scene.add(model);

        function animate() {
            requestAnimationFrame(animate);

            const delta = clock.getDelta();

            if (model) {
                if (rotate) {
                    model.rotation.y += 0.002;
                }

                if (animating) {
                    animationElapsed += delta;
                    const progress = Math.min(animationElapsed / animationDuration, 1);

                    model.scale.copy(startScale.clone().lerp(desiredScale, progress));

                    const slerpedQuat = new THREE.Quaternion();
                    slerpedQuat.slerpQuaternions(startQuat, endQuat, progress);
                    model.quaternion.copy(slerpedQuat);

                    if (isHovered) {
                        model.scale.lerp(desiredScale, 0.1);
                    }

                    if (progress >= 1) {
                        animating = false;
                        baseScale.copy(model.scale);
                        hoverScale.copy(model.scale.clone());
                    }
                }
            }

            if (!animating) {
                const target = isHovered ? hoverScale : baseScale;
                model.scale.lerp(target, 0.1);
            }

            renderer.render(scene, camera);
        }

        animate();
    });

    window.addEventListener("mousemove", _90scomputerHovered);

    function _90scomputerHovered(event: MouseEvent) {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);

        const intersects = raycaster.intersectObject(model, true);
        isHovered = intersects.length > 0;
    }

    // window.addEventListener("click", _90scomputerClicked);

    function _90scomputerClicked(event: MouseEvent) {
        window.removeEventListener("mousemove", _90scomputerHovered);
        window.removeEventListener("click", _90scomputerClicked);

        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);
        if (model) {
            const intersects = raycaster.intersectObject(model, true);
            if (intersects.length > 0) {
                rotate = false;
                animating = true;
                animationElapsed = 0;
                clock.elapsedTime = 0;
                clock.start();

                startQuat.copy(model.quaternion);

                const modelPos = new THREE.Vector3();
                model.getWorldPosition(modelPos);

                const lookTarget = camera.position.clone();
                const lookMatrix = new THREE.Matrix4();
                lookMatrix.lookAt(modelPos, lookTarget, model.up);
                endQuat.setFromRotationMatrix(lookMatrix);

                const correction = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI / 2);
                endQuat.multiply(correction);
            }
        }
    }

    // handle window resizing
    window.addEventListener("resize", () => {
        canvasWidth = wrapper.offsetWidth;
        canvasHeight = wrapper.offsetHeight;
        camera.aspect = canvasWidth / canvasHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(canvasWidth, canvasHeight);
    });
});
