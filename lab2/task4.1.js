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
  new THREE.MeshBasicMaterial({ color: 0xff0000, opacity: 0, transparent: true }), // Червоний
  new THREE.MeshBasicMaterial({ color: 0x00ff00, opacity: 0, transparent: true }), // Зелений
  new THREE.MeshBasicMaterial({ color: 0x0000ff }), // Синій
  new THREE.MeshBasicMaterial({ color: 0xffff00, opacity: 0, transparent: true }), // Жовтий
  new THREE.MeshBasicMaterial({ color: 0x00ffff, opacity: 0, transparent: true }), // Блакитний
  new THREE.MeshBasicMaterial({ color: 0xff00ff, opacity: 0, transparent: true }) // Пурпурний
];

const wireframeMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true, opacity: 0.2, transparent: true });

const pyramid = new THREE.Mesh(geometry, materials);
const wireframe = new THREE.Mesh(geometry, wireframeMaterial);
scene.add(pyramid);
scene.add(wireframe);

const edges = new THREE.EdgesGeometry(geometry);
const lineMaterial = new THREE.LineBasicMaterial({ color: 0xff0000, linewidth: 2 }); // Червоний колір ліній і товщина
const lines = new THREE.LineSegments(edges, lineMaterial);
scene.add(lines);

// Налаштування точок
const pointsMaterial = new THREE.PointsMaterial({ color: 0xff0000, size: 0.2 }); // Червоний колір і розмір точок
const points = new THREE.Points(edges, pointsMaterial);
scene.add(points);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();