import { Component} from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-header',
  templateUrl:'./header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private sharedService : SharedService){}
  onSubmit(data : any){
    console.log('Form submitted : ', data);
    // this.sharedService.insertToList(data);
  }
}
