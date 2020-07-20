import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    public number = this.multiply100(5);

    private multiply100(n: number): number {
        console.count('multiply100');
        return n * 100;
    }

}
