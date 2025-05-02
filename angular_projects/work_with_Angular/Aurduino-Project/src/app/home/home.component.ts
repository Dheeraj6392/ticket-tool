import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
   
  getCurlyPath(): string {  
    let startX = 10, startY = 50;
    let cp1X = 40, cp1Y = 10, cp2X = 90, cp2Y = 10, endX = 120, endY = 80;
    return `M${startX} ${startY} C ${cp1X} ${cp1Y}, ${cp2X} ${cp2Y}, ${endX} ${endY}`;
  }
  
  guessName(){
    
  }
}
