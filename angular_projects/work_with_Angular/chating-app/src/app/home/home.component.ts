import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  receivedMessage : string = '';
  constructor(private  dataService  : ServiceService){}
  ngOnInit() {
    this.dataService.currentMessage.subscribe(message => {
      this.receivedMessage = message; // Update when message changes
    });
  }


  username: string = '';
  sendData(data: string) {
    this.dataService.changeMessage(data);
  }
}
