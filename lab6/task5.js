import * as THREE from 'three';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(90, 800 / 600, 0.1, 100);
camera.position.set(0, 0, 5);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(800, 600);
document.body.appendChild(renderer.domElement);


function drawSolidCube() {
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const colors = [0x800080, 0xFFFF00, 0x007FFF, 0xFFA500, 0x008000, 0xFFC0CB];
    const materials = colors.map(color => new THREE.MeshBasicMaterial({ color, wireframe: true }));
    const cube = new THREE.Mesh(geometry, materials);
    scene.add(cube);
}

drawSolidCube();


function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
}

render();