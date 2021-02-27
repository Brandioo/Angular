import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';
  myName= 'SDA';
  userName='';
  password='';

  clickHandler(){
    console.log(this.userName,this.password)
  }
}
