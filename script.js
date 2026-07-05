const startBtn = document.getElementById('start-btn');
const intro = document.getElementById('intro-screen');
const modal = document.getElementById('modal');
const envelopes = document.querySelectorAll('.envelope');

startBtn.addEventListener('click', () => { intro.style.display = 'none'; });

envelopes.forEach(env => {
    env.addEventListener('click', () => {
        const month = env.getAttribute('data-month');
        document.getElementById('letter-text').innerText = `Memory for Month ${month}`;
        modal.classList.remove('hidden');
        setTimeout(() => document.querySelector('.modal-content').classList.add('active'), 10);
    });
});

function closeModal() {
    document.querySelector('.modal-content').classList.remove('active');
    setTimeout(() => modal.classList.add('hidden'), 300);
}
