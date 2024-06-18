import { Component } from '@angular/core';

interface Navbar{
  title: string
  url: string
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  menu: Navbar[] = [
    {title: 'Inicio',url: '/'},
    {title: 'Nosotros',url: ''},
    {title: 'Contacto',url: ''},
    {title: 'Comunidad',url: ''},
    {title: 'Logros',url: ''}
  ]

}
