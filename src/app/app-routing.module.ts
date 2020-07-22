import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnicornListComponent } from "./pages/unicorn-list/unicorn-list.component";
import { UnicornComponent } from "./pages/unicorn/unicorn.component";
import { OddGuard } from "./shared/guards/odd.guard";

const routes: Routes = [
    { path: 'unicorns', component: UnicornListComponent },
    {
        path: 'unicorns/:id',
        component: UnicornComponent,
        canActivate: [OddGuard],
    },
    { path: '**', redirectTo: 'unicorns' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
