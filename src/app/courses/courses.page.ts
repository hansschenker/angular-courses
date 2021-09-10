import { CourseListComponent } from './components/course-list/course-list.component';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// courses
import { CourseService } from './data/course.service';
import { Course, emptyCourse } from './types/course.type';

@Component({
  selector: 'hs-courses',
  template: `
  <div class="course-page flex-row flex-content-center  bordered">
    <course-list
    [courses]="courses"
    (onCourseSelected)="handleCourseSelected($event)"
    >

    </course-list>
    <course-form [course] = "selectedCourse"></course-form>
    <!-- <div class="selected-course">
      <h3>
        Selected Course
      </h3>
      <pre>
        {{ selectedCourse | json }}
      </pre>
    </div> -->

    <!-- <course-card></course-card> -->
  </div>

  `,
  styles: [
    `
    .course-page {

      border: 1px solid blue;
    }
    .selected-course {
      width: 150px;
      /* margin-left: 100px; */
    }
    .flex-item {
      /* flex: 0 0 250px; */
      flex: 1 1 30%;
    }
    `
  ]
})
export class CoursesPage implements OnInit {
  
  courses: Observable<Course[]>;
  selectedCourse: Course = emptyCourse;
  constructor(private svc: CourseService) {
    this.courses = this.svc.courses;

   }

  ngOnInit(): void {
  }
  handleCourseSelected(course: Course) {
    this.selectedCourse = course;
  }
}
