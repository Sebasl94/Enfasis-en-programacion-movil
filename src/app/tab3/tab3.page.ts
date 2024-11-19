import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page {

  constructor() {}

  reporte = {
    animal: '',
    nombre: 'TEST',
    frecuencia: 'Diario',
  };

    resultados: any[] = []; //resultados, falta agregar lógica

 // acá debemos ajutar la entrada de datos, ya sea por BD externa o local
  animales = [
    { nombre: 'Max', raza: 'Labrador', alimentacion: 'Croquetas' },
    { nombre: 'Mimi', raza: 'Persa', alimentacion: 'Atún' },
    { nombre: 'Rocky', raza: 'Golden Retriever', alimentacion: 'Barf' },
    { nombre: 'Luna', raza: 'Siamés', alimentacion: 'Alimento seco' },
  ];

  generarReporte() {
    if (this.reporte.nombre) {
      this.resultados = this.animales.filter((animal) =>
        animal.nombre.toLowerCase().includes(this.reporte.nombre.toLowerCase())
      );
    } else {
      this.resultados = this.animales;
    }

    if (this.resultados.length === 0) {
      alert('No se encontraron resultados.');
    }
  }
  

}



