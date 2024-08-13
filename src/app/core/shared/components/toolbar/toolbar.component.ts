import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeService } from '../../../services/theme.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  @Output() toggleSidenav = new EventEmitter<void>();
  @Input() isHandset$?: Observable<boolean>;

  onToggleSidenav() {
    this.toggleSidenav.emit();
  }

  listNotifications: any[] = [];

  constructor(private authService: AuthService, public _theme: ThemeService){}

  ngOnInit(): void {
    
  }

  getFullname(){
    return this.authService.getFullnameUser()
  }
  getRoleUser(){
    return this.authService.getRole()
  }

  getEmail(){
    return this.authService.getEmailUser()
  }

  getIdUser(){
    return this.authService.getIdUser()
  }
}
