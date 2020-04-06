import { Directive, OnInit, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appYesNo]'
})
export class YesNoDirective implements OnInit {

  @Input()
  private param: string;

  // @Input()
  // private searchResult: string;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    let matcell = this.el.nativeElement;
    if (this.param === 'TAK' || this.param === 'POSITIVE' || this.param === 'Czynny') {
      this.renderer.setStyle(matcell, 'color', 'green');
    } else if (this.param === 'NIE' || this.param === 'NEGATIVE' || this.param == 'Zwolniony') {
      this.renderer.setStyle(matcell, 'color', 'red');
    }
  }

}
