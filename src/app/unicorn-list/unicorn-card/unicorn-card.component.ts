import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Unicorn } from "../../shared/models/unicorn.model";

@Component({
    selector: 'app-unicorn-card',
    templateUrl: './unicorn-card.component.html',
    styleUrls: ['./unicorn-card.component.scss']
})
export class UnicornCardComponent implements OnInit {

    @Input()
    public unicorn: Unicorn;

    // OnChange => Afficher l'age

    constructor() {
        debugger;
        console.log(this.unicorn);
    }

    ngOnInit(): void {
        debugger;
        console.log(this.unicorn);
    }

}
