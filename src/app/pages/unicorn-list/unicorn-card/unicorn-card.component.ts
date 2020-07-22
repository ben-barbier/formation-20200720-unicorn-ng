import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { filter } from 'rxjs/operators';
import { EditUnicornComponent } from '../../../shared/dialogs/edit-unicorn/edit-unicorn.component';
import { Unicorn } from '../../../shared/models/unicorn.model';
import { CartDispatchers } from '../../../store/services/cart.dispatchers';
import { CartSelectors } from '../../../store/services/cart.selectors';
import { UnicornsDispatchers } from '../../../store/services/unicorns.dispatchers';

@Component({
    selector: 'app-unicorn-card',
    templateUrl: './unicorn-card.component.html',
    styleUrls: ['./unicorn-card.component.scss'],
})
export class UnicornCardComponent implements OnInit {
    @Input()
    public unicorn: Unicorn;

    @Output()
    public removed = new EventEmitter<void>();

    public age: number;
    public isInCart = false;

    constructor(
        private dialog: MatDialog,
        private cartSelectors: CartSelectors,
        private cartDispatchers: CartDispatchers,
        private unicornsDispatchers: UnicornsDispatchers,
    ) {}

    ngOnInit(): void {
        this.age = new Date().getFullYear() - this.unicorn.birthyear;
        this.cartSelectors.unicornIsInCart$(this.unicorn.id).subscribe(isInCart => (this.isInCart = isInCart));
    }

    public removeUnicorn() {
        this.removed.emit();
    }

    public toggleToCart() {
        if (this.isInCart) {
            this.cartDispatchers.removeUnicornFromCart(this.unicorn);
        } else {
            this.cartDispatchers.addUnicornToCart(this.unicorn);
        }
    }

    public openDialog() {
        this.dialog
            .open(EditUnicornComponent, {
                data: { unicorn: this.unicorn },
            })
            .afterClosed()
            .pipe(filter(Boolean))
            .subscribe((unicorn: Unicorn) => this.unicornsDispatchers.updateUnicorn(unicorn));
    }
}
