import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Vino } from './vino.model';




@Injectable({
  providedIn: 'root'
})
export class VinoService {

  isLoading = new Subject<boolean>();
  constructor(protected http: HttpClient) { }

  public getProducts():Observable<Vino[]> {

    const url= 'http://localhost:3000/vinos/'

    return this.http.get<Vino[]>(url).pipe(catchError(this.handleError));
  }


  public getProductById(id:any):Observable<Vino> {

    const url=  `http://localhost:3000/vinos/${id}`
    return this.http.get<Vino>(url);
  
  }




  show():void{
    this.isLoading.next(true)
  }
  hide():void{
    this.isLoading.next(false)
  }

  handleError(error:any){
    return throwError(error.message || "Server Error")

  }
}
