import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  

  cars: Array<{ marke: string, model: string, year: number, img: string, likes: number}> = [

    {
      marke: "VW",
      model: "Passat",
      year: 2018,
      img: "/assets/img/passat.jpg",
      likes: 0
  
    },
    {
      marke: "Audi",
      model: "A6",
      year: 2020,
      img: "/assets/img/Audi.jpg",
      likes: 0
  
    },
    {
      marke: "BMW",
      model: "M530",
      year: 2019,
      img: "/assets/img/bmw.jpg",
      likes: 0
  
    }
  
   ];

   info = new FormGroup ({
    marke: new FormControl('',Validators.required),
    model: new FormControl('',Validators.required),
    year: new FormControl('',Validators.required),
    img: new FormControl('',Validators.required),
    likes: new FormControl(0)
  })

  constructor() { }

  onSubmit() {
    if(this.info.valid){
      let test : any =  this.info.value;
      // let carInputValue: {brand: string, model: string, year:number, prize: number}  = this.carInput.value;
     
      this.cars.push(test);
    }
  };


  likes(a:{ marke: string, model: string, year: number, img: string, likes: number}){
    if(a.likes != 5){
      a.likes+=1;
      return a;
    }
    return a;
  }

  // onSubmit(){
  //   if (this.info.valid){
  //     let a: any = this.info.value;
  //     this.cars.push(a);
  //   }
  // }

  sort () {
    this.cars.sort(function(a: any, b: any) {
        return a.year - b.year});
         
    }

  ngOnInit(): void {
  }

}
