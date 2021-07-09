import { Component, OnInit } from '@angular/core';

import { MessageService } from 'src/app/services/message.service';
import { PelangganService } from 'src/app/services/pelanggan/pelanggan.service';

import { Pelanggan } from 'src/app/models/pelanggan';

@Component({
  selector: 'app-pelanggan',
  templateUrl: './pelanggan.component.html',
  styleUrls: ['./pelanggan.component.css']
})
export class PelangganComponent implements OnInit {
  aPelanggan: Pelanggan[]=[];
  selPelanggan?: Pelanggan;

  constructor(
    private pelangganSvc: PelangganService,
    private msgSvc: MessageService
  ) { }

  ngOnInit(): void {
    this.getAllPelanggan();
  }

  getAllPelanggan(): void {
    this.pelangganSvc.getAllPelanggan()
      .subscribe(pelanggan => {
        this.aPelanggan = pelanggan;
      });    
  }

  onSelectPelanggan(pelanggan: Pelanggan) {
    this.selPelanggan = pelanggan;
    this.msgSvc.add("PelangganComponent: Selected Pelanggan=" + this.selPelanggan.nama);
  }
}
