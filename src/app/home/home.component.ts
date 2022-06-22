import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';

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
    const hero = document.querySelector('.hero');
    const projects = document.querySelector('.projects');
    const about = document.querySelector('.about');
    const slider = document.querySelector('.slider');
    const contact = document.querySelector('.contact');
    const desc = document.querySelector('.desc');
    const tl = gsap.timeline();

    tl.fromTo(
      hero,
      1.7,
      { height: '0%' },
      { height: '90%', ease: Power2.easeInOut }
    )
      .fromTo(
        hero,
        1.2,
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
      .fromTo(about, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, '-=0.5')
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
        desc,
        1.2,
        { opcity: 1 },
        { opacity: 0, ease: Power2.easeOut },
        '-=2'
      );
  }

  ngOnInit(): void {
    this.anime();
  }
}
