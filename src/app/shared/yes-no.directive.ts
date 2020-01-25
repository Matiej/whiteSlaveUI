import { Directive, OnInit, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appYesNo]'
})
export class YesNoDirective implements OnInit {

  @Input()
  private accountAssigned: string;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    let matcell = this.el.nativeElement;
    if (this.accountAssigned === 'TAK') {
      this.renderer.setStyle(matcell, 'color', 'green');
    } else if (this.accountAssigned === 'NIE') {
      this.renderer.setStyle(matcell, 'color', 'red');
    }
  }

}
