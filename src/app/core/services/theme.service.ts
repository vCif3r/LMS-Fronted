import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private _isDarkModeEnabled: boolean;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this._isDarkModeEnabled = localStorage.getItem('theme') === 'dark';
    const htmlElement = this.document.documentElement;
    if (this._isDarkModeEnabled) {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
  }

  get isDarkModeEnabled(): boolean {
    return this._isDarkModeEnabled;
  }

  toggleDarkMode(): void {
    this._isDarkModeEnabled = !this._isDarkModeEnabled;
    const htmlElement = this.document.documentElement;
    if (htmlElement.classList.contains('dark')) {
      htmlElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      htmlElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  }
}
