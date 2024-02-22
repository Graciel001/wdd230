const input = document.querySelector('#favchap');
const button = document.querySelector('#addBtn');
const list = document.querySelector('#list');
let chaptersArray = getChapterList() || [];

button.addEventListener('click', () => {
    if (input.value !== '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        li.textContent = input.value;
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        list.append(li);

        deleteButton.addEventListener('click', () => {
            const chapter = li.textContent.slice(0, -1);
            chaptersArray = chaptersArray.filter(item => item !== chapter);
            setChapterList(chaptersArray);
            list.removeChild(li);
            input.focus();
        });

        chaptersArray.push(input.value);
        setChapterList(chaptersArray);

        input.value = '';
    } else {
        input.focus();
    }
});

function getChapterList() {
    return JSON.parse(localStorage.getItem('chapters')) || [];
}

function setChapterList(array) {
    localStorage.setItem('chapters', JSON.stringify(array));
}

window.addEventListener('DOMContentLoaded', () => {
    chaptersArray.forEach(chapter => {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        li.textContent = chapter;
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        list.append(li);

        deleteButton.addEventListener('click', () => {
            chaptersArray = chaptersArray.filter(item => item !== chapter);
            setChapterList(chaptersArray);
            list.removeChild(li);
            input.focus();
        });
    });
});
