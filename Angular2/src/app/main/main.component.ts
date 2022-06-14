import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  cars: Array<{ brand: string; seats: number; image: string }> = [
    {
      brand: 'Porsche',
      seats: 4,
      image: '../assets/Image/2.jpg',
    },
    {
      brand: 'BMW',
      seats: 2,
      image: '../assets/Image/1.jpg',
    },
    {
      brand: 'Mercedes-benz',
      seats: 4,
      image: '../assets/Image/3.jpg',
    },
    {
      brand: 'BMW',
      seats: 2,
      image: '../assets/Image/4.jpg',
    },
    {
      brand: 'BMW',
      seats: 2,
      image: '../assets/Image/5.jpg',
    },
    {
      brand: 'BMW',
      seats: 2,
      image:
        'https://cdn.pixabay.com/photo/2016/04/01/12/16/car-1300629__340.png',
    },
  ];
  Info = new FormGroup({
    brand: new FormControl(''),
    seats: new FormControl(''),
    image: new FormControl(''),
  });

  constructor() {}
  onSubmit() {
    let a: any = this.Info.value;
    console.log(a);
    this.cars.push(a);
  }

  ngOnInit(): void {}
}
