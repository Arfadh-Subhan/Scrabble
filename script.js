// ============ LETTER DISTRIBUTION & SCORES ============
const LETTERS = {
    A: { count: 9, points: 1 }, B: { count: 2, points: 3 }, C: { count: 2, points: 3 },
    D: { count: 4, points: 2 }, E: { count: 12, points: 1 }, F: { count: 2, points: 4 },
    G: { count: 3, points: 2 }, H: { count: 2, points: 4 }, I: { count: 9, points: 1 },
    J: { count: 1, points: 8 }, K: { count: 1, points: 5 }, L: { count: 4, points: 1 },
    M: { count: 2, points: 3 }, N: { count: 6, points: 1 }, O: { count: 8, points: 1 },
    P: { count: 2, points: 3 }, Q: { count: 1, points: 10 }, R: { count: 6, points: 1 },
    S: { count: 4, points: 1 }, T: { count: 6, points: 1 }, U: { count: 4, points: 1 },
    V: { count: 2, points: 4 }, W: { count: 2, points: 4 }, X: { count: 1, points: 8 },
    Y: { count: 2, points: 4 }, Z: { count: 1, points: 10 }
};

// Premium Squares for 15x15 board
const PREMIUM_SQUARES = {
    "0,0": "tw", "0,7": "tw", "0,14": "tw", "7,0": "tw", "7,14": "tw", "14,0": "tw", "14,7": "tw", "14,14": "tw",
    "1,1": "dw", "1,13": "dw", "2,2": "dw", "2,12": "dw", "3,3": "dw", "3,11": "dw", "4,4": "dw", "4,10": "dw",
    "7,7": "dw", "10,4": "dw", "10,10": "dw", "11,3": "dw", "11,11": "dw", "12,2": "dw", "12,12": "dw", "13,1": "dw", "13,13": "dw",
    "0,3": "tl", "0,11": "tl", "2,6": "tl", "2,8": "tl", "3,0": "tl", "3,7": "tl", "3,14": "tl", "6,2": "tl",
    "6,6": "tl", "6,8": "tl", "6,12": "tl", "7,3": "tl", "7,11": "tl", "8,2": "tl", "8,6": "tl", "8,8": "tl",
    "8,12": "tl", "11,0": "tl", "11,7": "tl", "11,14": "tl", "12,6": "tl", "12,8": "tl", "14,3": "tl", "14,11": "tl",
    "1,5": "dl", "1,9": "dl", "5,1": "dl", "5,5": "dl", "5,9": "dl", "5,13": "dl", "9,1": "dl", "9,5": "dl",
    "9,9": "dl", "9,13": "dl", "13,5": "dl", "13,9": "dl"
};

// Game State
let gameState = {
    board: Array(15).fill().map(() => Array(15).fill(null)),
    scores: [],
    currentPlayer: 0,
    playerNames: [],
    letterBag: [],
    playerRacks: [],
    selectedLetter: null,
    placedLetters: [],
    gameActive: false,
    tilesLeft: 100,
    gameOver: false,
    timeLeft: 180,
    timerInterval: null,
    currentDirection: "horizontal",
    blankTilePending: null,
    pendingBlankLetter: null
};

let currentEditingPlayer = null;
let toastTimeout = null;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initGame();
    initShareButtons();
    showSetupModal();
});

function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = { game: document.getElementById('gamePage'), support: document.getElementById('supportPage') };
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    window.switchPage = (pageId) => {
        Object.values(pages).forEach(p => p?.classList.remove('active'));
        if (pages[pageId]) pages[pageId].classList.add('active');
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-page') === pageId) link.classList.add('active');
        });
        navMenu?.classList.remove('active');
    };

    navLinks.forEach(link => link.addEventListener('click', () => switchPage(link.getAttribute('data-page'))));
    if (navToggle) navToggle.addEventListener('click', () => navMenu.classList.toggle('active'));
}

function initShareButtons() {
    const shareUrl = encodeURIComponent(window.location.href);
    const shareText = encodeURIComponent('Play Scrabble - Build words, earn points! 🎲');
    document.getElementById('shareTwitter')?.addEventListener('click', () => window.open(`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`, '_blank'));
    document.getElementById('shareWhatsapp')?.addEventListener('click', () => window.open(`https://wa.me/?text=${shareText}%20${shareUrl}`, '_blank'));
    document.getElementById('shareTelegram')?.addEventListener('click', () => window.open(`https://t.me/share/url?url=${shareUrl}&text=${shareText}`, '_blank'));
}

function initGame() {
    createLetterBag();
    setupEventListeners();
}

function createLetterBag() {
    let bag = [];
    for (let [letter, data] of Object.entries(LETTERS)) {
        for (let i = 0; i < data.count; i++) {
            bag.push({ letter, points: data.points, isBlank: false });
        }
    }
    for (let i = 0; i < 2; i++) {
        bag.push({ letter: "?", points: 0, isBlank: true });
    }
    for (let i = bag.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [bag[i], bag[j]] = [bag[j], bag[i]];
    }
    gameState.letterBag = bag;
    gameState.tilesLeft = bag.length;
}

function drawTiles(count) {
    const tiles = [];
    for (let i = 0; i < count && gameState.letterBag.length > 0; i++) {
        tiles.push(gameState.letterBag.pop());
    }
    gameState.tilesLeft = gameState.letterBag.length;
    
    // Show finish button when bag is empty
    const finishBtn = document.getElementById('finishGameBtn');
    if (finishBtn && gameState.tilesLeft === 0) {
        finishBtn.style.display = 'flex';
        finishBtn.disabled = false;
    }
    
    return tiles;
}

function setupEventListeners() {
    document.getElementById('homeMenuBtn')?.addEventListener('click', () => showSetupModal());
    document.getElementById('submitWordBtn')?.addEventListener('click', () => submitWord());
    document.getElementById('clearWordBtn')?.addEventListener('click', () => clearTurn());
    document.getElementById('skipTurnBtn')?.addEventListener('click', () => skipTurn());
    document.getElementById('startGameBtn')?.addEventListener('click', () => startGame());
    document.getElementById('playAgainBtn')?.addEventListener('click', () => {
        document.getElementById('resultModal').classList.remove('active');
        showSetupModal();
    });
    document.getElementById('closeTurnModalBtn')?.addEventListener('click', () => {
        document.getElementById('turnModal').classList.remove('active');
    });
    document.getElementById('confirmBlankLetterBtn')?.addEventListener('click', () => confirmBlankLetter());
    document.getElementById('finishGameBtn')?.addEventListener('click', () => endGame());
    
    document.getElementById('horizontalBtn')?.addEventListener('click', () => {
        gameState.currentDirection = "horizontal";
        document.getElementById('horizontalBtn').classList.add('active');
        document.getElementById('verticalBtn').classList.remove('active');
    });
    
    document.getElementById('verticalBtn')?.addEventListener('click', () => {
        gameState.currentDirection = "vertical";
        document.getElementById('verticalBtn').classList.add('active');
        document.getElementById('horizontalBtn').classList.remove('active');
    });
    
    document.querySelectorAll('.player-count-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.player-count-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            updateSetupPlayers();
        });
    });
    
    document.getElementById('saveNameBtn')?.addEventListener('click', () => {
        const input = document.getElementById('nameEditorInput');
        const newName = input.value.trim();
        if (!newName) return;
        if (currentEditingPlayer !== null && gameState.playerNames[currentEditingPlayer]) {
            gameState.playerNames[currentEditingPlayer] = newName;
            updateSetupPlayers();
        }
        document.getElementById('nameEditorModal').classList.remove('active');
    });
    
    document.getElementById('cancelNameBtn')?.addEventListener('click', () => {
        document.getElementById('nameEditorModal').classList.remove('active');
    });
    document.getElementById('closeNameEditorBtn')?.addEventListener('click', () => {
        document.getElementById('nameEditorModal').classList.remove('active');
    });
}

function updateSetupPlayers() {
    const container = document.getElementById('setupPlayers');
    const playerCount = parseInt(document.querySelector('.player-count-btn.active')?.dataset.count || "2");
    
    container.innerHTML = '';
    for (let i = 0; i < playerCount; i++) {
        if (!gameState.playerNames[i]) gameState.playerNames[i] = `Player ${i + 1}`;
        const row = document.createElement('div');
        row.className = 'setup-player-row';
        row.innerHTML = `
            <div class="setup-player-icon">${i + 1}</div>
            <div class="setup-player-name" id="setupName_${i}">${gameState.playerNames[i]}</div>
            <button class="setup-player-edit" data-player="${i}"><i class="fas fa-pencil-alt"></i></button>
        `;
        container.appendChild(row);
    }
    
    document.querySelectorAll('.setup-player-edit').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const player = parseInt(btn.dataset.player);
            currentEditingPlayer = player;
            const input = document.getElementById('nameEditorInput');
            input.value = gameState.playerNames[player];
            document.getElementById('nameEditorModal').classList.add('active');
        });
    });
}

function showSetupModal() {
    const modal = document.getElementById('setupModal');
    updateSetupPlayers();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeSetupModal() {
    document.getElementById('setupModal').classList.remove('active');
    document.body.style.overflow = '';
}

function showTurnModal(playerName) {
    const modal = document.getElementById('turnModal');
    const textElement = document.getElementById('turnModalText');
    textElement.innerHTML = `${playerName}'s Turn`;
    modal.classList.add('active');
    
    setTimeout(() => {
        modal.classList.remove('active');
    }, 1300);
}

function showBlankTileSelector(rackIndex) {
    gameState.blankTilePending = rackIndex;
    const container = document.getElementById('blankLetterSelector');
    container.innerHTML = '';
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let letter of letters) {
        const btn = document.createElement('button');
        btn.className = 'blank-letter-btn';
        btn.textContent = letter;
        btn.addEventListener('click', () => {
            document.querySelectorAll('.blank-letter-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            gameState.pendingBlankLetter = letter;
        });
        container.appendChild(btn);
    }
    document.getElementById('blankTileModal').classList.add('active');
}

function confirmBlankLetter() {
    if (!gameState.pendingBlankLetter) {
        showToast("Select a letter first!", "#FF8888");
        return;
    }
    
    const rackIndex = gameState.blankTilePending;
    gameState.playerRacks[gameState.currentPlayer][rackIndex].letter = gameState.pendingBlankLetter;
    gameState.playerRacks[gameState.currentPlayer][rackIndex].isBlank = true;
    gameState.playerRacks[gameState.currentPlayer][rackIndex].points = 0;
    
    document.getElementById('blankTileModal').classList.remove('active');
    gameState.blankTilePending = null;
    gameState.pendingBlankLetter = null;
    renderRack();
}

function startGame() {
    const playerCount = parseInt(document.querySelector('.player-count-btn.active')?.dataset.count || "2");
    
    gameState.scores = new Array(playerCount).fill(0);
    for (let i = 0; i < playerCount; i++) {
        if (!gameState.playerNames[i]) gameState.playerNames[i] = `Player ${i + 1}`;
    }
    gameState.playerNames = gameState.playerNames.slice(0, playerCount);
    gameState.currentPlayer = 0;
    gameState.gameActive = true;
    gameState.gameOver = false;
    gameState.board = Array(15).fill().map(() => Array(15).fill(null));
    gameState.placedLetters = [];
    gameState.selectedLetter = null;
    gameState.timeLeft = 180;
    
    if (gameState.timerInterval) clearInterval(gameState.timerInterval);
    
    createLetterBag();
    gameState.playerRacks = [];
    for (let i = 0; i < playerCount; i++) {
        gameState.playerRacks.push(drawTiles(7));
    }
    
    // Hide finish button initially
    const finishBtn = document.getElementById('finishGameBtn');
    if (finishBtn) finishBtn.style.display = 'none';
    
    closeSetupModal();
    renderBoard();
    renderScores();
    renderRack();
    updateTurnDisplay();
    updateTilesLeft();
    updateTimerDisplay();
    
    showTurnModal(gameState.playerNames[gameState.currentPlayer]);
    startTimer();
}

function startTimer() {
    if (gameState.timerInterval) clearInterval(gameState.timerInterval);
    
    gameState.timerInterval = setInterval(() => {
        if (!gameState.gameActive || gameState.gameOver) return;
        
        gameState.timeLeft--;
        updateTimerDisplay();
        
        if (gameState.timeLeft <= 0) {
            clearInterval(gameState.timerInterval);
            showToast("⏰ Time's up! Skipping turn...", "#FF4444");
            skipTurn();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(gameState.timeLeft / 60);
    const seconds = gameState.timeLeft % 60;
    const timerText = document.getElementById('timerText');
    const timerDisplay = document.getElementById('timerDisplay');
    
    timerText.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    if (gameState.timeLeft <= 10) {
        timerDisplay.classList.add('warning');
    } else {
        timerDisplay.classList.remove('warning');
    }
}

function renderBoard() {
    const boardElement = document.getElementById('board');
    boardElement.innerHTML = '';
    
    for (let row = 0; row < 15; row++) {
        for (let col = 0; col < 15; col++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            
            const letter = gameState.board[row][col];
            if (letter && letter.letter) {
                cell.textContent = letter.letter;
                if (letter.isBlank) cell.style.color = '#888888';
                cell.classList.add('placed');
            } else {
                const key = `${row},${col}`;
                if (PREMIUM_SQUARES[key] === 'dl') cell.classList.add('dl');
                else if (PREMIUM_SQUARES[key] === 'tl') cell.classList.add('tl');
                else if (PREMIUM_SQUARES[key] === 'dw') cell.classList.add('dw');
                else if (PREMIUM_SQUARES[key] === 'tw') cell.classList.add('tw');
                if (row === 7 && col === 7) cell.classList.add('star');
                cell.textContent = '';
            }
            
            cell.dataset.row = row;
            cell.dataset.col = col;
            cell.addEventListener('click', () => handleBoardClick(row, col));
            boardElement.appendChild(cell);
        }
    }
}

function renderScores() {
    const scoreBoard = document.getElementById('scoreBoard');
    scoreBoard.innerHTML = '';
    
    for (let i = 0; i < gameState.playerNames.length; i++) {
        const card = document.createElement('div');
        card.className = 'player-card';
        if (gameState.currentPlayer === i && gameState.gameActive && !gameState.gameOver) {
            card.classList.add('active-turn');
        }
        card.innerHTML = `
            <span class="player-name">${gameState.playerNames[i]}</span>
            <span class="player-score">${gameState.scores[i]}</span>
        `;
        scoreBoard.appendChild(card);
    }
}

function renderRack() {
    const rackElement = document.getElementById('letterRack');
    rackElement.innerHTML = '';
    
    const currentRack = gameState.playerRacks[gameState.currentPlayer];
    if (!currentRack) return;
    
    for (let i = 0; i < currentRack.length; i++) {
        const tile = currentRack[i];
        const tileDiv = document.createElement('div');
        tileDiv.className = 'tile';
        if (tile.isBlank) tileDiv.classList.add('blank');
        if (gameState.selectedLetter === i) {
            tileDiv.classList.add('selected-tile');
        }
        tileDiv.innerHTML = `
            <span>${tile.isBlank ? '?' : tile.letter}</span>
            <span class="tile-points">${tile.points}</span>
        `;
        tileDiv.addEventListener('click', (e) => {
            e.stopPropagation();
            if (tile.isBlank && tile.letter === '?') {
                showBlankTileSelector(i);
            } else {
                if (gameState.selectedLetter === i) {
                    gameState.selectedLetter = null;
                } else {
                    gameState.selectedLetter = i;
                }
                renderRack();
            }
        });
        rackElement.appendChild(tileDiv);
    }
}

function handleBoardClick(row, col) {
    if (!gameState.gameActive || gameState.gameOver) return;
    if (gameState.selectedLetter === null) {
        showToast("Select a letter from your rack first!", "#FF8888");
        return;
    }
    
    if (gameState.board[row][col] !== null) {
        showToast("This cell already has a letter!", "#FF8888");
        return;
    }
    
    const tile = gameState.playerRacks[gameState.currentPlayer][gameState.selectedLetter];
    const letter = tile.letter;
    const isBlank = tile.isBlank || false;
    
    gameState.board[row][col] = { letter, isBlank, points: tile.points };
    gameState.placedLetters.push({ row, col, letter, isBlank });
    
    gameState.playerRacks[gameState.currentPlayer].splice(gameState.selectedLetter, 1);
    gameState.selectedLetter = null;
    
    renderBoard();
    renderRack();
    updateSelectedWordDisplay();
}

function getPlacedWord() {
    if (gameState.placedLetters.length === 0) return { word: "", letters: [] };
    
    const sorted = [...gameState.placedLetters];
    if (gameState.currentDirection === "horizontal") {
        sorted.sort((a, b) => a.col - b.col);
    } else {
        sorted.sort((a, b) => a.row - b.row);
    }
    
    const word = sorted.map(p => p.letter).join('');
    return { word, letters: sorted };
}

function updateSelectedWordDisplay() {
    if (gameState.placedLetters.length === 0) {
        document.getElementById('selectedWordDisplay').innerText = '-';
        document.getElementById('wordScoreDisplay').innerText = '(0 pts)';
        return;
    }
    
    const { word } = getPlacedWord();
    document.getElementById('selectedWordDisplay').innerText = word;
    
    let score = 0;
    for (let p of gameState.placedLetters) {
        const points = LETTERS[p.letter]?.points || 1;
        score += points;
    }
    document.getElementById('wordScoreDisplay').innerText = `(${score} pts)`;
}

function checkWordConnection() {
    if (gameState.placedLetters.length === 0) return true;
    
    for (let p of gameState.placedLetters) {
        const neighbors = [
            [p.row-1, p.col], [p.row+1, p.col], [p.row, p.col-1], [p.row, p.col+1]
        ];
        for (let [nr, nc] of neighbors) {
            if (nr >= 0 && nr < 15 && nc >= 0 && nc < 15) {
                if (gameState.board[nr][nc] !== null && 
                    !gameState.placedLetters.some(pl => pl.row === nr && pl.col === nc)) {
                    return true;
                }
            }
        }
        if (p.row === 7 && p.col === 7) return true;
    }
    return false;
}

function submitWord() {
    if (!gameState.gameActive || gameState.gameOver) return;
    if (gameState.placedLetters.length === 0) {
        showToast("Place at least one letter first!", "#FF8888");
        return;
    }
    
    if (!checkWordConnection()) {
        showToast("Word must connect to existing letters!", "#FF8888");
        return;
    }
    
    const { word, letters } = getPlacedWord();
    
    let score = 0;
    for (let p of letters) {
        const points = LETTERS[p.letter]?.points || 1;
        let multiplier = 1;
        const key = `${p.row},${p.col}`;
        if (PREMIUM_SQUARES[key] === 'dl') multiplier = 2;
        else if (PREMIUM_SQUARES[key] === 'tl') multiplier = 3;
        score += points * multiplier;
    }
    
    let wordMultiplier = 1;
    for (let p of letters) {
        const key = `${p.row},${p.col}`;
        if (PREMIUM_SQUARES[key] === 'dw') wordMultiplier *= 2;
        else if (PREMIUM_SQUARES[key] === 'tw') wordMultiplier *= 3;
    }
    score *= wordMultiplier;
    
    gameState.scores[gameState.currentPlayer] += score;
    renderScores();
    showToast(`✓ "${word}" placed! +${score} points`, "#00AA00");
    
    const newTiles = drawTiles(gameState.placedLetters.length);
    gameState.playerRacks[gameState.currentPlayer].push(...newTiles);
    
    gameState.placedLetters = [];
    gameState.selectedLetter = null;
    
    // Auto end game when bag empty and current player has no tiles
    if (gameState.letterBag.length === 0 && gameState.playerRacks[gameState.currentPlayer].length === 0) {
        endGame();
        return;
    }
    
    gameState.currentPlayer = (gameState.currentPlayer + 1) % gameState.playerNames.length;
    gameState.timeLeft = 180;
    updateTimerDisplay();
    document.getElementById('timerDisplay').classList.remove('warning');
    
    renderScores();
    renderRack();
    updateTurnDisplay();
    updateTilesLeft();
    updateSelectedWordDisplay();
    
    if (gameState.timerInterval) clearInterval(gameState.timerInterval);
    startTimer();
    
    showTurnModal(gameState.playerNames[gameState.currentPlayer]);
}

function clearTurn() {
    for (let p of gameState.placedLetters) {
        gameState.board[p.row][p.col] = null;
        gameState.playerRacks[gameState.currentPlayer].push({ 
            letter: p.letter, 
            points: LETTERS[p.letter]?.points || 1,
            isBlank: p.isBlank || false
        });
    }
    gameState.placedLetters = [];
    gameState.selectedLetter = null;
    renderBoard();
    renderRack();
    updateSelectedWordDisplay();
    showToast("Turn cleared", "#888888");
}

function skipTurn() {
    if (!gameState.gameActive || gameState.gameOver) return;
    
    clearTurn();
    
    gameState.currentPlayer = (gameState.currentPlayer + 1) % gameState.playerNames.length;
    gameState.timeLeft = 180;
    updateTimerDisplay();
    document.getElementById('timerDisplay').classList.remove('warning');
    
    renderScores();
    renderRack();
    updateTurnDisplay();
    updateSelectedWordDisplay();
    updateTilesLeft();
    
    if (gameState.timerInterval) clearInterval(gameState.timerInterval);
    startTimer();
    
    showTurnModal(gameState.playerNames[gameState.currentPlayer]);
}

function endGame() {
    gameState.gameActive = false;
    gameState.gameOver = true;
    
    if (gameState.timerInterval) clearInterval(gameState.timerInterval);
    
    let winner = 0;
    let maxScore = 0;
    for (let i = 0; i < gameState.scores.length; i++) {
        if (gameState.scores[i] > maxScore) {
            maxScore = gameState.scores[i];
            winner = i;
        }
    }
    
    const winnerName = gameState.playerNames[winner];
    const winnerScore = gameState.scores[winner];
    
    // Winner celebration animation
    const resultHeader = document.getElementById('resultHeader');
    const resultTitle = document.getElementById('resultTitle');
    const resultBody = document.getElementById('resultBody');
    
    resultTitle.innerHTML = `🏆 ${winnerName} WINS! 🏆`;
    resultHeader.style.background = 'linear-gradient(135deg, #006400 0%, #00AA00 50%, #006400 100%)';
    resultHeader.style.animation = 'winPulse 0.6s ease-out';
    
    resultBody.innerHTML = `
        <div class="final-scores">
            ${gameState.playerNames.map((n, i) => `
                <div class="final-score-row ${i === winner ? 'winner-highlight' : ''}">
                    <span>${n}</span>
                    <span class="final-score-value">${gameState.scores[i]}</span>
                </div>
            `).join('')}
        </div>
        <div class="winner-crown">👑</div>
    `;
    
    document.getElementById('resultModal').classList.add('active');
}

function updateTurnDisplay() {
    document.getElementById('turnText').innerHTML = `${gameState.playerNames[gameState.currentPlayer]}'s Turn`;
    renderScores();
}

function updateTilesLeft() {
    document.getElementById('tilesLeft').innerHTML = `Tiles Left: ${gameState.tilesLeft}`;
    
    // Show/hide finish button
    const finishBtn = document.getElementById('finishGameBtn');
    if (finishBtn) {
        if (gameState.tilesLeft === 0 && gameState.gameActive && !gameState.gameOver) {
            finishBtn.style.display = 'flex';
            finishBtn.disabled = false;
        } else {
            finishBtn.style.display = 'none';
        }
    }
}

function showToast(message, color) {
    let toast = document.getElementById('gameToast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'gameToast';
        toast.style.cssText = `
            position: fixed; bottom: 100px; left: 50%; transform: translateX(-50%) translateY(100px);
            background: #000000; padding: 0.6rem 1.2rem;
            border-radius: 40px; font-size: 0.8rem; font-weight: 500;
            z-index: 1100; transition: transform 0.3s; white-space: nowrap;
        `;
        document.body.appendChild(toast);
    }
    
    if (toastTimeout) clearTimeout(toastTimeout);
    
    toast.style.transform = 'translateX(-50%) translateY(0)';
    toast.style.opacity = '1';
    toast.innerHTML = `<i class="fas fa-info-circle"></i> ${message}`;
    toast.style.color = color || '#FFE87C';
    
    toastTimeout = setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(-50%) translateY(100px)';
    }, 2000);
}