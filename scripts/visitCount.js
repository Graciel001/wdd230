if(localStorage.getItem('pageVisits')) {

    let pageVisits = parseInt(localStorage.getItem('pageVisits'));

    pageVisits++;

    localStorage.setItem('pageVisits', pageVisits);

    document.getElementById('page-visit').textContent = `Page Visit: ${pageVisits}`;
} else {

    localStorage.setItem('pageVisits', 1);

    document.getElementById('page-visit').textContent = `Page Visit: 1`;
}
