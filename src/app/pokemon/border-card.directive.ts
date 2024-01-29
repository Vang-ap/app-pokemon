import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[pokemonBorderCard]',
    standalone: true
})
export class BorderCardDirective {
  initialColor = '#efebe9';
  defaultColor = '#ffc857';
  // defaultColor = '#c2185b';
  defaultHeight = 29;

  constructor(private el: ElementRef) {
    this.setHeight(this.defaultHeight);
    this.setBorder(this.initialColor);
  }

  @Input('pokemonBorderCard') borderColor: string;

  //couleur de bordure quand on est entrer dans la carte
  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor);
  };

  // couleur quand on sort de la carte
  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.initialColor);
  }

  setHeight(height: number) {
    this.el.nativeElement.style.height = `${height}rem`
  };

  setBorder(color: string) {
    this.el.nativeElement.style.border = `solid 4px ${color}`
  };
}
