import { inject,Injectable,signal } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
    providedIn:'root',
})
export class DestinationService{
    private http=inject(HttpClient);
    private url="http://localhost:3000/voyages";
    private Url="http://localhost:3000/users";
   // readonly destinations=this.http.get(this.url);
    //crud destination
    createDest(voyage:any):Observable<any>{
        return this.http.post(this.url,voyage);
    }
    readDest():Observable<any>{
        return this.http.get(this.url);
    }
updateDest(id:string,voyage:any):Observable<any>{
    return this.http.put(`${this.url}/${id}`,voyage);
}
deleteDes(id:string):Observable<void>{
    return this.http.delete<void>(`${this.url}/${id}`);
}
//crud utilisateur
 createUser(user:any):Observable<any>{
        return this.http.post(this.Url,user);
    }
    readUser():Observable<any>{
        return this.http.get(this.Url);
    }
updateUser(id:string,user:any):Observable<any>{
    return this.http.put(`${this.Url}/${id}`,user);
}
deleteUser(id:string):Observable<void>{
    return this.http.delete<void>(`${this.Url}/${id}`);
}
 // récupérer tous les voyages
  getVoyages(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }
//partie reservation
  // récupérer un voyage par id
  getVoyageById(id: string): Observable<any> {
    return this.http.get<any>(`${this.url}/${id}`);
  }

  // mise à jour (réservation)
  //patch permet un mise a jour partiel
  updateVoyage(id: string, voyage: any): Observable<any> {
    return this.http.patch(`${this.url}/${id}`, voyage);
  }
  addReservation(reservation: any) {
  return this.http.post("http://localhost:3000/reservations", reservation);
}
addFavorite(fav:any){
    return this.http.post("http://localhost:3000/favorites",fav);
}
getFavoritesByUser(userId:string){
    return this.http.get<any>(
       `http://localhost:3000/favorites?userId=${userId}` 
    );
}
}
