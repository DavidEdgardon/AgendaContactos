import { Component, OnInit, EventEmitter, Output , Input} from '@angular/core';
import { Contacto } from '../shared/contacto';
import { formatCurrency } from '@angular/common';

@Component({
  selector: 'app-agregar-contacto',
  templateUrl: './agregar-contacto.component.html',
  styleUrls: ['./agregar-contacto.component.css']
})
export class AgregarContactoComponent implements OnInit {

  titulos: string[] = ['Sra', 'Sr', 'Otros']
  
  contacto : Contacto;
  
  @Input() valido: boolean;
  @Output() agregarContacto = new EventEmitter<Contacto>();
  
  constructor() {
  }

  ngOnInit(): void {
    this.contacto={};
    this.valido=false;
  }
  
  get element(){
    return JSON.stringify(this.contacto);
  }

  onSubmit(form){
    let newContacto:Contacto ={
      titulo:this.contacto.titulo,
      nombre:this.contacto.nombre,
      correo:this.contacto.correo,
      numero:this.contacto.numero,
    }
    this.agregarContacto.emit(newContacto);
    this.valido=false;
    form.reset();
    //this.contacto={};
  }

}
