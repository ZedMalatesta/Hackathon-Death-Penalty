const monogatari = Monogatari.default;

monogatari.characters({
    'JUDGE':      { name: 'Суддзя',    color: '#9a7a20' },
    'PROSECUTOR': { name: 'Пракурор',  color: '#8B0000' },
    'ADAMOV':     { name: 'Адамаў',    color: '#1a1a3a' },
    'LAWYER':     { name: 'Адвакат',   color: '#2d4a22' },
    'LYASHUK':    { name: 'Ляшук',     color: '#5a4a10' },
    'KOVAL':      { name: 'Каваль',    color: '#4a2050' },
});

monogatari.script({
    'English': {

        'Start': [
            'show scene #1a0a00 with fadeIn',
            'JUDGE Case No. 84-23B. The State versus Adamov, Oleg Vasilievich, born 1957, native of Vitebsk, driver.',
            'PROSECUTOR On January 13th, 1984, at approximately 19:40, the accused was driving a MAZ truck near the Shpili sand quarry when he saw Katsuba, Tatyana Ivanovna — born 1964 — walking along the railway embankment toward her shift at Lucheса station.',
            'PROSECUTOR The accused exited his vehicle, climbed the embankment, and attacked the victim from behind. He gagged her with his mitten, bound her wrists with her coat belt, and raped her.',
            'PROSECUTOR Fearing exposure, the accused strangled the victim with her neck scarf, dragged the body into the bushes, and fled. He stole her bag containing personal belongings, money, and photographs.',
            'PROSECUTOR Charges: Article 100(j) — intentional murder combined with rape. Article 115(1) — rape. Article 141(2) — theft of personal property.',
            'PROSECUTOR Evidence: a written confession with voluntary surrender; identification of the crime scene during investigative experiment; forensic blood-type analysis; a photograph of the victim recovered from the accused\'s barn; and witness testimony.',
            'PROSECUTOR The accused does not plead guilty. The prosecution submits that his guilt is established by the totality of the evidence.',
            'LAWYER The defense disputes every element of the evidentiary basis. The confession was obtained under duress. The remaining evidence does not independently corroborate the charge.',
            {
                'Choice': {
                    'Dialog': 'JUDGE The court will now examine the case.',
                    'InterrogateAccused':   { 'Text': 'Interrogate the accused',   'Do': 'jump InterrogateAccused'   },
                    'InterrogateWitnesses': { 'Text': 'Question the witnesses',    'Do': 'jump InterrogateWitnesses' },
                    'StudyEvidence':        { 'Text': 'Examine the evidence',      'Do': 'jump StudyEvidence'        },
                    'Verdict':              { 'Text': 'Deliver the verdict',       'Do': 'jump VerdictChoice'        },
                },
            },
        ],

        /* ── BRANCH 1: INTERROGATE THE ACCUSED ─────────────────────── */

        'InterrogateAccused': [
            'show scene #0a0a18 with fadeIn',
            'JUDGE Bring the accused to the stand.',
            'ADAMOV My name is Alexei Adamov. I am twenty-eight years old.',
            'JUDGE There is a dark bruise beneath his left eye. The arrest photograph showed none.',
            {
                'Choice': {
                    'Dialog': 'JUDGE How should the court proceed?',
                    'AskCircumstances': { 'Text': 'Ask about the circumstances of that night',  'Do': 'jump AskCircumstances' },
                    'AskGuilt':         { 'Text': 'Ask whether he maintains his confession',    'Do': 'jump AskGuilt'         },
                    'BackToStart':      { 'Text': 'Return to the main hearing',                 'Do': 'jump Start'            },
                },
            },
        ],

        'AskCircumstances': [
            'JUDGE Adamov rises slowly, grips the edge of the railing. He does not look toward the bench. His voice is hoarse, sometimes cracks.',
            'ADAMOV I am not guilty. They forced me... under pressure. I signed because I was afraid. They said: if you don\'t confess, we\'ll put you in with the juveniles.',
            'ADAMOV The place where the body lay... they showed me. I repeated what they said. I didn\'t know.',
            'ADAMOV And the photograph — in the barn? First time I\'ve seen it. Maybe it was planted. I don\'t know.',
            'ADAMOV I was working at the quarry. There are witnesses. They held me, wouldn\'t let me go until I confessed. I was afraid. I did not kill.',
            'ADAMOV I have nothing more to say. Let the lawyer speak. I am not guilty.',
            'JUDGE He goes silent. Turns away. Presses his fingers into fists.',
            {
                'Choice': {
                    'Dialog': 'JUDGE Press further?',
                    'CheckWritten':             { 'Text': 'Compare with the written confession', 'Do': 'jump CheckWritten'        },
                    'BackToInterrogateAccused': { 'Text': 'Move on',                             'Do': 'jump InterrogateAccused' },
                },
            },
        ],

        'CheckWritten': [
            'JUDGE I open the written interrogation protocol of Adamov O.V.',
            'JUDGE Question: "Describe the murder." Answer: "On January 13, 1984, I saw a girl on the embankment, got out of my vehicle, attacked her, raped her, and strangled her with a scarf. I fully admit guilt."',
            'JUDGE Question: "Who showed you where the body was?" Answer: "No one. I showed the location myself, correctly and independently."',
            'JUDGE Question: "Were you subjected to pressure?" Answer: "No. I give these statements voluntarily. I am sorry."',
            'JUDGE A moment ago he said: they showed me the location. The protocol says: I showed it myself.',
            'JUDGE One of these is a lie. Perhaps both are.',
            'jump InterrogateAccused',
        ],

        'AskGuilt': [
            'JUDGE Adamov. Do you plead guilty to the murder of citizen Katsuba?',
            'ADAMOV Yes... I plead guilty. I am... I did it. Everything as written in the protocol.',
            'JUDGE There is a large bruise on his left cheek. It was not there in the arrest photograph taken four days ago.',
            'JUDGE Adamov — what happened to your face? Where did that bruise come from?',
            'ADAMOV I... that was me. I fell. In the cell. Slipped on the wet floor. Nobody touched me. I admit guilt. I already said so. I am sorry.',
            'JUDGE His voice breaks. He reaches for his cheek but does not touch it.',
            'LAWYER Objection — the physical condition of the accused must be entered into the record.',
            'JUDGE Noted.',
            {
                'Choice': {
                    'Dialog': 'JUDGE Examine the conditions of his detention?',
                    'AskPressure':              { 'Text': 'Ask about pressure during the investigation',  'Do': 'jump AskPressure'         },
                    'BackToInterrogateAccused': { 'Text': 'Move on',                                       'Do': 'jump InterrogateAccused'  },
                },
            },
        ],

        'AskPressure': [
            'JUDGE Adamov — did anyone pressure you during the investigation? Were you forced to give testimony?',
            'ADAMOV Well... how to put it. They said I had to confess. That it would be better that way. That if I didn\'t confess, it would be worse. I don\'t know... maybe that\'s not pressure. They just explained. I was going to tell the truth anyway. They just... reminded me. Reminded me often.',
            'ADAMOV Not that they forced me. They didn\'t hit me. But I was afraid. They talked about the juveniles\' block. About what they\'d do to me there. So I... signed. But that was my own decision. I\'m not complaining. I\'m just answering your question.',
            'JUDGE He goes quiet. Begins turning a button on his jacket.',
            'ADAMOV I don\'t want to complain about anyone. I just... I don\'t know what to say anymore.',
            'jump InterrogateAccused',
        ],

        /* ── BRANCH 2: INTERROGATE THE WITNESSES ───────────────────── */

        'InterrogateWitnesses': [
            'show scene #0a1400 with fadeIn',
            'JUDGE The court will now hear witness testimony.',
            {
                'Choice': {
                    'Dialog': 'JUDGE Which witness to call?',
                    'HearLyashuk':  { 'Text': 'Nikolai Lyashuk — the neighbor who called the police', 'Do': 'jump HearLyashuk'  },
                    'HearKoval':    { 'Text': 'Alla Koval — a woman who was passing by',               'Do': 'jump HearKoval'    },
                    'BackToStart2': { 'Text': 'Return to the main hearing',                            'Do': 'jump Start'        },
                },
            },
        ],

        'HearLyashuk': [
            'LYASHUK I live on Komsomolskaya Street, about forty meters from the station platform.',
            'LYASHUK Around eleven at night I heard a noise. I looked out the window. I saw a man running.',
            'JUDGE It was February. No moon. The nearest street lamp was at the far end of the platform.',
            {
                'Choice': {
                    'Dialog': 'JUDGE Examine his testimony?',
                    'AskFaceLyashuk': { 'Text': 'Did he see the man\'s face?',                            'Do': 'jump AskFaceLyashuk'      },
                    'CompareProtocol': { 'Text': 'Compare his statement with the written protocol',        'Do': 'jump CompareProtocol'     },
                    'BackToWitnesses': { 'Text': 'Move on',                                               'Do': 'jump InterrogateWitnesses' },
                },
            },
        ],

        'AskFaceLyashuk': [
            'JUDGE Did you see the man\'s face?',
            'LYASHUK I... I think so. It was quite dark.',
            'JUDGE Forty meters. February darkness. Through a window.',
            {
                'Choice': {
                    'Dialog': 'JUDGE Press on identification?',
                    'AskRecognize':    { 'Text': 'Do you recognize the accused as that man?', 'Do': 'jump AskRecognize'        },
                    'BackToWitnesses2': { 'Text': 'Move on',                                  'Do': 'jump InterrogateWitnesses' },
                },
            },
        ],

        'AskRecognize': [
            'JUDGE Is the man you saw that night present in this courtroom?',
            'LYASHUK He studies Adamov for a long moment.',
            'LYASHUK Yes... I believe so. Though I cannot be completely certain.',
            'JUDGE He was not wearing his glasses that night. He has not worn them to court either.',
            'jump InterrogateWitnesses',
        ],

        'CompareProtocol': [
            'JUDGE Your written statement reads: "I clearly identified the accused." Do you recall saying that?',
            'LYASHUK I said I thought I recognized him. I don\'t know why it says "clearly."',
            'JUDGE He shifts in his seat.',
            {
                'Choice': {
                    'Dialog': 'JUDGE Press on the discrepancy?',
                    'AskDifference':   { 'Text': 'Who wrote the protocol — did you read it before signing?', 'Do': 'jump AskDifference'       },
                    'BackToWitnesses3': { 'Text': 'Move on',                                                  'Do': 'jump InterrogateWitnesses' },
                },
            },
        ],

        'AskDifference': [
            'JUDGE Did you read the protocol before signing it?',
            'LYASHUK The investigator wrote it. It was late. I didn\'t read it carefully.',
            'JUDGE A protocol he did not read. Amended by an investigator. Signed by a tired man.',
            'jump InterrogateWitnesses',
        ],

        'HearKoval': [
            'KOVAL I was walking home along the platform at approximately ten forty-five.',
            'KOVAL I saw a man running toward the underpass.',
            {
                'Choice': {
                    'Dialog': 'JUDGE Question her further?',
                    'AskDescribe':     { 'Text': 'Ask her to describe the man',  'Do': 'jump AskDescribe'         },
                    'BackToWitnesses4': { 'Text': 'Move on',                     'Do': 'jump InterrogateWitnesses' },
                },
            },
        ],

        'AskDescribe': [
            'JUDGE Please describe the man as precisely as you can.',
            'KOVAL Tall. Broad-shouldered. He was wearing a light-colored jacket — grey or beige.',
            'JUDGE I look at Adamov. He is 167 centimeters. Narrow shoulders. He is wearing a dark jacket.',
            'JUDGE Alla Koval described someone else.',
            'jump InterrogateWitnesses',
        ],

        /* ── BRANCH 3: STUDY THE EVIDENCE ──────────────────────────── */

        'StudyEvidence': [
            'show scene #000a14 with fadeIn',
            'JUDGE The court will now review the physical evidence.',
            {
                'Choice': {
                    'Dialog': 'JUDGE Which exhibit to examine?',
                    'CheckProtocol':    { 'Text': 'Interrogation protocol — signed confession',    'Do': 'jump CheckProtocol'    },
                    'CheckAutopsy':     { 'Text': 'Forensic examination of the victim',            'Do': 'jump CheckAutopsy'     },
                    'CheckFingerprints': { 'Text': 'Fingerprint analysis — the ligature',          'Do': 'jump CheckFingerprints' },
                    'CheckAttendees':   { 'Text': 'Attendance log — the interrogation session',    'Do': 'jump CheckAttendees'   },
                },
            },
        ],

        'CheckProtocol': [
            'JUDGE I open the interrogation protocol. The confession spans two pages.',
            'JUDGE The language is precise and legalistic. Not the natural speech of a railway worker.',
            'PROSECUTOR Your Honor, the accused signed every page.',
            {
                'Choice': {
                    'Dialog': 'JUDGE Examine the timestamps?',
                    'CheckTime':       { 'Text': 'Review the timing of the interrogation', 'Do': 'jump CheckTime'    },
                    'BackToEvidence':  { 'Text': 'Move on',                                'Do': 'jump StudyEvidence' },
                },
            },
        ],

        'CheckTime': [
            'JUDGE The interrogation began at 08:00.',
            'JUDGE The confession was signed at 22:14.',
            'JUDGE Fourteen hours and fourteen minutes.',
            'JUDGE There is no defense attorney signature anywhere in the document.',
            'jump StudyEvidence',
        ],

        'CheckAutopsy': [
            'JUDGE Time of death: estimated between 19:00 and 21:00 on January 13th.',
            'JUDGE The forensic report establishes blood type of biological traces recovered at the scene.',
            'JUDGE The blood type is consistent with the accused. It is also shared by approximately 40% of the population.',
            {
                'Choice': {
                    'Dialog': 'JUDGE Investigate the hair?',
                    'CheckDNA':       { 'Text': 'Was a forensic hair analysis ordered?', 'Do': 'jump CheckDNA'      },
                    'BackToEvidence2': { 'Text': 'Move on',                               'Do': 'jump StudyEvidence' },
                },
            },
        ],

        'CheckDNA': [
            'JUDGE I search the case file for a forensic hair analysis report.',
            'JUDGE There is none.',
            'JUDGE A hair found on the victim — potentially the killer\'s — was noted and left unexamined.',
            {
                'Choice': {
                    'Dialog': 'JUDGE Order the analysis?',
                    'OrderExam':       { 'Text': 'Request an immediate forensic hair analysis', 'Do': 'jump OrderExam'     },
                    'BackToEvidence3': { 'Text': 'Move on',                                     'Do': 'jump StudyEvidence' },
                },
            },
        ],

        'OrderExam': [
            'JUDGE The court orders a comparative forensic analysis of the hair specimen.',
            'PROSECUTOR Your Honor, this will delay proceedings considerably.',
            'JUDGE Noted. The order stands.',
            'jump StudyEvidence',
        ],

        'CheckFingerprints': [
            'JUDGE The weapon — a length of cord — was examined for latent prints.',
            'JUDGE The forensic report reads: "Partial latent impression recovered. Pattern consistent with subject. Insufficient ridges for positive identification."',
            'PROSECUTOR "Consistent with" is sufficient, Your Honor.',
            'LAWYER It also means it could be anyone.',
            {
                'Choice': {
                    'Dialog': 'JUDGE Request a reexamination?',
                    'RedoExam':        { 'Text': 'Order an independent fingerprint reexamination', 'Do': 'jump RedoExam'      },
                    'BackToEvidence4': { 'Text': 'Move on',                                        'Do': 'jump StudyEvidence' },
                },
            },
        ],

        'RedoExam': [
            'JUDGE The court requests an independent reexamination of the fingerprint evidence.',
            'JUDGE The forensic examiner does not meet my eyes when he receives the order.',
            'jump StudyEvidence',
        ],

        'CheckAttendees': [
            'JUDGE I examine the attendance log for the interrogation of February 17th.',
            'JUDGE Persons present: Investigator I.V. Morozov. Alexei Adamov.',
            'JUDGE No defense counsel is listed.',
            'JUDGE Fourteen hours. No lawyer. No witness.',
            'jump StudyEvidence',
        ],

        /* ── VERDICT ────────────────────────────────────────────────── */

        'VerdictChoice': [
            'show scene #1a0000 with fadeIn',
            'JUDGE I have reviewed the case.',
            'JUDGE A confession — signed after fourteen hours, without counsel. A bruise that appeared after arrest.',
            'JUDGE A witness who saw a man in the dark, forty meters away, without his glasses.',
            'JUDGE A second witness who described someone else entirely.',
            'JUDGE A partial, unconfirmed fingerprint. A hair left unanalyzed.',
            {
                'Choice': {
                    'Dialog': 'JUDGE The court will now deliver its verdict.',
                    'DeathEnd': { 'Text': 'Guilty. Death penalty.',                            'Do': 'jump DeathEnd'  },
                    'GuiltyEnd': { 'Text': 'Guilty. Twenty-five years imprisonment.',          'Do': 'jump GuiltyEnd' },
                    'ReturnEnd': { 'Text': 'Returned for additional investigation.',            'Do': 'jump ReturnEnd' },
                },
            },
        ],

        'DeathEnd': [
            function () { return window.playHammer(); },
            'JUDGE Guilty. Adamov, Oleg Vasilievich, is sentenced to the supreme measure of punishment — execution.',
            'ADAMOV No... I am not guilty. They forced me. Please...',
            'JUDGE The courtroom erupts. The victim\'s family rises and applauds.',
            function () { return window.showEpilogue('DeathEnd'); },
            'end',
        ],

        'GuiltyEnd': [
            function () { return window.playHammer(); },
            'JUDGE Guilty. Adamov is sentenced to twenty-five years of imprisonment.',
            'ADAMOV No. No — I didn\'t do it. They made me say it. Please.',
            'JUDGE The courtroom exchanges glances. No applause. No protest. The record is closed.',
            function () { return window.showEpilogue('GuiltyEnd'); },
            'end',
        ],

        'ReturnEnd': [
            function () { return window.playHammer(); },
            'JUDGE The case is returned to the investigating authority. The evidence is insufficient for a verdict.',
            'JUDGE The prosecutor objects sharply. Colleagues look on with displeasure.',
            function () { return window.showEpilogue('ReturnEnd'); },
            'end',
        ],
    },

    /* ════════════════════════════════════════════════════════════════
       BELARUSIAN
    ════════════════════════════════════════════════════════════════ */

    'Belarusian': {

        'Start': [
            'show scene #1a0a00 with fadeIn',
            'JUDGE Справа №84-23Б. Адамаў Алег Васільевіч, 1957 г.н., ураджэнец г. Віцебска, вадзіцель.',
            'PROSECUTOR 13 студзеня 1984 года каля 19 гадзін 40 хвілін абвінавачаны, знаходзячыся за рулём аўтамашыны МАЗ каля пяшчанага кар\'ера «Шпілі», убачыў, што па чыгуначнай насыпе ідзе Кацуба Таццяна Іванаўна, 1964 г.н., якая накіроўвалася на працу на станцыю Лучаса.',
            'PROSECUTOR Адамаў выйшаў з машыны, падняўся на насып і ззаду напаў на пацярпелую. Ён заткнуў ёй рот уласнай рукавіцай, звязаў рукі поясам ад паліто і згвалтаваў яе. Баючыся выкрыцця, задушыў Кацубу шыйнай хусткай, адцягнуў цела ў кусты і скраў яе сумку з асабістымі рэчамі, грашыма і фатаграфіямі.',
            'PROSECUTOR Абвінавачваецца па: п. «ж» арт. 100 КК БССР — умыснае забойства, спалучанае са згвалтаваннем; ч. 1 арт. 115 — згвалтаванне; ч. 2 арт. 141 — крадзеж асабістай маёмасці.',
            'PROSECUTOR Доказы: прызнальныя паказанні з яўкай з павіннай; паказ месца злачынства пры следчым эксперыменце; вынікі судова-медыцынскай экспертызы — група крыві; фотаздымак забітай, знойдзены пры вобыску ў хляве абвінавачанага; паказанні сведак.',
            'PROSECUTOR Абвінавачваны вінаватым сябе не прызнае. Аднак яго віна пацвярджаецца сукупнасцю доказаў.',
            'LAWYER Абарона аспрэчвае кожны элемент даказнай базы. Прызнанне атрымана пад ціскам. Астатнія доказы не пацвярджаюць абвінавачанне незалежна.',
            {
                'Choice': {
                    'Dialog': 'JUDGE Суд прыступае да разгляду справы.',
                    'InterrogateAccused':   { 'Text': 'Дапытаць абвінавачанага',  'Do': 'jump InterrogateAccused'   },
                    'InterrogateWitnesses': { 'Text': 'Дапытаць сведкаў',         'Do': 'jump InterrogateWitnesses' },
                    'StudyEvidence':        { 'Text': 'Вывучыць улікі',           'Do': 'jump StudyEvidence'        },
                    'Verdict':              { 'Text': 'Вынесці вердыкт',          'Do': 'jump VerdictChoice'        },
                },
            },
        ],

        'InterrogateAccused': [
            'show scene #0a0a18 with fadeIn',
            'JUDGE Прывесці абвінавачанага.',
            'ADAMOV Мяне завуць Аляксей Адамаў. Мне дваццаць восем гадоў.',
            'JUDGE Пад левым вокам цёмны сіняк. На фатаграфіі пры арышце яго не было.',
            {
                'Choice': {
                    'Dialog': 'JUDGE Як суд павінен працягнуць?',
                    'AskCircumstances': { 'Text': 'Запытаць пра акалічнасці той ночы',     'Do': 'jump AskCircumstances' },
                    'AskGuilt':         { 'Text': 'Запытаць, ці пацвярджае ён прызнанне',  'Do': 'jump AskGuilt'         },
                    'BackToStart':      { 'Text': 'Вярнуцца да асноўнага слухання',         'Do': 'jump Start'            },
                },
            },
        ],

        'AskCircumstances': [
            'JUDGE Адамаў павольна падымаецца, трымаецца за край стала, не глядзіць у бок суддзі. Голас глухі, сіплы, часам зрываецца.',
            'ADAMOV Я не вінаваты. Гэта яны мяне прымушалі… пад ціскам. Я падпісаў, таму што баяўся. Яны казалі: калі не прызнаешся — пасадзім за малалетак.',
            'ADAMOV Месца, дзе ляжала… дзе быў труп… мне паказалі. Я паўтарыў. Я не ведаў. А фотаздымак… у хляве? Першы раз бачу. Можа, падкінулі. Не ведаю.',
            'ADAMOV Я працаваў у кар\'еры. Сведкі ёсць. А яны мяне трымалі, не адпускалі, пакуль не прызнаўся. Я баяўся. Я не забіваў.',
            'ADAMOV Больш нічога не буду казаць. Няхай адвакат. Я не вінаваты.',
            'JUDGE Замаўкае, адводзіць вочы, сціскае пальцы ў кулакі.',
            {
                'Choice': {
                    'Dialog': 'JUDGE Працягваць дапытваць?',
                    'CheckWritten':             { 'Text': 'Параўнаць з пісьмовым прызнаннем', 'Do': 'jump CheckWritten'        },
                    'BackToInterrogateAccused': { 'Text': 'Перайсці далей',                   'Do': 'jump InterrogateAccused'  },
                },
            },
        ],

        'CheckWritten': [
            'JUDGE Адкрываю пратакол допыту Адамава А.В.',
            'JUDGE Пытанне: «Раскажыце пра забойства». Адказ: «13 студзеня 1984 года я ўбачыў дзяўчыну на насыпе, выйшаў з машыны, напаў на яе, згвалтаваў і задушыў хусткай. Віну прызнаю цалкам».',
            'JUDGE Пытанне: «Хто паказваў месца трупа?» Адказ: «Ніхто. Паказаў самастойна і дакладна».',
            'JUDGE Пытанне: «Ці ціснулі на Вас?» Адказ: «Не. Паказанні даю добраахвотна. Шкадую».',
            'JUDGE Толькі што ён казаў: «мне паказалі». Пратакол кажа: «паказаў самастойна».',
            'JUDGE Адзін з іх хлусіць. Можа, абодва.',
            'jump InterrogateAccused',
        ],

        'AskGuilt': [
            'JUDGE Адамаў, ці прызнаеце вы сябе вінаватым у забойстве грамадзянкі Кацуба?',
            'ADAMOV Так... я прызнаю. Вінаваты. Я... я зрабіў гэта. Усё, як напісана ў пратаколе.',
            'JUDGE На левай шчацэ абвінавачанага — вялікі сіняк. Чатыры дні таму на здымку пры арышце яго не было.',
            'JUDGE Адамаў, што ў вас з тварам? Адкуль сіняк?',
            'ADAMOV Я… гэта я сам. Упаў. У камеры. Падскользнуўся на мокрай падлозе. Ніхто мяне не чапаў. Я прызнаю віну. Я прасіў ужо. Я шкадую.',
            'JUDGE Голас зрываецца. Цягне руку да шчакі, але не дакранаецца.',
            'LAWYER Пярэчанне — фізічны стан абвінавачанага павінен быць занесены ў пратакол.',
            'JUDGE Занесена.',
            {
                'Choice': {
                    'Dialog': 'JUDGE Запытаць пра ўмовы следства?',
                    'AskPressure':              { 'Text': 'Запытаць пра ціск падчас следства', 'Do': 'jump AskPressure'         },
                    'BackToInterrogateAccused': { 'Text': 'Перайсці далей',                    'Do': 'jump InterrogateAccused'  },
                },
            },
        ],

        'AskPressure': [
            'JUDGE Адамаў, ці аказваў на вас хто-небудзь ціск падчас следства? Прымушалі даваць паказанні?',
            'ADAMOV Ну… як сказаць. Яны казалі, што трэба прызнацца. Што так будзе лепш. Калі не прызнаюся — будзе горш. Я не ведаю… можа, гэта не ціск. Проста тлумачылі. Нагадвалі. Часта нагадвалі.',
            'ADAMOV Не, не тое каб прымушалі. Не білі. Але я баяўся. Яны гаварылі пра малалетак, пра «Новінкі». Вось я і… падпісаў. Але гэта я сам вырашыў. Не, я не скарджуся. Проста адказваю на ваша пытанне.',
            'JUDGE Замаўкае, пачынае круціць гузік на пінжаку.',
            'ADAMOV Я не хачу ні на каго скардзіцца. Я проста… ужо не ведаю, што казаць.',
            'jump InterrogateAccused',
        ],

        'InterrogateWitnesses': [
            'show scene #0a1400 with fadeIn',
            'JUDGE Суд выслухае паказанні сведак.',
            {
                'Choice': {
                    'Dialog': 'JUDGE Каго выклікаць?',
                    'HearLyashuk':  { 'Text': 'Мікалай Ляшук — сусед, які выклікаў міліцыю',   'Do': 'jump HearLyashuk'  },
                    'HearKoval':    { 'Text': 'Ала Каваль — жанчына, якая праходзіла міма',      'Do': 'jump HearKoval'    },
                    'BackToStart2': { 'Text': 'Вярнуцца да асноўнага слухання',                  'Do': 'jump Start'        },
                },
            },
        ],

        'HearLyashuk': [
            'LYASHUK Я жыву на Камсамольскай вуліцы, прыкладна за сорак метраў ад пероне.',
            'LYASHUK Каля адзінаццатай ночы я пачуў шум. Зірнуў у акно. Убачыў мужчыну, які бег.',
            'JUDGE Люты. Без месяца. Бліжэйшы ліхтар — на дальнім канцы пероне.',
            {
                'Choice': {
                    'Dialog': 'JUDGE Даследаваць яго паказанні?',
                    'AskFaceLyashuk':  { 'Text': 'Ці бачыў ён твар мужчыны?',                            'Do': 'jump AskFaceLyashuk'      },
                    'CompareProtocol': { 'Text': 'Параўнаць яго паказанні з пісьмовым пратаколам',        'Do': 'jump CompareProtocol'     },
                    'BackToWitnesses': { 'Text': 'Перайсці далей',                                        'Do': 'jump InterrogateWitnesses' },
                },
            },
        ],

        'AskFaceLyashuk': [
            'JUDGE Вы бачылі твар таго мужчыны?',
            'LYASHUK Я... здаецца, бачыў. Было даволі цёмна.',
            'JUDGE Сорак метраў. Лютаўская цемра. Праз шыбу.',
            {
                'Choice': {
                    'Dialog': 'JUDGE Запытаць пра апазнанне?',
                    'AskRecognize':     { 'Text': 'Ці пазнае ён абвінавачанага?', 'Do': 'jump AskRecognize'        },
                    'BackToWitnesses2': { 'Text': 'Перайсці далей',               'Do': 'jump InterrogateWitnesses' },
                },
            },
        ],

        'AskRecognize': [
            'JUDGE Ці прысутнічае ў зале той мужчына, якога вы бачылі ў ноч на 14 лютага?',
            'LYASHUK Ён доўга ўглядаецца ў Адамава.',
            'LYASHUK Так... здаецца. Ён падобны на таго чалавека. Хаця я не магу быць цалкам упэўнены.',
            'JUDGE Той вечар ён быў без акуляраў. І сёння таксама.',
            'jump InterrogateWitnesses',
        ],

        'CompareProtocol': [
            'JUDGE У вашым пісьмовым пратаколе напісана: «Я выразна апазнаў абвінавачанага». Вы гэта казалі?',
            'LYASHUK Я казаў, што думаю, што пазнаў яго. Не ведаю, чаму напісана «выразна».',
            'JUDGE Ён ёрзае на крэсле.',
            {
                'Choice': {
                    'Dialog': 'JUDGE Узняць пытанне аб разыходжанні?',
                    'AskDifference':    { 'Text': 'Хто пісаў пратакол — ці чыталі вы яго перад подпісам?', 'Do': 'jump AskDifference'       },
                    'BackToWitnesses3': { 'Text': 'Перайсці далей',                                         'Do': 'jump InterrogateWitnesses' },
                },
            },
        ],

        'AskDifference': [
            'JUDGE Вы чыталі пратакол перад тым, як яго подпісаць?',
            'LYASHUK Следчы пісаў. Было позна. Я не чытаў уважліва.',
            'JUDGE Пратакол, які ён не чытаў. Папраўлены следчым. Подпісаны стомленым чалавекам.',
            'jump InterrogateWitnesses',
        ],

        'HearKoval': [
            'KOVAL Я ішла дадому ўздоўж пероне каля без чвэрці адзінаццатай.',
            'KOVAL Убачыла мужчыну, які бег у бок пераходу.',
            {
                'Choice': {
                    'Dialog': 'JUDGE Дапытаць яе?',
                    'AskDescribe':      { 'Text': 'Папрасіць апісаць мужчыну', 'Do': 'jump AskDescribe'         },
                    'BackToWitnesses4': { 'Text': 'Перайсці далей',             'Do': 'jump InterrogateWitnesses' },
                },
            },
        ],

        'AskDescribe': [
            'JUDGE Апішыце таго мужчыну як мага дакладней.',
            'KOVAL Высокі. Шырокія плечы. Светлая куртка — шэрая або бежавая.',
            'JUDGE Гляджу на Адамава. Рост 167 сантыметраў. Вузкія плечы. Цёмная куртка.',
            'JUDGE Ала Каваль апісала іншага чалавека.',
            'jump InterrogateWitnesses',
        ],

        'StudyEvidence': [
            'show scene #000a14 with fadeIn',
            'JUDGE Суд прыступае да разгляду рэчавых доказаў.',
            {
                'Choice': {
                    'Dialog': 'JUDGE Які доказ даследаваць?',
                    'CheckProtocol':     { 'Text': 'Пратакол допыту — пісьмовае прызнанне',    'Do': 'jump CheckProtocol'     },
                    'CheckAutopsy':      { 'Text': 'Крыміналістычная экспертыза ахвяры',        'Do': 'jump CheckAutopsy'      },
                    'CheckFingerprints': { 'Text': 'Адбіткі пальцаў — верыўка',                 'Do': 'jump CheckFingerprints'  },
                    'CheckAttendees':    { 'Text': 'Часопіс прысутных — сесія допыту',           'Do': 'jump CheckAttendees'    },
                },
            },
        ],

        'CheckProtocol': [
            'JUDGE Адкрываю пратакол допыту. Прызнанне займае дзве старонкі.',
            'JUDGE Мова дакладная, юрыдычная. Не натуральная мова чыгуначніка.',
            'PROSECUTOR Ваша гонар, абвінавачаны подпісаў кожную старонку.',
            {
                'Choice': {
                    'Dialog': 'JUDGE Праверыць адзнакі часу?',
                    'CheckTime':      { 'Text': 'Праверыць храналогію допыту', 'Do': 'jump CheckTime'    },
                    'BackToEvidence': { 'Text': 'Перайсці далей',              'Do': 'jump StudyEvidence' },
                },
            },
        ],

        'CheckTime': [
            'JUDGE Допыт пачаўся ў 08:00.',
            'JUDGE Прызнанне подпісана ў 22:14.',
            'JUDGE Чатырнаццаць гадзін і чатырнаццаць хвілін.',
            'JUDGE У дакуменце няма подпісу адваката.',
            'jump StudyEvidence',
        ],

        'CheckAutopsy': [
            'JUDGE Час смерці: ацэначна паміж 19:00 і 21:00 13 студзеня.',
            'JUDGE Судова-медыцынская экспертыза ўстанаўлівае групу крыві біялагічных слядоў, знойдзеных на месцы злачынства.',
            'JUDGE Група крыві супадае з абвінавачаным. Яна таксама ёсць прыкладна ў 40% насельніцтва.',
            {
                'Choice': {
                    'Dialog': 'JUDGE Дасследаваць далей?',
                    'CheckDNA':        { 'Text': 'Ці была прызначана дадатковая экспертыза?', 'Do': 'jump CheckDNA'      },
                    'BackToEvidence2': { 'Text': 'Перайсці далей',                            'Do': 'jump StudyEvidence' },
                },
            },
        ],

        'CheckDNA': [
            'JUDGE Шукаю ў справе дадатковыя крыміналістычныя заключэнні па групе крыві.',
            'JUDGE Іншых незалежных экспертыз у справе няма. Толькі адна лабараторыя, толькі адзін вынік.',
            'JUDGE Група крыві — адзіны біялагічны доказ. Пацвярджае прысутнасць, але не асобу.',
            {
                'Choice': {
                    'Dialog': 'JUDGE Прызначыць незалежную экспертызу?',
                    'OrderExam':       { 'Text': 'Запатрабаваць незалежную паўторную экспертызу', 'Do': 'jump OrderExam'     },
                    'BackToEvidence3': { 'Text': 'Перайсці далей',                                'Do': 'jump StudyEvidence' },
                },
            },
        ],

        'OrderExam': [
            'JUDGE Суд прызначае незалежную паўторную судова-медыцынскую экспертызу.',
            'PROSECUTOR Ваша гонар, гэта значна затрымае разгляд справы.',
            'JUDGE Прынята да ведама. Загад застаецца ў сіле.',
            'jump StudyEvidence',
        ],

        'CheckFingerprints': [
            'JUDGE Зброя — кавалак верыўкі — была даследавана на схаваныя адбіткі.',
            'JUDGE У справаздачы: «Выяўлены частковы адбітак. Малюнак адпавядае падсуднаму. Недастаткова лінійных элементаў для станоўчай ідэнтыфікацыі».',
            'PROSECUTOR «Адпавядае» дастаткова, Ваша гонар.',
            'LAWYER Гэта таксама азначае, што адбітак можа належаць каму заўгодна.',
            {
                'Choice': {
                    'Dialog': 'JUDGE Запытаць паўторную экспертызу?',
                    'RedoExam':        { 'Text': 'Прызначыць незалежную паўторную экспертызу', 'Do': 'jump RedoExam'      },
                    'BackToEvidence4': { 'Text': 'Перайсці далей',                             'Do': 'jump StudyEvidence' },
                },
            },
        ],

        'RedoExam': [
            'JUDGE Суд запытвае незалежную паўторную экспертызу рэчавых доказаў.',
            'JUDGE Атрымаўшы загад, крыміналіст не ўзняў на мяне вачэй.',
            'jump StudyEvidence',
        ],

        'CheckAttendees': [
            'JUDGE Вывучаю часопіс прысутных на сесіі допыту 17 лютага.',
            'JUDGE Прысутнічалі: следчы І.В. Марозаў. Аляксей Адамаў.',
            'JUDGE Абаронца не пазначаны.',
            'JUDGE Чатырнаццаць гадзін. Без адваката. Без сведак.',
            'jump StudyEvidence',
        ],

        'VerdictChoice': [
            'show scene #1a0000 with fadeIn',
            'JUDGE Я разгледзеў справу.',
            'JUDGE Прызнанне — атрыманае за чатырнаццаць гадзін, без адваката. Сіняк, якога не было пры арышце.',
            'JUDGE Сведка, які бачыў мужчыну ў цемры, за сорак метраў, без акуляраў.',
            'JUDGE Другая сведка, якая апісала зусім іншага чалавека.',
            'JUDGE Частковы, не пацверджаны адбітак. Волас, пакінуты без аналізу.',
            {
                'Choice': {
                    'Dialog': 'JUDGE Суд выносіць вердыкт.',
                    'DeathEnd':  { 'Text': 'Вінаваты. Смяротнае пакаранне.',         'Do': 'jump DeathEnd'  },
                    'GuiltyEnd': { 'Text': 'Вінаваты. Дваццаць пяць гадоў турмы.',   'Do': 'jump GuiltyEnd' },
                    'ReturnEnd': { 'Text': 'Вяртанне справы на дапрацоўку.',          'Do': 'jump ReturnEnd' },
                },
            },
        ],

        'DeathEnd': [
            function () { return window.playHammer(); },
            'JUDGE Вінаваты. Адамаў Алег Васільевіч прысуджаецца да вышэйшай меры пакарання — расстрэлу.',
            'ADAMOV Не... я не вінаваты. Яны прымусілі мяне. Калі ласка...',
            'JUDGE Зала суда выбухае апладысментамі. Сваякі ахвяры ўстаюць.',
            function () { return window.showEpilogue('DeathEnd'); },
            'end',
        ],

        'GuiltyEnd': [
            function () { return window.playHammer(); },
            'JUDGE Вінаваты. Адамаў Алег Васільевіч прысуджаецца да дваццаці пяці гадоў пазбаўлення волі.',
            'ADAMOV Не... не, я гэтага не рабіў. Яны прымусілі мяне гэта сказаць. Калі ласка.',
            'JUDGE Зала абменьваецца позіркамі. Ніякіх апладысментаў. Ніякіх пярэчанняў. Справа закрыта.',
            function () { return window.showEpilogue('GuiltyEnd'); },
            'end',
        ],

        'ReturnEnd': [
            function () { return window.playHammer(); },
            'JUDGE Справа вяртаецца следчым органам. Доказаў недастаткова для вынясення вердыкту.',
            'JUDGE Пракурор рэзка пярэчыць. Калегі глядзяць з незадавальненнем.',
            function () { return window.showEpilogue('ReturnEnd'); },
            'end',
        ],
    },
});

monogatari.settings({
    'Name': 'Витебское дело',
    'Version': '0.2.0',
    'PlayTime': true,
    'MultiLanguage': true,
    'DefaultLanguage': 'Belarusian',
    'Language': 'Belarusian',
    'SupportedLanguages': ['Belarusian', 'English'],
});

monogatari.translation('English', {
    'Next': 'Next',
    'Back': 'Back',
    'Save': 'Save',
    'Load': 'Load',
    'Settings': 'Settings',
    'Credits': 'Credits',
    'Log': 'Log',
    'Help': 'Help',
    'Quit': 'Quit',
    'Start': 'Start',
    'Continue': 'Continue',
    'Language': 'Language',
});

monogatari.translation('Belarusian', {
    'Next': 'Далей',
    'Back': 'Назад',
    'Save': 'Захаваць',
    'Load': 'Загрузіць',
    'Settings': 'Налады',
    'Credits': 'Аўтары',
    'Log': 'Журнал',
    'Help': 'Дапамога',
    'Quit': 'Выйсці',
    'Start': 'Пачаць',
    'Continue': 'Працягнуць',
    'Language': 'Мова',
});

monogatari.storage({ playerVerdict: '' });

monogatari.init('#monogatari');
