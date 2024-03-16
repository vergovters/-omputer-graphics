
import * as THREE from 'three';

export const task4 = () => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  const geometry = new THREE.CylinderGeometry(0.5, 0.5, 1, 6); 

  const colorTop = new THREE.Color(219/255, 112/255, 147/255); 
  const colorBottom = new THREE.Color(255/255, 255/255, 102/255); 
  const colorSides = new THREE.Color(139/255, 69/255, 19/255); 

  const materialTop = new THREE.MeshBasicMaterial({ color: colorTop }); 
  const materialBottom = new THREE.MeshBasicMaterial({ color: colorBottom }); 
  const materialSides = new THREE.MeshBasicMaterial({ color: colorSides }); 

  
  const materials = [materialTop, materialSides, materialBottom];
  const prism = new THREE.Mesh(geometry, materials);

  scene.add(prism);
  camera.position.z = 3;

  function animate() {
    requestAnimationFrame(animate);
    prism.rotation.x += 0.01;
    prism.rotation.y += 0.01;
    renderer.render(scene, camera);
  }
  animate(); 
}

task4()