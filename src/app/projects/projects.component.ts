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

  all: any = 'all';
  casestudy: any = 'casestudy';
  others: any = 'other';

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

  // categoryList(event: any) {
  //   // let value = event.target.getAttribute('data-filter');
  //   const targetData = event.target.dataset.filter;
  //   console.log('targetData',targetData);
  //   // const targetItem = this.section.nativeElement.dataset['category'];
  //   // console.log( targetItem );
  //   const filterList = this.data.filter((value, index) => {
  //    if(targetData === 'all' ){
      
  //    }else if(targetData === value.category){
  //     console.log(value);
  //     console.log('projects',this.projects);
  //     console.log('data',this.data);
  //    }else{
  //     this.projects.splice(index, 1);
  //    }
  //   });
  // }

  // allList(){
  //   this.data.filter((value, index) => {
  //     this.projects.push(value);
  //     console.log(value);
  //    });
  // }

  allList(){
    this.projects.filter((value, index) => {
        value.display = true;
     });
  }

  developmentList(){
    this.projects.filter((value, index) => {
      if( value.category === 'development'){
         value.display = true;
      }else{
          value.display = false;
      }
     });
  }

  caseStudytList(){
    this.projects.filter((value, index) => {
      if( value.category === 'casestudy'){
         value.display = true;
      }else{
          value.display = false;
      }
     });
  }

  othertList(){
    this.projects.filter((value, index) => {
      if( value.category === 'other'){
         value.display = true;
      }else{
          value.display = false;
      }
     });
  }

  // caseStudytList(){
  //   console.log('clisk!')
  //   this.data.filter((value, index) => {
  //     if( value.category === 'casestudy'){
  //        this.projects.push(value);
  //     }else{
  //        this.projects.splice(index, 1);
  //        console.log(this.projects);
  //        console.log(this.data);
  //     }
  //    });
  // }


  ngOnInit(): void {
    // console.log(this.data);
    // console.log(this.projects[0].roles[0]);
  }

  ngAfterViewInit(): void {}
}
