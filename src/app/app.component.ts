import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { COURSES } from '../db-data';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CourseCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Angular Course';

  coreCourse = COURSES[0];
  rxjsCourse = COURSES[1];
  ngrxCourse = COURSES[2];
}
