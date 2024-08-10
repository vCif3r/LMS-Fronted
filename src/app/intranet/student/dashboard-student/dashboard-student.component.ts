import { Component, OnInit } from '@angular/core';
import { Course } from '../../../core/model/course';
import { EnrollmentService } from '../../../core/services/enrollment.service';
import { AuthenticationService } from '../../../core/services/authentication.service';
import { Enrollment } from '../../../core/model/enrollment';

@Component({
  selector: 'app-dashboard-student',
  templateUrl: './dashboard-student.component.html',
  styleUrl: './dashboard-student.component.css'
})
export class DashboardStudentComponent implements OnInit {
  enrollment: Enrollment[] = []

  constructor(private _enrollmentService: EnrollmentService,
    private _authenticationService: AuthenticationService,
  ){}

  ngOnInit(): void {
    this._enrollmentService.ListActivesByIdStudent(this._authenticationService.getIdUser()).subscribe(
      data => {
        this.enrollment = data
        console.log("data: ",data)
      }
    )
  }
  
  tasks = [
    {
      title: 'Operaciones combinadas 2',
      fecha: '06/06/2024',
      course: 'Matemática'
    },
    {
      title: 'Esto es una tarea de ejemplo',
      fecha: '16/06/2024',
      course: 'Comunicación'
    },
    {
      title: 'Esto es una tarea de ejemplo',
      fecha: '10/06/2024',
      course: 'Ingles'
    },
    {
      title: 'Esto es una tarea de ejemplo 2',
      fecha: '11/06/2024',
      course: 'Ingles'
    }
  ]
}
