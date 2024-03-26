import * as THREE from 'three';

export const task1 = () => {
  const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75, 
  window.innerWidth / window.innerHeight, 
  0.1, 
  1000 
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const materialTop = new THREE.MeshBasicMaterial({ color: 0xDC82FF }); 
const materialBottom = new THREE.MeshBasicMaterial({ color: 0xFFFF00 }); 
const materialSides = new THREE.MeshBasicMaterial({ color: 0x8B4513 }); 
const materialFront = new THREE.MeshBasicMaterial({ color: 0x458B74 }); 
const materialBack = new THREE.MeshBasicMaterial({ color: 0xFF0066 }); 
const materialRight = new THREE.MeshBasicMaterial({ color: 0x008000 }); 

const materials = [
  materialSides, 
  materialRight, 
  materialTop, 
  materialBottom, 
  materialFront, 
  materialBack 
];
const cube = new THREE.Mesh(geometry, materials);

scene.add(cube);

camera.position.z = 3;

function animate() {
  requestAnimationFrame(animate);

  
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  
  renderer.render(scene, camera);
}

animate();
}

task1()