import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Buku } from 'src/app/models/buku';
import { BUKU } from 'src/app/sample-buku';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root'
})
export class BukuService {
  private svcUrl = 'http://localhost:8081/buku/';
  
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

  getAllBuku(): Buku[] {
    return BUKU;
  }

  getAllBukuObservable(): Observable<Buku[]> {
    // const buku = of(BUKU);
    const buku = this.httpClient.get<Buku[]>(this.svcUrl)
      .pipe(
        tap(x => this.log('All Buku fetched.')),
        catchError(this.msgSvc.handleError<Buku[]>('getAllBukuObservable', []))
      );

    return buku;
  }

  getBuku(bukuId: number): Observable<Buku> {
    const buku = this.httpClient.get<Buku>(this.svcUrl+`/${bukuId}`)
    .pipe(
      tap(x => this.log(`Buku id=${bukuId} Fetched!`)),
      catchError(this.msgSvc.handleError<Buku>(`getBuku id=${bukuId}`))
    );

    return buku;
  }

  updateBuku(buku: Buku): Observable<any> {
    const svcPutUrl: string = this.svcUrl+`${buku.id}`;
    return this.httpClient.put(svcPutUrl, buku, this.httpOptions)
      .pipe(
        tap(x => this.log('Updated Buku id=' + buku.id)),
        catchError(this.msgSvc.handleError<any>(`updateBuku id=${buku.id}`))
      );
  }

  deleteBuku(bukuId: number): Observable<Buku> {
    return this.httpClient.delete<Buku>(this.svcUrl + `${bukuId}`, this.httpOptions)
    .pipe(
      tap(x => this.log(`Buku id=${bukuId} Deleted!`)),
      catchError(this.msgSvc.handleError<Buku>(`deleteBuku id=${bukuId}`))
    );
  }

  addBuku(buku: Buku): Observable<any> {
    return this.httpClient.post(this.svcUrl, buku, this.httpOptions)
      .pipe(
        tap(x => this.log('Success: Add new Buku = ' + buku.judul)),
        catchError(this.msgSvc.handleError<any>(`Failed: Add new Buku =${buku.judul}`))
      );
  }
}
