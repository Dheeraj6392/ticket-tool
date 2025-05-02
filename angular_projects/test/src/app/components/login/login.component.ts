import { Component, OnInit } from '@angular/core';
import { info } from '../../../dataType';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  items: info[] = [];
  name : String = '';
  ngOnInit() {
    this.items.push({
      name: "dheeraj",
      rollno: "iec2022018",
      college: "IIITA"
    }, {
      name: "anurag",
      rollno: "iec2022019",
      college: "MMMUT"
    },
      {
        name: "anurag",
        rollno: "iec2022019",
        college: "MMMUT"
      },
      {
        name: "anurag",
        rollno: "iec2022019",
        college: "MMMUT"
      },
      {
        name: "anurag",
        rollno: "iec2022019",
        college: "MMMUT"
      }
    )
  }


  selectedIndex : number | null = null;

  changeColor(index : number){
    this.selectedIndex = index;
  }
}
