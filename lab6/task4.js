import * as THREE from 'three';

// Ініціалізація сцени, камери та рендерера
const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera(-5 * (800/600), 5 * (800/600), -3, 5, -10, 10);
camera.position.set(0, 0, 5);
camera.lookAt(0, 0, 0);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(800, 600);
document.body.appendChild(renderer.domElement);


function drawSolidCube() {
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const colors = [0x800080, 0xFFFF00, 0x007FFF, 0xFFA500, 0x008000, 0xFFC0CB];
    const materials = colors.map(color => new THREE.MeshBasicMaterial({ color }));
    const cube = new THREE.Mesh(geometry, materials);
    scene.add(cube);
}

// Головний цикл рендерингу
function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
}

drawSolidCube();
render();
