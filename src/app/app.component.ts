import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { COURSES } from '../db-data';
import { CourseCardComponent } from './course-card/course-card.component';
import { Course } from './model/course';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CourseCardComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  header = 'Angular Course';

  courses = [...COURSES];
  // courses = [];

  title = COURSES[1].description;
  price = 9.99396720867;
  rate = 0.67;
  course = COURSES[1];
  startDate = new Date(2025, 0, 1);

  onCourseSelected(course: Course) {
    console.log('Card is clicked', course);
  }

  // Other option to track item in object; but preferably should use simplified -  track course.id
  // if cant track by id, can use index track $index

  // trackCourse(index: number, course: Course) {
  //   return course.id;
  // }
}
