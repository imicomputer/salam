import { Component, Input, OnInit } from '@angular/core';
import { Pelanggan } from 'src/app/models/pelanggan';
import { PelangganService } from 'src/app/services/pelanggan/pelanggan.service';
import { PelangganComponent } from './pelanggan.component';

@Component({
  selector: 'app-pelanggan-detail',
  templateUrl: './pelanggan-detail.component.html',
  styleUrls: ['./pelanggan-detail.component.css']
})
export class PelangganDetailComponent implements OnInit {
  @Input() pelanggan?: Pelanggan;

  jk = [
    {k: 'L', v: 'Laki-laki'}, 
    {k: 'P', v: 'Perempuan'}
  ];

  constructor(
    private pelangganComponent: PelangganComponent,
    private pelangganService: PelangganService
  ) { }

  ngOnInit(): void {
  }

  goBack() {
    this.pelangganComponent.ngOnInit();
    this.pelanggan = undefined;
  }

  update(pelanggan: object) {
    if (this.pelanggan) {
      this.pelangganService.updatePelanggan(this.pelanggan).subscribe();
    }
  }
}
