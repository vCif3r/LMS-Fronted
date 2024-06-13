import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Course } from '../../../model/course';

@Component({
  selector: 'app-course-student',
  templateUrl: './course-student.component.html',
  styleUrl: './course-student.component.css'
})
export class CourseStudentComponent implements OnInit{
  course?: Course;
  constructor(private newTitle: Title){}

  ngOnInit(): void {
    this.newTitle.setTitle('JavaScript')

    this.course = {
      title: 'Javascript',
      image: 'https://stride.com.co/wp-content/uploads/2023/01/gabriel-heinzer-g5jpH62pwes-unsplash-1024x768.jpg',
      description: 'Learn JavaScript and Express to become a...',
      instructor: {
        name: 'Jhon',
        lastName: 'Doe',
        email: 'doe@example.com',
        avatar: 'https://dreamslms.dreamstechnologies.com/html/assets/img/user/user.jpg'
      }
    }
  }

}
