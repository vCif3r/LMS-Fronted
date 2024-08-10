import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../services/authentication.service';

interface Navmenu {
  title: string;
  icon: string;
  url: string;
} 

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent implements OnInit {
  userRole?: string;
  sidebarItems: Navmenu[] = [];

  // navItems: Navmenu[] = [
  //   { title: 'Dashboard', icon: 'dashboard', url: '/virtual/admin/dashboard' },
  //   { title: 'Estudiantes', icon: 'people', url: '/virtual/admin/students' },
  //   { title: 'Profesores', icon: 'people', url: '/virtual/admin/teachers' },
  //   { title: 'Grades', icon: 'people', url: '/virtual/admin/grades' },
  //   { title: 'Courses', icon: 'library_books', url: '/virtual/admin/courses' },
  //   { title: 'Enrollments', icon: 'assignment', url: '/virtual/admin/enrollments' },
  // ]

  constructor(private authService: AuthenticationService){}

  ngOnInit(): void {
    this.userRole = this.authService.getRole()
    console.log(this.authService.getRole())
    this.updateSidebar()
  }

  logout(){
    this.authService.logout()
  }

  updateSidebar() {
    if (this.userRole === 'Student') {
      this.sidebarItems = [
        {
          url: '/virtual/student/dashboard', icon: 'dashboard', title: 'Tablero',
        },
        {
          url: '/users', icon: 'group', title: 'Grupos',
        },
    
        {
          url: '/virtual/student/courses', icon: 'books', title: 'Cursos',
        },
        {
          url: '/table', icon: 'task', title: 'Notas',
        },
        {
          url: '/toolbar', icon: 'calendar_month', title: 'Calendario',
        },
        {
          url: '/slide-toggle', icon: 'help', title: 'Ayuda',
        },
      ];
    } else if (this.userRole === 'Admin') {
      this.sidebarItems = [
        { title: 'Dashboard', icon: 'dashboard', url: '/virtual/admin/dashboard' },
        { title: 'Estudiantes', icon: 'people', url: '/virtual/admin/students' },
        { title: 'Profesores', icon: 'people', url: '/virtual/admin/teachers' },
        { title: 'Grades', icon: 'people', url: '/virtual/admin/grades' },
        { title: 'Courses', icon: 'library_books', url: '/virtual/admin/courses' },
        { title: 'Enrollments', icon: 'assignment', url: '/virtual/admin/enrollments' },
      ];
    }
  }
}