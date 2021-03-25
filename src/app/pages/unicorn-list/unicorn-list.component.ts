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

    constructor(
        private readonly unicornsSelectors: UnicornsSelectors,
        private readonly unicornsDispatchers: UnicornsDispatchers,
    ) {
        unicornsDispatchers.getUnicorns();
        // this.unicornsService.getAll().subscribe(unicorns => this.unicorns = unicorns);
    }

    public removeUnicornFromStable(unicorn: Unicorn) {
        this.unicornsDispatchers.removeUnicorn(unicorn);

        // this.unicornsService.delete(unicorn).subscribe(() => {
        //     this.unicorns = this.unicorns.filter(u => u.id !== unicorn.id);
        // });
    }
}
