let currentCard = 1;

function unboxSeries() {
    document.getElementById('landing-page').classList.add('hidden');
    const display = document.getElementById('card-display');
    display.classList.remove('hidden');
    
    setTimeout(() => {
        const firstCard = document.getElementById('card1');
        if (firstCard) firstCard.classList.add('active-turn');
    }, 600);
}

function handleCardClick(num) {
    if (num === currentCard) {
        const el = document.getElementById(`card${num}`);
        el.classList.add('flipped');
        el.classList.remove('active-turn');
        
        currentCard++;
        
        if (currentCard <= 5) {
            const nextEl = document.getElementById(`card${currentCard}`);
            nextEl.classList.add('active-turn');
            document.getElementById('status-msg').innerText = "Card found! Next one...";
        } else {
            // THE FINALE
            triggerFinale();
        }
    } else if (num > currentCard) {
        document.getElementById('status-msg').innerText = "Open from left to right! Don't skip.";
    }
}

function triggerFinale() {
    const msg = document.getElementById('status-msg');
    msg.innerText = "The road journal is complete!";
    msg.style.color = "#ff4d4d";
    msg.style.fontWeight = "bold";

    // 1. Confetti Burst
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff4d4d', '#ffffff', '#4a4a4a']
    });

    // 2. Show Valentine Modal after a short delay
    setTimeout(() => {
        document.getElementById('valentine-modal').classList.remove('hidden');
    }, 2000);
}

// Function to make the "No" button move away
function dodge(btn) {
    const x = Math.random() * (window.innerWidth - btn.offsetWidth);
    const y = Math.random() * (window.innerHeight - btn.offsetHeight);
    btn.style.position = "absolute";
    btn.style.left = x + "px";
    btn.style.top = y + "px";
}


// Final Success Function (Updated to remove "This page says")
function celebrate() {
    // 1. Fire big confetti
    confetti({
        particleCount: 300,
        spread: 160,
        origin: { y: 0.5 }
    });

    // 2. Hide the question modal
    document.getElementById('valentine-modal').classList.add('hidden');

    // 3. Show the custom success modal
    document.getElementById('success-modal').classList.remove('hidden');
}