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
            'JUDGE Adamov rises slowly, grips the edge of the railing. Does not look toward the bench.',
            'ADAMOV I am not guilty. They forced me... under pressure. I signed because I was afraid. They told me: if you don\'t confess, we\'ll put you in with the juveniles.',
            'ADAMOV The place where the body lay... they showed me. I repeated what they said. I didn\'t know. And the photograph — in the barn? First time I\'ve seen it. Maybe it was planted. I don\'t know.',
            'ADAMOV I was working at the quarry. There are witnesses. But they held me, they wouldn\'t let me go until I confessed. I was afraid. I did not kill.',
            'ADAMOV I have nothing more to say. Let the lawyer speak. I am not guilty.',
            'JUDGE His voice is hoarse, sometimes breaks. His fingers close into fists. He looks at the floor.',
            {
                'Choice': {
                    'Dialog': 'JUDGE Press further?',
                    'CheckWritten':             { 'Text': 'Compare with the written confession', 'Do': 'jump CheckWritten'        },
                    'BackToInterrogateAccused': { 'Text': 'Move on',                             'Do': 'jump InterrogateAccused' },
                },
            },
        ],

        'CheckWritten': [
            'JUDGE I compare his oral account with the written protocol.',
            'JUDGE Seventeen sentences. Identical. Word for word.',
            'JUDGE A man recalling a traumatic act does not speak in perfect protocol language.',
            'JUDGE This account was written first. Then memorized.',
            'jump InterrogateAccused',
        ],

        'AskGuilt': [
            'JUDGE Do you maintain your written confession?',
            'ADAMOV Yes. I... yes. I confess.',
            'JUDGE He touches his eye instinctively. The bruise.',
            'LAWYER Objection — the physical condition of the accused should be noted for the record.',
            'JUDGE Noted.',
            {
                'Choice': {
                    'Dialog': 'JUDGE Ask about the bruise?',
                    'AskPressure':             { 'Text': 'Ask about the conditions of his interrogation', 'Do': 'jump AskPressure'         },
                    'BackToInterrogateAccused': { 'Text': 'Move on',                                       'Do': 'jump InterrogateAccused'  },
                },
            },
        ],

        'AskPressure': [
            'JUDGE Were you subjected to any pressure during your interrogation?',
            'ADAMOV I was... tired. They kept asking. The same questions, over and over.',
            'ADAMOV I just wanted it to stop.',
            'JUDGE He did not finish the sentence.',
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
            'JUDGE Time of death: estimated between 22:30 and 23:30 on February 14th.',
            'JUDGE A single dark hair was found on the victim\'s outer clothing. Coarse texture. Light-colored.',
            'JUDGE Adamov\'s hair is fine and brown.',
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
                    'GuiltyEnd': { 'Text': 'Guilty. Fifteen years of corrective labor.',      'Do': 'jump GuiltyEnd' },
                    'AcquitEnd': { 'Text': 'Not guilty. The evidence is insufficient.',       'Do': 'jump AcquitEnd' },
                    'ReturnEnd': { 'Text': 'Returned for additional investigation.',           'Do': 'jump ReturnEnd' },
                },
            },
        ],

        'GuiltyEnd': [
            function () { return window.playHammer(); },
            'show scene #0a0a0a with fadeIn',
            'JUDGE Guilty. Alexei Adamov is sentenced to fifteen years of corrective labor.',
            'ADAMOV No. No — I didn\'t do it. They made me say it. Please.',
            'JUDGE The courtroom empties. The file is closed.',
            'JUDGE The verdict was appealed. The appeal was denied.',
            'JUDGE In August 1985, a man named Gennadiy Mikhaseich was detained near Polotsk.',
            'JUDGE He confessed to the rape and murder of forty-two women.',
            'JUDGE One of them was Tatyana Katsuba.',
            'JUDGE Adamov was released after ten years. He was thirty-eight years old.',
            'JUDGE Fourteen people were wrongfully convicted in eleven trials.',
            'JUDGE One was executed.',
            'end',
        ],

        'AcquitEnd': [
            function () { return window.playHammer(); },
            'show scene #0a0a0a with fadeIn',
            'JUDGE Not guilty. The evidence presented does not reach the standard required to deprive a citizen of his liberty.',
            'JUDGE The confession was obtained under conditions this court cannot accept.',
            'JUDGE The prosecution will appeal. Your superiors will call. The pressure will be considerable.',
            'JUDGE You know what you saw. A bruise. A protocol no one read. A witness who wasn\'t certain.',
            'JUDGE You know what you saw.',
            'end',
        ],

        'ReturnEnd': [
            function () { return window.playHammer(); },
            'show scene #0a0a0a with fadeIn',
            'JUDGE The case is returned to the investigating authority. The evidence requires additional examination.',
            'JUDGE The prosecutor protests. The case is reassigned to a different investigator.',
            'JUDGE Eight months later, a different judge presides.',
            'JUDGE Adamov is convicted.',
            'end',
        ],
    },

    /* ════════════════════════════════════════════════════════════════
       BELARUSIAN
    ════════════════════════════════════════════════════════════════ */

    'Belarusian': {

        'Start': [
            'show scene #1a0a00 with fadeIn',
            'JUDGE Справа №84-23Б. Дзяржава супраць Аляксея Адамава.',
            'PROSECUTOR У ноч на 14 лютага 1984 года на пероне станцыі Лучаса была знойдзена задушанай дзяжурная Тацяна Кацуба.',
            'PROSECUTOR Відавочца паставіў абвінавачанага на месца здарэння. Яго адбіткі пальцаў знойдзены на верыўцы. Ён прызнаў сваю віну ў пісьмовай форме.',
            'PROSECUTOR Дзяржава просіць максімальнага пакарання паводле артыкула 101.',
            'LAWYER Абарона аспрэчвае законнасць прызнання і дакладнасць апазнання.',
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
            'JUDGE Апішыце, дзе вы знаходзіліся ў ноч на 14 лютага.',
            'ADAMOV Увечары 14 лютага я быў на чыгуначным пероне. Я ўбачыў жанчыну. Падышоў да яе. Узнікла сутычка, якая скончылася яе смерцю.',
            'JUDGE Яго аповед супадае слова ў слова з пісьмовымі паказаннямі. Не перафразаваны — завучаны.',
            'JUDGE Голас роўны. Вочы апушчаны на стол.',
            {
                'Choice': {
                    'Dialog': 'JUDGE Працягваць дапытваць?',
                    'CheckWritten':             { 'Text': 'Параўнаць з пісьмовымі паказаннямі', 'Do': 'jump CheckWritten'        },
                    'BackToInterrogateAccused': { 'Text': 'Перайсці далей',                     'Do': 'jump InterrogateAccused'  },
                },
            },
        ],

        'CheckWritten': [
            'JUDGE Параўноўваю вусны аповед з пратаколам допыту.',
            'JUDGE Сямнаццаць сказаў. Аднолькавых. Слова ў слова.',
            'JUDGE Чалавек, які ўспамінае трагічную падзею, не гаворыць протакольнымі фармулёўкамі.',
            'JUDGE Гэты тэкст быў напісаны спачатку. Потым — завучаны.',
            'jump InterrogateAccused',
        ],

        'AskGuilt': [
            'JUDGE Вы пацвярджаеце сваё пісьмовае прызнанне?',
            'ADAMOV Так. Я... так. Я прызнаю віну.',
            'JUDGE Ён машынальна дакранаецца да вока. Сіняк.',
            'LAWYER Пярэчанне — фізічны стан абвінавачанага павінен быць занесены ў пратакол.',
            'JUDGE Занесена.',
            {
                'Choice': {
                    'Dialog': 'JUDGE Запытаць пра сіняк?',
                    'AskPressure':             { 'Text': 'Запытаць пра ўмовы допыту',  'Do': 'jump AskPressure'         },
                    'BackToInterrogateAccused': { 'Text': 'Перайсці далей',              'Do': 'jump InterrogateAccused'  },
                },
            },
        ],

        'AskPressure': [
            'JUDGE Ці аказваўся на вас ціск падчас допыту?',
            'ADAMOV Я быў... стомлены. Яны ўвесь час пыталі. Тыя самыя пытанні, зноў і зноў.',
            'ADAMOV Я проста хацеў, каб гэта спынілася.',
            'JUDGE Ён не скончыў сказ.',
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
            'JUDGE Час смерці: ацэнач-на паміж 22:30 і 23:30 14 лютага.',
            'JUDGE На верхнім адзенні ахвяры знойдзены адзіночны цёмны волас. Грубая тэкстура. Светлы колер.',
            'JUDGE Волас Адамава — тонкі і каштанавы.',
            {
                'Choice': {
                    'Dialog': 'JUDGE Дасследаваць гэты волас?',
                    'CheckDNA':        { 'Text': 'Ці была прызначана крыміналістычная экспертыза?', 'Do': 'jump CheckDNA'      },
                    'BackToEvidence2': { 'Text': 'Перайсці далей',                                  'Do': 'jump StudyEvidence' },
                },
            },
        ],

        'CheckDNA': [
            'JUDGE Шукаю ў справе справаздачу аб крыміналістычным аналізе волас.',
            'JUDGE Яе няма.',
            'JUDGE Волас з цела ахвяры — магчыма, забойцы — быў заўважаны і пакінуты без аналізу.',
            {
                'Choice': {
                    'Dialog': 'JUDGE Прызначыць экспертызу?',
                    'OrderExam':       { 'Text': 'Запатрабаваць неадкладны аналіз волас', 'Do': 'jump OrderExam'     },
                    'BackToEvidence3': { 'Text': 'Перайсці далей',                        'Do': 'jump StudyEvidence' },
                },
            },
        ],

        'OrderExam': [
            'JUDGE Суд прызначае параўнальную крыміналістычную экспертызу ўзору волас.',
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
                    'GuiltyEnd': { 'Text': 'Вінаваты. Пятнаццаць гадоў папраўча-працоўных лагераў.', 'Do': 'jump GuiltyEnd' },
                    'AcquitEnd': { 'Text': 'Невінаваты. Доказаў недастаткова.',                       'Do': 'jump AcquitEnd' },
                    'ReturnEnd': { 'Text': 'Справа вяртаецца на дадатковае расследаванне.',            'Do': 'jump ReturnEnd' },
                },
            },
        ],

        'GuiltyEnd': [
            function () { return window.playHammer(); },
            'show scene #0a0a0a with fadeIn',
            'JUDGE Вінаваты. Аляксей Адамаў прысуджаецца да пятнаццаці гадоў папраўча-працоўных лагераў.',
            'ADAMOV Не... не, я гэтага не рабіў. Яны прымусілі мяне гэта сказаць. Калі ласка.',
            'JUDGE Зала пусцела. Справа закрыта.',
            'JUDGE Вердыкт быў апратэставаны. Пратэст адхілены.',
            'JUDGE У жніўні 1985 года каля Полацка быў затрыманы Генадзь Міхасевіч.',
            'JUDGE Ён прызнаўся ў згвалтаванні і забойстве сарака двух жанчын.',
            'JUDGE Адна з іх — Тацяна Кацуба.',
            'JUDGE Адамаў быў вызвалены праз дзесяць гадоў. Яму было трыццаць восем.',
            'JUDGE Чатырнаццаць чалавек памылкова асуджаныя ў адзінаццаці судовых працэсах.',
            'JUDGE Адзін — расстраляны.',
            'end',
        ],

        'AcquitEnd': [
            function () { return window.playHammer(); },
            'show scene #0a0a0a with fadeIn',
            'JUDGE Невінаваты. Прадстаўленыя доказы не адпавядаюць стандарту, неабходнаму для пазбаўлення чалавека волі.',
            'JUDGE Прызнанне атрымана ва ўмовах, якія суд не можа прыняць.',
            'JUDGE Пракурор будзе апратэстоўваць. Вашы начальнікі патэлефануюць. Ціск будзе значным.',
            'JUDGE Але вы бачылі сіняк. Пратакол, які ніхто не чытаў. Сведку, які не быў упэўнены.',
            'JUDGE Вы ведаеце, што бачылі.',
            'end',
        ],

        'ReturnEnd': [
            function () { return window.playHammer(); },
            'show scene #0a0a0a with fadeIn',
            'JUDGE Справа вяртаецца следчым органам. Доказы патрабуюць дадатковай праверкі.',
            'JUDGE Пракурор пярэчыць. Справа перадаецца іншаму следчаму.',
            'JUDGE Праз восем месяцаў выносіць вердыкт іншы суддзя.',
            'JUDGE Адамаў асуджаны.',
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
