const LEGAL_INFO = {
    'English': {
        'Start': {
            title: 'The Vitebsk Case — Real events',
            body: `<p>This story is based on real events. In 1984, <strong>Oleg Adamov</strong> was convicted of murdering railway attendant Tatyana Katsuba near Vitebsk, Soviet Belarus.</p>
                   <p>In 1985, serial killer <strong>Gennadiy Mikhaseich</strong> confessed to 42 murders — including Katsuba's. Fourteen people had already been wrongfully convicted in eleven separate trials. <strong>One was executed.</strong></p>
                   <p>The confessions were obtained through coercion. The evidence was never properly examined.</p>`,
        },
        'InterrogateAccused': {
            title: 'The Right to Counsel — Soviet law vs. practice',
            body: `<p>Soviet criminal procedure required a defense attorney to be present during interrogation. In practice, attorneys were routinely excluded during the preliminary investigation phase.</p>
                   <p>The European Court of Human Rights later ruled this practice violated the right to a fair trial. Confessions obtained without counsel are now inadmissible in most legal systems.</p>`,
        },
        'AskCircumstances': {
            title: 'Verbatim confessions — A red flag',
            body: `<p>When a suspect's oral account matches a written protocol <strong>word for word</strong>, it is a strong indicator the statement was composed by investigators, not the accused.</p>
                   <p>Genuine recollections are disorganized, contradictory, and use personal language. Protocol-perfect accounts suggest the accused was asked to memorize or read from a prepared text.</p>`,
        },
        'CheckWritten': {
            title: 'Fabricated protocols — Common in the Soviet system',
            body: `<p>Soviet investigators had strong institutional incentives to secure convictions — career advancement depended on clearance rates. Fabricated or heavily edited protocols were a documented widespread practice.</p>
                   <p>The Vitebsk case became emblematic of this systemic failure.</p>`,
        },
        'AskGuilt': {
            title: 'Physical signs of coercion',
            body: `<p>A bruise appearing <em>after</em> arrest is one of the clearest physical indicators of interrogation abuse. Under the UN Convention Against Torture (1984), any evidence of physical coercion renders a confession inadmissible.</p>
                   <p>Soviet courts routinely ignored such evidence.</p>`,
        },
        'AskPressure': {
            title: 'Sleep deprivation — A form of torture',
            body: `<p>Extended interrogation without breaks, sleep, or legal counsel is classified by international law as a form of psychological torture. Fourteen hours of continuous questioning can produce false confessions even in completely innocent people.</p>
                   <p>Studies show <strong>25–30%</strong> of false confessions follow extended interrogation sessions.</p>`,
        },
        'InterrogateWitnesses': {
            title: 'Eyewitness reliability — The science',
            body: `<p>Eyewitness testimony is the most powerful evidence in court — and the least reliable. <strong>70%</strong> of wrongful convictions later overturned by DNA evidence involved mistaken eyewitness identification.</p>
                   <p>Darkness, distance, stress, and poor eyesight all dramatically reduce accuracy.</p>`,
        },
        'HearLyashuk': {
            title: 'Night visibility — What the law requires',
            body: `<p>For eyewitness identification to be admissible, courts should evaluate: distance, lighting conditions, duration of observation, and the witness's visual acuity.</p>
                   <p>A witness 40 meters away, in February darkness, without glasses, through a window — fails every criterion of reliable identification.</p>`,
        },
        'AskFaceLyashuk': {
            title: '"I think so" — Certainty standards in identification',
            body: `<p>In most legal systems, a witness must identify a suspect with reasonable certainty — not merely a belief. Courts should treat "I think" and "I believe" as expressions of uncertainty, not identification.</p>
                   <p>In the Vitebsk case, investigator protocols frequently upgraded "I think" to "I clearly identified."</p>`,
        },
        'AskRecognize': {
            title: 'The misinformation effect',
            body: `<p>Once a witness has been told who the suspect is, their memory is contaminated. They cannot give an independent identification — they are confirming a suggestion, not recalling an observation.</p>
                   <p>This is called the <strong>misinformation effect</strong>, documented by Elizabeth Loftus in 1974.</p>`,
        },
        'CompareProtocol': {
            title: 'Protocol amendments — Chain of custody',
            body: `<p>Any amendment to a witness statement after the fact must be initialed by the witness and the investigator. Unsigned amendments are legally void.</p>
                   <p>Changing "I think" to "I clearly identified" without the witness's knowledge is evidence tampering — a criminal offence.</p>`,
        },
        'AskDifference': {
            title: 'Signing documents under duress',
            body: `<p>A witness signing a protocol they did not read is not giving informed consent. Legal systems require witnesses to read and acknowledge statements before signing.</p>
                   <p>Late-night interrogations of witnesses — after they have been awake for hours — are a known technique for obtaining signatures on documents the signer hasn't properly reviewed.</p>`,
        },
        'HearKoval': {
            title: 'Contradicting witness testimony',
            body: `<p>When two eyewitnesses describe the same person and their descriptions contradict each other — or contradict the accused — this is <strong>exculpatory evidence</strong> that must be disclosed to the defense.</p>`,
        },
        'AskDescribe': {
            title: 'Descriptive mismatch — Grounds for acquittal',
            body: `<p>A witness describing a tall, broad-shouldered man when the accused is short and slight is not merely an inconsistency — it is evidence pointing to a <em>different perpetrator</em>.</p>
                   <p>In the Vitebsk case, such contradictions were systematically ignored by both investigators and courts.</p>`,
        },
        'StudyEvidence': {
            title: 'The duty to examine — Judicial responsibility',
            body: `<p>A judge is not a passive recipient of the prosecution's case. Under both Soviet procedural law and international standards, a judge has an independent duty to examine evidence and identify deficiencies.</p>
                   <p>Convicting on incomplete or contradictory evidence is judicial negligence.</p>`,
        },
        'CheckProtocol': {
            title: 'Confessions — The "gold standard" that isn\'t',
            body: `<p>Confessions are the most convincing evidence for juries and judges — and the easiest to fabricate. The Innocence Project found that <strong>29%</strong> of wrongful convictions later overturned by DNA involved false confessions.</p>
                   <p>A confession without corroborating physical evidence should be treated with skepticism.</p>`,
        },
        'CheckTime': {
            title: '14 hours — Crossing the threshold',
            body: `<p>International standards (UN Body of Principles for Protection of Detained Persons) require that suspects be allowed rest, food, and access to counsel during interrogation.</p>
                   <p>Fourteen hours without a break, without counsel, with documented physical injury — meets the definition of <strong>torture</strong> under Article 1 of the UN Convention.</p>`,
        },
        'CheckAutopsy': {
            title: 'Trace evidence — The overlooked hair',
            body: `<p>A hair found on a victim's body is potentially the most direct physical link to the perpetrator. Failure to analyze it is not an oversight — in context, it is a deliberate choice to avoid evidence that might contradict the chosen suspect.</p>`,
        },
        'CheckDNA': {
            title: 'DNA analysis in 1984',
            body: `<p>DNA profiling was first used in criminal investigation in 1986 (Alec Jeffreys, UK). In 1984 Soviet Belarus, it was not available.</p>
                   <p>However, forensic hair microscopy — comparing hair color, texture, and root structure — <em>was</em> available and was routinely not used in the Vitebsk cases.</p>`,
        },
        'OrderExam': {
            title: 'Ordering independent analysis — Judicial power',
            body: `<p>A judge has the power to order additional forensic examination at any point in proceedings. This power is rarely used, but is one of the most important tools for ensuring a fair verdict.</p>`,
        },
        'CheckFingerprints': {
            title: 'Partial fingerprints — The science of "consistent with"',
            body: `<p>"Consistent with" is not the same as "identified as." A partial print with insufficient ridge detail cannot positively identify anyone. A prosecution claiming otherwise is misrepresenting the evidence.</p>
                   <p>In the 1980s, courts frequently allowed such misrepresentations to go unchallenged.</p>`,
        },
        'RedoExam': {
            title: 'Independent reexamination — Why it matters',
            body: `<p>Forensic experts employed by the prosecution have an institutional bias toward confirming the prosecution's theory. An independent examiner — appointed by the court — provides an objective check on this bias.</p>`,
        },
        'CheckAttendees': {
            title: 'Right to counsel — The foundational right',
            body: `<p>The right to have a lawyer present during interrogation is considered foundational in all major legal systems. Without counsel, there is no check on investigator conduct, no way to challenge questions, and no witness to what occurs in the room.</p>
                   <p>A confession obtained without counsel present should be inadmissible as a matter of course.</p>`,
        },
        'VerdictChoice': {
            title: 'The weight of a verdict',
            body: `<p>You have seen what the record contains: a coerced confession, uncertain witnesses, unexamined evidence, a bruise that appeared after arrest.</p>
                   <p>In 1984, Judge Valentina Yakovleva signed the conviction order. Adamov served ten years before Mikhaseich's arrest made the truth undeniable.</p>
                   <p>The law gives you the same choice she had.</p>`,
        },
        'GuiltyEnd': {
            title: 'The Vitebsk Case — Historical outcome',
            body: `<p>Fourteen people were wrongfully convicted. One was executed. Mikhaseich — the real killer — continued to murder until 1985.</p>
                   <p>The case became the symbol of Soviet judicial failure. Investigators, prosecutors, and judges were prosecuted. None served significant prison time.</p>`,
        },
        'AcquitEnd': {
            title: 'What acquittal means',
            body: `<p>An acquittal does not mean the crime goes unpunished — it means the state has not proven guilt to the required standard. The investigation continues.</p>
                   <p>In 1985, Mikhaseich was caught. Adamov's innocence was confirmed. But the acquitting judge in this scenario would have spared him a decade of imprisonment.</p>`,
        },
        'ReturnEnd': {
            title: 'Returning a case — The procedural delay',
            body: `<p>Returning a case for additional investigation is the procedural middle ground. In practice, in the Soviet system, it meant the case was reassigned until a judge willing to convict was found.</p>
                   <p>Procedural delay is not justice. It is justice deferred — and often denied.</p>`,
        },
    },

    'Belarusian': {
        'Start': {
            title: 'Віцебская справа — Рэальныя падзеі',
            body: `<p>Гэтая гісторыя заснавана на рэальных падзеях. У 1984 годзе <strong>Алег Адамаў</strong> быў асуджаны за забойства дзяжурнай па станцыі Тацяны Кацубы пад Віцебскам.</p>
                   <p>У 1985 годзе серыйны забойца <strong>Генадзь Міхасевіч</strong> прызнаўся ў 42 забойствах, уключаючы забойства Кацубы. Чатырнаццаць чалавек ужо былі памылкова асуджаны. <strong>Адзін — расстраляны.</strong></p>
                   <p>Прызнанні атрыманы праз прымус. Доказы так і не былі належным чынам даследаваны.</p>`,
        },
        'InterrogateAccused': {
            title: 'Права на абаронцу — Савецкае права і практыка',
            body: `<p>Савецкае крымінальна-працэсуальнае права патрабавала прысутнасці адваката падчас допыту. На практыцы адвакатаў сістэматычна адхілялі ад папярэдняга следства.</p>
                   <p>Прызнанні, атрыманыя без адваката, лічацца недапушчальнымі ў большасці прававых сістэм.</p>`,
        },
        'AskCircumstances': {
            title: 'Дослоўныя прызнанні — Трывожны знак',
            body: `<p>Калі вусны аповед абвінавачанага супадае з пісьмовым пратаколам <strong>слова ў слова</strong>, гэта моцны паказчык таго, што заява была складзена следчымі, а не абвінавачаным.</p>
                   <p>Сапраўдныя ўспаміны не ўпарадкаваныя і выкарыстоўваюць асабістую мову. Ідэальны протакольны тэкст сведчыць пра завучаны або прадыктаваны аповед.</p>`,
        },
        'CheckWritten': {
            title: 'Сфабрыкаваныя пратаколы — Сістэмная практыка',
            body: `<p>У савецкіх следчых была моцная ўнутраная матывацыя забяспечваць асуджэнні: кар'ера залежала ад раскрывальнасці. Сфабрыкаваныя або адрэдактаваныя пратаколы — задакументаваная масавая практыка.</p>
                   <p>Віцебская справа стала яе сімвалам.</p>`,
        },
        'AskGuilt': {
            title: 'Фізічныя прыкметы прымусу',
            body: `<p>Сіняк, які з'явіўся <em>пасля</em> арышту — адзін з найбольш відавочных фізічных паказчыкаў катавання на допыце. Паводле Канвенцыі ААН супраць катаванняў (1984), любыя сведчанні фізічнага прымусу робяць прызнанне недапушчальным.</p>
                   <p>Савецкія суды рэгулярна ігнаравалі такія сведчанні.</p>`,
        },
        'AskPressure': {
            title: 'Пазбаўленне сну — Форма катавання',
            body: `<p>Доўгі допыт без перапынкаў, сну і юрыдычнай дапамогі кваліфікуецца міжнародным правам як псіхалагічнае катаванне. Чатырнаццаць гадзін бесперапыннага дапытвання могуць спарадзіць ілжывыя прызнанні нават у цалкам нявінных людзей.</p>`,
        },
        'InterrogateWitnesses': {
            title: 'Надзейнасць сведкаў — Навуковы погляд',
            body: `<p>Паказанні відавочцаў — самы ўплывовы доказ у судзе і самы ненадзейны. <strong>70%</strong> памылковых прысудаў, пазней адменены дзякуючы ДНК, уключалі памылковае апазнанне.</p>
                   <p>Цемра, адлегласць, стрэс і дрэнны зрок драматычна зніжаюць дакладнасць.</p>`,
        },
        'HearLyashuk': {
            title: 'Начная бачнасць — Патрабаванні закону',
            body: `<p>Для дапушчальнасці апазнання суды павінны ацэньваць: адлегласць, асвятленне, доўгасць назірання і вастрыню зроку сведкі.</p>
                   <p>Сведка за сорак метраў, у лютаўскай цемры, без акуляраў, праз шыбу — не адпавядае ніводнаму крытэрыю надзейнага апазнання.</p>`,
        },
        'AskFaceLyashuk': {
            title: '«Мне здаецца» — Стандарты ўпэўненасці',
            body: `<p>У большасці прававых сістэм сведка павінен апазнаваць падазраванага з разумнай упэўненасцю. «Мне здаецца» і «я думаю» — выразы няўпэўненасці, а не апазнання.</p>
                   <p>У Віцебскай справе следчыя рэгулярна замянялі «мне здаецца» на «я выразна ўбачыў».</p>`,
        },
        'AskRecognize': {
            title: 'Эфект дэзінфармацыі',
            body: `<p>Як толькі сведку паведамілі, хто падазраваны, яго памяць забруджана. Ён не можа даць незалежнага апазнання — ён пацвярджае падказку, а не ўзгадвае назіранне.</p>
                   <p>Гэта называецца <strong>эфектам дэзінфармацыі</strong>, апісаным Элізабет Лофтус у 1974 годзе.</p>`,
        },
        'CompareProtocol': {
            title: 'Паправкі ў пратаколах',
            body: `<p>Любая паправа ў паказаннях сведкі пасля факту павінна быць завізавана сведкам і следчым. Незавізаваныя паправы юрыдычна недзейсныя.</p>
                   <p>Змяніць «мне здаецца» на «я выразна апазнаў» без ведама сведкі — фальсіфікацыя доказаў.</p>`,
        },
        'AskDifference': {
            title: 'Подпіс пад прымусам',
            body: `<p>Сведка, які подпісвае пратакол, не прачытаўшы яго, не дае ўсвядомленай згоды. Позняначны допыт сведак — вядомы спосаб атрымання подпісаў пад дакументамі, якія яны не прачыталі.</p>`,
        },
        'HearKoval': {
            title: 'Супярэчлівыя паказанні',
            body: `<p>Калі два відавочцы апісваюць аднаго чалавека і іх апісанні супярэчаць адно аднаму або супярэчаць абвінавачанаму — гэта <strong>апраўдальны доказ</strong>, які павінен быць перададзены абароне.</p>`,
        },
        'AskDescribe': {
            title: 'Неадпаведнасць апісання — Падстава для апраўдання',
            body: `<p>Сведка апісвае высокага шырокаплечага мужчыну, а абвінавачаны нізкарослы і вузкаплечы — гэта не проста разыходжанне, а доказ, які паказвае на <em>іншага злачынцу</em>.</p>
                   <p>У Віцебскай справе такія супярэчнасці сістэматычна ігнараваліся.</p>`,
        },
        'StudyEvidence': {
            title: 'Абавязак даследаваць — Адказнасць суддзі',
            body: `<p>Суддзя не з'яўляецца пасіўным атрымальнікам справы абвінавачання. Ён мае незалежны абавязак даследаваць доказы і выяўляць іх недахопы.</p>
                   <p>Асуджэнне на падставе няпоўных або супярэчлівых доказаў — судовая нядбайнасць.</p>`,
        },
        'CheckProtocol': {
            title: 'Прызнанні — «Залаты стандарт», якім не з\'яўляецца',
            body: `<p>Прызнанні — самы пераканаўчы доказ для суддзяў і самы лёгкі для фабрыкацыі. <strong>29%</strong> памылковых прысудаў, пазней адменены ДНК, уключалі ілжывыя прызнанні.</p>`,
        },
        'CheckTime': {
            title: '14 гадзін — Перасячэнне мяжы',
            body: `<p>Міжнародныя стандарты патрабуюць, каб падазраваным дазвалялі адпачынак, ежу і доступ да адваката падчас допыту.</p>
                   <p>Чатырнаццаць гадзін без перапынку, без адваката, са следамі фізічных пашкоджанняў — адпавядае вызначэнню <strong>катавання</strong> паводле арт. 1 Канвенцыі ААН.</p>`,
        },
        'CheckAutopsy': {
            title: 'Слядовыя доказы — Незаўважаны волас',
            body: `<p>Волас, знойдзены на целе ахвяры — патэнцыяльна самая прамая фізічная сувязь з злачынцам. Адмова ад яго аналізу — гэта не недагляд, а свядомы выбар, каб пазбегнуць доказу, які можа супярэчыць абранаму падазраванаму.</p>`,
        },
        'CheckDNA': {
            title: 'Крыміналістычны аналіз волас у 1984 годзе',
            body: `<p>ДНК-прафіляванне ўпершыню было выкарыстана ў крымінальным расследаванні ў 1986 годзе. У 1984 годзе ў СССР яго не існавала.</p>
                   <p>Аднак мікраскапічны аналіз волас — параўнанне колеру, тэкстуры і структуры — <em>быў</em> даступны і сістэматычна не выкарыстоўваўся ў Віцебскіх справах.</p>`,
        },
        'OrderExam': {
            title: 'Прызначэнне незалежнай экспертызы — Судовая ўлада',
            body: `<p>Суддзя мае права прызначыць дадатковую крыміналістычную экспертызу ў любы момант. Гэтая ўлада рэдка выкарыстоўваецца, але з'яўляецца адным з найважнейшых інструментаў справядлівасці.</p>`,
        },
        'CheckFingerprints': {
            title: 'Частковыя адбіткі — Навука «адпавядае»',
            body: `<p>«Адпавядае» — не тое самае, што «ідэнтыфікавана». Частковы адбітак з недастатковай колькасцю дэталяў не можа станоўча ідэнтыфікаваць каго-небудзь. Абвінавачанне, якое сцвярджае адваротнае, скажае доказы.</p>`,
        },
        'RedoExam': {
            title: 'Незалежная паўторная экспертыза',
            body: `<p>Крыміналісты, якія працуюць на абвінавачванне, маюць структурную схільнасць пацвярджаць яго тэорыю. Незалежны эксперт, прызначаны судом, забяспечвае аб'ектыўную праверку.</p>`,
        },
        'CheckAttendees': {
            title: 'Права на абаронцу — Аснова правасуддзя',
            body: `<p>Права мець адваката падчас допыту лічыцца фундаментальным ва ўсіх асноўных прававых сістэмах. Без адваката няма кантролю за паводзінамі следчага і сведкі таго, што адбываецца ў пакоі.</p>
                   <p>Прызнанне, атрыманае без прысутнасці адваката, павінна быць недапушчальным.</p>`,
        },
        'VerdictChoice': {
            title: 'Цяжар вердыкту',
            body: `<p>Вы бачылі, што ўтрымлівае справа: прымусовае прызнанне, няўпэўненыя сведкі, недаследаваныя доказы, сіняк, які з'явіўся пасля арышту.</p>
                   <p>У 1984 годзе суддзя Валянціна Якаўлева подпісала прысуд. Адамаў адсядзеў дзесяць гадоў да арышту Міхасевіча.</p>
                   <p>Закон дае вам той самы выбар, які быў у яе.</p>`,
        },
        'GuiltyEnd': {
            title: 'Віцебская справа — Гістарычны зыход',
            body: `<p>Чатырнаццаць чалавек памылкова асуджаны. Адзін расстраляны. Міхасевіч — сапраўдны забойца — працягваў забіваць да 1985 года.</p>
                   <p>Справа стала сімвалам правалу савецкага правасуддзя.</p>`,
        },
        'AcquitEnd': {
            title: 'Апраўданне — Што яно азначае',
            body: `<p>Апраўданне не азначае, што злачынства застаецца безнапакараным. Гэта азначае, што дзяржава не даказала віну ў патрэбнай ступені. Расследаванне працягваецца.</p>
                   <p>У 1985 годзе Міхасевіч быў затрыманы. Невінаватасць Адамава пацверджана. Але суддзя, які апраўдаў бы яго ў гэтым сцэнарыі, пазбавіў бы яго дзесяці гадоў зняволення.</p>`,
        },
        'ReturnEnd': {
            title: 'Вяртанне справы — Працэсуальная затрымка',
            body: `<p>Вяртанне справы на дадатковае расследаванне — гэта працэсуальны сярэдні шлях. На практыцы ў савецкай сістэме гэта азначала перадачу справы да таго часу, пакуль не знаходзіўся суддзя, гатовы асудзіць.</p>
                   <p>Працэсуальная затрымка — не правасуддзе. Гэта адкладзенае — і часта адмоўленае — правасуддзе.</p>`,
        },
    },
};

const DEFAULT_INFO = {
    'English': {
        title: 'The Vitebsk Case',
        body: `<p>This visual novel is based on the real 1984 Vitebsk case, in which 14 people were wrongfully convicted due to coerced confessions and suppressed evidence. One was executed.</p>`,
    },
    'Belarusian': {
        title: 'Віцебская справа',
        body: `<p>Гэтая візуальная навэла заснавана на рэальнай Віцебскай справе 1984 года, у якой 14 чалавек былі памылкова асуджаны з-за прымусовых прызнанняў і схаваных доказаў. Адзін быў расстраляны.</p>`,
    },
};

function currentLabel() {
    try {
        return Monogatari.default.state('label') || 'Start';
    } catch (_) {
        return 'Start';
    }
}

function currentLanguage() {
    return Monogatari.default.preference('Language') || 'English';
}

function openInfoPanel() {
    const label = currentLabel();
    const lang = currentLanguage();
    const info = (LEGAL_INFO[lang] && LEGAL_INFO[lang][label]) || (DEFAULT_INFO[lang] || DEFAULT_INFO['English']);
    
    document.getElementById('info-title').innerHTML = info.title;
    document.getElementById('info-body').innerHTML = info.body;
    const panel = document.getElementById('info-panel');
    panel.hidden = false;
    panel.removeAttribute('hidden');
    requestAnimationFrame(() => panel.classList.add('visible'));
}

function closeInfoPanel() {
    const panel = document.getElementById('info-panel');
    panel.classList.remove('visible');
    panel.addEventListener('transitionend', () => { panel.hidden = true; }, { once: true });
}

const infoBtn = document.getElementById('info-btn');
const langBtn = document.getElementById('lang-btn');
function showInfoBtn() { 
    infoBtn.classList.add('visible'); 
}
function hideInfoBtn() { 
    infoBtn.classList.remove('visible'); 
}

let choiceWasPresent = false;
let slidesAfterChoice = 0;

function onDialogAdvance() {
    if (!infoBtn.classList.contains('visible')) return;
    slidesAfterChoice++;
    if (slidesAfterChoice >= 2) {
        hideInfoBtn();
        closeInfoPanel();
        slidesAfterChoice = 0;
    }
}

const choiceObserver = new MutationObserver(() => {
    const choiceContainer = document.querySelector('choice-container');
    if (choiceContainer) {
        choiceWasPresent = true;
        hideInfoBtn();
        closeInfoPanel();
    } else if (choiceWasPresent) {
        choiceWasPresent = false;
        slidesAfterChoice = 0;
        // Small delay so Monogatari updates state('label') before we read it
        setTimeout(() => {
            showInfoBtn();
        }, 120);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('monogatari');
    if (root) choiceObserver.observe(root, { childList: true, subtree: true });

    // Ensure info button is visible if we're already in a game state
    setTimeout(() => {
        if (Monogatari.default.state('label')) {
            showInfoBtn();
        }
    }, 500);

    document.addEventListener('click', (e) => {
        const gameScreen = document.querySelector('game-screen');
        if (
            gameScreen &&
            gameScreen.contains(e.target) &&
            !e.target.closest('#info-btn') &&
            !e.target.closest('#lang-btn') &&
            !e.target.closest('#info-panel')
        ) {
            onDialogAdvance();
        }
    });
});

document.getElementById('info-btn').addEventListener('click', () => {
    const panel = document.getElementById('info-panel');
    if (panel.classList.contains('visible')) {
        closeInfoPanel();
    } else {
        openInfoPanel();
    }
});

document.getElementById('info-close').addEventListener('click', closeInfoPanel);

document.getElementById('info-panel').addEventListener('click', function (e) {
    if (e.target === this) closeInfoPanel();
});

document.getElementById('lang-btn').addEventListener('click', () => {
    try {
        const current = Monogatari.default.preference('Language') || 'English';
        const next = current === 'English' ? 'Belarusian' : 'English';

        langBtn.textContent = next === 'English' ? 'BY' : 'EN';
        Monogatari.default.preference('Language', next);
        Monogatari.default.localize();
        closeInfoPanel();

        if (Monogatari.default.global('playing')) {
            const activeLabel = Monogatari.default.state('label');
            // Clear choice block so run() isn't ignored when choices are showing
            Monogatari.default.global('block', false);
            Monogatari.default.global('_CurrentChoice', []);
            document.querySelector('choice-container')?.remove();
            Monogatari.default.run('jump ' + activeLabel, false);
        }
    } catch (e) {
        console.error('lang-btn error:', e);
    }
});

// Hammer animation — called directly from script.js function actions
window.playHammer = function () {
    return new Promise((resolve) => {
        const overlay = document.getElementById('hammer-overlay');
        const sprite = document.getElementById('hammer-sprite');
        overlay.hidden = false;
        sprite.style.animation = 'none';
        sprite.offsetHeight; // force reflow
        sprite.style.animation = '';
        setTimeout(() => {
            overlay.hidden = true;
            resolve();
        }, 1800);
    });
};

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !document.getElementById('info-panel').hidden) closeInfoPanel();
    if (e.key === 'r' || e.key === 'R') {
        Monogatari.default.reset().then(() => Monogatari.default.run('jump Start', false));
    }
});
