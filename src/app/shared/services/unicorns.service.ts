import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { Unicorn } from '../models/unicorn.model';
import { environment } from '../../../environments/environment';
import { flatMap, map, mergeMap, pluck, toArray } from "rxjs/operators";
import { CapacitiesService } from "./capacities.service";

@Injectable({
    providedIn: 'root',
})
export class UnicornsService {

    constructor(private http: HttpClient, private capacitiesService: CapacitiesService) {}

    public getAll(): Observable<Unicorn[]> {
        return this.http.get<Unicorn[]>(`${environment.apiUrl}/unicorns`);
    }

    public getAllWithCapacitiesLabels(): Observable<Unicorn[]> {
        return this.getAll().pipe(
            flatMap(e => e),
            mergeMap((unicorn: Unicorn) => from(unicorn.capacities).pipe(
                mergeMap(capacityId => this.capacitiesService.get(capacityId)),
                pluck('label'),
                toArray(),
                map(capacitiesLabels => ({ ...unicorn, capacitiesLabels }))
            )),
            toArray(),
        );
    }

    // Dans une fonction getAllWithCapacitiesLabels(), récupérez toutes les licornes,
    // en utilisant la ressource 'http://localhost:3000/unicorns'.
    // Compléter la propriété capacityLabels
    // de ces éléments grâce à l'utilisation de `http://localhost:3000/capacities/${capacity}`.


}

