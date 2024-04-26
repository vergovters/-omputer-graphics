import * as Three from 'three';


const scene = new Three.Scene();


const camera = new Three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;


const renderer = new Three.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


const textureLoader = new Three.TextureLoader();
const texture = textureLoader.load('2x2.bmp');


texture.generateMipmaps = true;


const geometry = new Three.BoxGeometry();
const material = new Three.MeshBasicMaterial({ map: texture });
const cube = new Three.Mesh(geometry, material);
scene.add(cube);


function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();