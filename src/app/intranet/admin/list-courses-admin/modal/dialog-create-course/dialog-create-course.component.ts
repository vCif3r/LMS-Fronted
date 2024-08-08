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
  selectedImage: File | null = null;
  imagePreview: string | ArrayBuffer | null = null; 

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

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.selectedImage = event.target.files[0];
  
      // Comprueba si selectedImage no es null antes de continuar
      if (this.selectedImage) {
        // Leer la imagen y establecer la vista previa
        const reader = new FileReader();
        reader.onload = () => {
          this.imagePreview = reader.result;
        };
  
        reader.readAsDataURL(this.selectedImage);
      }
    }
  }
  

  saveCourse() {
    if (this.createCourseForm.valid && this.selectedImage !== null) {
      const formData = new FormData();
      formData.append('title', this.createCourseForm.get('title')!.value);
      formData.append('description', this.createCourseForm.get('description')!.value);
      formData.append('grade', this.createCourseForm.get('grade')!.value); // Asegúrate de que esto sea el ID
      formData.append('picture', this.selectedImage, this.selectedImage.name);
  
      this.courseService.saveCourse(formData).subscribe(
        data => {
          console.log(data);
          this.courseService.updateCoursesList(); // Actualiza la lista en el servicio
          this.dialogRef.close(true); // Cierra el diálogo y devuelve un resultado
        },
        error => console.error('Error al guardar el curso:', error)
      );
    }
  }
  
}
