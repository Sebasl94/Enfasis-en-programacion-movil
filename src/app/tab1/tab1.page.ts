import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  user = {
    name: '',
    email: '',
    password: '',
    role: 'cuidador', 
  };

  constructor(private alertController: AlertController) {}

  async registerUser() {
    if (this.user.name && this.user.email && this.user.password && this.user.role) {
      // lógica de loggeo o registro
      console.log('Datos del usuario:', this.user);

      // registro exitoso: 
      const alert = await this.alertController.create({
        header: 'Registro Exitoso',
        message: `Bienvenido, ${this.user.name}!`,
        buttons: ['OK'],
      });

      await alert.present();
    } else {
      // campos vacíos
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor, completa todos los campos.',
        buttons: ['OK'],
      });

      await alert.present();
    }
  }

}
