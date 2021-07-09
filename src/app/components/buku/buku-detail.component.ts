import { Component, Input, OnInit } from '@angular/core';
import { BukuService } from 'src/app/services/buku/buku.service';
import { MessageService } from 'src/app/services/message.service';

import { Buku } from 'src/app/models/buku';
import { BukuComponent } from 'src/app/components/buku/buku.component';

@Component({
  selector: 'app-buku-detail',
  templateUrl: './buku-detail.component.html',
  styleUrls: ['./buku-detail.component.css']
})

export class BukuDetailComponent implements OnInit {
  @Input() buku?: Buku;

  constructor(
    private bukuService: BukuService,
    private messageService: MessageService,
    private bukuComponent: BukuComponent,
  ) { }

  ngOnInit(): void {
  }

  // Back to Master and Remove Detail view
  goBack() {
    this.bukuComponent.ngOnInit();
    this.buku = undefined;
  }

  save(): void {
    if (this.buku) {
      this.bukuService.updateBuku(this.buku).subscribe();
    }
  }

  delete(bukuId: number): void {
    if (confirm(`Yakin Buku id=${bukuId} mau dihapus?`)){
      this.messageService.add('Deleting Buku...');
      this.bukuService.deleteBuku(bukuId).subscribe();

      this.goBack();
    }
    else {
      this.messageService.add('Buku is NOT deleted...');
    }
  }
}
