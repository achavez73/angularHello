import { UsuariosService } from './usuarios.service';
import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [
    UsuariosService
  ]
})
export class AppComponent implements OnInit {
  mensaje = 'Curso de Angular';
  nombre =  'Toño';

  getNombre(){
    return this.nombre;
  }


  //Property Binding

  imagenURL = "https://picsum.photos/420/320?image=0";
  buttonStatus = false;

  //Class binding

  isActive = true;

  //Style Binding

  //Event Binding

  save(e){
    console.log(e);
  }
  //Event Filtering
  onKeyUp(){
      console.log("Enter fue presionado");
  }

  //<!--Template variable-->
  /*onKeyUp(usuario){
    console.log(usuario);
  }*/
  
  //Two Way variable

  persona = {
    nombre: 'toño',
    edad: 20
  }

  //decorator output
  info = "";
  getMensaje(e){
    alert(e);
    this.info = e;
  }
  //directiva ngif
  isValid = true;


  cursos = ['java', 'javascript', 'kotlin'];

  //for
 personas = ["Luis", "Mario", "Beto", "Manuel"];

 personas2 = [
   {id:1, nombre: "luis", edad: 23, hobby:"nadar"},
   {id:2, nombre: "Mario", edad: 25, hobby:"correr"},
   {id:3, nombre: "Beto", edad: 28, hobby:"escalar"},
   {id:4, nombre: "Manuel", edad: 32, hobby:"leer"}
 ]

 onAgregar(){
   this.personas2.push({id:5, nombre:"Steve", edad:21, hobby:"volar"});
 }
 onBorrar(personaX){
   let index = this.personas2.indexOf(personaX);
   this.personas2.splice(index,1);

 }
 onActualizar(personaX){
  personaX.nombre = "Actualizado";

}
  getColor(hobby){
    switch(hobby){
      case 'nadar':
        return 'green';
      case 'correr':
        return 'blue';
      case 'escalar':
        return 'gray';
      case 'leer':
        return 'yellow';
    }
  }

  //safe navigation operator
personaS = {
  nombre:"Pedro",
  apellido:"Perez",
  trabajo:undefined
}

//servicios

personaSer : any =[];
/*
constructor(){
  let usuario = new UsuariosService();
    usuario.getUsuarios();
    this.personaSer = usuario.getUsuarios();
}*/
/*
constructor(private usuariosservice : UsuariosService){
  this.personaSer = usuariosservice.getUsuarios();
}
*/
listaDePosts : any = [];
constructor(private postservice : PostsService){

}

ngOnInit(){
  //console.log('Componente inicializado');
  this.postservice.getPost().subscribe(response => {
    this.listaDePosts = response;
  });
}

}


