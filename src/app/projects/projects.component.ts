import {
  Component,
  ElementRef,
  OnInit,
  AfterViewInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  @ViewChild('section', {static:true}) section:ElementRef<HTMLDivElement>;
  @ViewChildren('imgWrap',{ read: ElementRef }) images:QueryList<ElementRef>;
  isCategoryActive:boolean = false;
  active:boolean =true;
  inActive:boolean = false;

  projects: any[] = [
    {
      title: '美稀, Miki',
      roles: [
        { role: 'Branding' },
        { role: 'Design' },
        { role: 'Development' },
        { role: 'Management' },
      ],
      skills: [
        { skill: 'Angular' },
        { skill: 'Strapi' },
        { skill: 'Illustrator' },
        { skill: 'Figma' },
      ],
      img: '../../assets/projects/miki.jpg',
    },
    {
      title: '美稀, Miki',
      roles: [
        { role: 'Branding' },
        { role: 'Design' },
        { role: 'Development' },
        { role: 'Management' },
      ],
      skills: [
        { skill: 'Angular' },
        { skill: 'Strapi' },
        { skill: 'Illustrator' },
        { skill: 'Figma' },
      ],
      img: '../../assets/projects/miki.jpg',
    }
  ];


  constructor() {}




  categoryBtn(){
    this.isCategoryActive = !this.isCategoryActive;
    this.active = !this.active;
    this.inActive = !this.inActive;
  }



  ngOnInit(): void {
    // console.log(this.projects[0].roles[0]);
 


  }

  ngAfterViewInit(): void {

  }


}
