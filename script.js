const TOTAL_CARDS = 56;

function cardImage(n) {
    return `Image/Artboard ${n}.png`;
}

const levels = [
    { label: '5 PT', px: 20 },
    { label: '4 PT', px: 12 },
    { label: '3 PT', px: 6 },
    { label: '2 PT', px: 2 },
    { label: '1 PT', px: 0 },
];

const screenPick = document.getElementById('screen-pick');
const screenView = document.getElementById('screen-view');
const backBtn = document.getElementById('backBtn');
const cardImg = document.getElementById('cardImg');
const viewName = document.getElementById('viewCardName');
const btnGroup = document.getElementById('btnGroup');
const statusEl = document.getElementById('status');

// Build number grid
const grid = document.getElementById('numGrid');
for (let i = 1; i <= TOTAL_CARDS; i++) {
    const btn = document.createElement('button');
    btn.className = 'card-num-btn';
    btn.textContent = i;
    btn.addEventListener('click', () => openCard(i));
    grid.appendChild(btn);
}

// Build blur buttons
levels.forEach(({ label, px }, i) => {
    const btn = document.createElement('button');
    btn.className = 'blur-btn';
    btn.textContent = label;
    btn.addEventListener('click', () => {
        cardImg.style.filter = `blur(${px}px)`;
        statusEl.textContent = `Point value: ${label}`;
        document.querySelectorAll('.blur-btn').forEach((b, j) =>
            b.classList.toggle('active', j === i)
        );
    });
    if (i === levels.length - 1) btn.classList.add('active');
    btnGroup.appendChild(btn);
});

function openCard(n) {
    viewName.textContent = `Card #${n}`;
    cardImg.src = cardImage(n);
    cardImg.style.filter = 'blur(0px)';
    statusEl.textContent = 'Point value: 1 PT';
    document.querySelectorAll('.blur-btn').forEach((b, j) =>
        b.classList.toggle('active', j === levels.length - 1)
    );
    screenPick.classList.add('hide');
    screenView.classList.add('show');
}

backBtn.addEventListener('click', () => {
    screenPick.classList.remove('hide');
    screenView.classList.remove('show');
});