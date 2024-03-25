import * as THREE from 'three';

export const task2 = () => {
  
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const geometry = new THREE.BoxGeometry();
const materialTop = new THREE.MeshBasicMaterial({ color: 0xff0000 }); 
const materialBottom = new THREE.MeshBasicMaterial({ color: 0xffff00 }); 
const canvas = document.createElement('canvas');
canvas.width = 256;
canvas.height = 1;
const context = canvas.getContext('2d');
const gradient = context.createLinearGradient(0, 0, 256, 0);
gradient.addColorStop(0, '#ff0000'); 
gradient.addColorStop(1, '#ffff00'); 
context.fillStyle = gradient;
context.fillRect(0, 0, 256, 1);
const texture = new THREE.CanvasTexture(canvas);
const materialSides = new THREE.MeshBasicMaterial({ map: texture });

const materials = [ materialSides, materialSides, materialTop, materialBottom, materialSides, materialSides];
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

task2()