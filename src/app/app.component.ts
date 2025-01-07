import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { COURSES } from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CourseCardComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  header = 'Angular Course';

  courses = [...COURSES];

  // @ViewChild('cardRef1')
  // card1!: CourseCardComponent;

  @ViewChild('cardRef1', { read: ElementRef })
  card1!: ElementRef;

  // access to the div courses
  // @ViewChild('container')
  // containerDiv!: ElementRef;

  // query the course image
  @ViewChild('courseImage')
  courseImage!: ElementRef;

  // @ViewChild('cardRef2')
  // card2!: CourseCardComponent;

  // constructor() {
  //   console.log('containerDiv:', this.card1);
  // }

  // access to the custom component <stb-course-card>
  ngAfterViewInit() {
    // console.log('containerDiv:', this.card1);

    // courseImage is undefined means we cant query deeper into component ierarchy. The scope of ViewChild is restricted to the template of the component itself. We cannot query elements inside the component
    console.log('courdeImage:', this.courseImage);
  }

  onCourseSelected(course: Course) {
    // console.log('card1:', this.card1);
    // console.log('ContainerDiv:', this.containerDiv);
    // console.log('card2:', this.card2);
  }
}
