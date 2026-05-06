import { Component,inject } from '@angular/core';
import { UserService } from '../services/user.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-user-list-component',
  imports: [CommonModule],
  templateUrl: './user-list-component.html',
  styleUrl: './user-list-component.css',
})
export class UserListComponent {
  private service=inject(UserService);
  users:any[]=[];
  ngOnInit(){
this.service.getUsers().subscribe((data:any)=>{
this.users=data;
})
  }

deleteU(id:string){
  this.service.deleteUser(id).subscribe(()=>{
this.users=this.users.filter(u=>u.id!==id)
  }); 
}
}
