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
  @ViewChild('section', { static: true }) section: ElementRef<HTMLDivElement>;
  @ViewChildren('imgWrap', { read: ElementRef }) images: QueryList<ElementRef>;

  // Category
  isCategoryActive: boolean = false;
  active: boolean = true;
  inActive: boolean = false;

  projects:any[] = [
    {
      title: 'Development',
      category: 'development',
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
      display:true
    },
    {
      title: 'Casestudy',
      category: 'casestudy',
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
      display:true
    },
    {
      title: 'Other',
      category: 'other',
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
      display:true
    }
  ]

  constructor() {}

  categoryBtn() {
    this.isCategoryActive = !this.isCategoryActive;
    this.active = !this.active;
    this.inActive = !this.inActive;
  }

  categoryFilter(filter:string){
    this.projects.filter((value, index) => {
      if( value.category === filter){
         value.display = true;
      }else{
          value.display = false;
      }
     });
  }

  allList(){
    this.projects.filter((value, index) => {
        value.display = true;
     });
  }

  developmentList(){
    this.categoryFilter('development');
  }

  caseStudytList(){
    this.categoryFilter('casestudy');
  }

  othertList(){
    this.categoryFilter('other');
  }


 

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {}
}
