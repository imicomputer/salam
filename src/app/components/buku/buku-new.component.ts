import { Component, OnInit } from '@angular/core';
import { Buku } from 'src/app/models/buku';

@Component({
  selector: 'app-buku-new',
  templateUrl: './buku-new.component.html',
  styleUrls: ['./buku-new.component.css']
})
export class BukuNewComponent implements OnInit {
  buku?: Buku;
  isShown: Boolean = true;
  
  constructor() { }

  ngOnInit(): void {
  }

  save(newBuku: object) {
    console.log(newBuku);
  }

  goBack(Msg: String="Going back...") {
    console.log(Msg);
    this.isShown = false;
  }
}
