import * as Three from 'three';

const Scene = new Three.Scene();

const Cam = new Three.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
Cam.position.z = 6;

const rend = new Three.WebGLRenderer();
rend.setSize(window.innerWidth, window.innerHeight);
//rend.setClearColor(0x4B1CED);
document.body.appendChild(rend.domElement);

const textureLoader = new Three.TextureLoader();
const texture = textureLoader.load('4.4.bmp');
texture.repeat.set(1, 1);

const mats = [ 
  new Three.MeshBasicMaterial({ map: texture }),
  new Three.MeshBasicMaterial({ map: texture }),
  new Three.MeshBasicMaterial({ map: texture }),
  new Three.MeshBasicMaterial({ map: texture }),
  new Three.MeshBasicMaterial({ map: texture }),
  new Three.MeshBasicMaterial({ map: texture })  
];

const Cube = new Three.Mesh(new Three.BoxGeometry(), mats);
Scene.add(Cube);

function animate() {
  requestAnimationFrame(animate);
  Cube.rotation.x += 0.005;
  Cube.rotation.y += 0.02;
  Cube.rotation.z += 0.01;
  rend.render(Scene, Cam);
}

animate();
