import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Course } from '../../../core/model/course';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../../../core/services/course.service';
import { CourseDetailService } from '../../../core/services/courseDetail.service';
import { CourseDetail } from '../../../core/model/courseDetail';

@Component({
  selector: 'app-course-student',
  templateUrl: './course-student.component.html',
  styleUrl: './course-student.component.css'
})
export class CourseStudentComponent implements OnInit{
  course?: CourseDetail;
  constructor(private newTitle: Title,
    private route: ActivatedRoute,
    private service: CourseDetailService
  ){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('courseId');
    console.log(id)
    this.service.getCourse(id).subscribe((data) => {
      this.course = data;
      this.newTitle.setTitle(this.course.course.title)
      console.log(data);
    });
  }

}
