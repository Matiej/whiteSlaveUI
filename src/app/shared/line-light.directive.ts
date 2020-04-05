import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appLineLight]'
})
export class LineLightDirective {

  private matRow;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.matRow = this.renderer.createElement('mat-row');
  }

  @HostListener('mouseenter')
  public mouseenter(eventDate: Event): void {
 
    this.renderer.appendChild(this.el.nativeElement, this.matRow);
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'rgb(0, 142, 207)');
    // (85, 73, 73)
      }

  @HostListener('mouseleave')
  public mouseleave(eventDate: Event): void {
    this.renderer.removeChild(this.el.nativeElement, this.matRow);
    this.renderer.removeStyle(this.el.nativeElement, 'background-color');
  }
}
