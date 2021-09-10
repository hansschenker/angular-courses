import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';
import { Course } from '../../types/course.type';

@Component({
  selector: 'course-list',
  template: `
      <h3 class="course-list-title">List of Courses</h3>
      <ul class="course-list bordered">
        <li *ngFor="let course of courses | async">
          <a (click)=courseSelected(course) >{{ course.title }}</a>
        </li>
      </ul>
  `,
  styles: [
    `
    .course-list {
      list-style: none;
      width: 40ch;
  
    }
    .course-list-title {
      background-color: #efefef;
    }
    a:hover {
      color: blue;
    }
    `
  ]
})
export class CourseListComponent implements OnInit {
  @Input() courses: Observable<Course[]> = EMPTY

  // @ViewChild('link') link: ElementRef<HTMLAnchorElement>; 
  @Output() onCourseSelected = new EventEmitter<Course>();
  constructor() { 
  }
  
  ngOnInit(): void {
  }
  ngAfterViewInit() {
    // this.link.nativeElement.click();
  }
  courseSelected(course: Course) {
    this.onCourseSelected.emit(course);
  }
}
