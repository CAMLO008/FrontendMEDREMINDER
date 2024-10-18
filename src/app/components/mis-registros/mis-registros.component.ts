import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mis-registros',
  standalone: true, // Si estás usando componentes standalone
  templateUrl: './mis-registros.component.html',
  styleUrls: ['./mis-registros.component.css'],
  imports: [CommonModule],  // Importa el CommonModule para habilitar *ngFor y otras directivas comunes
})
export class MisRegistrosComponent {
  registros = [
    { nombre: 'Recordatorio 1', medicacion: 'Medicamento A', hora: '10:00 AM' },
    { nombre: 'Recordatorio 2', medicacion: 'Medicamento B', hora: '02:00 PM' },
  ];
}
