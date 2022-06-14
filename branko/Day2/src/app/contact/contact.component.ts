import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  info = new FormGroup ({
    marke: new FormControl(''),
    model: new FormControl(''),
    year: new FormControl(''),
    img: new FormControl(''),
  })

  constructor() { }

  onSubmit(){
  if (this.info.valid){
    var a = this.info.value;
  }
}

  ngOnInit(): void {
  }

}
