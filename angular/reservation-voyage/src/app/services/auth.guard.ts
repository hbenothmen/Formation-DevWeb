import { inject } from "@angular/core";
import { CanActivateFn,Router,ActivatedRouteSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";

// export const authGuard:CanActivateFn= () =>{
//     const auth =inject(AuthService);
//     const router = inject (Router);
//     if (auth.isOnline()){
//         return true;
//     } 
//     else{alert("vous devez vous connecter");
//         router.navigate(['/signin']);
//         return false;
//     }
// }
//   export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {

//   const auth = inject(AuthService);
//   const router = inject(Router);

//   if (!auth.isOnline()) {
//     alert("⚠️ Vous devez vous connecter");
//     router.navigate(['/signin']);
//     return false;
//   }
// // récupérer rôle demandé
//   const role = route.data['role'];

//   if (role === 'admin' && !auth.isAdmin()) {
//     alert("⛔ Accès réservé aux admins");
//     router.navigate(['/signin']);
//     return false;
//   }

//   if (role === 'user' && !auth.isUser()) {
//     alert("⛔ Accès réservé aux utilisateurs");
//     router.navigate(['/signin']);
//     return false;
//   }

//   return true;
// }
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
  
    
