import { Component } from '@angular/core';

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
  sidebarMenu: sidebarMenu[] = [
    {
      link: '/lms/student/dashboard',
      icon: 'dashboard',
      menu: 'Tablero',
    },
    {
      link: '/users',
      icon: 'group',
      menu: 'Grupos',
    },

    {
      link: '/menu',
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
