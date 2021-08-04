import { Component, OnInit } from '@angular/core';
import { Buku } from 'src/app/models/buku';
import { BukuService } from 'src/app/services/buku/buku.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-buku-new',
  templateUrl: './buku-new.component.html',
  styleUrls: ['./buku-new.component.css']
})
export class BukuNewComponent implements OnInit {
  buku?: Buku;
  isShown: Boolean = true;
  
  constructor(
    private bukuService: BukuService,
    private msgSvc: MessageService
  ) { }

  ngOnInit(): void {
  }

  save(newBuku: Buku) {
    this.msgSvc.add('Adding new buku...');
    this.bukuService.addBuku(newBuku).subscribe();
  }

  goBack(Msg: String="Going back...") {
    console.log(Msg);
    this.isShown = false;
  }
}
