import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../../../../core/services/authentication.service';

@Component({
  selector: 'app-toolbar-admin',
  templateUrl: './toolbar-admin.component.html',
  styleUrl: './toolbar-admin.component.css'
})
export class ToolbarAdminComponent implements OnInit {
  @Output() toggleSidenav = new EventEmitter<void>();
  @Input() isHandset$?: Observable<boolean>;

  onToggleSidenav() {
    this.toggleSidenav.emit();
  }

  listNotifications: any[] = [];

  user?:any
  constructor(private authService: AuthenticationService){}

  ngOnInit(): void {
    this.getUserAuthenticated()
  }

  getUserAuthenticated(){
    this.user = this.authService.getUser()
  }
}
