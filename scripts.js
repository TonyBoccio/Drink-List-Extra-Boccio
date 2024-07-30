
document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('li');
    items.forEach((item, index) => {
        item.style.setProperty('--i', index);
    });
});
