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
      title: 'Desarrollo de aplicaciones web con Javascript',
      image: 'https://stride.com.co/wp-content/uploads/2023/01/gabriel-heinzer-g5jpH62pwes-unsplash-1024x768.jpg',
      description: 'JavaScript, often abbreviated as JS, is a programming language and core technology of the Web, alongside HTML and CSS. 99% of websites use JavaScript on the client side for webpage behavior. Web browsers have a dedicated JavaScript engine that executes the client code.',
      instructor: {
        name: 'Jhon',
        lastName: 'Doe',
        email: 'doe@example.com',
        avatar: 'https://dreamslms.dreamstechnologies.com/html/assets/img/user/user.jpg'
      }
    }
  }

}
