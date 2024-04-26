const width = window.innerWidth;
const height = window.innerHeight;


const scene = new THREE.Scene();


const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
camera.position.z = 5;


const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);


window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});


function LoadJpegTextures() {
    const textureLoader = new THREE.TextureLoader();
    const texture1 = textureLoader.load('stad1.jpg');
    const texture2 = textureLoader.load('stad2.jpg');
    const texture3 = textureLoader.load('stad3.jpg');
    const texture4 = textureLoader.load('stad4.jpg');

    
    const tw = 512;
    const th = 512;

    
    const materials = [
        new THREE.MeshBasicMaterial({ map: texture1 }), 
        new THREE.MeshBasicMaterial({ map: texture2 }), 
        new THREE.MeshBasicMaterial({ color: 0xffff00 }), 
        new THREE.MeshBasicMaterial({ color: 0xff00ff }), 
        new THREE.MeshBasicMaterial({ map: texture3 }), 
        new THREE.MeshBasicMaterial({ map: texture4 })  
    ];

    
    const cube = new THREE.Mesh(new THREE.BoxGeometry(), materials);
    scene.add(cube);
}


function Init() {
    LoadJpegTextures();
}


function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();


Init();