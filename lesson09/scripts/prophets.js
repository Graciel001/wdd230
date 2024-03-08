const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
  displayProphets(data.prophets);
}

function displayProphets(prophets) {
  const cards = document.getElementById('cards');
  prophets.forEach(prophet => {
    const card = document.createElement('div');
    card.classList.add('card');

    const name = document.createElement('h2');
    name.textContent = `${prophet.name} ${prophet.lastname}`;
    card.appendChild(name);

    const birthdate = document.createElement('p');
    birthdate.textContent = `Date of Birth: ${prophet.birthdate}`;
    card.appendChild(birthdate);

    const birthplace = document.createElement('p');
    birthplace.textContent = `Place of Birth: ${prophet.birthplace}`;
    card.appendChild(birthplace);

    const image = document.createElement('img');
    image.src = prophet.imageurl;
    card.appendChild(image);

    cards.appendChild(card);
  });
}

getProphetData();
