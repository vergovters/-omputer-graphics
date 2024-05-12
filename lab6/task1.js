import * as THREE from 'three';

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(1, 1, 1); 
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const camera1 = new THREE.PerspectiveCamera(75, window.innerWidth / 2 / window.innerHeight, 0.1, 1000);
const camera2 = new THREE.PerspectiveCamera(75, window.innerWidth / 2 / window.innerHeight, 0.1, 1000);
const camera3 = new THREE.PerspectiveCamera(75, window.innerWidth / 2 / window.innerHeight, 0.1, 1000);
const camera4 = new THREE.PerspectiveCamera(75, window.innerWidth / 2 / window.innerHeight, 0.1, 1000);

camera1.position.set(0, 0, 3); 
camera2.position.set(0, 0, -3); 
camera3.position.set(3, 0, 0); 
camera4.position.set(-3, 0, 0); 

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

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
