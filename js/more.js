function toggleText(element) {
    const card = element.closest('.feedback-card');
    const fullText = card.querySelector('.full-text');
    const shortText = card.querySelector('.short-text');

    fullText.classList.toggle('visible');
    shortText.style.display = fullText.classList.contains('visible') ? 'none' : 'block';
    element.textContent = fullText.classList.contains('visible') ? 'Свернуть' : 'Подробнее';
}