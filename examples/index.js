import * as THREE from '../node_modules/three/build/three.module.js';
import { OrbitControls } from '../node_modules/three/examples/jsm/controls/OrbitControls.js';
let scene = null;
let renderer = null;
let camera = null;

const initScene = () => {

    scene = new THREE.Scene();
    scene.background = new THREE.Color( 0xe0e0e0 );

    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerWidth, 0.1, 100000);
    camera.position.set(10, -100, 20);
    camera.up.set(0, 0, 1);
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    renderer = new THREE.WebGLRenderer({
        antialias: true,
        transparent: true,
    });
    
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.shadowMap.enabled = true;
    document.body.appendChild( renderer.domElement );

    var controls = new OrbitControls( camera, renderer.domElement );
    // controls.maxPolarAngle = Math.PI * 0.5;
    // controls.minDistance = 1000;
    // controls.maxDistance = 5000;

    var cube = new THREE.Mesh(new THREE.CubeGeometry(10, 10, 10), new THREE.MeshBasicMaterial({
        color: 0xff0000,
        wireframe: true,
    }));
    scene.add(cube);

    var grid = new THREE.GridHelper( 200, 40, 0x000000, 0x000000 );
    grid.material.opacity = 0.2;
    grid.material.transparent = true;
    grid.rotateX(-Math.PI / 2)
    scene.add( grid );

    var axis = new THREE.AxisHelper(10000);
    scene.add( axis);
};

const render = () => {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
};
const init = () => {
    initScene();
    render();
};

init();