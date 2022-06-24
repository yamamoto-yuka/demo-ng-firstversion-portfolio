import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { gsap } from 'gsap';
import * as THREE from 'three';
import { FlyControls } from 'three/examples/jsm/controls/FlyControls';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  // For Timeline Animation
  @ViewChild('headline', { static: true }) headline: ElementRef<HTMLDivElement>;
  @ViewChild('logo', { static: true }) logo: ElementRef<HTMLDivElement>;
  @ViewChild('container', { static: true }) container: ElementRef<HTMLDivElement>;
  @ViewChild('projects', { static: true }) projects: ElementRef<HTMLDivElement>;
  @ViewChild('about', { static: true }) about: ElementRef<HTMLDivElement>;
  @ViewChild('contact', { static: true }) contact: ElementRef<HTMLDivElement>;
  @ViewChild('footer', { static: true }) footer: ElementRef<HTMLDivElement>;
  @ViewChild('desc', { static: true }) desc: ElementRef<HTMLDivElement>;

  // For 3D Bg
  @ViewChild('myCanvas', {static:true}) myCanvas: ElementRef<HTMLDivElement>;


  constructor() {}

  ngOnInit(): void {
    const clock = new THREE.Clock();
    let controls: FlyControls;

    
    const scene = new THREE.Scene();
    // CAMERA
    const camera = new THREE.PerspectiveCamera(
      50,
      this.container.nativeElement.clientWidth / this.container.nativeElement.clientHeight,
      1,
      15000
    );

    const renderer = new THREE.WebGL1Renderer({
      canvas: this.myCanvas.nativeElement,
      antialias: true,
    });
    renderer.setSize(this.container.nativeElement.clientWidth, this.container.nativeElement.clientHeight);

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
    controls = new FlyControls(camera, renderer.domElement);
    controls.movementSpeed = 1800;
    controls.rollSpeed = Math.PI / 50;

    animate();

    function onWindowResize() {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    }

    function animate() {
      requestAnimationFrame(animate);
      const delta = clock.getDelta();
      controls.update(delta);
      renderer.render(scene, camera);
    }

    window.addEventListener('resize', onWindowResize);
    this.timelineAnimation();
  }

  // TIME LINE ANIMATION
  timelineAnimation() {
    const tl = gsap.timeline();
    tl.fromTo(
      this.container.nativeElement,
      1.5,
      { height: '0%' },
      { height: '80%', ease: Power2.easeInOut }
    )
      .fromTo(
        this.container.nativeElement,
        1.7,
        { width: '0%' },
        { width: '90%', ease: Power2.easeInOut }
      )
      .fromTo(
        this.logo.nativeElement,
        0.5,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0 },
        '-=0.5'
      )
      .fromTo(
        this.projects.nativeElement,
        0.5,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0 },
        '-=0.5'
      )
      .fromTo(
        this.about.nativeElement,
        0.5,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0 },
        '-=0.5'
      )
      .fromTo(
        this.projects.nativeElement,
        0.5,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0 },
        '-=0.5'
      )
      .fromTo(
        this.headline.nativeElement,
        0.5,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0 },
        '-=0.5'
      )
      .fromTo(
        this.contact.nativeElement,
        0.5,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0 },
        '-=0.5'
      )
      .fromTo(
        this.footer.nativeElement,
        0.5,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0 },
        '-=0.5'
      )
      .fromTo(
        this.desc.nativeElement,
        1.6,
        { opacity: 1, left: '30%' },
        { opacity: 0, left: '0%', display: 'none', ease: Power2.easeInOut },
        '-=1.8'
      );
  }
}
