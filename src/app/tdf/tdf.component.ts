import { Component, OnInit } from '@angular/core';
import { User } from '../user';
@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent implements OnInit {
  userModel = new User('bob', 'fg@gmail.com', 'bancaire', '2022', '15212')
  constructor() { }

  ngOnInit(): void {
  }
  
  onSubmit() {
    console.log(this.userModel)
  }
}
