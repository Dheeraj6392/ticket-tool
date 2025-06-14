import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, OnInit, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService implements OnInit{

   val: string = '';

  constructor() {
    const platformId = inject(PLATFORM_ID);

    if (isPlatformBrowser(platformId)) {
      // ✅ Safe to access localStorage here
      localStorage.setItem("name", "Nheeraj");
      this.val = localStorage.getItem("name") || '';
    }
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
