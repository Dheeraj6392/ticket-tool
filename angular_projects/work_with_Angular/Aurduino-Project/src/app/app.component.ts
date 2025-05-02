import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Aurduino-Project';

  @ViewChild('targetSection') targetSection!: ElementRef;

  // scrollToSection(){
  //   this.targetSection.nativeElement.scrollIntoView({behavior: 'smooth'});
  // }

  // getCurlyPath(): string {
  //   let startX = 10, startY = 80;
  //   let cp1X = 40, cp1Y = 10, cp2X = 90, cp2Y = 10, endX = 120, endY = 80;
  //   return `M${startX} ${startY} C ${cp1X} ${cp1Y}, ${cp2X} ${cp2Y}, ${endX} ${endY}`;
  // }
}
