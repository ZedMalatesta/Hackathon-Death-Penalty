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
    'PROSECUTOR': {
        name: 'Prosecutor',
        color: '#4a3000',
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
        'jump Convergence',
    ],

    'Silent': [
        'JUDGE The defendant declines to enter a plea. Not guilty will be entered on your behalf.',
        'show scene #0a0a0a with fadeIn',
        'ALEX Silence. It felt like the only true answer.',
        'LAWYER The judge entered not guilty for you. The trial still happens.',
        'ALEX Good. Let them prove it.',
        'jump Convergence',
    ],

    'Convergence': [
        'show scene #1a0a00 with fadeIn',
        'LAWYER Alex. I need you to hear me. They have the fingerprints, the cell data, a witness. The DA is offering a deal — plead guilty now, avoid the death penalty.',
        'ALEX So that\'s it. Either I say the word, or I risk everything.',
        'LAWYER The jury will see the evidence. I can\'t promise you an acquittal.',
        'ALEX How long do I have to decide?',
        'LAWYER The judge is asking right now.',
        'JUDGE Mr. Raines. The court gives you one final opportunity to reconsider your plea.',
        {
            'Choice': {
                'Dialog': 'ALEX This is the last decision that matters.',
                'StayNotGuilty': {
                    'Text': 'I stand by my plea. Not Guilty.',
                    'Do': 'jump FightEnd',
                },
                'Guilty': {
                    'Text': 'I plead guilty.',
                    'Do': 'jump Guilty',
                },
            },
        },
    ],

    'FightEnd': [
        'JUDGE So noted. The trial is set for Monday. Court is adjourned.',
        'show scene #0a0a0a with fadeIn',
        'ALEX I chose to fight. Whether that was courage or stubbornness — I\'ll find out soon enough.',
        'end',
    ],

    'Guilty': [
        'JUDGE Before I accept this plea, I will hear from the prosecution.',
        'PROSECUTOR Your Honor, the state is prepared to summarize the facts supporting this charge.',
        'JUDGE Counselor, proceed.',
        'PROSECUTOR On the night of March 4th, Alexander Raines entered the residence of Victor Osei. Mr. Osei was found the following morning. Cause of death: a single gunshot wound. Forensics place the defendant at the scene. His fingerprints were on the weapon.',
        {
            'Choice': {
                'Dialog': 'JUDGE The court will now inquire.',
                'AskEvidence': {
                    'Text': 'What physical evidence links the defendant to the crime?',
                    'Do': 'jump ProsecutorEvidence',
                },
                'AskMotive': {
                    'Text': 'Was a motive established?',
                    'Do': 'jump ProsecutorMotive',
                },
            },
        },
    ],

    'ProsecutorEvidence': [
        'PROSECUTOR The defendant\'s fingerprints were recovered from the firearm found two blocks from the scene. Cell tower data places his phone at the location within the window of death. A neighbor identified his vehicle in the driveway.',
        'PROSECUTOR Additionally, a partial boot print matching the defendant\'s size was found near the rear entrance.',
        {
            'Choice': {
                'Dialog': 'JUDGE Any further questions?',
                'AskMotive': {
                    'Text': 'Was a motive established?',
                    'Do': 'jump ProsecutorMotiveThenDecision',
                },
                'Decide': {
                    'Text': 'That is sufficient. The court will now decide.',
                    'Do': 'jump JudgeDecision',
                },
            },
        },
    ],

    'ProsecutorMotive': [
        'PROSECUTOR The state believes the motive was financial. Mr. Osei had recently refused to forgive a debt of approximately forty thousand dollars owed by the defendant.',
        'PROSECUTOR Text messages recovered from the defendant\'s phone show escalating threats in the weeks prior to the incident.',
        {
            'Choice': {
                'Dialog': 'JUDGE Any further questions?',
                'AskEvidence': {
                    'Text': 'Walk me through the physical evidence.',
                    'Do': 'jump ProsecutorEvidenceThenDecision',
                },
                'Decide': {
                    'Text': 'That is sufficient. The court will now decide.',
                    'Do': 'jump JudgeDecision',
                },
            },
        },
    ],

    'ProsecutorEvidenceThenDecision': [
        'PROSECUTOR The defendant\'s fingerprints were recovered from the firearm found two blocks from the scene. Cell tower data places his phone at the location within the window of death. A neighbor identified his vehicle in the driveway.',
        'PROSECUTOR Additionally, a partial boot print matching the defendant\'s size was found near the rear entrance.',
        'jump JudgeDecision',
    ],

    'ProsecutorMotiveThenDecision': [
        'PROSECUTOR The state believes the motive was financial. Mr. Osei had recently refused to forgive a debt of approximately forty thousand dollars owed by the defendant.',
        'PROSECUTOR Text messages recovered from the defendant\'s phone show escalating threats in the weeks prior to the incident.',
        'jump JudgeDecision',
    ],

    'JudgeDecision': [
        'JUDGE The court has heard the prosecution\'s account. The defendant has entered a guilty plea.',
        'JUDGE It is now this court\'s responsibility to determine whether that plea should be accepted.',
        {
            'Choice': {
                'Dialog': 'JUDGE What is the court\'s decision?',
                'AcceptPlea': {
                    'Text': 'Accept the guilty plea.',
                    'Do': 'jump GuiltyVerdict',
                },
                'RejectPlea': {
                    'Text': 'Reject the plea. The case proceeds to trial.',
                    'Do': 'jump PleaRejected',
                },
                'SentencingHearing': {
                    'Text': 'Refer the case for a pre-sentencing investigation.',
                    'Do': 'jump SentencingHearing',
                },
            },
        },
    ],

    'SentencingHearing': [
        function () { return window.playHammer(); },
        'JUDGE The court accepts the plea but will not impose sentence today. A pre-sentencing investigation will be ordered.',
        'JUDGE The probation office will prepare a report — criminal history, personal background, impact on the victim\'s family.',
        'LAWYER Your Honor, the defense requests the opportunity to submit mitigating evidence.',
        'JUDGE Granted. Both parties will have thirty days to submit their reports.',
        'PROSECUTOR The state will seek the maximum sentence permissible under the statute.',
        'JUDGE Noted. The defendant is remanded until the sentencing hearing.',
        'show scene #0a0a0a with fadeIn',
        'ALEX Remanded. That word lands like a door closing.',
        'ALEX But there\'s still thirty days. Thirty days where my story might actually matter.',
        'LAWYER We\'ll make them count.',
        'end',
    ],

    'PleaRejected': [
        function () { return window.playHammer(); },
        'JUDGE The court finds the plea insufficient. A trial date will be set.',
        'show scene #0a0a0a with fadeIn',
        'ALEX They rejected it. I don\'t know if that\'s a second chance or a death sentence.',
        'LAWYER We go to trial. Whatever happens — we go together.',
        'end',
    ],

    'GuiltyVerdict': [
        function () { return window.playHammer(); },
        'JUDGE The court finds a factual basis for the plea. Guilty as charged. Sentencing will be scheduled.',
        'show scene #0a0a0a with fadeIn',
        'ALEX I said it. Guilty. Maybe that\'s the only honest thing left.',
        'LAWYER You didn\'t have to do that. We had options.',
        'ALEX This way it ends. No trial, no circus.',
        'LAWYER You know what comes next.',
        'ALEX ...I know.',
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
