import { Component, OnInit } from '@angular/core';
import { UnicornsService } from "../../shared/services/unicorns.service";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { Unicorn } from "../../shared/models/unicorn.model";
import { switchMap } from "rxjs/operators";

@Component({
    selector: 'app-unicorn',
    templateUrl: './unicorn.component.html',
    styleUrls: ['./unicorn.component.scss']
})
export class UnicornComponent {

    public unicorn$: Observable<Unicorn>

    constructor(
        private unicornsService: UnicornsService,
        private route: ActivatedRoute,
    ) {
        this.unicorn$ = route.params.pipe(switchMap(params => unicornsService.getById(params.id)));
    }

}
