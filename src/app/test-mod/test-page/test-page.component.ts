import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss']
})
export class TestPageComponent implements OnInit {

  myForm!: FormGroup;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createMyForm();

    console.log(this.myForm.value);
  }

  createMyForm(): void {

    this.myForm = this.formBuilder.group(
      {
        myData: new FormGroup(
          {
            month: new FormControl(12)           
          }
        )
      });
  }


}
