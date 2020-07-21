import { Component } from '@angular/core';
import { UnicornsService } from "../shared/services/unicorns.service";
import { Unicorn } from "../shared/models/unicorn.model";
import { flatMap, take, toArray } from "rxjs/operators";

@Component({
    selector: 'app-unicorn-list',
    templateUrl: './unicorn-list.component.html',
    styleUrls: ['./unicorn-list.component.scss']
})
export class UnicornListComponent {

    public unicorns: Unicorn[] = [];

    constructor(private unicornsService: UnicornsService) {
        this.unicornsService.getAllWithCapacitiesLabels().subscribe(unicorns => this.unicorns = unicorns);
    }

    public removeUnicornFromStable(unicorn: Unicorn) {
        this.unicorns = this.unicorns.filter(u => u.id !== unicorn.id);
    }
}
