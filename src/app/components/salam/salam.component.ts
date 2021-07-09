import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salam',
  templateUrl: './salam.component.html',
  styleUrls: ['./salam.component.css']
})
export class SalamComponent implements OnInit {
  salam = "salam";
  isVisible: boolean = false;
  
  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
  currDate = new Date();
  currMonth = this.currDate.getMonth();

  constructor() { }

  ngOnInit(): void {
  }

  toggleShowContent(show: boolean){
    this.isVisible = show?false:true;
  }
}
