import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
interface Album {
  name : string;
  audio : string;
}

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  message: string = "Hello World";

  albums: Album[] = [
    {
      name: "Pehli-Nazar-Mein",
      audio: "assets/Pehli-Nazar-Mein(PagalWorldl).mp3"
    },
    {
      name: "Jaan-Hai-Meri",
      audio: "assets/Jaan-Hai-Meri(PagalWorld).mp3"
    },
    {
      name: "Ride It",
      audio: "assets/Ride It - PagalWorld.mp3"
    }
  ];
  
  getObject() : Album[] {
   return this.albums;
  }

  private dataSource = new BehaviorSubject<string>('default data');
  currentData = this.dataSource.asObservable();

  changeData(data : string){
      this.dataSource.next(data);
  }
  
}
