import { Component, Input, Output, EventEmitter } from '@angular/core';
import { COURSES } from '../../db-data';
import { Course } from '../model/course';
import { count } from 'console';

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

  @Input() cardIndex: number = 0;

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  isImageVisible() {
    return this.course && this.course.iconUrl;
  }

  onCourseViewed() {
    console.log('Card is clicked');
    this.courseEmitter.emit(this.course);
  }
}
