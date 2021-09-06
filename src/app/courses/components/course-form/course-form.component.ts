import { NgForm } from "@angular/forms";

// course form
import { emptyCourse, Course } from "./../../types/course.type";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "course-form",
  template: `
  <div class="form-container1">
  <h3>Edit Course</h3>
  <form #courseForm = "ngForm"  (onSubmit)="saveCourse(courseForm)">
    <!-- id -->
    <div class="form-group">
      <label for="id">Id</label>
      <input type="number" id="id" name="id" [ngModel]="course.id">
    </div>

    <div class="form-group">
      <label for="title">Title</label>
      <input type="text" id="title" name="title" [ngModel]="course.title">
    </div>

    <!-- description -->
    <div class="form-group">
      <label for="description">Description</label>
      <input type="text" id="description" name="description" [ngModel]="course.description">
    </div>

        <!-- category -->
        <div class="form-group">
          <label for="category">Category</label>
          <input type="text" id="category" name="category" [ngModel]="course.category">
        </div>

        <div>
          <button type="submit">Save</button>
        </div>
  </form>
  </div>

  `,
  styles: [
    `
    h3 {
      text-align: center;
    }
      form {
        margin-left: 50px;
      }
      label {
        display: inline-block;
        width: 100px;
      }
    `,
  ],
})
export class CourseFormComponent implements OnInit {
  @Input() course: Course = emptyCourse;
  constructor() {}

  ngOnInit(): void {}
  saveCourse(form: NgForm) {

  }
}
