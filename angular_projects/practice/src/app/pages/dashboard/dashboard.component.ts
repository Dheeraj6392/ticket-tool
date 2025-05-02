import { Component } from '@angular/core';
import { SharedService } from '../../shared.service';



@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: "./dashboard.component.html",
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private sharedService: SharedService) {}

  sendData() {
    this.sharedService.updateSharedVariable('Data from Component 1');
    console.log("say hello I am from dashboard");
  }
}
