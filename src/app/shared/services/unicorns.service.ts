import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, from, Observable } from 'rxjs';
import { Unicorn } from '../models/unicorn.model';
import { environment } from '../../../environments/environment';
import { flatMap, map, mergeMap, pluck, toArray } from "rxjs/operators";
import { CapacitiesService } from "./capacities.service";
import { Capacity } from "../models/capacity.model";

@Injectable({
    providedIn: 'root',
})
export class UnicornsService {

    constructor(private http: HttpClient, private capacitiesService: CapacitiesService) {}

    public getAll(): Observable<Unicorn[]> {
        return this.http.get<Unicorn[]>(`${environment.apiUrl}/unicorns`);
    }

    public getById(id: number): Observable<Unicorn> {
        return this.http.get<Unicorn>(`${environment.apiUrl}/unicorns/${id}`);
    }

    public delete(unicorn: Unicorn): Observable<void> {
        return this.http.delete<void>(`${environment.apiUrl}/unicorns/${unicorn.id}`);
    }

    public getAllWithCapacitiesLabels2(): Observable<Unicorn[]> {
        return this.getAll().pipe(
            flatMap(e => e),
            mergeMap((unicorn: Unicorn) => from(unicorn.capacities).pipe(
                mergeMap(capacityId => this.capacitiesService.get(capacityId)),
                pluck('label'),
                toArray(),
                map(capacitiesLabels => ({ ...unicorn, capacitiesLabels }))
            )),
            toArray(),
            map(unicorns => unicorns.sort((u1, u2) => u1.id - u2.id)),
        );
    }

    public getAllWithCapacitiesLabels(): Observable<Unicorn[]> {
        return forkJoin([
            this.getAll(),
            this.capacitiesService.getAll(),
        ]).pipe(
            map(([unicorns, capacities]): Unicorn[] =>
                unicorns.map((u: Unicorn): Unicorn => ({
                    ...u,
                    capacitiesLabels: u.capacities.map((c: number): string =>
                        capacities.find((c2: Capacity) => c2.id === c).label
                    )
                }))
            )
        );
    }


}

