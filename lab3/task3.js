import * as THREE from 'three';

export const task3 = () => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000 );
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const geometry = new THREE.BoxGeometry();
  const materialTop = new THREE.MeshBasicMaterial(); 
  const materialBottom = new THREE.MeshBasicMaterial(); 
  const materialSides = new THREE.MeshBasicMaterial(); 

  const materials = [materialSides, materialSides, materialTop, materialBottom, materialSides, materialSides];
  const cube = new THREE.Mesh(geometry, materials);

  scene.add(cube);
  camera.position.z = 5;

  function calculateColors(angle) {
    const red = Math.sin(angle); 
    const green = Math.cos(angle); 
    const blue = 0.5; 
    return {
      topColor: new THREE.Color(red, green, blue),
      bottomColor: new THREE.Color(green, red, blue),
      sideColor: new THREE.Color(red, green, blue)
    };
  }
  let angle = 0;
  function animate() {
    requestAnimationFrame(animate);
    angle += 0.01;
    if (angle > Math.PI * 2) {
      angle -= Math.PI * 2;
    }
    const { topColor, bottomColor, sideColor } = calculateColors(angle);
    materialTop.color = topColor;
    materialBottom.color = bottomColor;
    materialSides.color = sideColor;
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  }

  animate();
}

task3()