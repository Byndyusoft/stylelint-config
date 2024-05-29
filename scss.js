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
    ]
};
