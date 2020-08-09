import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contacto } from '../shared/contacto';
import { formatCurrency } from '@angular/common';

@Component({
  selector: 'app-listar-contactos',
  templateUrl: './listar-contactos.component.html',
  styleUrls: ['./listar-contactos.component.css']
})
export class ListarContactosComponent implements OnInit {

  constructor() { }
  private _contacto : Contacto[] = []; 
  contactoFiltrado : Contacto[];
  validacion : boolean;

 @Input() get contactos() : Contacto[]{
    return this._contacto;
  }

  set contactos(value : Contacto[]){
    if(value){
      this.contactoFiltrado = this._contacto = value;
    }
  }
  
  @Output() deleteRequest = new EventEmitter<Contacto>();
  contactoSeleccionado : Contacto; 

  ngOnInit(): void {

  }

  mostrarContacto(contacto: Contacto){
    this.contactoSeleccionado = contacto;
  }

  filtrar(data : string){
    if(data){
       this.contactoFiltrado= this.contactos.filter((contacto: Contacto) => {
          return contacto.nombre.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
          contacto.correo.toString().indexOf(data) > -1 ||
          contacto.numero.toString().indexOf(data) > -1;
       });
    }else{
      this.contactoFiltrado = this.contactos;
    }
  }

  eliminar(){
    this.deleteRequest.emit(this.contactoSeleccionado);
    this.contactoSeleccionado = null;
  }
  validar(){
    this.validacion=true;
  }
  agregarContacto(contacto : Contacto){
    console.log("Hola Soy el PADRE");
   console.log(contacto);
    this.contactos.push(contacto);
    this.validacion=false;
  }
}
