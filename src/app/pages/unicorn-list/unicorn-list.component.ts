import { Component } from '@angular/core';
import { Unicorn } from '../../shared/models/unicorn.model';
import { UnicornsDispatchers } from '../../store/services/unicorns.dispatchers';
import { UnicornsSelectors } from '../../store/services/unicorns.selectors';

@Component({
    selector: 'app-unicorn-list',
    templateUrl: './unicorn-list.component.html',
    styleUrls: ['./unicorn-list.component.scss'],
})
export class UnicornListComponent {
    public unicorns$ = this.unicornsSelectors.unicorns$;

    constructor(private unicornsSelectors: UnicornsSelectors, private unicornsDispatchers: UnicornsDispatchers) {
        this.unicornsDispatchers.getUnicorns();
    }

    public removeUnicornFromStable(unicorn: Unicorn) {
        this.unicornsDispatchers.deleteUnicorn(unicorn);
    }
}
