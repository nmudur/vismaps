import * as THREE from 'https://unpkg.com/three@0.141.0/build/three.module.js';

// adapting from https://www.youtube.com/watch?v=vM8M4QloVL0

const scene = new THREE.Scene()
scene.background = new THREE.Color( 0x000000)
const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000);
// camera.position.set( 0, 0, 100 );
// camera.lookAt( 0, 0, 0 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize(innerWidth, innerHeight )



console.log(scene)
console.log(camera)
console.log(renderer)

document.body.appendChild( renderer.domElement )


const boxGeometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial( { color: 0x0000FF } );

console.log(boxGeometry)
console.log(material)

const mesh = new THREE.Mesh(boxGeometry, material)
console.log(mesh)
scene.add(mesh)
camera.position.z = 5

function animate() {
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
  mesh.rotation.x += 0.01
  mesh.rotation.y += 0.01
}

animate()
