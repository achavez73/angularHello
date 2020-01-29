import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appCambiarColor]'
})
export class CambiarColorDirective {

  @Input('appCambiarColor') nuevoColor: string;

  constructor(private el:ElementRef) { }

  @HostListener('mouseenter') onMouseEnter(){
    this.cambiarColor(this.nuevoColor);
    console.log("f");
  }
  
  @HostListener('mouseleave') onMouseLeave(){
    this.cambiarColor(null);
  }

  cambiarColor(color){
    this.el.nativeElement.style.backgroundColor = color;
  }

}
