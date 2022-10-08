import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {

  constructor() { }

  @ViewChild('myForm') mf:NgForm;

  default(){
    this.mf.setValue({
      "username" : "sabana",
      "email" : "sabana@gmail.com",
      "phonenumber" : "1234567890",
      "password" : "sabana"
    })
  }


  patch(){
    this.mf.form.patchValue({
      "email" : "yasmine@gmail.com",
      "phonenumber" : "0987654321"
    })
  }


  ngOnInit(): void {
  }
  onSubmit = (myForm:NgForm) => {
    console.log('myForm',myForm)
    console.log("invalid", myForm.form.invalid)
  }

}
