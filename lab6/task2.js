import * as THREE from 'three';
import { OBJLoader2 } from 'three/examples/jsm/loaders/OBJLoader2.js';

const scene = new THREE.Scene();

const camera1 = new THREE.PerspectiveCamera(75, window.innerWidth / 2 / window.innerHeight, 0.1, 1000);
const camera2 = new THREE.PerspectiveCamera(75, window.innerWidth / 2 / window.innerHeight, 0.1, 1000);
const camera3 = new THREE.PerspectiveCamera(75, window.innerWidth / 2 / window.innerHeight, 0.1, 1000);
const camera4 = new THREE.PerspectiveCamera(75, window.innerWidth / 2 / window.innerHeight, 0.1, 1000);

camera1.position.set(0, 0, 5);
camera2.position.set(0, 0, -5);
camera3.position.set(5, 0, 0);
camera4.position.set(-5, 0, 0);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const loader = new OBJLoader2();

loader.load(
    '/teapot.obj',
    function (object) {
        object.traverse(function (child) {
            if (child instanceof THREE.Mesh) {
                child.material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
            }
        });
        scene.add(object);
    }
);

function animate() {
  requestAnimationFrame(animate);

  renderer.setViewport(0, 0, window.innerWidth / 2, window.innerHeight / 2);
  renderer.setScissor(0, 0, window.innerWidth / 2, window.innerHeight / 2);
  renderer.setScissorTest(true);
  renderer.render(scene, camera1);

  renderer.setViewport(window.innerWidth / 2, 0, window.innerWidth / 2, window.innerHeight / 2);
  renderer.setScissor(window.innerWidth / 2, 0, window.innerWidth / 2, window.innerHeight / 2);
  renderer.setScissorTest(true);
  renderer.render(scene, camera2);

  renderer.setViewport(0, window.innerHeight / 2, window.innerWidth / 2, window.innerHeight / 2);
  renderer.setScissor(0, window.innerHeight / 2, window.innerWidth / 2, window.innerHeight / 2);
  renderer.setScissorTest(true);
  renderer.render(scene, camera3);

  renderer.setViewport(window.innerWidth / 2, window.innerHeight / 2, window.innerWidth / 2, window.innerHeight / 2);
  renderer.setScissor(window.innerWidth / 2, window.innerHeight / 2, window.innerWidth / 2, window.innerHeight / 2);
  renderer.setScissorTest(true);
  renderer.render(scene, camera4);
}

animate();