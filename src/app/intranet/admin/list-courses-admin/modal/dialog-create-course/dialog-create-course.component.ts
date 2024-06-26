import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CourseService } from '../../../../../core/services/course.service';
import { MatDialogRef } from '@angular/material/dialog';
import { GradeService } from '../../../../../core/services/grade.service';
import { Grade } from '../../../../../core/model/grade';

@Component({
  selector: 'app-dialog-create-course',
  templateUrl: './dialog-create-course.component.html',
  styleUrl: './dialog-create-course.component.css'
})
export class DialogCreateCourseComponent {
  grades: Grade[] = []; // List of grades to populate the select dropdown

  createCourseForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private courseService: CourseService,
    private gradeService: GradeService,
    private dialogRef: MatDialogRef<DialogCreateCourseComponent>
  ){
    this.createCourseForm = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', Validators.required],
      grade: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getGrades(); // Fetch grades to populate the select dropdown
  }

  getGrades() {
    this.gradeService.findAll().subscribe(data => {
      this.grades = data;
    });
  }

  saveCourse() {
    if (this.createCourseForm.valid) {
      this.courseService.saveCourse(this.createCourseForm.value).subscribe(
        data => {
          console.log(data);
          this.courseService.updateCoursesList(); // Update the list in the service
          this.dialogRef.close(true); // Close the dialog and return a result
        }
      );
    }
  }
}
