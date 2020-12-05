module.exports = {
    rules: {
        'at-rule-no-unknown': true,
        'block-no-empty': true,
        'color-no-invalid-hex': true,
        'declaration-block-no-duplicate-properties': [
            true,
            {
                ignore: ['consecutive-duplicates-with-different-values']
            }
        ],
        'declaration-block-no-redundant-longhand-properties': [
            true,
            {
                ignoreShorthands: ['/^grid.*/', '/^flex.*/']
            }
        ],
        'declaration-block-no-shorthand-property-overrides': true,
        'declaration-block-single-line-max-declarations': 1,
        'declaration-block-trailing-semicolon': 'always',
        'declaration-no-important': true,
        'font-family-name-quotes': 'always-where-recommended',
        'font-family-no-duplicate-names': true,
        'font-family-no-missing-generic-family-keyword': true,
        'function-calc-no-invalid': true,
        'function-linear-gradient-no-nonstandard-direction': true,
        'function-max-empty-lines': 0,
        'function-name-case': 'lower',
        'keyframe-declaration-no-important': true,
        'max-nesting-depth': [
            2,
            {
                ignore: ['blockless-at-rules', 'pseudo-classes']
            }
        ],
        'media-feature-name-no-unknown': true,
        'no-descending-specificity': true,
        'no-duplicate-at-import-rules': true,
        'no-duplicate-selectors': true,
        'no-empty-source': true,
        'no-extra-semicolons': true,
        'no-invalid-double-slash-comments': true,
        'no-unknown-animations': true,
        'property-case': 'lower',
        'property-no-unknown': [
            true,
            {
                ignoreProperties: ['composes']
            }
        ],
        'selector-combinator-allowed-list': [' ', '+', '>', '~'],
        'selector-max-attribute': 1,
        'selector-max-class': [3, { severity: 'warning' }],
        'selector-max-combinators': [2, { severity: 'warning' }],
        'selector-max-compound-selectors': [2, { severity: 'warning' }],
        'selector-max-empty-lines': 0,
        'selector-max-id': 0,
        'selector-max-pseudo-class': [1, { severity: 'warning' }],
        'selector-max-specificity': ['0,3,1', { severity: 'warning' }],
        'selector-max-type': [
            1,
            {
                ignore: ['descendant', 'next-sibling'],
                severity: 'warning'
            }
        ],
        'selector-max-universal': 1,
        'selector-no-qualifying-type': true,
        'selector-pseudo-class-no-unknown': true,
        'selector-pseudo-element-colon-notation': 'double',
        'selector-pseudo-element-no-unknown': true,
        'selector-type-no-unknown': true,
        'shorthand-property-no-redundant-values': true,
        'string-no-newline': true,
        'value-list-max-empty-lines': 0,
        'unit-disallowed-list': ['cm', 'ch', 'ex', 'in', 'mm', 'pc', 'pt'],
        'unit-no-unknown': true,
        'unicode-bom': 'never'
    }
};
