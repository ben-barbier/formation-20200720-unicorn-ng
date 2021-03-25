import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { flatMap, map, mergeMap, pluck, toArray } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Unicorn } from '../models/unicorn.model';
import { CapacitiesService } from './capacities.service';

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

    public update(unicorn: Unicorn): Observable<Unicorn> {
        const unicornToUpdate = { ...unicorn };
        delete unicornToUpdate.capacitiesLabels;
        return this.http.put<Unicorn>(`${environment.apiUrl}/unicorns/${unicorn.id}`, unicornToUpdate);
    }

    public getAllWithCapacitiesLabels2(): Observable<Unicorn[]> {
        return this.getAll().pipe(
            flatMap(e => e),
            mergeMap((unicorn: Unicorn) =>
                from(unicorn.capacities).pipe(
                    mergeMap(capacityId => this.capacitiesService.get(capacityId)),
                    pluck('label'),
                    toArray(),
                    map(capacitiesLabels => ({ ...unicorn, capacitiesLabels })),
                ),
            ),
            toArray(),
            map(unicorns => unicorns.sort((u1, u2) => u1.id - u2.id)),
        );
    }

    public getAllWithCapacitiesLabels(): Observable<Unicorn[]> {
        return this.getAll();
    }
}
