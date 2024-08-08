import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GradeService } from '../../../../../core/services/grade.service';
import { MatDialogRef } from '@angular/material/dialog';
import { LevelService } from '../../../../../core/services/level.service';
import { Level } from '../../../../../core/model/level';

@Component({
  selector: 'app-dialog-create-grade',
  templateUrl: './dialog-create-grade.component.html',
  styleUrl: './dialog-create-grade.component.css'
})
export class DialogCreateGradeComponent {
  levels: Level[] = [];
  gradeForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private gradeService: GradeService,
    private levelService: LevelService,
    private dialogRef: MatDialogRef<DialogCreateGradeComponent>
  ){
    this.gradeForm = this.fb.group({
      title: ['', [Validators.required]],
      level: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getLevels()
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

  getLevels(){
    this.levelService.findAll().subscribe(data =>{
      this.levels = data;
    })
  }
}
