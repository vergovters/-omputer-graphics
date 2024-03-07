import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 15;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const radius = 5;
const height = 7;
const sides = 6;

const geometry = new THREE.CylinderGeometry(0, radius, height, sides);

const materials = [
  new THREE.MeshBasicMaterial({ color: 0x00ff00}), // Пурпурний
  new THREE.MeshBasicMaterial({ color: 0x00ff00}), // Пурпурний
  new THREE.MeshBasicMaterial({ color: 0x0000ff }), // Синій
  new THREE.MeshBasicMaterial({ color: 0x00ff00}), // Пурпурний
  new THREE.MeshBasicMaterial({ color: 0x00ff00}),// Пурпурний
  new THREE.MeshBasicMaterial({ color: 0x00ff00}) // Пурпурний
];

const wireframeMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true, opacity: 0.2, transparent: true });

const pyramid = new THREE.Mesh(geometry, materials);
pyramid.add(new THREE.Mesh(geometry, wireframeMaterial));
scene.add(pyramid);

function animate() {
  requestAnimationFrame(animate);

  pyramid.rotation.x += 0.01;
  pyramid.rotation.y += 0.01;

  renderer.render(scene, camera);
}
animate();