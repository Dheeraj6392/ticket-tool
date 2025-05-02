import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private sharedVariableSource = new BehaviorSubject<string>('Default Value');
  sharedVariable$ = this.sharedVariableSource.asObservable();

  updateSharedVariable(newValue: string) {
    this.sharedVariableSource.next(newValue);
  }
}
