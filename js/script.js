    document.querySelectorAll('.service-title').forEach(item => {
        item.addEventListener('click', () => {
            const desc = item.nextElementSibling;
            desc.style.display = desc.style.display === 'block' ? 'none' : 'block';
        });
    });
