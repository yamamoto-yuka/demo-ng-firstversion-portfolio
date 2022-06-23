import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import * as THREE from 'three';
import { FlyControls } from 'three/examples/jsm/controls/FlyControls';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  anime() {
    const headline = document.querySelector('.headline');
    const logo = document.querySelector('#logo');
    const container = document.querySelector('#container');
    const projects = document.querySelector('.projects');
    const about = document.querySelector('.about');
    const contact = document.querySelector('.contact');
    const footer = document.querySelector('small');
    const desc = document.querySelector('.desc');
    const tl = gsap.timeline();

    tl.fromTo(
      container,
      1.5,
      { height: '0%' },
      { height: '80%', ease: Power2.easeInOut }
    )
      .fromTo(
        container,
        1.7,
        { width: '0%' },
        { width: '90%', ease: Power2.easeInOut }
      )
      .fromTo(logo, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, '-=0.5')
      .fromTo(
        projects,
        0.5,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0 },
        '-=0.5'
      )
      .fromTo(about, 0.5, { opacity: 0, x: 0 }, { opacity: 1, x: 0 }, '-=0.5')
      .fromTo(
        projects,
        0.5,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0 },
        '-=0.5'
      )
      .fromTo(
        headline,
        0.5,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0 },
        '-=0.5'
      )
      .fromTo(
        contact,
        0.5,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0 },
        '-=0.5'
      )
      .fromTo(
        footer,
        0.5,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0 },
        '-=0.5'
      )
      .fromTo(
        desc,
        1.6,
        { opacity:1, left:'60%' },
        { opacity:0, left:'-10%', display:"none", ease: Power2.easeInOut },
        '-=1.8'
      );
  }



  

  ngOnInit(): void {
    const container = document.querySelector('#container') as HTMLCanvasElement;
    const myCanvas = document.querySelector('#myCanvas') as HTMLCanvasElement;
    const clock = new THREE.Clock();
    let controls: FlyControls;

    // SCENE
    const scene = new THREE.Scene();
    // CAMERA
    const camera = new THREE.PerspectiveCamera(
      50,
      container.clientWidth / container.clientHeight,
      1,
      15000
    );
    // camera.position.z = 10;
    const renderer = new THREE.WebGL1Renderer({
      canvas: myCanvas,
      antialias: true,
    });
    renderer.setSize(container.clientWidth, container.clientHeight);

    createStarField();

    function createStarField() {
      const vertices = [];
      for (let i = 0; i < 5000; i++) {
        const x = 5000 * (Math.random() - 0.5);
        const y = 5000 * (Math.random() - 0.5);
        const z = 5000 * (Math.random() - 0.5);
        vertices.push(x, y, z);
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute(
        'position',
        new THREE.Float32BufferAttribute(vertices, 3)
      );

      const material = new THREE.PointsMaterial({
        size: 6,
        color: 0xffffff,
      });

      const stars = new THREE.Points(geometry, material);
      scene.add(stars);
    }

    // const directionalLight = new THREE.AmbientLight(0xfffffff, 1.9);
    // directionalLight.position.set(10, 1, 1);
    // scene.add(directionalLight);
    // const light = new THREE.HemisphereLight(0x888888, 0x0000FF, 1.9);
    // scene.add(light);


    controls = new FlyControls(camera, renderer.domElement);
    controls.movementSpeed = 1000;
    controls.rollSpeed = Math.PI / 50;

    animate();



    function animate() {
      requestAnimationFrame(animate);
      const delta = clock.getDelta();
      controls.update(delta);
      renderer.render(scene, camera);
    }

    

    this.anime();


 
    
  }
}
