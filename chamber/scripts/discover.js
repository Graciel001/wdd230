function getCurrentTime() {
    return new Date().getTime();
}

function displayMessage() {
    const currentTime = getCurrentTime();
    const lastVisitTime = localStorage.getItem('lastVisitTime');

    if (!lastVisitTime) {
        localStorage.setItem('lastVisitTime', currentTime);
        document.querySelector('.sidebar-content').innerHTML = "Welcome to Sunshine Valley, where the sun always shines and adventures await at every turn. Nestled in the heart of nature, our community thrives with vibrant culture, friendly faces, and endless opportunities for exploration.";
    } else {
        const diffTime = currentTime - lastVisitTime;
        const diffDays = Math.floor(diffTime / (1000 * 3600 * 24));

        if (diffDays === 0) {
            document.querySelector('.sidebar-content').innerHTML = "Back so soon! Awesome!";
        } else {
            const message = diffDays === 1 ? "day" : "days";
            document.querySelector('.sidebar-content').innerHTML = `You last visited ${diffDays} ${message} ago.`;
        }

        localStorage.setItem('lastVisitTime', currentTime);
    }
}

displayMessage();
