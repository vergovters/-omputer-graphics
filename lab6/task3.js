import * as THREE from 'three';

// Ініціалізація сцени, камери та рендерера
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 50);
camera.position.z = 5;
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Функція для малювання куба з окремими кольорами на кожній грані
function drawSolidCube() {
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const colors = [0x800080, 0xFFFF00, 0x007FFF, 0xFFA500, 0x008000, 0xFFC0CB];
    const materials = colors.map(color => new THREE.MeshBasicMaterial({ color }));
    const cube = new THREE.Mesh(geometry, materials);
    scene.add(cube);
}

drawSolidCube();

// Функція для обертання камери
function rotateCamera() {
    camera.rotation.y += 0.01;
}

// Основний цикл рендерингу
function render() {
    requestAnimationFrame(render);
    rotateCamera();
    renderer.render(scene, camera);
}

render();