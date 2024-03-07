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

// Створення геометрії куба
const geometry = new THREE.BoxGeometry();
const materialTop = new THREE.MeshBasicMaterial({ color: 0xff0000 }); // Червоний
const materialBottom = new THREE.MeshBasicMaterial({ color: 0x0000ff }); // Синій
const materialSides = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // Зелений

// Задання матеріалів для кожної сторони куба
const materials = [
  materialSides, // Ліва сторона
  materialSides, // Права сторона
  materialTop, // Верхня сторона
  materialBottom, // Нижня сторона
  materialSides, // Передня сторона
  materialSides // Задня сторона
];
const cube = new THREE.Mesh(geometry, materials);

// Додавання куба до сцени
scene.add(cube);

// Задання початкової позиції камери
camera.position.z = 3;

// Функція анімації
function animate() {
  requestAnimationFrame(animate);

  // Обертання куба
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  // Відображення сцени з камери
  renderer.render(scene, camera);
}

// Запуск анімації
animate();