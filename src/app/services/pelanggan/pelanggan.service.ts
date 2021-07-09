import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';

import { MessageService } from '../message.service';

import { Pelanggan } from 'src/app/models/pelanggan';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PelangganService {
  private svcUrl = 'http://localhost:8081/pelanggan';
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  private log(message: string){
    this.msgSvc.add(`BukuService: ${message}`);
  }

  constructor(
    private httpClient: HttpClient,
    private msgSvc: MessageService
  ) { }

  getAllPelanggan(): Observable<Pelanggan[]> {
    const pelanggan = this.httpClient.get<Pelanggan[]>(this.svcUrl)
      .pipe(
        tap(x => this.log('All Pelanggan fetched.')),
        catchError(this.msgSvc.handleError<Pelanggan[]>('getAllBukuObservable', []))
      );
      
    return pelanggan;
  }

  updatePelanggan(pelanggan: Pelanggan): Observable<any> {
    const svcPutUrl: string = this.svcUrl+`/${pelanggan.id}`;
    return this.httpClient.put(svcPutUrl, pelanggan, this.httpOptions)
      .pipe(
        tap(x => this.log('Updated Pelanggan id=' + pelanggan.id)),
        catchError(this.msgSvc.handleError<any>(`updatePelanggan id=${pelanggan.id}`))
      );
  }
}
