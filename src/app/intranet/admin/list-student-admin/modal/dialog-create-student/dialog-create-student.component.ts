import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../../../../../core/services/student.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Grade } from '../../../../../core/model/grade';
import { GradeService } from '../../../../../core/services/grade.service';

@Component({
  selector: 'app-dialog-create-student',
  templateUrl: './dialog-create-student.component.html',
  styleUrl: './dialog-create-student.component.css'
})
export class DialogCreateStudentComponent {
  grades: Grade[] = [];


  studentSaveForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
    private gradeService: GradeService,
    private dialogRef: MatDialogRef<DialogCreateStudentComponent>
  ){
    this.studentSaveForm = this.fb.group({
      name: ['', [Validators.required]],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      grade: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  ngOnInit(): void {
    this.getGrades();
  }

  getGrades() {
    this.gradeService.findAll().subscribe((data) => {
      this.grades = data;
    });
  }

  saveStudent() {
    console.log(this.studentSaveForm.value);
    if (this.studentSaveForm.valid) {
      this.studentService.saveStudent(this.studentSaveForm.value).subscribe(
        data => {
          console.log(data);
          this.studentService.updateStudentsList(); // Update the list in the service
          this.dialogRef.close(true); // Close the dialog and return a result
        }
      );
    }
  }
}
