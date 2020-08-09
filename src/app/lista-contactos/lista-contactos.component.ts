import { Component, OnInit } from '@angular/core';
import { Contacto } from '../shared/contacto';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css']
})
export class ListaContactosComponent implements OnInit {

  constructor() { }
  contactos: Contacto[];

  ngOnInit(): void {
    this.contactos = [
      {
        titulo: "Sra",
        nombre: "Juana",
        correo: "uana@gmail.com",
        numero: 9999999
      },
      {
        titulo: "Sr",
        nombre: "Ramon",
        correo: "Ramon@gmail.com",
        numero: 9999998
      }
    ]
  }

  eliminarContacto(contacto: Contacto) {
    this.contactos = this.contactos.filter(a => {
      return a != contacto;
    });
  }
}
