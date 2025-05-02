import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SharedService } from '../shared.service';

interface Album {
  name: string;
  audio: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {
  albums: Album[] = []; // Albums from SharedService
  album2: Album[] = []; // Local albums array
  val: string = ''; // Holds the selected audio file path

  @ViewChild('audioElement', { static: true }) audioElement!: ElementRef<HTMLAudioElement>;

  constructor(private sharedService: SharedService) {}


  // Lifecycle hook to initialize data
  ngOnInit(): void {
    this.albums = this.sharedService.getObject(); // Fetch albums from SharedService
  }



  // Functionality to play selected audio
  onclick(temp: string): void {
    this.val = temp; // Update the selected audio file path

    if (this.audioElement && this.audioElement.nativeElement) {
      const audio = this.audioElement.nativeElement;
      audio.src = this.val; // Set the audio source
      audio.load(); // Reload the audio
      audio.play(); // Play the audio
    }
  }


  // Functionality to add a new album
  toAdd(user: Album): void {
    if (user.name && user.audio) {
      this.album2.push({ name: user.name, audio: user.audio });
      console.log("New album added locally:", user);
    } else {
      console.error("Invalid album details");
    }
  }


  // Functionality to delete an album by name
  toDelete(name: string): void {
    this.album2 = this.album2.filter(album => album.name !== name);
  }

  // to send the data to home component audio 
  toSend(varu : string) : void{
    this.sharedService.changeData(varu); 
  }

}
