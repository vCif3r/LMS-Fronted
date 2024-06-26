import { Component } from '@angular/core';

interface Navmenu {
  title: string;
  icon: string;
  url: string;
} 

@Component({
  selector: 'app-sidenav-admin',
  templateUrl: './sidenav-admin.component.html',
  styleUrl: './sidenav-admin.component.css'
})
export class SidenavAdminComponent {

  navItems: Navmenu[] = [
    { title: 'Dashboard', icon: 'dashboard', url: '/virtual/admin/dashboard' },
    { title: 'Estudiantes', icon: 'people', url: '/virtual/admin/students' },
    { title: 'Profesores', icon: 'people', url: '/virtual/admin/teachers' },
    { title: 'Grades', icon: 'people', url: '/virtual/admin/grades' },
    { title: 'Courses', icon: 'library_books', url: '/virtual/admin/courses' },
    { title: 'Enrollments', icon: 'assignment', url: '/virtual/admin/enrollments' },
  ]
}
