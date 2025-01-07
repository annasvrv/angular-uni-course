import { Component, ViewChild } from '@angular/core';
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
export class AppComponent {
  header = 'Angular Course';

  courses = [...COURSES];

  @ViewChild(CourseCardComponent)
  card!: CourseCardComponent;

  onCourseSelected(course: Course) {
    console.log(this.card);
  }
}
