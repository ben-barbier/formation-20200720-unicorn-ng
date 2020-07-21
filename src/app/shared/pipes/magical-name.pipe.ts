import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'magicalName',
    pure: false,
})
export class MagicalNamePipe implements PipeTransform {

    transform(value: string): string {
        console.count('MagicalNamePipe');
        return value
            .split('')
            .map((char, idx) => idx % 2 ? char.toLowerCase() : char.toUpperCase())
            .join('');
    }
}
