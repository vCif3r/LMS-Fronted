import { Component, Input } from '@angular/core';
import { Enrollment } from '../../../../core/model/enrollment';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {
  @Input() enrollment?: Enrollment
  @Input() view?: string
}