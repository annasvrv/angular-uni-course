import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  input,
} from '@angular/core';
import { COURSES } from '../../db-data';
import { Course } from '../model/course';
import { count } from 'console';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'stb-course-card',
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss',
})
export class CourseCardComponent {
  @Input({
    required: true,
  })
  course: Course = {
    id: 0,
    description: '',
    iconUrl: '',
    longDescription: '',
    category: '',
    lessonsCount: 0,
  };

  @Input({
    required: true,
  })
  index: number = 0;

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  onCourseViewed() {
    console.log('Card is clicked');
    this.courseEmitter.emit(this.course);
  }
}
