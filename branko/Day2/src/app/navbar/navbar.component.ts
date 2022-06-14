import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
title = "Practice"

counter:number = 10;




  constructor() { }

  

clickCounter() {
  this.counter+=10;
}
  ngOnInit(): void {
  }

}
