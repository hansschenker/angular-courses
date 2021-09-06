import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';
import { Course } from '../../types/course.type';

@Component({
  selector: 'course-list',
  template: `
      <h3>List of Courses</h3>
      <ul #courseList>
        <li *ngFor="let course of courses | async">
          <a #link (click)=courseSelected(course) >{{ course.title }}</a>
        </li>
      </ul>

    
  `,
  styles: [
  ]
})
export class CourseListComponent implements OnInit {
  @ViewChild('link') link: ElementRef<HTMLAnchorElement>; 
  @Input() courses: Observable<Course[]> = EMPTY
  @Output() onCourseSelected = new EventEmitter<Course>();
  constructor() { 
  }
  
  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.link.nativeElement.click();
  }
  courseSelected(course: Course) {
    this.onCourseSelected.emit(course);
  }
}
