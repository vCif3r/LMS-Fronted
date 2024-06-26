import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'censorPhone'
})
export class CensorPhonePipe implements PipeTransform {
  transform(phone: number | string): string {
    // Convierte el número a cadena si es necesario
    const phoneString = typeof phone === 'number' ? phone.toString() : phone;

    // Longitud mínima requerida para censurar
    const visibleLength = Math.max(phoneString.length - 3, 0);
    
    const visiblePart = phoneString.slice(visibleLength);
    const censoredPart = phoneString.slice(0, visibleLength).replace(/\d/g, '*');
    
    return censoredPart + visiblePart;
  }
}
