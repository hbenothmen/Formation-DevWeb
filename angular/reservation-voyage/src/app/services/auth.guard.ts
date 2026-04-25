import { inject } from "@angular/core";
import { CanActivateFn,Router } from "@angular/router";
import { AuthService } from "./auth.service";

export const authGuard:CanActivateFn= () =>{
    const auth =inject(AuthService);
    const router = inject (Router);
    if (auth.isOnline()){
        return true;
    } 
    else{alert("vous devez vous connecter");
        router.navigate(['/signin']);
        return false;
    }
}
   
    
