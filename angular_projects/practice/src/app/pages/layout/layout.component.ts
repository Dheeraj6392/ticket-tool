import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [],
  templateUrl: './layout.component.html',  // Use templateUrl, not inline template
  styleUrls: ['./layout.component.css']   // Corrected the typo
})
export class LayoutComponent implements OnInit {
  sharedVariable!: string;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.sharedService.sharedVariable$.subscribe((value) => {
      this.sharedVariable = value;
    });
  }
}
