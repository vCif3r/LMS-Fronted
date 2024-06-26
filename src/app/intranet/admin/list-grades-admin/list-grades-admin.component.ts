import { Component, OnInit, inject } from '@angular/core';
import { GradeService } from '../../../core/services/grade.service';
import { Grade } from '../../../core/model/grade';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogCreateGradeComponent } from './modal/dialog-create-grade/dialog-create-grade.component';

@Component({
  selector: 'app-list-grades-admin',
  templateUrl: './list-grades-admin.component.html',
  styleUrl: './list-grades-admin.component.css'
})
export class ListGradesAdminComponent implements OnInit {
  
  constructor(private _serviceGrades: GradeService) { }

  dataSource = new MatTableDataSource<Grade>();
  displayedColumns: string[] = ['Nombre', 'Descripcion', 'Acciones'];

  ngOnInit(): void {
    this._serviceGrades.grades$.subscribe(grades => {
      this.dataSource.data = grades;
    });
    this._serviceGrades.updateGradesList();
  }

  readonly dialog = inject(MatDialog);

  openDialogCreate() {
    const dialogRef = this.dialog.open(DialogCreateGradeComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this._serviceGrades.updateGradesList(); // Update the list after closing the dialog
      }
      console.log(`Dialog result: ${result}`);
    });
  }
}
