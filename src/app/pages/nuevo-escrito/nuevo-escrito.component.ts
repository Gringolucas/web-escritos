import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nuevo-escrito',
  imports: [CommonModule, FormsModule],
  templateUrl: './nuevo-escrito.component.html',
  styleUrl: './nuevo-escrito.component.css'
})
export class NuevoEscritoComponent {
  nuevoEscrito = {
    titulo: '',
    resumen: '',
    contenido: '',
    imagen: '',
  };

  imagenPreview: string | null = null;

  onImagenSeleccionada(event: any) {
    const archivo = event.target.files[0];
    if (archivo) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagenPreview = reader.result as string;
        this.nuevoEscrito.imagen = this.imagenPreview;
      };
      reader.readAsDataURL(archivo)
    }
  }

  guardar() {
    console.log('Guardando...', this.nuevoEscrito);
     // Aquí luego llamaremos al servicio para guardar en backend

  }
}
