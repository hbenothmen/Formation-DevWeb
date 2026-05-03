import { HttpClient } from "@angular/common/http";
import { Injectable,inject,signal } from "@angular/core";
import { Observable, map } from "rxjs";

@Injectable ({
    providedIn:'root',
})
export class AdminAuthService{
    private http=inject(HttpClient);
    private urladmin="http://localhost:3000/admin";
    isOnline = signal<boolean>(false);

     logout() {
    this.isOnline.set(false);
   
  }
 isadmin(credentials:any):Observable<boolean>{
 return this.http.get<any[]>(this.urladmin).pipe(
 map(admins => {
 const ad = admins.find(a => 
       a.email === credentials.email && 
       a.password === credentials.password
     );
    if (ad) {
        this.isOnline.set(true);
      // this.role.set('admin');
//         localStorage.setItem('isOnline', 'true');
//   localStorage.setItem('role', 'admin');

      return true;
     }

      return false;
    })
  );
}

}
