import { Component, Input } from '@angular/core';
import { CourseDetail } from '../../../../core/model/courseDetail';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {
  @Input() courseDetails?: CourseDetail
  @Input() view?: string
}