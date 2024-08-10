import { Component, OnInit, inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TeacherService } from '../../../core/services/teacher.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogCreateTeacherComponent } from './modal/dialog-create-teacher/dialog-create-teacher.component';
import { User } from '../../../core/model/user';

@Component({
  selector: 'app-list-teachers-admin',
  templateUrl: './list-teachers-admin.component.html',
  styleUrl: './list-teachers-admin.component.css'
})
export class ListTeachersAdminComponent implements OnInit {

  displayedColumns: string[] = ['Nombre', 'Apellido', 'Correo', 'Telefono', 'Acciones'];
  dataSource = new MatTableDataSource<User>();

  constructor(
    private _teacherService: TeacherService) {
  }

  ngOnInit(): void {
    this._teacherService.teachers$.subscribe(data => {
      this.dataSource.data = data;
    });
    this._teacherService.updateTeachersList();
  }


  // dialog
  readonly dialog = inject(MatDialog);

  openDialogCreateTeacher() {
    const dialogRef = this.dialog.open(DialogCreateTeacherComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this._teacherService.updateTeachersList(); // Update the list after closing
      }
      console.log(`Dialog result: ${result}`);
    });
  }
}
