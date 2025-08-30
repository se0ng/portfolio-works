// modal
document.querySelectorAll('.work-item').forEach(item => {
    item.addEventListener('click', () => {
        const modalId = item.querySelector('img').getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.classList.add('show');
    });
});

document.querySelectorAll('.modal-close').forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
        closeBtn.closest('.modal-container').classList.remove('show');
    });
});

window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-container')) {
        e.target.classList.remove('show');
    }
});



document.querySelectorAll('.work-item').forEach(card => {
    card.addEventListener('click', () => {
        const modalId = card.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.style.display = 'flex';
    });
});

document.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.closest('.modal-container').style.display = 'none';
    });
});

window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-container')) {
        e.target.style.display = 'none';
    }
});
