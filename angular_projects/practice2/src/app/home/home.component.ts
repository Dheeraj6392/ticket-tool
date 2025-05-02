import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{
constructor(private sharedservice : SharedService){}

data : string = '';
ngOnInit (val : string) : void{
 val = this.data;
}
 
}
