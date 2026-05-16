const LEGAL_INFO = {
    'Start': {
        title: 'First-Degree Murder — What does the charge mean?',
        body: `
            <p><strong>First-degree murder</strong> is the most serious homicide charge. Prosecutors must prove:</p>
            <ul>
                <li><strong>Premeditation</strong> — the killing was planned in advance, even briefly.</li>
                <li><strong>Intent</strong> — the defendant specifically intended to cause death.</li>
                <li><strong>Deliberation</strong> — the act was carried out with a cool and measured mind, not in the heat of the moment.</li>
            </ul>
            <p>If convicted, sentences typically range from <strong>25 years to life</strong>, and in some U.S. states the death penalty is possible.</p>
        `,
    },
    'NotGuilty': {
        title: 'Pleading Not Guilty — What happens next?',
        body: `
            <p>A <strong>not guilty plea</strong> does <em>not</em> mean the defendant claims innocence — it is a legal declaration that the prosecution has not yet proven its case.</p>
            <p>After this plea:</p>
            <ul>
                <li>A <strong>trial date</strong> is set, typically months away.</li>
                <li>Both sides enter the <strong>discovery</strong> phase — exchanging evidence, witness lists, and expert opinions.</li>
                <li>Defense may file <strong>motions</strong> to suppress evidence or dismiss the case.</li>
                <li>The burden of proof remains on the prosecution: <em>beyond a reasonable doubt</em>.</li>
            </ul>
            <p>Roughly <strong>90% of criminal convictions</strong> in the U.S. come from plea deals, not trials.</p>
        `,
    },
    'Guilty': {
        title: 'Pleading Guilty — Rights you waive',
        body: `
            <p>When a defendant <strong>pleads guilty</strong>, they waive several constitutional rights:</p>
            <ul>
                <li>The right to a <strong>jury trial</strong>.</li>
                <li>The right to <strong>confront witnesses</strong>.</li>
                <li>The right against <strong>self-incrimination</strong>.</li>
            </ul>
            <p>In exchange, a <strong>plea bargain</strong> is common — the prosecution may reduce the charge or recommend a lighter sentence.</p>
            <p>Judges are not bound by the deal and can impose any sentence within the legal range. A guilty plea to first-degree murder can still result in <strong>life without parole</strong>.</p>
        `,
    },
    'Silent': {
        title: 'Remaining Silent — The Fifth Amendment',
        body: `
            <p>The <strong>Fifth Amendment</strong> of the U.S. Constitution protects defendants from being forced to testify against themselves.</p>
            <p>In practice:</p>
            <ul>
                <li>A defendant <strong>cannot be penalized</strong> for refusing to enter a plea.</li>
                <li>The court enters a <strong>not guilty plea</strong> on their behalf by default.</li>
                <li>Silence <em>cannot</em> be used as evidence of guilt at trial.</li>
                <li>Prosecutors are barred from commenting on the defendant's silence to the jury.</li>
            </ul>
            <p>This right was established in <em>Griffin v. California (1965)</em>, where the Supreme Court ruled that penalizing silence violates the Fifth Amendment.</p>
        `,
    },
};

const DEFAULT_INFO = {
    title: 'About this story',
    body: `
        <p>This visual novel is based on real legal procedures used in U.S. capital cases.</p>
        <p>Each scene reflects an actual stage of the criminal justice process. Press this button at any moment to read the real legal context behind what you're witnessing.</p>
    `,
};

function currentLabel() {
    try {
        const monogatari = Monogatari.default;
        return monogatari.state('label') || 'Start';
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
    document.getElementById('info-close').focus();
}

function closeInfoPanel() {
    const panel = document.getElementById('info-panel');
    panel.classList.remove('visible');
    panel.addEventListener('transitionend', () => {
        panel.hidden = true;
    }, { once: true });
}

const infoBtn = document.getElementById('info-btn');

function showInfoBtn() { infoBtn.classList.add('visible'); }
function hideInfoBtn() { infoBtn.classList.remove('visible'); }

// Show button after a choice is made, hide after 2 more dialog advances
let choiceWasPresent = false;
let slidesAfterChoice = 0;

function onDialogAdvance() {
    if (!infoBtn.classList.contains('visible')) return;
    slidesAfterChoice++;
    if (slidesAfterChoice >= 2) {
        hideInfoBtn();
        slidesAfterChoice = 0;
    }
}

const choiceObserver = new MutationObserver(() => {
    const choiceContainer = document.querySelector('choice-container');
    if (choiceContainer) {
        choiceWasPresent = true;
        hideInfoBtn();
    } else if (choiceWasPresent) {
        choiceWasPresent = false;
        slidesAfterChoice = 0;
        showInfoBtn();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('monogatari');
    if (root) {
        choiceObserver.observe(root, { childList: true, subtree: true });
    }

    // Count clicks on the game screen as dialog advances
    document.addEventListener('click', (e) => {
        const gameScreen = document.querySelector('game-screen');
        if (gameScreen && gameScreen.contains(e.target) && !e.target.closest('#info-btn') && !e.target.closest('#info-panel')) {
            onDialogAdvance();
        }
    });
});

document.getElementById('info-btn').addEventListener('click', openInfoPanel);
document.getElementById('info-close').addEventListener('click', closeInfoPanel);

document.getElementById('info-panel').addEventListener('click', function (e) {
    if (e.target === this) closeInfoPanel();
});

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !document.getElementById('info-panel').hidden) {
        closeInfoPanel();
    }
});
