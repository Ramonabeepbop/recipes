// script.js
document.getElementById('searchButton').addEventListener('click', function() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    document.querySelectorAll('.recipe-card').forEach(function(card) {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const subtitle = card.querySelector('p:nth-of-type(1)').textContent.toLowerCase();
        if (title.includes(query) || subtitle.includes(query)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

document.getElementById('searchInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('searchButton').click();
    }
});

document.querySelectorAll('.course-button').forEach(function(button) {
    button.addEventListener('click', function() {
        const course = button.getAttribute('data-course');
        document.querySelectorAll('.recipe-card').forEach(function(card) {
            if (course === 'all' || card.getAttribute('data-course') === course) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});


