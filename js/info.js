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
        'DeathEnd': {
            title: 'Capital punishment — The irreversible verdict',
            body: `<p>Capital punishment is the only sentence that cannot be corrected after the fact. In the Vitebsk case, the state executed <strong>Ivan Markelov</strong> for a murder committed by Gennadiy Mikhaseich.</p>
                   <p>Between 1984 and 1987 — before Mikhaseich was caught — at least one more wrongful death sentence was carried out. No posthumous rehabilitation restores a life.</p>
                   <p><strong>Belarus remains the last country in Europe to carry out executions.</strong></p>`,
        },
        'GuiltyEnd': {
            title: 'The Vitebsk Case — Historical outcome',
            body: `<p>Fourteen people were wrongfully convicted. One was executed. Mikhaseich — the real killer — continued to murder until 1985.</p>
                   <p>The case became the symbol of Soviet judicial failure. Investigators, prosecutors, and judges were prosecuted. None served significant prison time.</p>`,
        },
        'ReturnEnd': {
            title: 'Returning a case — The procedural middle ground',
            body: `<p>Returning a case for additional investigation is the procedural middle ground. In practice, in the Soviet system, it meant the case was reassigned until a judge willing to convict was found.</p>
                   <p>No judge returned the Adamov case. But returning it was the only action that could have preserved the possibility of justice.</p>`,
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
        'DeathEnd': {
            title: 'Смяротнае пакаранне — Незваротны вердыкт',
            body: `<p>Смяротнае пакаранне — адзіны прысуд, які нельга выправіць задным лікам. У Віцебскай справе дзяржава расстраляла <strong>Івана Маркелава</strong> за забойства, здзейсненае Генадзем Міхасевічам.</p>
                   <p>Паміж 1984 і 1987 гадамі — пакуль Міхасевіча не злавілі — быў выкананы яшчэ мінімум адзін памылковы смяротны прысуд. Ніякая пасмяротная рэабілітацыя не вяртае жыццё.</p>
                   <p><strong>Беларусь застаецца апошняй краінай Еўропы, дзе прыводзяцца ў выкананне смяротныя прысуды.</strong></p>`,
        },
        'GuiltyEnd': {
            title: 'Віцебская справа — Гістарычны зыход',
            body: `<p>Чатырнаццаць чалавек памылкова асуджаны. Адзін расстраляны. Міхасевіч — сапраўдны забойца — працягваў забіваць да 1985 года.</p>
                   <p>Справа стала сімвалам правалу савецкага правасуддзя.</p>`,
        },
        'ReturnEnd': {
            title: 'Вяртанне справы — Працэсуальны сярэдні шлях',
            body: `<p>Вяртанне справы на дадатковае расследаванне — гэта працэсуальны сярэдні шлях. На практыцы ў савецкай сістэме гэта азначала перадачу справы да таго часу, пакуль не знаходзіўся суддзя, гатовы асудзіць.</p>
                   <p>Ніводны суддзя не вярнуў справу Адамава. Але гэта было адзінае дзеянне, якое магло захаваць магчымасць правасуддзя.</p>`,
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

function injectNotebookSummary(choiceContainer) {
    if (choiceContainer.querySelector('.notebook-summary')) return;

    const nameEl = document.querySelector('[data-content="character-name"]');
    const dialogEl = document.querySelector('[data-content="dialog"]');

    const name = nameEl ? nameEl.textContent.trim() : '';
    const dialog = dialogEl ? dialogEl.textContent.trim() : '';

    if (!dialog) return;

    const summary = document.createElement('div');
    summary.className = 'notebook-summary';
    const label = name ? `${name}: ${dialog}` : dialog;
    // Truncate at ~120 chars
    summary.textContent = label.length > 120 ? label.slice(0, 117) + '…' : label;

    choiceContainer.insertBefore(summary, choiceContainer.firstChild);
}

const choiceObserver = new MutationObserver(() => {
    const choiceContainer = document.querySelector('choice-container');
    if (choiceContainer) {
        choiceWasPresent = true;
        hideInfoBtn();
        closeInfoPanel();
        // Inject summary after a tick so Monogatari has rendered the dialog text
        setTimeout(() => injectNotebookSummary(choiceContainer), 80);
    } else if (choiceWasPresent) {
        choiceWasPresent = false;
        slidesAfterChoice = 0;
        // Small delay so Monogatari updates state('label') before we read it
        setTimeout(() => {
            showInfoBtn();
        }, 120);
    }
});

function setSceneProps(visible) {
    ['prop-clipboard', 'prop-case-doc', 'prop-gavel'].forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        if (visible) {
            el.removeAttribute('hidden');
        } else {
            el.setAttribute('hidden', '');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('monogatari');
    if (root) choiceObserver.observe(root, { childList: true, subtree: true });

    // Watch game-screen active class to show/hide scene props
    const gameScreen = document.querySelector('[data-screen="game"]');
    if (gameScreen) {
        const gameScreenObserver = new MutationObserver(() => {
            setSceneProps(gameScreen.classList.contains('active'));
        });
        gameScreenObserver.observe(gameScreen, { attributes: true, attributeFilter: ['class'] });
        // Set initial state
        setSceneProps(gameScreen.classList.contains('active'));
    }

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

// ── Epilogue data — real Vitebsk case story ────────────────────
const EPILOGUE_BODY = {
    'English': `
        <p>Between 1971 and 1985, <strong>Gennadiy Mikhaseich</strong> murdered at least 36 women in the Vitebsk region of Soviet Belarus. He was a married Communist Party member who worked at the Vitebsk Electric Meter Plant. To his neighbors he was unremarkable.</p>
        <p>As the murders continued without a suspect, the KGB and regional police faced institutional pressure to make arrests and clear cases. They did — repeatedly.</p>
        <p><strong>Fourteen people were convicted in eleven separate trials.</strong> Each conviction was built on the same foundation: a confession obtained during extended interrogation without legal counsel, followed by investigative protocols that matched the confession word for word.</p>
        <p>One of those fourteen was <strong>Ivan Markelov</strong>. He was executed in 1983 for a murder he did not commit. He was thirty-one years old.</p>
        <hr>
        <p><strong>Oleg Adamov</strong> was arrested in January 1984. He was twenty-seven years old — a truck driver, married, with a young child. He was held for fourteen hours without access to a lawyer. He signed a confession prepared by the investigators. At trial he recanted — clearly, in front of the bench. It made no difference.</p>
        <p>The court accepted the written confession, a photograph recovered from his barn, and the testimony of two witnesses who were not certain of what they had seen. Verdict: guilty. Fifteen years of corrective labor.</p>
        <hr>
        <p>In August 1985, <strong>Mikhaseich was detained near Polotsk</strong> after a woman managed to escape from his vehicle. Under questioning he confessed to 36 murders. Forensic evidence confirmed his guilt. He was tried and executed in 1987.</p>
        <p>The wrongful convictions were reviewed. Thirteen of the fourteen were released and rehabilitated. <strong>Ivan Markelov could not be rehabilitated. He was dead.</strong></p>
        <p>Adamov was released after serving nearly a decade. He was thirty-seven years old. He received a formal document stating that his conviction had been an error.</p>
        <hr>
        <p>Judge Valentina Yakovleva was not prosecuted. The investigators who conducted the interrogations were not prosecuted. The system that produced these outcomes was not reformed.</p>
        <p>The Vitebsk case became a landmark in the Soviet debate over capital punishment — proof that the state had already killed an innocent man and could not know when it might do so again.</p>
        <p>That debate was never resolved. <strong>Belarus remains the last country in Europe to carry out executions.</strong></p>
    `,
    'Belarusian': `
        <p>З 1971 па 1985 год <strong>Генадзь Міхасевіч</strong> забіў не менш за 36 жанчын у Віцебскай вобласці Савецкай Беларусі. Ён быў жанатым членам Кампартыі, які працаваў на Віцебскім заводзе вымяральных прыбораў. Для суседзяў — звычайны чалавек.</p>
        <p>Пакуль забойствы працягваліся без падазраванага, КДБ і абласная міліцыя адчувалі ўнутраны ціск: трэба было рабіць арышты і «закрываць» справы. І яны рабілі гэта — зноў і зноў.</p>
        <p><strong>Чатырнаццаць чалавек было асуджана ў адзінаццаці асобных судовых працэсах.</strong> Кожны прысуд быў пабудаваны на адной аснове: прызнанні, атрыманым пасля доўгага допыту без адваката, і следчых пратаколах, якія слова ў слова супадалі з прызнаннем.</p>
        <p>Адным з гэтых чатырнаццаці быў <strong>Іван Маркелаў</strong>. Яго расстралялі ў 1983 годзе за забойства, якога ён не здзяйсняў. Яму было трыццаць адзін год.</p>
        <hr>
        <p><strong>Алег Адамаў</strong> быў арыштаваны ў студзені 1984 года. Яму было дваццаць сем гадоў — вадзіцель грузавіка, жанаты, з маленькім дзіцем. Яго трымалі чатырнаццаць гадзін без доступу да адваката. Ён падпісаў прызнанне, складзенае следчымі. На судзе публічна адмовіўся ад яго — выразна, перад усімі. Гэта нічога не змяніла.</p>
        <p>Суд прыняў пісьмовае прызнанне, фатаграфію з хлява і паказанні двух сведкаў, якія не былі ўпэўнены ў тым, што бачылі. Вердыкт: вінаваты. Пятнаццаць гадоў папраўча-працоўных лагераў.</p>
        <hr>
        <p>У жніўні 1985 года <strong>Міхасевіча затрымалі каля Полацка</strong> — жанчыне ўдалося ўцячы з яго машыны. На допыце ён прызнаўся ў 36 забойствах. Крыміналістычная экспертыза пацвердзіла яго віну. Міхасевіч быў асуджаны і расстраляны ў 1987 годзе.</p>
        <p>Памылковыя прысуды перагледзелі. Трынаццаць з чатырнаццаці вызвалілі і рэабілітавалі. <strong>Івана Маркелава рэабілітаваць было немагчыма. Ён быў мёртвы.</strong></p>
        <p>Адамаў быў вызвалены пасля амаль дзесяці гадоў зняволення. Яму было трыццаць сем гадоў. Ён атрымаў афіцыйны дакумент, у якім сцвярджалася, што яго асуджэнне было памылкай.</p>
        <hr>
        <p>Суддзя Валянціна Якаўлева не была прыцягнута да адказнасці. Следчыя, якія праводзілі допыты, — таксама. Сістэма, якая спарадзіла гэтыя вынікі, не была рэфармавана.</p>
        <p>Віцебская справа стала знакавай у савецкай дыскусіі аб смяротным пакаранні — доказ таго, што дзяржава ўжо пакарала смерцю нявіннага чалавека і не магла ведаць, калі зробіць гэта зноў.</p>
        <p>Гэтая дыскусія так і не была вырашана. <strong>Беларусь застаецца апошняй краінай Еўропы, дзе прыводзяцца ў выкананне смяротныя прысуды.</strong></p>
    `,
};

const EPILOGUE_INTRO = {
    'English': {
        'DeathEnd':   { text: 'You sentenced an innocent man to death. The court erupted in applause. A prison sentence can still be reversed. An execution cannot. Your mistake cost a human life.',                                            cls: 'ep-same'      },
        'GuiltyEnd':  { text: 'You sentenced the accused to 25 years. Nobody was particularly satisfied. But this man remained alive. The mistake could be corrected — even if too late.',                                                      cls: 'ep-same'      },
        'ReturnEnd':  { text: 'You noticed inconsistencies and returned the case for further investigation. Your career was destroyed. But you did not send an innocent man to prison or to death. And with that you will live — with a clear conscience.', cls: 'ep-different' },
    },
    'Belarusian': {
        'DeathEnd':   { text: 'Ты выносіш смяротны прысуд. Зала суда выбухае апладысментамі. Турэмны прысуд яшчэ можна адмяніць. Смяротнае пакаранне — не. Твая памылка каштавала чалавечага жыцця.',                                         cls: 'ep-same'      },
        'GuiltyEnd':  { text: 'Ты прысуджаеш абвінавачанага да 25 гадоў турмы. Ніхто асабліва не задаволены. Але гэты чалавек застаўся жывым. Памылку ўдалося выправіць, хай і занадта позна.',                                                cls: 'ep-same'      },
        'ReturnEnd':  { text: 'Ты заўважаеш нестыкоўкі ў справе і вяртаеш яе на дапрацоўку. Твая кар\'ера знішчана. Але ты не адправіў невінаватага чалавека ў турму ці на смерць. І з гэтым табе давядзецца жыць усё астатняе жыццё — са спакойным сумленнем.', cls: 'ep-different' },
    },
};

const EPILOGUE_CONTINUE_LABEL = { 'English': 'Continue', 'Belarusian': 'Працягнуць' };

window.showEpilogue = function (endingType) {
    return new Promise((resolve) => {
        const lang = (Monogatari.default.preference('Language') || 'Belarusian');
        const L = lang === 'English' ? 'English' : 'Belarusian';

        // Hide all scene props — show just the wood background
        setSceneProps(false);

        // Force Monogatari's background layer invisible.
        // CSS !important overrides inline styles; adding the class is enough.
        document.documentElement.classList.add('epilogue-active');

        const overlay   = document.getElementById('epilogue-overlay');
        const introEl   = document.getElementById('epilogue-intro');
        const bodyEl    = document.getElementById('epilogue-body');
        const btn       = document.getElementById('epilogue-continue');

        const intro = EPILOGUE_INTRO[L][endingType] || EPILOGUE_INTRO[L]['GuiltyEnd'];
        introEl.innerHTML = `<span class="${intro.cls}">${intro.text}</span>`;
        bodyEl.innerHTML  = EPILOGUE_BODY[L];
        btn.textContent   = EPILOGUE_CONTINUE_LABEL[L];

        // Scroll to top in case it was opened before
        const content = document.getElementById('epilogue-content');
        if (content) content.scrollTop = 0;

        overlay.removeAttribute('hidden');

        function onContinue () {
            btn.removeEventListener('click', onContinue);
            overlay.setAttribute('hidden', '');
            document.documentElement.classList.remove('epilogue-active');
            resolve();
        }
        btn.addEventListener('click', onContinue);
    });
};


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

// ── Evidence folder ────────────────────────────────────────────
const EVIDENCE_DOCS = {
    'English': [
        {
            header: 'Criminal Case No. 1583-XX / Confession Protocol',
            body: `<p><strong>Date:</strong> 18 January 1984. <strong>Duration:</strong> 14 hours 20 minutes.<br>
                   <strong>Present:</strong> Investigator Morozov V.I. Defense counsel: <em>absent.</em></p>
                   <p>The accused, Adamov O.V., states: <em>"On the evening of 14 November 1983 I was near the railway platform. I saw the victim. I followed her. I struck her. I left the scene."</em></p>
                   <p>The accused signs the protocol without amendments.</p>
                   <p><strong>Note:</strong> A bruise on the left cheekbone, not present at the time of arrest, is visible in the photographs taken on 19 January.</p>`,
        },
        {
            header: 'Criminal Case No. 1583-XX / Autopsy Report',
            body: `<p><strong>Victim:</strong> Katsuba T.A., age 24. <strong>Cause of death:</strong> blunt force trauma to the head.</p>
                   <p><strong>Physical evidence collected:</strong><br>
                   — Clothing fibres, dark colour<br>
                   — One hair, not belonging to the victim, found on the coat collar</p>
                   <p><strong>Hair analysis:</strong> <em>Not performed.</em> Sample retained in evidence bag No. 7-B.</p>
                   <p><strong>Fingerprints:</strong> One partial print recovered from victim's bag. Analysis: <em>"consistent with"</em> the accused. Ridge count insufficient for positive identification.</p>`,
        },
        {
            header: 'Criminal Case No. 1583-XX / Witness Statement — Lyashuk N.P.',
            body: `<p><strong>Date of statement:</strong> 22 January 1984.<br>
                   <strong>Witness:</strong> Lyashuk Nadezhda Petrovna, age 61. Resides opposite the platform.</p>
                   <p><em>"On the evening in question I was at my window. I saw a man near the platform. I think it was him — the one they showed me at the identification parade."</em></p>
                   <p><strong>Conditions of observation:</strong> Distance — approximately 40 metres. Time — 22:40. Lighting — single street lamp, partially obscured. Witness wears corrective lenses; was not wearing them at time of observation.</p>
                   <p><strong>Protocol amendment</strong> (unsigned, initialled by investigator only): "I think" crossed out; replaced with "I clearly identified."</p>`,
        },
        {
            header: 'Criminal Case No. 1583-XX / Witness Statement — Koval S.M.',
            body: `<p><strong>Date of statement:</strong> 24 January 1984.<br>
                   <strong>Witness:</strong> Koval Sergei Mikhailovich, age 34. Passed by platform at estimated 22:35.</p>
                   <p><em>"I saw a man walking quickly away from the platform. He was tall — I would say 180–185 centimetres — broad shoulders, heavy build. Dark jacket."</em></p>
                   <p><strong>Note for file:</strong> The accused, Adamov O.V., is recorded at 171 cm, slight build.</p>
                   <p>Koval's description was not included in the summary of evidence presented to the court.</p>`,
        },
        {
            header: 'Criminal Case No. 1583-XX / Interrogation Log',
            body: `<p><strong>Session 1:</strong> 18 Jan 1984, 08:00 — 22:20. Duration: <strong>14 hours 20 minutes.</strong><br>
                   Breaks: none recorded. Meals: none recorded.<br>
                   Defense counsel present: <strong>No.</strong></p>
                   <p><strong>Session 2:</strong> 19 Jan 1984, 09:00 — 12:40. Duration: 3 hours 40 minutes.<br>
                   Defense counsel present: No.</p>
                   <p>Confession signed at end of Session 1.<br>
                   At trial, the accused stated: <em>"I signed because I was told it would go easier for me. I did not commit this crime."</em></p>`,
        },
        {
            header: 'Criminal Case No. 1583-XX / Photograph — Evidence Item 4',
            body: `<p><strong>Description:</strong> Photograph recovered from barn on property of Adamov O.V. Shows the accused near a railway platform, undated.</p>
                   <p><strong>Provenance:</strong> Seized during search on 19 January 1984 without itemised warrant. Chain of custody record: incomplete.</p>
                   <p><strong>Prosecution position:</strong> Places accused at the scene.<br>
                   <strong>Defense position:</strong> Platform is a public location; photograph undated; provenance unverified.</p>
                   <p><em>The court accepted the photograph as corroborating evidence.</em></p>`,
        },
    ],
    'Belarusian': [
        {
            header: 'Крымінальная справа №1583-XX / Пратакол прызнання',
            body: `<p><strong>Дата:</strong> 18 студзеня 1984 г. <strong>Працягласць:</strong> 14 гадзін 20 хвілін.<br>
                   <strong>Прысутнічалі:</strong> следчы Марозаў У.І. Абаронца: <em>адсутнічаў.</em></p>
                   <p>Абвінавачаны Адамаў А.В. паказвае: <em>«Увечары 14 лістапада 1983 г. я знаходзіўся каля чыгуначнай платформы. Я ўбачыў ахвяру. Я пайшоў за ёй. Я ўдарыў яе. Я сышоў з месца здарэння».</em></p>
                   <p>Абвінавачаны подпісвае пратакол без паправак.</p>
                   <p><strong>Заўвага:</strong> На фатаграфіях, зробленых 19 студзеня, бачны сіняк на левай шчацэ, якога не было пры арышце.</p>`,
        },
        {
            header: 'Крымінальная справа №1583-XX / Акт судова-медыцынскай экспертызы',
            body: `<p><strong>Ахвяра:</strong> Кацуба Т.А., 24 гады. <strong>Прычына смерці:</strong> тупая траўма галавы.</p>
                   <p><strong>Сабраныя рэчавыя доказы:</strong><br>
                   — Валакна адзення, цёмнага колеру<br>
                   — Адзін волас, які не належыць ахвяры, знойдзены на каўняры паліто</p>
                   <p><strong>Аналіз волас:</strong> <em>Не праведзены.</em> Узор захоўваецца ў канверце №7-Б.</p>
                   <p><strong>Адбіткі пальцаў:</strong> Адзін частковы адбітак на сумцы ахвяры. Аналіз: <em>«адпавядае»</em> абвінавачанаму. Колькасць папілярных ліній недастатковая для станоўчай ідэнтыфікацыі.</p>`,
        },
        {
            header: 'Крымінальная справа №1583-XX / Паказанні сведкі — Ляшук Н.П.',
            body: `<p><strong>Дата паказанняў:</strong> 22 студзеня 1984 г.<br>
                   <strong>Сведка:</strong> Ляшук Надзея Пятроўна, 61 год. Жыве насупраць платформы.</p>
                   <p><em>«Увечары я стаяла каля акна. Я бачыла мужчыну каля платформы. Мне здаецца, гэта быў ён — той, якога мне паказалі на апазнанні».</em></p>
                   <p><strong>Умовы назірання:</strong> Адлегласць — каля 40 метраў. Час — 22:40. Асвятленне — адзін ліхтар, часткова перакрыты. Сведка носіць акуляры; падчас назірання іх не было.</p>
                   <p><strong>Паправа ў пратаколе</strong> (не завізавана сведкам, завізавана толькі следчым): «мне здаецца» закрэслена; замест — «я выразна апазнала».</p>`,
        },
        {
            header: 'Крымінальная справа №1583-XX / Паказанні сведкі — Коваль С.М.',
            body: `<p><strong>Дата паказанняў:</strong> 24 студзеня 1984 г.<br>
                   <strong>Сведка:</strong> Коваль Сяргей Міхайлавіч, 34 гады. Праходзіў каля платформы каля 22:35.</p>
                   <p><em>«Я бачыў мужчыну, які хутка ішоў ад платформы. Высокі — я б сказаў 180–185 сантыметраў — шырокія плечы, цяжкаватая будова. Цёмная куртка».</em></p>
                   <p><strong>Заўвага:</strong> Абвінавачаны Адамаў А.В. — рост 171 см, хударлявы.</p>
                   <p>Апісанне Коваля не ўвайшло ў зводку доказаў, прадстаўленых суду.</p>`,
        },
        {
            header: 'Крымінальная справа №1583-XX / Журнал допытаў',
            body: `<p><strong>Сеанс 1:</strong> 18 студз. 1984 г., 08:00 — 22:20. Працягласць: <strong>14 гадзін 20 хвілін.</strong><br>
                   Перапынкі: не зафіксаваны. Ежа: не зафіксавана.<br>
                   Прысутнасць абаронцы: <strong>Не.</strong></p>
                   <p><strong>Сеанс 2:</strong> 19 студз. 1984 г., 09:00 — 12:40. Працягласць: 3 гадзіны 40 хвілін.<br>
                   Прысутнасць абаронцы: Не.</p>
                   <p>Прызнанне подпісана ў канцы сеанса 1.<br>
                   На судзе абвінавачаны заявіў: <em>«Я подпісаў, таму што мне сказалі: так будзе лепш. Я не здзяйсняў гэтага злачынства».</em></p>`,
        },
        {
            header: 'Крымінальная справа №1583-XX / Фатаграфія — рэчавы доказ №4',
            body: `<p><strong>Апісанне:</strong> Фатаграфія, знойдзеная ў хляве Адамава А.В. На ёй абвінавачаны каля чыгуначнай платформы, без даты.</p>
                   <p><strong>Паходжанне:</strong> Выялена пры ператрусе 19 студзеня 1984 г. без пазіцыйнага ордэра. Ланцужок захавання доказаў: <em>няпоўны.</em></p>
                   <p><strong>Пазіцыя абвінавачання:</strong> Размяшчае абвінавачанага на месцы злачынства.<br>
                   <strong>Пазіцыя абароны:</strong> Платформа — публічнае месца; фатаграфія без даты; паходжанне не пацверджана.</p>
                   <p><em>Суд прыняў фатаграфію ў якасці дадатковага доказу.</em></p>`,
        },
    ],
};

(function initFolder() {
    const overlay = document.getElementById('folder-overlay');
    const headerEl = document.getElementById('folder-doc-header');
    const bodyEl = document.getElementById('folder-doc-body');
    const counterEl = document.getElementById('folder-counter');
    const prevBtn = document.getElementById('folder-prev');
    const nextBtn = document.getElementById('folder-next');
    const closeBtn = document.getElementById('folder-close');
    const caseProp = document.getElementById('prop-case-doc');

    let currentIdx = 0;

    function lang() {
        try { return Monogatari.default.preference('Language') || 'English'; } catch (_) { return 'English'; }
    }

    function renderDoc(idx) {
        const docs = EVIDENCE_DOCS[lang() === 'Belarusian' ? 'Belarusian' : 'English'];
        const doc = docs[idx];
        headerEl.textContent = doc.header;
        bodyEl.innerHTML = doc.body;
        counterEl.textContent = `${idx + 1} / ${docs.length}`;
        prevBtn.disabled = idx === 0;
        nextBtn.disabled = idx === docs.length - 1;
        document.getElementById('folder-doc-content').scrollTop = 0;
    }

    function openFolder() {
        currentIdx = 0;
        renderDoc(0);
        overlay.removeAttribute('hidden');
    }

    function closeFolder() {
        overlay.setAttribute('hidden', '');
    }

    caseProp.addEventListener('click', () => {
        if (!document.querySelector('[data-screen="game"]')?.classList.contains('active')) return;
        openFolder();
    });

    prevBtn.addEventListener('click', () => { if (currentIdx > 0) renderDoc(--currentIdx); });
    nextBtn.addEventListener('click', () => {
        const docs = EVIDENCE_DOCS[lang() === 'Belarusian' ? 'Belarusian' : 'English'];
        if (currentIdx < docs.length - 1) renderDoc(++currentIdx);
    });
    closeBtn.addEventListener('click', closeFolder);
    overlay.addEventListener('click', (e) => { if (e.target === overlay) closeFolder(); });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !overlay.hidden) closeFolder();
        if (!overlay.hidden) {
            if (e.key === 'ArrowLeft') prevBtn.click();
            if (e.key === 'ArrowRight') nextBtn.click();
        }
    });
}());

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !document.getElementById('info-panel').hidden) closeInfoPanel();
    if (e.key === 'r' || e.key === 'R') {
        Monogatari.default.reset().then(() => Monogatari.default.run('jump Start', false));
    }
});
