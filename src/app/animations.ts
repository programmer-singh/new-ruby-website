import { trigger, state, style, animate, transition } from '@angular/animations';

export const slideInRight = trigger('slideInRight', [
    state('void', style({
        left: '-100%',
    })),
    transition('void <=> *', [
        animate(300, style({
            left: '0px',
        })),
    ])
]);
