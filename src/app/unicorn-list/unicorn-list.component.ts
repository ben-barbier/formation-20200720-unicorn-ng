import { Component } from '@angular/core';
import { UnicornsService } from "../shared/services/unicorns.service";

@Component({
    selector: 'app-unicorn-list',
    templateUrl: './unicorn-list.component.html',
    styleUrls: ['./unicorn-list.component.scss']
})
export class UnicornListComponent {

    public nbUnicorns: number;

    constructor(private unicornsService: UnicornsService) {
        this.getUnicornNumber();
    }

    private getUnicornNumber() {
        this.unicornsService.getAll().subscribe(unicorns => this.nbUnicorns = unicorns.length);
    }

}
