import { Component } from '@angular/core';
import { StarComponent } from "../star/star.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [StarComponent , FormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
nameValue:string = '' ;
ageValue:number = 0 ;
emailValue:string = '';
passwordValue:string = '';

isHidden(inputValue:string|number):boolean{
if(inputValue==''){
  return true
}return false
}
ageHidden(age:number):boolean{
  if(age>0){
    return false
  }return true
}

}
