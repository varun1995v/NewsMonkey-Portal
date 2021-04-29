import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) {
  }
  

  public getWeather(location) {
    // Update your api key to get from https://openweathermap.org 
    return this.http.get(
      'https://api.openweathermap.org/data/2.5/weather?APPID=e7ee363b18cc2bd28f2b563891e04608&units=imperial&q=' + location
    );
  }

  public getIPAddress() {
    return this.http
          .get('https://api.ipify.org/?format=json')
          .pipe(
            catchError(this.handleError)
          );
  } 

  public getGEOLocation(ip) {
    // Update your api key to get from https://ipgeolocation.io
    let url = "https://api.ipgeolocation.io/ipgeo?apiKey=7af3b877f988422e9248235c677be933&ip="+ip; 
      return this.http
            .get(url)
            .pipe(
              catchError(this.handleError)
            );
    } 

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }


}

