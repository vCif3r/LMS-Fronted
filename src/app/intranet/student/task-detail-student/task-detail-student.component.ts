import { Component, OnInit } from '@angular/core';
import { Task } from '../../../core/model/task';

@Component({
  selector: 'app-task-detail-student',
  templateUrl: './task-detail-student.component.html',
  styleUrl: './task-detail-student.component.css'
})
export class TaskDetailStudentComponent implements OnInit {

  task?: Task

  ngOnInit(): void {
    this.task = {
      title: 'Laboratorio 01',
      description: 'Elabora el laboratorio de manera individual y entrega en la fecha indicada.',
      startDate: new Date(),
      deadline: new Date(),
      course: {
        _id: "123456",
        title: 'Desarrollo de aplicaciones web con Javascript',
        image: 'https://stride.com.co/wp-content/uploads/2023/01/gabriel-heinzer-g5jpH62pwes-unsplash-1024x768.jpg',
        description: 'JavaScript, often abbreviated as JS, is a programming language and core technology of the Web, alongside HTML and CSS. 99% of websites use JavaScript on the client side for webpage behavior. Web browsers have a dedicated JavaScript engine that executes the client code.',
        
      }
    }
  }
}
