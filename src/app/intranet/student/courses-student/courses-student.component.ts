import { Component, OnInit } from '@angular/core';
import { Course } from '../../../core/model/course';
import { CourseService } from '../../../core/services/course.service';
import { Enrollement } from '../../../core/model/enrollement';
import { EnrollmentService } from '../../../core/services/enrollement.service';
import { AuthenticationService } from '../../../core/services/authentication.service';

@Component({
  selector: 'app-courses-student',
  templateUrl: './courses-student.component.html',
  styleUrl: './courses-student.component.css'
})
export class CoursesStudentComponent implements OnInit {
  enrollments: Enrollement[] = []
  constructor(private enrollmentService: EnrollmentService, private authService: AuthenticationService){}

  size:any = 1

  currentView:string = 'grid'
  setView(view: string) {
    this.currentView = view;
  }

  ngOnInit(): void {
    this.getListEnrollments();
  }

  getListEnrollments(): void {
    this.enrollmentService.ListByIdStudent(this.authService.getIdUser()).subscribe( 
      enrollments => {
        this.enrollments = enrollments
        this.enrollments.forEach(enrollment => {
          this.size++
        })
        console.log(enrollments)
      }
    )
    }
}
  

  // courses: Course[] = [
  //   {
  //     title: 'Javascript',
  //     image: 'https://dreamslms.dreamstechnologies.com/html/assets/img/course/course-16.jpg',
  //     description: 'Learn JavaScript and Express to become a...',
  //     instructor: {
  //       name: 'Jhon',
  //       lastName: 'Doe',
  //       email: 'doe@example.com',
  //       avatar: 'https://dreamslms.dreamstechnologies.com/html/assets/img/user/user.jpg'
  //     }
  //   },
  //   {
  //     title: 'Angular 18',
  //     image: 'https://dreamslms.dreamstechnologies.com/html/assets/img/course/course-13.jpg',
  //     description: 'lorem impsum dolor sit amet, consectetur adipiscing elit',
  //     instructor: {
  //       name: 'Jhon',
  //       lastName: 'Doe',
  //       email: 'doe@example.com',
  //       avatar: 'https://dreamslms.dreamstechnologies.com/html/assets/img/user/user.jpg'
  //     }
  //   },
  //   {
  //     title: 'UI/UX Design',
  //     image: 'https://dreamslms.dreamstechnologies.com/html/assets/img/course/course-10.jpg',
  //     description: 'Information About UI/UX Design Degree',
  //     instructor: {
  //       name: 'Jhon',
  //       lastName: 'Doe',
  //       email: 'doe@example.com',
  //       avatar: 'https://dreamslms.dreamstechnologies.com/html/assets/img/user/user.jpg'
  //     }
  //   },
  //   {
  //     title: 'Responsive Web Design',
  //     image: 'https://dreamslms.dreamstechnologies.com/html/assets/img/course/course-17.jpg',
  //     description: 'Responsive Web Design Essentials HTML5 CSS3 ...',
  //     instructor: {
  //       name: 'Alex',
  //       lastName: 'Flores',
  //       email: 'alex@example.com',
  //       avatar: 'https://dreamslms.dreamstechnologies.com/html/assets/img/user/user6.jpg'
  //     }
  //   },
  //   {
  //     title: 'Responsive Web Design',
  //     image: 'https://dreamslms.dreamstechnologies.com/html/assets/img/course/course-17.jpg',
  //     description: 'Responsive Web Design Essentials HTML5 CSS3 ...',
  //     instructor: {
  //       name: 'Alex',
  //       lastName: 'Flores',
  //       email: 'alex@example.com',
  //       avatar: 'https://dreamslms.dreamstechnologies.com/html/assets/img/user/user6.jpg'
  //     }
  //   },
  //   {
  //     title: 'UI/UX Design',
  //     image: 'https://dreamslms.dreamstechnologies.com/html/assets/img/course/course-10.jpg',
  //     description: 'Information About UI/UX Design Degree',
  //     instructor: {
  //       name: 'Jhon',
  //       lastName: 'Doe',
  //       email: 'doe@example.com',
  //       avatar: 'https://dreamslms.dreamstechnologies.com/html/assets/img/user/user.jpg'
  //     }
  //   },
  // ];

