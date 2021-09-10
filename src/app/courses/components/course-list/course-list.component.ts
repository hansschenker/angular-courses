import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter, ViewChild, ElementRef, AfterContentInit, ViewChildren, QueryList } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';
import { Course } from '../../types/course.type';

@Component({
  selector: 'course-list',
  template: `
      <h3 #title class="course-list-title">List of Courses</h3>
      <ul #list class="course-list">
        <li #item class="course-item" *ngFor="let course of courses | async" >
          <a #link class="course-link" (click)=courseSelected(course) >{{ course.title }}</a>
        </li>
      </ul>
  `,
  styles: [
    `
    .course-list {
      list-style: none;
      width: 40ch;
      
    }
    .course-list > li:first {
      background-color: yellow;
    }
    .course-list:focus {
      background-color: #efefef;    
    }
    .course-list-title {
      background-color: #efefef;
      margin-bottom: 2.5em;
    }

    a:hover {
      color: blue;
    }
    `
  ]
})
export class CourseListComponent implements OnInit , AfterViewInit {
  // [selected]="item && i == 0
  // select after loading first itmem
  // @Input() cardIndex = 0;
  @Input() courses: Observable<Course[]> = EMPTY
  @Output() onCourseSelected = new EventEmitter<Course>();
  @ViewChild('list') listRef:ElementRef<HTMLUListElement>;
  constructor() { 
  }
  
  ngOnInit(): void {
  }
  ngAfterViewInit() {
    // console.log("List Ref:", this.listRef.nativeElement.children);
    this.printCollection( this.listRef.nativeElement.children);

  }
    
  printCollection(collection: HTMLCollection) {
        // convert to an array using Array.from()
        Array.from(collection).forEach(function(element) {
          console.log(element)
      });
  }
  courseSelected(course: Course) {
    this.onCourseSelected.emit(course);
  }

}
