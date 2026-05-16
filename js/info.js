const LEGAL_INFO = {
    'Start': {
        title: 'First-Degree Murder — The charge',
        body: `
            <p><strong>First-degree murder</strong> is the most serious homicide charge. Prosecutors must prove three things:</p>
            <ul>
                <li><strong>Premeditation</strong> — the killing was planned in advance, even if only moments before.</li>
                <li><strong>Intent</strong> — the defendant specifically meant to cause death.</li>
                <li><strong>Deliberation</strong> — the act was carried out with a calm, measured mind, not in sudden rage.</li>
            </ul>
            <p>Conviction carries <strong>25 years to life</strong>. In some U.S. states, it can mean the <strong>death penalty</strong>.</p>
        `,
    },
    'NotGuilty': {
        title: 'Not Guilty Plea — What it actually means',
        body: `
            <p>A <strong>not guilty plea</strong> is not a claim of innocence — it is a legal instruction to the prosecution: <em>prove it.</em></p>
            <ul>
                <li>The case enters <strong>discovery</strong>: both sides exchange evidence and witness lists.</li>
                <li>Defense can file <strong>suppression motions</strong> to exclude illegally obtained evidence.</li>
                <li>The prosecution must prove guilt <strong>beyond a reasonable doubt</strong> — the highest standard in law.</li>
            </ul>
            <p>Only about <strong>3%</strong> of criminal cases in the U.S. actually reach a jury verdict.</p>
        `,
    },
    'Silent': {
        title: 'Right to Silence — Fifth Amendment',
        body: `
            <p>The <strong>Fifth Amendment</strong> guarantees that no person can be compelled to be a witness against themselves.</p>
            <ul>
                <li>Refusing to enter a plea cannot be used as evidence of guilt.</li>
                <li>The court automatically enters <strong>not guilty</strong> on the defendant's behalf.</li>
                <li>Prosecutors are constitutionally barred from telling a jury the defendant stayed silent.</li>
            </ul>
            <p>Established in <em>Griffin v. California (1965)</em> — silence is a protected legal act, not an admission.</p>
        `,
    },
    'Convergence': {
        title: 'Plea Bargaining — The hidden engine of criminal justice',
        body: `
            <p>Over <strong>97% of federal convictions</strong> result from guilty pleas, most negotiated through plea deals — not trials.</p>
            <p>A typical deal offers:</p>
            <ul>
                <li>A <strong>reduced charge</strong> — e.g., second-degree instead of first-degree murder.</li>
                <li>A <strong>sentencing cap</strong> — the DA agrees to recommend a specific maximum.</li>
                <li>In capital cases: <strong>life imprisonment instead of the death penalty</strong>.</li>
            </ul>
            <p>Critics call this the <em>"trial penalty"</em> — defendants who refuse deals and lose at trial often receive sentences 3–5× longer than what was offered.</p>
        `,
    },
    'FightEnd': {
        title: 'Going to Trial — The trial penalty',
        body: `
            <p>The <strong>trial penalty</strong> is the measurable gap between the sentence offered in a plea deal and the sentence imposed after a trial conviction.</p>
            <ul>
                <li>In capital cases, rejecting a plea can mean the difference between <strong>life in prison and execution</strong>.</li>
                <li>The Sixth Amendment guarantees the right to trial — but exercising it carries a documented statistical cost.</li>
                <li>The National Association of Criminal Defense Lawyers documented cases where defendants received sentences <strong>five times longer</strong> for going to trial.</li>
            </ul>
        `,
    },
    'Guilty': {
        title: 'Pleading Guilty — Rights you permanently waive',
        body: `
            <p>By entering a guilty plea, the defendant <strong>irrevocably waives</strong> three constitutional rights:</p>
            <ul>
                <li>The right to a <strong>jury trial</strong>.</li>
                <li>The right to <strong>confront and cross-examine witnesses</strong>.</li>
                <li>The right against <strong>self-incrimination</strong>.</li>
            </ul>
            <p>The judge is required to confirm the plea is <strong>knowing and voluntary</strong> — not made under coercion or misunderstanding. A guilty plea to first-degree murder can still result in <strong>life without parole</strong> regardless of any deal.</p>
        `,
    },
    'ProsecutorEvidence': {
        title: 'Physical Evidence — Forensic proof in a guilty plea',
        body: `
            <p>Even with a guilty plea, a judge must confirm a <strong>factual basis</strong> — real evidence the crime occurred and the defendant committed it.</p>
            <ul>
                <li><strong>Fingerprints</strong> — prove presence, not intent. Alone, insufficient for premeditation.</li>
                <li><strong>Cell tower data</strong> — places a phone at a location within a time window. Accurate to within ~1 km.</li>
                <li><strong>Eyewitness ID</strong> — legally powerful but statistically unreliable; linked to <strong>69%</strong> of DNA-exonerated wrongful convictions.</li>
            </ul>
            <p>The judge is verifying facts, not conducting a trial.</p>
        `,
    },
    'ProsecutorEvidenceThenDecision': {
        title: 'Physical Evidence — Forensic proof in a guilty plea',
        body: `
            <p>Even with a guilty plea, a judge must confirm a <strong>factual basis</strong> — real evidence the crime occurred and the defendant committed it.</p>
            <ul>
                <li><strong>Fingerprints</strong> — prove presence, not intent. Alone, insufficient for premeditation.</li>
                <li><strong>Cell tower data</strong> — places a phone at a location within a time window. Accurate to within ~1 km.</li>
                <li><strong>Eyewitness ID</strong> — legally powerful but statistically unreliable; linked to <strong>69%</strong> of DNA-exonerated wrongful convictions.</li>
            </ul>
            <p>The judge is verifying facts, not conducting a trial.</p>
        `,
    },
    'ProsecutorMotive': {
        title: 'Motive — Not required, but decisive',
        body: `
            <p>Legally, <strong>motive is not an element of murder</strong>. The prosecution only needs to prove intent, not why the defendant acted.</p>
            <p>In practice, motive matters because:</p>
            <ul>
                <li>It makes the case <strong>coherent and persuasive</strong> to a jury or judge.</li>
                <li>Text messages and financial records are admissible as evidence of <strong>premeditation</strong>.</li>
                <li>A documented motive — especially a financial dispute — is an <strong>aggravating factor</strong> that pushes sentencing higher.</li>
            </ul>
            <p>A $40,000 debt refusal, combined with threatening messages, directly supports the premeditation element of first-degree murder.</p>
        `,
    },
    'ProsecutorMotiveThenDecision': {
        title: 'Motive — Not required, but decisive',
        body: `
            <p>Legally, <strong>motive is not an element of murder</strong>. The prosecution only needs to prove intent, not why the defendant acted.</p>
            <p>In practice, motive matters because:</p>
            <ul>
                <li>It makes the case <strong>coherent and persuasive</strong> to a jury or judge.</li>
                <li>Text messages and financial records are admissible as evidence of <strong>premeditation</strong>.</li>
                <li>A documented motive — especially a financial dispute — is an <strong>aggravating factor</strong> that pushes sentencing higher.</li>
            </ul>
            <p>A $40,000 debt refusal, combined with threatening messages, directly supports the premeditation element of first-degree murder.</p>
        `,
    },
    'JudgeDecision': {
        title: 'Judicial Discretion — Accepting or rejecting a plea',
        body: `
            <p>A judge is <strong>not required</strong> to accept a guilty plea. Under <em>Federal Rule 11</em>, a judge must independently confirm:</p>
            <ul>
                <li>The defendant understands the charge and the consequences.</li>
                <li>The plea is <strong>voluntary</strong> — free from coercion or false promises.</li>
                <li>There is an adequate <strong>factual basis</strong> for the charge.</li>
            </ul>
            <p>If any of these conditions are not met, the judge can <strong>reject the plea outright</strong> and order the case to trial — even over the objections of both the prosecution and defense.</p>
        `,
    },
    'PleaRejected': {
        title: 'Rejected Plea — What happens next?',
        body: `
            <p>When a judge rejects a guilty plea, the defendant's prior plea <strong>cannot be used against them</strong> at trial — it is inadmissible under Federal Rule of Evidence 410.</p>
            <ul>
                <li>The case returns to the pre-plea stage. Negotiations may restart.</li>
                <li>The defendant may attempt to re-negotiate the deal or proceed to trial.</li>
                <li>Judges rarely reject pleas — when they do, it is usually because the stated facts do not match the charge, or the defendant appears coerced.</li>
            </ul>
            <p>A rejected plea is not an acquittal. The prosecution continues.</p>
        `,
    },
    'SentencingHearing': {
        title: 'Pre-Sentence Investigation — What the report covers',
        body: `
            <p>Before imposing sentence, a judge orders a <strong>Pre-Sentence Investigation Report (PSI)</strong> prepared by a probation officer.</p>
            <p>The report includes:</p>
            <ul>
                <li>Full <strong>criminal history</strong> — all prior arrests and convictions.</li>
                <li><strong>Personal background</strong> — family, employment, education, mental health, substance use.</li>
                <li>A <strong>victim impact statement</strong> — the victim's family describes the harm caused.</li>
                <li>The defendant's own account and any expression of remorse.</li>
            </ul>
            <p>Defense attorneys use this phase to submit <strong>mitigating factors</strong>. In capital cases, this report can mean the difference between life and execution.</p>
        `,
    },
    'GuiltyVerdict': {
        title: 'Guilty as Charged — What the verdict means',
        body: `
            <p>Once a judge formally accepts the plea and enters a guilty verdict, the defendant <strong>loses the right to appeal</strong> the conviction on most grounds.</p>
            <ul>
                <li>The conviction is final unless the plea was constitutionally defective (coerced, uninformed).</li>
                <li>Sentencing is set at a future hearing — the judge is not bound by any deal the prosecution offered.</li>
                <li>In first-degree murder cases, the sentencing range can include <strong>life without parole</strong> or, in some states, <strong>the death penalty</strong>.</li>
            </ul>
            <p>This moment is legally irreversible. The defendant's fate now rests entirely in the sentencing phase.</p>
        `,
    },
};

const DEFAULT_INFO = {
    title: 'About this story',
    body: `<p>This visual novel is based on real legal procedures used in U.S. capital cases. Each scene reflects an actual stage of the criminal justice process.</p>`,
};

function currentLabel() {
    try {
        return Monogatari.default.state('label') || 'Start';
    } catch (_) {
        return 'Start';
    }
}

function openInfoPanel() {
    const label = currentLabel();
    const info = LEGAL_INFO[label] || DEFAULT_INFO;
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
function showInfoBtn() { infoBtn.classList.add('visible'); }
function hideInfoBtn() { infoBtn.classList.remove('visible'); }

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

    document.addEventListener('click', (e) => {
        const gameScreen = document.querySelector('game-screen');
        if (
            gameScreen &&
            gameScreen.contains(e.target) &&
            !e.target.closest('#info-btn') &&
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

// Hammer animation — called directly from script.js function actions
window.playHammer = function () {
    return new Promise((resolve) => {
        const overlay = document.getElementById('hammer-overlay');
        const sprite = document.getElementById('hammer-sprite');
        overlay.hidden = false;
        sprite.style.animation = 'none';
        sprite.offsetHeight; // force reflow to restart animation
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
