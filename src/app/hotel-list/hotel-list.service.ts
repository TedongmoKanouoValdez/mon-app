import { Injectable } from "@angular/core";
import { IHotel } from "./hotel";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, catchError, tap, throwError } from "rxjs";


@Injectable(
  {
    providedIn: 'root'
  }
)

export class HotelListService{

  // creer une api pour la liste des donnees
  private readonly HOTEL_API_URL = 'api/hotels.json';

  constructor(private http: HttpClient){

  }

  public getHotels(): Observable<IHotel[]> {

    // Comment appeler cet api et afficher erreur dans la console
    return this.http.get<IHotel[]>(this.HOTEL_API_URL).pipe(
      tap(hotels => console.log('hotels: ', hotels)),
      catchError(this.handleError)
    );
  }

  //pour les erre
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}









