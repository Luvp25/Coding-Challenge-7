const input = document.getElementById('headline-input');
const button = document.getElementById('update-btn');
const ctaText = document.getElementById('cta-text');

button.addEventListener('click', function() {
    if (input.value.trim() !== "") {
        ctaText.textContent = input.value;
        input.value = "";
    }
});