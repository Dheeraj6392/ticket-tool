import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  constructor(private http: HttpClient) {}

  insertToList(data: any) {
    return this.http.post('http://localhost:3000/seller', data, { observe: 'response' });
  }

  // userSignUp(data:SignUp){
  //   this.http.post('http://localhost:3000/seller',
  //   data,
  //   {observe:'response'}).subscribe((result)=>{
  //     console.warn(result)
  //     if(result){
  //       localStorage.setItem('seller',JSON.stringify(result.body))
  //       this.router.navigate(['seller-home'])
  //     }
  //   })
  // } 
}
