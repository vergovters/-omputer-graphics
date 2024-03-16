import * as THREE from 'three';
import { task1 } from "./task1";
import { task2 } from "./task2";
import { task3 } from "./task3";
import { task4 } from "./task4";

const renderer = new THREE.WebGLRenderer();
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight,  0.1,  1000 );

function changeProcedureBasedOnTime(time) {
    if (time < 2) {
      task1(); 
    } else if (time < 4) {
      task2();
    } else if (time < 6) {
      task3(); 
    } else {
      task4(); 
    }
  }
  
  function animateProcedureChange() {
    let time = 0; 
    const timeStep = 0.01; 

    function animate() {
      requestAnimationFrame(animate);
      time += timeStep;
      changeProcedureBasedOnTime(time);
      renderer.render(scene, camera);
    }
  
    animate();
  }

animateProcedureChange();