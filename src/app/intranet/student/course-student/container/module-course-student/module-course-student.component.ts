import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-module-course-student',
  templateUrl: './module-course-student.component.html',
  styleUrl: './module-course-student.component.css'
})
export class ModuleCourseStudentComponent {
  readonly panelOpenState = signal(false);
}
