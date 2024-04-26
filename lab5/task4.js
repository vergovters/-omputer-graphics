const width = window.innerWidth;
const height = window.innerHeight;


const scene = new THREE.Scene();


const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
camera.position.z = 5;


const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);


const tw = 512;
const th = 512;
const arrayRGBA = new Array(th).fill(null).map(() => new Array(tw).fill(null).map(() => new Uint8Array(4)));


window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});


function GenRGBATexture() {
    for (let i = 0; i < th; i++) {
        for (let j = 0; j < tw; j++) {
            if (i < th / 2 && j < tw / 2) {
                arrayRGBA[i][j] = [255, 0, 0, 255]; 
            } else {
                arrayRGBA[i][j] = [255, 255, 255, 0]; 
            }
        }
    }
}


function GenTwoTextures() {
    GenRGBATexture();
    GenTexture();
    GenTexture2();
}


function OnCreate() {
    GenTwoTextures();
    Draw3D();
}


function Draw3D() {
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
    OnCreate();
}


function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();


Init();
animate();
