// Select modal elements
const modal = document.getElementById('quoteModal');
const quoteText = document.getElementById('quoteText');
const closeButton = document.getElementById('closeButton');

// Add event listeners to ornaments
document.querySelectorAll('.ornament').forEach(ornament => {
    ornament.addEventListener('click', () => {
        const quote = ornament.getAttribute('data-quote');
        showQuote(quote);
    });
});

// Show the quote modal with the provided text
function showQuote(quote) {
    quoteText.textContent = quote;
    modal.classList.remove('hidden');
}

// Close the modal when the close button is clicked
closeButton.addEventListener('click', closeModal);

// Hide the modal
function closeModal() {
    modal.classList.add('hidden');
}

// Snowfall effect
const snowContainer = document.querySelector('.snow');
for (let i = 0; i < 100; i++) {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.left = `${Math.random() * 100}%`;
    snowflake.style.animationDuration = `${Math.random() * 5 + 2}s`;
    snowContainer.appendChild(snowflake);
}

// Add event listeners to gifts
document.querySelectorAll('.gift').forEach((gift, index) => {
    gift.addEventListener('click', () => {
        showQuote(`Gift #${index + 1}`);
    });
});
