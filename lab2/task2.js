// Імпорт бібліотеки Three.js
import * as THREE from 'three';

// Створення сцени
const scene = new THREE.Scene();

// Створення камери
const camera = new THREE.PerspectiveCamera(
  75, // кут огляду
  window.innerWidth / window.innerHeight, // пропорції екрану
  0.1, // межі видимості ближнього плану
  1000 // межі видимості дальнього плану
);

// Створення рендерера
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Створення геометрії призми
const geometry = new THREE.CylinderGeometry( 0.5, 0.5, 1, 6 ); // Параметри: радіус верхньої основи, радіус нижньої основи, висота, кількість сторін

// Створення матеріалів кожної сторони призми
const materialTop = new THREE.MeshBasicMaterial({ color: 0xff0000 }); // Червоний
const materialBottom = new THREE.MeshBasicMaterial({ color: 0x0000ff }); // Синій
const materialSides = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // Зелений

// Задання матеріалів для кожної сторони призми
const materials = [
  materialTop, // Верхня сторона
  materialSides, // Бічна сторона
  materialBottom // Нижня сторона
];
const prism = new THREE.Mesh(geometry, materials);

// Додавання призми до сцени
scene.add(prism);

// Задання початкової позиції камери
camera.position.z = 3;

// Функція анімації
function animate() {
  requestAnimationFrame(animate);

  // Обертання призми
  prism.rotation.x += 0.01;
  prism.rotation.y += 0.01;

  // Відображення сцени з камери
  renderer.render(scene, camera);
}

// Запуск анімації
animate();