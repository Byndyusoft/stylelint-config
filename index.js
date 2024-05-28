module.exports = {
    overrides: [
        {
            customSyntax: 'postcss-scss',
            files: ['**/*.scss'],
            rules: {
                'at-rule-no-unknown': [
                    true,
                    {
                        ignoreAtRules: [
                            'content',
                            'else',
                            'for',
                            'forward',
                            'if',
                            'include',
                            'mixin',
                            'each',
                            'use'
                        ]
                    }
                ]
            }
        }
    ],
    plugins: ['@stylistic/stylelint-plugin'],
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
        'declaration-no-important': true,
        'font-family-name-quotes': 'always-where-recommended',
        'font-family-no-duplicate-names': true,
        'font-family-no-missing-generic-family-keyword': true,
        'function-linear-gradient-no-nonstandard-direction': true,
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
        'no-invalid-double-slash-comments': true,
        'no-unknown-animations': true,
        'property-no-unknown': [
            true,
            {
                ignoreProperties: ['composes']
            }
        ],
        'selector-combinator-allowed-list': [' ', '+', '>', '~'],
        'selector-max-attribute': 1,
        'selector-max-class': [
            3,
            {
                severity: 'warning'
            }
        ],
        'selector-max-combinators': [
            2,
            {
                severity: 'warning'
            }
        ],
        'selector-max-compound-selectors': [
            2,
            {
                severity: 'warning'
            }
        ],
        'selector-max-id': 0,
        'selector-max-pseudo-class': [
            2,
            {
                severity: 'warning'
            }
        ],
        'selector-max-specificity': [
            '0,3,1',
            {
                ignoreSelectors: ['/^:[a-z-]+$/'],
                severity: 'warning'
            }
        ],
        'selector-max-type': [
            1,
            {
                ignore: ['descendant', 'next-sibling'],
                severity: 'warning'
            }
        ],
        'selector-max-universal': 1,
        'selector-no-qualifying-type': [
            true,
            {
                ignore: ['attribute']
            }
        ],
        'selector-pseudo-class-no-unknown': true,
        'selector-pseudo-element-colon-notation': 'double',
        'selector-pseudo-element-no-unknown': true,
        'selector-type-no-unknown': true,
        'shorthand-property-no-redundant-values': true,
        'string-no-newline': true,
        'unit-disallowed-list': ['cm', 'ch', 'ex', 'in', 'mm', 'pc', 'pt'],
        'unit-no-unknown': true,
        'at-rule-empty-line-before': [
            'always',
            {
                except: ['first-nested', 'blockless-after-same-name-blockless'],
                ignore: ['after-comment']
            }
        ],
        'color-hex-length': 'long',
        'color-named': 'never',
        'font-family-name-quotes': 'always-where-recommended',
        'function-calc-no-unspaced-operator': true,
        'function-url-quotes': 'always',
        'length-zero-no-unit': true,
        'media-feature-name-no-unknown': true,
        'media-feature-name-no-vendor-prefix': true,
        'rule-empty-line-before': [
            'always',
            {
                except: ['first-nested'],
                ignore: ['after-comment']
            }
        ],
        'selector-attribute-quotes': 'always',
        'selector-type-case': 'lower',
        'value-keyword-case': [
            'lower',
            {
                ignoreProperties: ['/font-family/']
            }
        ],
        '@stylistic/at-rule-name-case': 'lower',
        '@stylistic/at-rule-name-newline-after': 'always-multi-line',
        '@stylistic/at-rule-name-space-after': 'always-single-line',
        '@stylistic/at-rule-semicolon-newline-after': 'always',
        '@stylistic/at-rule-semicolon-space-before': 'never',
        '@stylistic/block-closing-brace-empty-line-before': 'never',
        '@stylistic/block-closing-brace-newline-after': 'always',
        '@stylistic/block-closing-brace-newline-before': 'always-multi-line',
        '@stylistic/block-closing-brace-space-before': 'always-single-line',
        '@stylistic/block-closing-brace-space-after': 'always-single-line',
        '@stylistic/block-opening-brace-newline-after': 'always',
        '@stylistic/block-opening-brace-newline-before': 'always-single-line',
        '@stylistic/block-opening-brace-space-before': 'always',
        '@stylistic/block-opening-brace-space-after': 'always-single-line',
        '@stylistic/color-hex-case': 'lower',
        '@stylistic/declaration-bang-space-after': 'never',
        '@stylistic/declaration-bang-space-before': 'always',
        '@stylistic/declaration-colon-space-after': 'always-single-line',
        '@stylistic/declaration-colon-space-before': 'never',
        '@stylistic/declaration-block-semicolon-newline-after':
            'always-multi-line',
        '@stylistic/declaration-block-semicolon-newline-before':
            'never-multi-line',
        '@stylistic/declaration-block-semicolon-space-after':
            'always-single-line',
        '@stylistic/declaration-block-semicolon-space-before': 'never',
        '@stylistic/function-comma-newline-after': 'never-multi-line',
        '@stylistic/function-comma-space-after': 'always-single-line',
        '@stylistic/function-comma-space-before': 'never',
        '@stylistic/function-parentheses-newline-inside': 'always-multi-line',
        '@stylistic/function-parentheses-space-inside': 'never-single-line',
        '@stylistic/function-whitespace-after': 'always',
        '@stylistic/indentation': 4,
        '@stylistic/max-empty-lines': [
            1,
            {
                ignore: ['comments']
            }
        ],
        '@stylistic/max-line-length': [
            120,
            {
                ignorePattern: '/^@import\\s+/'
            }
        ],
        '@stylistic/media-feature-colon-space-after': 'always',
        '@stylistic/media-feature-colon-space-before': 'never',
        '@stylistic/media-feature-name-case': 'lower',
        '@stylistic/media-feature-parentheses-space-inside': 'never',
        '@stylistic/media-feature-range-operator-space-after': 'always',
        '@stylistic/media-feature-range-operator-space-before': 'always',
        '@stylistic/media-query-list-comma-newline-after': 'always-multi-line',
        '@stylistic/media-query-list-comma-newline-before': 'never-multi-line',
        '@stylistic/media-query-list-comma-space-after': 'always-single-line',
        '@stylistic/media-query-list-comma-space-before': 'never',
        '@stylistic/no-empty-first-line': true,
        '@stylistic/no-eol-whitespace': true,
        '@stylistic/no-missing-end-of-source-newline': true,
        '@stylistic/number-leading-zero': 'always',
        '@stylistic/number-no-trailing-zeros': true,
        '@stylistic/selector-attribute-brackets-space-inside': 'never',
        '@stylistic/selector-attribute-operator-space-after': 'never',
        '@stylistic/selector-attribute-operator-space-before': 'never',
        '@stylistic/selector-combinator-space-after': 'always',
        '@stylistic/selector-combinator-space-before': 'always',
        '@stylistic/selector-descendant-combinator-no-non-space': true,
        '@stylistic/selector-list-comma-newline-after': 'always',
        '@stylistic/selector-list-comma-newline-before': 'never-multi-line',
        '@stylistic/selector-list-comma-space-after': 'always-single-line',
        '@stylistic/selector-list-comma-space-before': 'never',
        '@stylistic/selector-pseudo-class-case': 'lower',
        '@stylistic/selector-pseudo-class-parentheses-space-inside': 'never',
        '@stylistic/string-quotes': 'double',
        '@stylistic/unit-case': 'lower',
        '@stylistic/value-list-comma-space-after': 'always-single-line',
        '@stylistic/value-list-comma-space-before': 'never',
        '@stylistic/unicode-bom': 'never',
        '@stylistic/value-list-max-empty-lines': 0,
        '@stylistic/selector-max-empty-lines': 0,
        '@stylistic/property-case': 'lower',
        '@stylistic/no-extra-semicolons': true,
        '@stylistic/function-max-empty-lines': 0,
        '@stylistic/declaration-block-trailing-semicolon': 'always'
    }
};
