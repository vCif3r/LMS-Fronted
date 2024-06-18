import { Component } from '@angular/core';
import { AuthenticationService } from '../../../../core/services/authentication.service';

export interface sidebarMenu{
  link: string;
  icon: string;
  menu: string;
}

@Component({
  selector: 'app-sidenav-student',
  templateUrl: './sidenav-student.component.html',
  styleUrl: './sidenav-student.component.css'
})
export class SidenavStudentComponent {
  constructor(private authService: AuthenticationService){}

  logout(){
    this.authService.logout()
  }

  sidebarMenu: sidebarMenu[] = [
    {
      link: '/virtual/student/dashboard',
      icon: 'dashboard',
      menu: 'Tablero',
    },
    {
      link: '/users',
      icon: 'group',
      menu: 'Grupos',
    },

    {
      link: '/virtual/student/courses',
      icon: 'books',
      menu: 'Cursos',
    },
    {
      link: '/table',
      icon: 'task',
      menu: 'Notas',
    },
    {
      link: '/toolbar',
      icon: 'calendar_month',
      menu: 'Calendario',
    },
    {
      link: '/slide-toggle',
      icon: 'help',
      menu: 'Ayuda',
    },
  ];
}
