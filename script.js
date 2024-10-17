function addHoverEffect(cardId, iconId) {
    const card = document.getElementById(cardId);
    const icon = document.getElementById(iconId);

    card.addEventListener('mouseenter', () => {
        icon.classList.add('rotate-360');
        icon.style.transform = 'rotate(360deg)';
    });

    card.addEventListener('mouseleave', () => {
        icon.classList.remove('rotate-360');
        icon.style.transform = 'rotate(0deg)';
    });
}

// Apply hover effect to each card and icon
addHoverEffect('card1', 'icon1');
addHoverEffect('card2', 'icon2');
addHoverEffect('card3', 'icon3');
addHoverEffect('card4', 'icon4');