import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit{

  courseId : number = 0;

  constructor(private activatedRoute : ActivatedRoute){}

  ngOnInit() : void{
    let routeId = this.activatedRoute.snapshot.paramMap.get('id') == null ? null : this.activatedRoute.snapshot.paramMap.get('id');
    if(routeId != null){
      this.courseId = +routeId;
    }
  }

}
