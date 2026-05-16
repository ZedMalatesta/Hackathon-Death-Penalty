const monogatari = Monogatari.default;

monogatari.characters({
    'JUDGE': {
        name: 'Judge Harmon',
        color: '#8B0000',
    },
    'ALEX': {
        name: 'Alex',
        color: '#1a1a2e',
    },
    'LAWYER': {
        name: 'Public Defender',
        color: '#2d4a22',
    },
});

monogatari.script({
    'Start': [
        'show scene #1a0a00 with fadeIn',
        'JUDGE The state vs. Alexander Raines. The charge: first-degree murder.',
        'JUDGE How does the defendant plead?',
        {
            'Choice': {
                'Dialog': 'ALEX What is your plea?',
                'NotGuilty': {
                    'Text': 'Not Guilty',
                    'Do': 'jump NotGuilty',
                },
                'Guilty': {
                    'Text': 'Guilty',
                    'Do': 'jump Guilty',
                },
                'Silent': {
                    'Text': 'Remain Silent',
                    'Do': 'jump Silent',
                },
            },
        },
    ],

    'NotGuilty': [
        'JUDGE Not guilty. The trial will begin Monday.',
        'show scene #0a0a0a with fadeIn',
        'ALEX Not guilty. Those words feel strange — but they\'re all I have left.',
        'LAWYER That was bold. Now we have to prove it.',
        'ALEX Can we?',
        'LAWYER Honestly? I don\'t know. But we\'ll fight.',
        'end',
    ],

    'Guilty': [
        'JUDGE A guilty plea. Sentencing will be scheduled.',
        'show scene #0a0a0a with fadeIn',
        'ALEX I said it. Guilty. Maybe that\'s the only honest thing left.',
        'LAWYER You didn\'t have to do that. We had options.',
        'ALEX This way it ends. No trial, no circus.',
        'LAWYER You know what comes next.',
        'ALEX ...I know.',
        'end',
    ],

    'Silent': [
        'JUDGE The defendant declines to enter a plea. Not guilty will be entered on your behalf.',
        'show scene #0a0a0a with fadeIn',
        'ALEX Silence. It felt like the only true answer.',
        'LAWYER The judge entered not guilty for you. The trial still happens.',
        'ALEX Good. Let them prove it.',
        'end',
    ],
});

monogatari.settings({
    'Name': 'Death Penalty',
    'Version': '0.1.0',
    'PlayTime': true,
    'DefaultLanguage': 'English',
    'SupportedLanguages': ['English'],
});

monogatari.storage({
    playerPlea: '',
});

monogatari.init('#monogatari');
