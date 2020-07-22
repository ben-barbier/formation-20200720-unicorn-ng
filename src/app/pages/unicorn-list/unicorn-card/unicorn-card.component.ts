import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { filter, mergeMap } from 'rxjs/operators';
import { EditUnicornComponent } from '../../../shared/dialogs/edit-unicorn/edit-unicorn.component';
import { Unicorn } from '../../../shared/models/unicorn.model';
import { CartService } from '../../../shared/services/cart.service';
import { UnicornsService } from '../../../shared/services/unicorns.service';

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
        private cartService: CartService,
        private dialog: MatDialog,
        private unicornsService: UnicornsService,
    ) {}

    ngOnInit(): void {
        this.age = new Date().getFullYear() - this.unicorn.birthyear;
        this.isInCart = this.cartService.isInCart(this.unicorn);
    }

    public removeUnicorn() {
        this.removed.emit();
    }

    public toggleToCart() {
        this.cartService.toggleToCart(this.unicorn);
        this.isInCart = !this.isInCart;
    }

    public openDialog() {
        this.dialog
            .open(EditUnicornComponent, {
                data: { unicorn: this.unicorn },
            })
            .afterClosed()
            .pipe(
                filter(Boolean),
                mergeMap((unicornToUpdate: Unicorn) => this.unicornsService.update(unicornToUpdate)),
            )
            .subscribe(unicornUpdated => (this.unicorn = unicornUpdated));
    }
}
