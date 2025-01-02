import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { COURSES } from '../db-data';
import { CourseCardComponent } from './course-card/course-card.component';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CourseCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  header = 'Angular Course';

  courses = [...COURSES];
  // courses = [];

  // coreCourse = COURSES[0];
  // rxjsCourse = COURSES[1];
  // ngrxCourse = COURSES[2];

  onCourseSelected(course: Course) {
    console.log('Card is clicked', course);
  }

  // Other option to track item in object; but preferably should use simplified -  track course.id
  // if cant track by id, can use index track $index

  // trackCourse(index: number, course: Course) {
  //   return course.id;
  // }
}
