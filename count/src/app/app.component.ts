import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'count';
  count:any=0;
  inc()
  {
    this.count++;
  }
  dec(){
    this.count--;
  }

}
