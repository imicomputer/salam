import { Component, OnInit } from '@angular/core';

import { Buku } from 'src/app/models/buku';
import { BukuService } from 'src/app/services/buku/buku.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-buku',
  templateUrl: './buku.component.html',
  styleUrls: ['./buku.component.css']
})
export class BukuComponent implements OnInit {
  // aBuku = BUKU;
  aBuku: Buku[] = [];

  selectedBuku?: Buku;

  constructor(
    private bukuService: BukuService,
    private messageService: MessageService
  ) {

  }

  ngOnInit(): void {
    this.getAllBuku();
  }

  onSelectBuku(oBuku: Buku){
    this.bukuService.getBuku(oBuku.id).subscribe(
      returnData => {
        this.selectedBuku = returnData;
      }
    );
    
    this.messageService.add(`BukuComponent: Selected Buku id=${oBuku.id}`);
  }  

  getAllBuku(): void{
    this.bukuService.getAllBukuObservable().subscribe(returnData => this.aBuku=returnData);
  }
}
