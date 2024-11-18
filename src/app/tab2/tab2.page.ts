import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

  animals = [
    { raza: 'Labrador', nombre: 'Max', alimentacion: 'Croquetas' },
    { raza: 'Persa', nombre: 'Mimi', alimentacion: 'Atún' },
    { raza: 'Golden Retriever', nombre: 'Rocky', alimentacion: 'Barf' },
    { raza: 'Siamés', nombre: 'Luna', alimentacion: 'Alimento seco' },
  ];

}
