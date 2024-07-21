function showCard(cardId) {
    // Hide all cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.classList.remove('show');
    });

    // Show the selected card
    const card = document.getElementById(cardId);
    card.classList.add('show');
}
