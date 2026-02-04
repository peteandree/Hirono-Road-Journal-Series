let currentCard = 1;

function unboxSeries() {
    document.getElementById('landing-page').classList.add('hidden');
    document.getElementById('card-display').classList.remove('hidden');
    setTimeout(() => {
        const first = document.getElementById('card1');
        if (first) first.classList.add('active-turn');
    }, 500);
}

function handleCardClick(num) {
    if (num === currentCard) {
        const el = document.getElementById(`card${num}`);
        el.classList.add('flipped');
        el.classList.remove('active-turn');
        currentCard++;
        if (currentCard <= 5) {
            document.getElementById(`card${currentCard}`).classList.add('active-turn');
        } else {
            triggerFinale();
        }
    }
}

function triggerFinale() {
    document.getElementById('status-msg').innerText = "The road journal is complete!";
    document.getElementById('status-msg').style.color = "#ff4d4d";
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
    setTimeout(() => {
        document.getElementById('valentine-modal').classList.remove('hidden');
    }, 2000);
}

function dodge(btn) {
    const maxX = window.innerWidth - btn.offsetWidth - 20;
    const maxY = window.innerHeight - btn.offsetHeight - 20;
    btn.style.position = "fixed";
    btn.style.left = Math.max(20, Math.random() * maxX) + "px";
    btn.style.top = Math.max(20, Math.random() * maxY) + "px";
}

function celebrate() {
    confetti({ particleCount: 300, spread: 160, origin: { y: 0.5 } });
    document.getElementById('valentine-modal').classList.add('hidden');
    document.getElementById('success-modal').classList.remove('hidden');
}