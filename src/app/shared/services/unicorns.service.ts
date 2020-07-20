import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Unicorn } from '../models/unicorn.model';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class UnicornsService {

    constructor(private http: HttpClient) {}

    public getAll(): Observable<Unicorn[]> {
        return this.http.get<Unicorn[]>(`${environment.apiUrl}/unicorns`);
    }
}

