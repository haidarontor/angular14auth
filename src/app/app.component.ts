import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'child  to parent data send';
  // parent_data_pass_to_child
  //  parent_data_pass_to_child=10;
  //  updateChild(){
  //   this.parent_data_pass_to_child=Math.floor(Math.random()*10);
  //  }

    //  send data child to parent
  //  dataset="x";
  //  updateData(item:string){
  //   console.warn(item)
  //   this.dataset=item;
  //  }

  // basic service data pass

  memberData=[
    {m_name:'haidar',email:"haidar@gmail.com"},
    {m_name:'Hiya',email:"hiya@gmail.com"},
    {m_name:'Haisam',email:"haisam@gmail.com"}
  ]




}
