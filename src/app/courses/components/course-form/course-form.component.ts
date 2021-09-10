import { NgForm } from "@angular/forms";

// course form
import { emptyCourse, Course } from "./../../types/course.type";
import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "course-form",
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="form-container flex-row" >
      <form class="flex-col" #courseForm="ngForm" (onSubmit)="saveCourse(courseForm)">
        <h3 class="course-form-title">Edit Course</h3>
        
      <!-- id -->
        <div class="form-group form-group-hidden">
          <label for="id">Id</label>
          <input type="number" id="id" name="id" [ngModel]="course.id" />
        </div>

        <!-- title -->
        <div class="form-group">
          <label for="title">Title</label>
          <input type="text" id="title" name="title" [ngModel]="course.title" />
        </div>
        <!-- imageUrl -->
        <div class="form-group">
          <label for="imageUrl">Image Url</label>
          <textarea cols=42 rows=4 name="imageUrl" [ngModel]="course.imageUrl"></textarea>
          <label>Image Preview</label>
          <img class="form-group-image" src="{{ course.imageUrl  }}" alt="Course Image">
        </div>

        <!-- description -->
        <div class="form-group">
          <label for="description">Description</label>
          <textarea 
          cols=42 
          rows=4
          id="description"
            name="description"
            [ngModel]="course.description"
          ></textarea>

        </div>

        <!-- category -->
        <div class="form-group">
          <label for="category">Category</label>
          <input
            type="text"
            id="category"
            name="category"
            [ngModel]="course.category"
          />
        </div>

        <div>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  `,
  styles: [
    `
      .hide {
        display: none;
      }
      .course-form-title {
        width: 32ch;
        background-color: #efefef;
      }

      .form-group {

      }
      .form-group > label {
        display: block;
        font-weight: bold;
        margin-bottom: .5em;
      }

      .form-group > input {
        width: 300px;
      }
      .form-group-image {
        display: block;
        /* width: 100%; */
        max-width: 300px;
        /* margin-left: -295px; */
        /* margin-bottom: 20px; */
        /* text-align: left; */
      }
      .form-group-hidden {
        display: none;
      }

    `,
  ],
})
export class CourseFormComponent implements OnInit {
  @Input() course: Course = emptyCourse;
  constructor() {}

  ngOnInit(): void {}
  saveCourse(form: NgForm) {}
}
