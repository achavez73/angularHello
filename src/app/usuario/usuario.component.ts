import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  @Input() personaP;
  //alias binding
  //@Input("alias") personaP;

  @Output('enviar') enviando = new EventEmitter<string>();

  mensaje = "Yo soy el componente hijo";
  constructor() { }

  ngOnInit() {
  }

  ejecutarEvento(){
    this.enviando.emit(this.mensaje);
  }

}
