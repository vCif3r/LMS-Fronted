import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable, map, shareReplay } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-intranet',
  templateUrl: './intranet.component.html',
  styleUrl: './intranet.component.css'
})
export class IntranetComponent {
  @ViewChild('sidenav') sidenav?: MatSidenav;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map((result) => result.matches),
    shareReplay()
  );
  constructor(private breakpointObserver: BreakpointObserver) {}

  toggleSidenav() {
    this.sidenav?.toggle();
  }
}