const mapContainer = document.querySelector('.map-container');

const options = {
    rootMargin: '0px',
    threshold: 0.1
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            //load the map
            const mapSrc = mapContainer.getAttribute('data-src');
            mapContainer.innerHTML = `<iframe src="${mapSrc}" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
            mapContainer.style.display = 'block';
            observer.unobserve(entry.target);
        }
    })
}, options);

observer.observe(mapContainer);
