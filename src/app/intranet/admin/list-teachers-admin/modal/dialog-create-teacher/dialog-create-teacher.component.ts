import { Component } from '@angular/core';
import { Grade } from '../../../../../core/model/grade';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TeacherService } from '../../../../../core/services/teacher.service';
import { GradeService } from '../../../../../core/services/grade.service';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from '../../../../../core/model/user';
import { RoleService } from '../../../../../core/services/role.service';

@Component({
  selector: 'app-dialog-create-teacher',
  templateUrl: './dialog-create-teacher.component.html',
  styleUrl: './dialog-create-teacher.component.css'
})
export class DialogCreateTeacherComponent {
  grades: Grade[] = [];
  teacherSaveForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private teacherService: TeacherService,
    private gradeService: GradeService,
    private roleService: RoleService,
    private dialogRef: MatDialogRef<DialogCreateTeacherComponent>
  ){
    this.teacherSaveForm = this.fb.group({
      name: ['', [Validators.required]],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      phone_number: ['', Validators.required],
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

  saveTeacher() {
    console.log(this.teacherSaveForm.value);
    if (this.teacherSaveForm.valid) {
      this.teacherService.saveteacher(this.teacherSaveForm.value).subscribe(
        data => {
          console.log(data);
          this.teacherService.updateTeachersList(); // Update the list in the service
          this.dialogRef.close(true); // Close the dialog and return a result
        }
      );
    }
  }
}
