import * as THREE from 'three';


  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 20;

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const radius = 5;
  const height = 7;
  const sides = 6;

  const geometry = new THREE.CylinderGeometry(0, radius, height, sides);

  // Каркасна модель
  const wireframeMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });
  const wireframe = new THREE.LineSegments(new THREE.EdgesGeometry(geometry), wireframeMaterial);
  scene.add(wireframe);

  function animate() {
    requestAnimationFrame(animate);

    wireframe.rotation.x += 0.001;
    wireframe.rotation.y += 0.001;

    renderer.render(scene, camera);
  }

  animate();
