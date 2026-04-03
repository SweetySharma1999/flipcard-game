const Storage = {
    saveBestScore(score) {
        const currentBest = localStorage.getItem('bestScore');
        if (!currentBest || score < currentBest) {
            localStorage.setItem('bestScore', score);
        }
    },
    getBestScore() {
        return localStorage.getItem('bestScore') || '-';
    }
};

// Update UI on load
document.getElementById('best-score').innerText = Storage.getBestScore();