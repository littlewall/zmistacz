import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ToolbarComponent} from './layout/toolbar/toolbar.component';
import {FooterComponent} from './layout/footer/footer.component';

@Component({
    selector: 'zmst-root',
    imports: [
        RouterOutlet,
        ToolbarComponent,
        FooterComponent,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
}
