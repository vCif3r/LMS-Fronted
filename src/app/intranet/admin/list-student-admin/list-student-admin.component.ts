import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../../../core/model/user';
import { MatDialog } from '@angular/material/dialog';
import { DialogCreateStudentComponent } from './modal/dialog-create-student/dialog-create-student.component';
import { StudentService } from '../../../core/services/student.service';

@Component({
  selector: 'app-list-student-admin',
  templateUrl: './list-student-admin.component.html',
  styleUrl: './list-student-admin.component.css'
})
export class ListStudentAdminComponent implements OnInit {

  displayedColumns: string[] = ['Nombre', 'Apellido', 'Correo', 'Telefono'];
  dataSource = new MatTableDataSource<User>();

  constructor(private _liveAnnouncer: LiveAnnouncer,
    private _studentService: StudentService) {
  }

  ngOnInit(): void {
    this._studentService.students$.subscribe(students => {
      this.dataSource.data = students;
    });
    this._studentService.updateStudentsList();
  }

  // dialog
  readonly dialog = inject(MatDialog);

  openDialogCreateStudent() {
    const dialogRef = this.dialog.open(DialogCreateStudentComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this._studentService.updateStudentsList(); // Update the list after closing
      }
      console.log(`Dialog result: ${result}`);
    });
  }
}