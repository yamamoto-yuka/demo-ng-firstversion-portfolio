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
  isSmCategoryActive: boolean = false;
  smBtnShow: boolean = true;
  smBtnClose: boolean = false;
  // ActiveCategory
  activeAll: boolean = true;
  activeCaseStudy: boolean = false;
  activeDevelopment: boolean = false;
  activeOther: boolean = false;

  projects: any[] = [
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
      display: true,
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
      display: true,
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
      display: true,
    },
  ];


  constructor() {}

  categoryBtn() {
    this.isSmCategoryActive = !this.isSmCategoryActive;
    this.smBtnShow = !this.smBtnShow;
    this.smBtnClose = !this.smBtnClose;
  }

  categoryFilter(filter: string) {
    this.projects.filter((value, index) => {
      if (value.category === filter) {
        value.display = true;
      } else {
        value.display = false;
      }
    });
  }

  allList() {
    this.projects.filter((value, index) => {
      value.display = true;
    });
    this.activeAll = true;
    this.activeDevelopment = this.activeCaseStudy = this.activeOther = false;
  }

  developmentList() {
    this.categoryFilter('development');
    this.activeDevelopment = true;
    this.activeAll = this.activeCaseStudy = this.activeOther = false;
  }

  caseStudytList() {
    this.categoryFilter('casestudy');
    this.activeCaseStudy = true;
    this.activeAll = this.activeDevelopment = this.activeOther = false;
  }

  othertList() {
    this.categoryFilter('other');
    this.activeOther = true;
    this.activeAll = this.activeDevelopment = this.activeCaseStudy = false;
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {}
}
