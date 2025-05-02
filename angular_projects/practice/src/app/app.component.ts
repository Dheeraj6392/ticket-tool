import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private router : Router) {}
  gotoDashboard() : void{
  this.router.navigate(['/dashboard']);
  console.log("say hi");
  }
  
}
