 import { HttpClient } from "@angular/common/http";
import { inject,Injectable } from "@angular/core";
import { Observable } from "rxjs";
 
 @Injectable({
    providedIn:'root'
})
export class UserService{
    private http=inject(HttpClient);
    private url="http://localhost:3000/utilisateurs"

    getUsers():Observable<any>{
    return this.http.get(this.url);
    
}
deleteUser(id:string):Observable<void>{
    return this.http.delete<void>(`${this.url}/${id}`);

}
}
