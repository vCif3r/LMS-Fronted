import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../../../../core/services/authentication.service';

@Component({
  selector: 'app-toolbar-student',
  templateUrl: './toolbar-student.component.html',
  styleUrl: './toolbar-student.component.css'
})
export class ToolbarStudentComponent implements OnInit{
  @Output() toggleSidenav = new EventEmitter<void>();
  @Input() isHandset$?: Observable<boolean>;

  onToggleSidenav() {
    this.toggleSidenav.emit();
  }

  listNotifications: any[] = [];

  user?:any
  constructor(private authService: AuthenticationService){}

  ngOnInit(): void {
    this.getNotifications()
    this.getUserAuthenticated()
  }

  getUserAuthenticated(){
    this.user = this.authService.getUser()
  }

  getNotifications() {
    this.listNotifications = [
      { message: 'Se califico tu tarea de comunicación.', date: '16/06/2024', avatar: 'https://via.placeholder.com/150'},
      { message: 'Tienes una nueva practica calificada.', date: '16/06/2024', avatar: 'https://via.placeholder.com/150'},
      { message: 'Alex te ha enviado un mensaje.', date: '16/06/2024',avatar: 'https://via.placeholder.com/150'},
      { message: 'Se califico tu tarea de matemática.', date: '16/06/2024',avatar: 'https://via.placeholder.com/150'}
    ]
  }

  
}
