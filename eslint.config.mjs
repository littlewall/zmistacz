import dvdevEslint from '@dvdevcz/eslint';
import angular from 'angular-eslint';

export default [
    ...dvdevEslint.configs.base,
    ...angular.configs.tsRecommended,
    {
        files: ['**/*.ts'],
        processor: angular.processInlineTemplates,
        rules: {
            '@angular-eslint/directive-selector': [
                'error', {
                    type: 'attribute',
                    prefix: 'zmst',
                    style: 'camelCase',
                },
            ],
            '@angular-eslint/component-selector': [
                'error', {
                    type: ['element', 'attribute'], // Přidáme i 'attribute'
                    prefix: 'zmst',
                    style: 'kebab-case',
                },
            ],
        },
    },

    {
        files: ['**/*.html'],
        rules: {
            ...angular.configs.templateRecommended[1].rules,
            ...angular.configs.templateAccessibility[1].rules,
        },
    },
];
