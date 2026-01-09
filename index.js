//Three.js Library importieren
import * as THREE from "three";
import { OrbitControls } from "jsm/controls/OrbitControls.js";

const w = window.innerWidth;
const h = window.innerHeight;
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(w, h);
document.body.appendChild(renderer.domElement);
const fov = 75;
const aspect = w / h;
const near = 0.1;
const far = 10;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 4;
const scene = new THREE.Scene();

//OrbitControls zum Drehen der Kamera mit der Maus
const controls = new OrbitControls(camera, renderer.domElement);
controls.dampingFactor = 0.03;
controls.enableDamping = true;

const geo = new THREE.IcosahedronGeometry(1.0, 2);
const mat = new THREE.MeshStandardMaterial({
     color: 0xfffff,
     flatShading: true 
});
const mesh = new THREE.Mesh(geo, mat);
scene.add(mesh);

//Weisse Streifen
const wireMat = new THREE.MeshBasicMaterial({
    color: 0xffff50,
    wireframe: true
});
const wireMesh = new THREE.Mesh(geo, wireMat);
wireMesh.scale.setScalar(1.001);
mesh.add(wireMesh);


const hemilight = new THREE.HemisphereLight(0x0099ff, 0xaa5500,);
scene.add(hemilight);

function animate(t = 0) {
    requestAnimationFrame(animate);
    mesh.rotation.y = t * 0.0006;
    mesh.rotation.x = t * 0.0006;
    mesh.rotation.z = t * 0.0006;
    renderer.render(scene, camera);
    controls.update();
}
animate();