import { Component, Input, Output, EventEmitter } from '@angular/core';
import { COURSES } from '../../db-data';
import { Course } from '../model/course';
import { count } from 'console';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'stb-course-card',
  imports: [CommonModule],
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

  // Option 1

  // cardClasses() {
  //   return {
  //     beginner: this.course.category == 'BEGINNER',
  //   };
  // }

  // Option 2

  cardClasses() {
    return this.course.category === 'BEGINNER' ? 'beginner' : '';
  }

 
}
