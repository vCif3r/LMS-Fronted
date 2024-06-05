import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, signal } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
  collapsed = signal(false);
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
  );
  constructor(private breakpointObserver: BreakpointObserver) {}
}
