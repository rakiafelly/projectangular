import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-salle',
  templateUrl: './salle.component.html',
  styleUrls: ['./salle.component.css']
})
export class SalleComponent implements OnInit {
id:any
  constructor( private activaterouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.id= this.activaterouter.snapshot.params['id']
    console.log(this.id)
  }

}
