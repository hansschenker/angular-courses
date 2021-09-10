import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from "@angular/forms"
// courses
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesPage } from './courses.page';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseFilterPipe } from './components/course-filter.pipe';
import { CourseAddComponent } from './components/course-add/course-add.component';
import { CourseFormComponent } from './components/course-form/course-form.component';
import { CourseItemComponent } from './components/course-item/course-item.component';
import { CourseCardsComponent } from './course-cards.component';
import { CourseCardComponent } from './components/course-card/course-card.component';


@NgModule({
  declarations: [
    CoursesPage,
    CourseListComponent,
    CourseFilterPipe,
    CourseAddComponent,
    CourseFormComponent,
    CourseItemComponent,
    CourseCardsComponent,
    CourseCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    CoursesRoutingModule
  ]
})
export class CoursesModule { }
