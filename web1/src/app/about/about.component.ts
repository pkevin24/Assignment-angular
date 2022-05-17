import { Component} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  data=[{
    title:"Kevin",
    content:"Hey this is Kevin"
  },{
    title:"Prince",
    content:"Hey this is Prince"
  },{
    title:"Simi",
    content:"Hey this is Simi"
  }]
  
  constructor() { }


}
