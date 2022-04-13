import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  userForm: FormGroup;
  constructor(private fb: FormBuilder) {
    // this.userForm = this.fb.group({
    //   name: ['', [Validators.required, Validators.minLength(3)]],
    //   email: [''],
    //   payementInformations: this.fb.group({
    //     TypeCarte: [''],
    //     Numero: [''],
    //     DateExpiration: [''],
    //     code: [''],

    //    })
    //  })
    this.userForm = new FormGroup({
      name: new FormControl('',[Validators.required,Validators.minLength(3)]),
      email: new FormControl('',[Validators.required,Validators.email]),
      payementInformations: new FormGroup({
        TypeCarte: new FormControl('',[Validators.required]),
        Numero: new FormControl('',[Validators.required,Validators.minLength(16)]),
        DateExpiration: new FormControl('',[Validators.required]),
        code: new FormControl('',[Validators.required]),

      })
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.userForm.value);
  }

}
