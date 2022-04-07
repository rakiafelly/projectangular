import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
name='toto';
adr='rue de la bourse lac2'
mail='toto@fivepoint.fr'
hobbies=['sports','movies','music'];
showHobbies=false;
textButton='afficher hobbies';
  constructor() { }

  ngOnInit(): void {
  }

liste(){
  
  if(this.showHobbies==true){
    this.showHobbies=false;
    this.textButton='afficher hobbies';
  }else{
    this.showHobbies=true;
    this.textButton='masquer hobbies';
  }
}

Supprimer(i:number){
  this.hobbies.splice(i,1);

}
}
