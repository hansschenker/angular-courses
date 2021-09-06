import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap, take, toArray} from "rxjs/operators"
// service
import { Course } from '../types/course.type';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courses: Observable<Course[]> 
  constructor(private http: HttpClient) {
    this.courses = this.http.get<Course[]>("/api/courses");
    // const data = this.courses.pipe( toArray());
    // data.subscribe(c => console.log(c))
   }
}
