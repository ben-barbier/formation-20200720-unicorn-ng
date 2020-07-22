import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Unicorn } from '../../shared/models/unicorn.model';
import { UnicornsSelectors } from '../../store/services/unicorns.selectors';

@Component({
    selector: 'app-unicorn',
    templateUrl: './unicorn.component.html',
    styleUrls: ['./unicorn.component.scss'],
})
export class UnicornComponent {
    public unicorn$: Observable<Unicorn>;

    constructor(private unicornsSelectors: UnicornsSelectors, private route: ActivatedRoute) {
        this.unicorn$ = route.params.pipe(switchMap(params => unicornsSelectors.unicorn$(params.id)));
    }
}
