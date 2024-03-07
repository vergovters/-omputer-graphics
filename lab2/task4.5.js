import * as THREE from 'three';

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 15;

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const radius = 5;
  const height = 7;
  const sides = 6;

  const geometry = new THREE.CylinderGeometry(0, radius, height, sides);

  // Суцільна модель
  const solidMaterial = [
    new THREE.MeshBasicMaterial({ color: 0xff0000 }), // Червоний
    new THREE.MeshBasicMaterial({ color: 0x00ff00 }), // Зелений
    new THREE.MeshBasicMaterial({ color: 0x0000ff }), // Синій
    new THREE.MeshBasicMaterial({ color: 0xffff00 }), // Жовтий
    new THREE.MeshBasicMaterial({ color: 0x00ffff }), // Блакитний
    new THREE.MeshBasicMaterial({ color: 0xff00ff }) // Пурпурний
  ];
  const solidPyramid = new THREE.Mesh(geometry, solidMaterial);
  scene.add(solidPyramid);

  // Додавання наведених ребер
  const edges = new THREE.EdgesGeometry(geometry);
  const lineMaterial = new THREE.LineBasicMaterial({ color: 0x000000, size: 1 });
  const lines = new THREE.LineSegments(edges, lineMaterial);
  solidPyramid.add(lines);

  function animate() {
    requestAnimationFrame(animate);

    solidPyramid.rotation.x += 0.01;
    solidPyramid.rotation.y += 0.01;

    renderer.render(scene, camera);
  }

  animate();
