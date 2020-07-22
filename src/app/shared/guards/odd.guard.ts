import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UnicornsService } from "../services/unicorns.service";
import { map, pluck } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class OddGuard implements CanActivate {

    constructor(private unicornService: UnicornsService,
                private router: Router) {}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

        return this.unicornService.getById(next.params.id).pipe(
            pluck('birthyear'),
            map((birthyear: number) => !(birthyear % 2)),
            map((canActivate: boolean) => {
                if (!canActivate) {
                    alert(`⚠️ Vous n'avez pas le droit de voir cette page... OUST !`);
                    return this.router.createUrlTree(['/']);
                }
                return true;
            }),
        );
    }

}
