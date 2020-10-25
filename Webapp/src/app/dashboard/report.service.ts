import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, first } from 'rxjs/operators';
import { throwError as observableThrowError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }

  getReport() {
    return this.http.get('http://localhost:3000/reports/getAllReport')
      .pipe(
        catchError(this.handleError)
      );
  }

  getFeedBack() {
    return this.http.get('http://localhost:3000/feedback/getAllFeedback')
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';

    } else {

    }
    return observableThrowError(errMsg);
  }
}
