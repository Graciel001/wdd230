const baseURL = "https://graciel001.github.io/wdd230/";

const linksURL = "https://graciel001.github.io/wdd230/data/links.json";

async function getLinks() {
  try {
    const response = await fetch(linksURL);
    const data = await response.json();

    displayLinks(data);
  } catch (error) {
    console.error("Error al obtener los enlaces:", error);
  }
}

function displayLinks(data) {
  const lessons = data.lessons;

  const ul = document.querySelector(".card ul");

  lessons.forEach(lesson => {
    const li = document.createElement("li");
    const a = document.createElement("a");

    a.href = baseURL + lesson.links[0].url;
    a.textContent = lesson.lesson + ": " + lesson.links[0].title;

    li.appendChild(a);
    ul.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", getLinks);
