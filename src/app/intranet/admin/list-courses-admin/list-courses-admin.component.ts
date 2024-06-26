import { Component, inject } from '@angular/core';
import { CourseService } from '../../../core/services/course.service';
import { MatTableDataSource } from '@angular/material/table';
import { Course } from '../../../core/model/course';
import { MatDialog } from '@angular/material/dialog';
import { DialogCreateCourseComponent } from './modal/dialog-create-course/dialog-create-course.component';

@Component({
  selector: 'app-list-courses-admin',
  templateUrl: './list-courses-admin.component.html',
  styleUrl: './list-courses-admin.component.css'
})
export class ListCoursesAdminComponent {
  constructor(private _serviceCourse: CourseService) { }

  dataSource = new MatTableDataSource<Course>();
  displayedColumns: string[] = ['Image','Title', 'Descripcion','Grado', 'Acciones'];

  ngOnInit(): void {
    this._serviceCourse.courses$.subscribe(grades => {
      this.dataSource.data = grades;
    });
    this._serviceCourse.updateCoursesList();
  }

  readonly dialog = inject(MatDialog);

  openDialogCreate() {
    const dialogRef = this.dialog.open(DialogCreateCourseComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this._serviceCourse.updateCoursesList(); // Update the list after closing the dialog
      }
      console.log(`Dialog result: ${result}`);
    });
  }
}
