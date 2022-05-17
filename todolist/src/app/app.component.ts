import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  todos:any;
  tostring:string="";
  id:number=0;
  ngOnInit(): void {
    this.todos=[]
  }
  addList(){
    this.id++;
    this.todos.push({
      content:this.tostring,
      completed:true,
      idno:this.id
    })
    console.log(this.todos);
  }
  delete(idToRemove:any){
    this.todos= this.todos.filter((item: { id: any; }) => item.id !== idToRemove);
    // this.todos.splice(this.todos.findIndex((a: { id: any; }) => a.id === idToRemove.id) , 1)
  }
  

  title = 'todolist';
  
}
