// JavaScript for toggling between grid and list view
const gridViewButton = document.getElementById('grid-view');
const listViewButton = document.getElementById('list-view');
const membersContainer = document.getElementById('members-container');

gridViewButton.addEventListener('click', () => {
    membersContainer.classList.remove('list-view');
    membersContainer.classList.add('grid-view');
});

listViewButton.addEventListener('click', () => {
    membersContainer.classList.remove('grid-view');
    membersContainer.classList.add('list-view');
});

// JavaScript for fetching and displaying member data from JSON
fetch('data/members.json')
    .then(response => response.json())
    .then(data => {
        data.members.forEach(member => {
            const memberElement = document.createElement('div');
            memberElement.classList.add('member');

            const memberImage = document.createElement('img');
            memberImage.src = member.image;
            memberImage.alt = member.name;
            memberElement.appendChild(memberImage);

            const memberName = document.createElement('h2');
            memberName.textContent = member.name;
            memberElement.appendChild(memberName);

            const memberAddress = document.createElement('p');
            memberAddress.textContent = member.address;
            memberElement.appendChild(memberAddress);

            const memberPhoneLink = document.createElement('a');
            memberPhoneLink.textContent = member.phone;
            memberPhoneLink.href = 'tel:' + member.phone;
            memberPhoneLink.classList.add('phone-link');
            memberElement.appendChild(memberPhoneLink);

            const memberWebsite = document.createElement('a');
            memberWebsite.textContent = 'Email';
            memberWebsite.href = 'mailto:' + member.email;
            memberElement.appendChild(memberWebsite);

            membersContainer.appendChild(memberElement);
        });
    });
