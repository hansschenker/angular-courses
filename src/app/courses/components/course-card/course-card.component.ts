import { Course, emptyCourse } from './../../types/course.type';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'course-card',
  template: `
    <div class="course-card">
      <h3 class="course-card-title">{{ course.title }} </h3>
      <div class="course-card-body">
       <img class="course-card-image" src="../../../../assets/images/ruebli-beet.png" alt="Card Image">
       <p class="course-card-text">
         {{ course.description }}
       </p>
       <p class="course-card-category"> {{ course.category }} </p>
      </div>
    </div>
  `,
  styles: [
    `
    .course-card-image {width: 100%;}
    `
  ]
})
export class CourseCardComponent implements OnInit {

  @Input() course: Course = emptyCourse;

  constructor() { }

  ngOnInit(): void {
  }

}
