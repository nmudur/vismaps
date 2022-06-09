import * as THREE from 'https://unpkg.com/three@0.141.0/build/three.module.js';
import gsap from 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/gsap.min.js'
import { Group } from 'three';

// adapting from https://www.youtube.com/watch?v=vM8M4QloVL0

const scene = new THREE.Scene()
scene.background = new THREE.Color( 0x000000)
const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000);
// camera.position.set( 0, 0, 0);
// camera.lookAt(100, 100, 100);

const renderer = new THREE.WebGLRenderer({
    antialias: true
});
renderer.setSize(innerWidth, innerHeight )
renderer.setPixelRatio(window.devicePixelRatio)
document.body.appendChild( renderer.domElement )

const sphere = new THREE.Mesh(new THREE.SphereGeometry(5, 50, 50),
    new THREE.MeshBasicMaterial( { 
        //color: 0x0000FF 
        map: new THREE.TextureLoader().load('UVMaps/project_1024_15am_try2.jpeg'),
        // side: THREE.BackSide
    } ))

console.log(sphere)
scene.add(sphere)
camera.position.z = 20

const group = new THREE.Group()
group.add(sphere)
scene.add(group)
const mouse = {
    x: undefined,
    y:undefined
}

function animate() {
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
  sphere.rotation.y += 0.001
  group.rotation.y = mouse.x
  group.rotation.x = mouse.y
  gsap.to(group.rotation, {
      y: mouse.x * 0.5,
      x: -mouse.y *0.3
  })
}

addEventListener('mousemove', () => {
    mouse.x = (event.clientX / innerWidth)*2 - 1
    mouse.y = -(event.clientY / innerHeight)*2 + 1
})
animate()
