import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IAccountHolder } from '../interfaces/account-holder';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class AccountHolderService {
  private accountHoldersUrl = '/AccountHolder';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getAccountHolders(): Observable<IAccountHolder[]> {
    return this.http.get<IAccountHolder[]>(this.accountHoldersUrl).pipe(
      tap(_ => this.log('fetched account holders')),
      catchError(this.handleError<IAccountHolder[]>('getAccountHolders', []))
    );
  }

  getAccountHolder(id: number): Observable<IAccountHolder> {
    const url = `${this.accountHoldersUrl}/${id}`;
    return this.http.get<IAccountHolder>(url).pipe(
      tap(_ => this.log(`fetched account holder id=${id}`)),
      catchError(this.handleError<IAccountHolder>(`getAccountHolder id=${id}`))
    );
  }

  updateAccountHolder(accountHolder: IAccountHolder): Observable<any> {
    return this.http.put(this.accountHoldersUrl, accountHolder, this.httpOptions).pipe(
      tap(_ => this.log(`updated account holder id=${accountHolder.id}`)),
      catchError(this.handleError<any>('updateAccountHolder'))
    );
  }

  addAccountHolder(accountHolder: IAccountHolder): Observable<IAccountHolder> {
    return this.http.post<IAccountHolder>(this.accountHoldersUrl, accountHolder, this.httpOptions).pipe(
      tap((newHolder: IAccountHolder) => this.log(`added account holder w/ id=${newHolder.id}`)),
      catchError(this.handleError<IAccountHolder>('addAccountHolder'))
    );
  }

  deleteAccountHolder(id: number): Observable<IAccountHolder> {
    const url = `${this.accountHoldersUrl}/${id}`;

    return this.http.delete<IAccountHolder>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<IAccountHolder>('deleteAccountHolder'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`AccountHolderService: ${message}`);
  }
}
