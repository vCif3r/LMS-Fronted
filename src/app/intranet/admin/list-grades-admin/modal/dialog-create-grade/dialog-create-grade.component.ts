import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GradeService } from '../../../../../core/services/grade.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-create-grade',
  templateUrl: './dialog-create-grade.component.html',
  styleUrl: './dialog-create-grade.component.css'
})
export class DialogCreateGradeComponent {
  gradeForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private gradeService: GradeService,
    private dialogRef: MatDialogRef<DialogCreateGradeComponent>
  ){
    this.gradeForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    
  }

  saveGrade() {
    if (this.gradeForm.valid) {
      this.gradeService.save(this.gradeForm.value).subscribe(
        data => {
          console.log(data);
          this.gradeService.updateGradesList(); // Update the list in the service
          this.dialogRef.close(true); // Close the dialog and return a result
        }
      );
    }
  }
}
