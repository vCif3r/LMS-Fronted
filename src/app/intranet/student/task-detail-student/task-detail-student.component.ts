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
    
  }
}
