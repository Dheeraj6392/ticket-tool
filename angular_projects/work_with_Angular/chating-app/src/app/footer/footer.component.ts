import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {
  receivedMessage: string = '';

  username: string = '';
  constructor(private dataService: ServiceService ) { }
  ngOnInit() {
    this.dataService.currentMessage.subscribe(message => {
      this.receivedMessage = message; // Update when message changes
    });
  }

  sendData(data: string) {
    this.dataService.changeMessage(data);
  }
}
