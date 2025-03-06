import {
    Component,
    computed,
    input,
    ViewEncapsulation,
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {clsx} from '@nberlette/clsx';

@Component({
    selector: 'button[zmst-button], a[zmst-button]',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './button.component.html',
    styleUrl: './button.component.css',
    encapsulation: ViewEncapsulation.None,
    host: {
        '[class]': 'computedClass()',
        '[attr.aria-disabled]': 'disabled() || loading() ? "true" : null',
        '[attr.disabled]': 'isButton() ? (disabled() || loading() ? "" : null) : null',
        '[attr.role]': '!isButton() ? "button" : null',
        '[attr.tabindex]': '!isButton() && !href() ? "0" : null',
    },
})
export class ZMSTButtonComponent {
    variant = input<'default' | 'flat' | 'raised' | 'stroked'>('default');

    icon = input<string | undefined>(undefined);

    text = input<string | undefined>(undefined);

    loading = input(false);

    disabled = input(false);

    href = input<string | undefined>(undefined);

    isButton = computed(() => !this.href());

    computedClass = computed(
        () => clsx(
            'zmst-button',
            this.variant() !== 'default' && `zmst-button--${this.variant()}`,
            this.icon() && !this.text() && 'zmst-button--icon-only',
            this.loading() && 'zmst-button--loading',
        ),
    );
}
