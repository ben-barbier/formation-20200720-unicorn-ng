import { Unicorn } from '../shared/models/unicorn.model';

export interface EntityState {
    unicorns: Unicorn[];
    cart: number[]; // Identifiants de licornes
}
