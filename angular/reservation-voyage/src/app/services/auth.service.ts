
/////
import { Injectable,inject,signal } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable,map } from "rxjs";

@Injectable({
providedIn:"root",
})
export class AuthService{
    private http=inject(HttpClient);
    private url="http://localhost:3000/users";
   
 isOnline = signal<boolean>(false);
currentUser=signal<any>(null);
     logout() {
    this.isOnline.set(false);
   this.currentUser.set(null);
   localStorage.removeItem('user');
  }
   signup(user: any): Observable<any> {
    return this.http.post(this.url, user);
  }
   //user
    signin(credentials: any): Observable<boolean> {
  return this.http.get<any[]>(this.url).pipe(
    map(users => {
 console.log('users from API:', users);
  console.log('credentials:', credentials);
  
      const user = users.find(u => 
        u.email === credentials.email && 
        u.password === credentials.password
      );

      if (user) {
        this.isOnline.set(true);
  this.currentUser.set(user);
localStorage.setItem('user',JSON.stringify(user));
        return true;
      }

      return false;
    })
  );}


constructor(){
const user=localStorage.getItem('user');
if (user){
  this.currentUser.set(JSON.parse(user));
  this.isOnline.set(true);
} 
}
}
 

