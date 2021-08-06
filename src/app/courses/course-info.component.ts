import { CourseService } from './course.service';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from './course';

@Component({
  templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit{

  course : Course;

  constructor(private activatedRoute : ActivatedRoute, private courseService : CourseService){
    this.course = new Course();
  }

  ngOnInit() : void{
    let routeId = this.activatedRoute.snapshot.paramMap.get('id') == null ? null : this.activatedRoute.snapshot.paramMap.get('id');
    if(routeId != null){
      this.course = this.courseService.retrieveById(+routeId);
    }
  }

  save() : void{
    this.courseService.save(this.course);
  }

}
