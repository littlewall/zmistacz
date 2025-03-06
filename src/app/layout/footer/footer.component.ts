import {Component} from '@angular/core';

@Component({
    selector: 'zmst-footer',
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.css',
    host: {
        class: 'zmst-footer',
    },
})
export class FooterComponent {
    currentYear: number = new Date().getFullYear();
}
