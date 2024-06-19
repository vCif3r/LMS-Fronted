import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Course } from '../../../model/course';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../../../core/services/course.service';

@Component({
  selector: 'app-course-student',
  templateUrl: './course-student.component.html',
  styleUrl: './course-student.component.css'
})
export class CourseStudentComponent implements OnInit{
  course?: Course;
  constructor(private newTitle: Title,
    private route: ActivatedRoute,
    private service: CourseService
  ){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('courseId');
    console.log(id)
    this.service.getCourse(id).subscribe((data) => {
      this.course = data;
      this.newTitle.setTitle(this.course.title)
      console.log(data);
    });
  }

}
