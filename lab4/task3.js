import * as Three from 'three';

const Scene = new Three.Scene();

const Cam = new Three.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
Cam.position.z = 20;

const rend = new Three.WebGLRenderer();
rend.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(rend.domElement);

const textureLoader = new Three.TextureLoader();
const texture1 = textureLoader.load('3.1.bmp');
const texture2 = textureLoader.load('3.2.bmp');

// Розмір клітинки шахівниці
const cellSize = 1;

// Створюємо геометрію для клітинки шахівниці
const squareGeometry = new Three.PlaneGeometry(cellSize, cellSize);

// Створюємо матеріали для білих і чорних клітинок
const material1 = new Three.MeshBasicMaterial({ map: texture1 });
const material2 = new Three.MeshBasicMaterial({ map: texture2 });

// Функція для створення шахівниці на одній грані куба
function createChessboard() {
  const group = new Three.Group();

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const squareMaterial = (i + j) % 2 === 0 ? material1 : material2;
      const square = new Three.Mesh(squareGeometry, squareMaterial);
      square.position.set(i - 1.5 + cellSize / 2, j - 1.5 + cellSize / 2, 0);
      group.add(square);
    }
  }

  return group;
}

// Створюємо куб з 6 граней
const cubeGeometry = new Three.BoxGeometry(4, 4, 4);

// Створюємо матеріал для куба
const cubeMaterial = new Three.MeshBasicMaterial({   color: 0xffffff, wireframe: true });

// Створюємо куб
const cube = new Three.Mesh(cubeGeometry, cubeMaterial);

// Додаємо клітинки шахівниці на кожну грань куба
const chessboards = [];
for (let i = 0; i < 6; i++) {
  const chessboard = createChessboard();
  if (i === 0) {
    chessboard.position.set(-0.5, -2, -0.5);
    chessboard.rotation.x = Math.PI / 2;
  } else if (i === 1) {
    chessboard.position.set(-0.5, 2, 0.5);
    chessboard.rotation.x = -Math.PI / 2;
  } else if (i === 2) {
    chessboard.position.set(-0.5, -0.5, -2);
  } else if (i === 3) {
    chessboard.position.set(-0.5, -0.5, 2);

  } else if (i === 4) {
    chessboard.position.set(-2, -0.5, -0.5);
    chessboard.rotation.y = -Math.PI / 2;
  } else if (i === 5) {
    chessboard.position.set(2, -0.5, 0.5);
    chessboard.rotation.y = Math.PI / 2;
  }
  cube.add(chessboard);
}

Scene.add(cube);

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.005;
  cube.rotation.y += 0.005;
  rend.render(Scene, Cam);
}

animate();
