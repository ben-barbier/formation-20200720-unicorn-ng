import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Unicorn } from "../../shared/models/unicorn.model";
import { CartService } from "../../shared/services/cart.service";

@Component({
    selector: 'app-unicorn-card',
    templateUrl: './unicorn-card.component.html',
    styleUrls: ['./unicorn-card.component.scss']
})
export class UnicornCardComponent implements OnInit {

    @Input()
    public unicorn: Unicorn;

    @Output()
    public removed = new EventEmitter<void>();

    public age: number;
    public isInCart = false;

    constructor(private cartService: CartService) {}

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
}
