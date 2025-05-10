import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Escrito } from '../../escritos.model';
import { EscritosService } from '../../core/services/escritos.service';

@Component({
  selector: 'app-textos',
  imports: [CommonModule],
  templateUrl: './textos.component.html',
  styleUrl: './textos.component.css'
})
export class TextosComponent {

  escritos: Escrito[] = [
    {
      id: 1,
      titulo: 'El susurro del viento',
      fecha: '2024-03-12',
      resumen: 'Una reflexión breve sobre los momentos de silencio.',
      contenido: 'Contenido completo del escrito...',
      imagen: ""
    },
    {
      id: 2,
      titulo: 'Sombras de ciudad',
      fecha: '2023-12-01',
      resumen: 'Cuento breve ambientado en un barrio olvidado.',
      contenido: 'Contenido completo del escrito...',
      imagen: ""
    },
  ];

  nuevoEscrito: Escrito = {
    id: 0,
    titulo: '',
    fecha: '',
    resumen: '',
    contenido: '',
    imagen: ''
  };

  constructor(private escritosService: EscritosService) {}

  guardar() {
    this.escritosService.agregarEscrito(this.nuevoEscrito).subscribe({
      next: (data) => {
        console.log('Guardado:', data);
        alert('Escrito guardado exitosamente');
        this.nuevoEscrito = { id: 0, titulo: '', fecha: '', resumen: '', contenido: '', imagen: '' }; // Reset
      },
      error: (err) => {
        console.error('Error:', err);
        alert('Error al guardar escrito');
      }
    });

}
}
