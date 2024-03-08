const baseURL = "";

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
      lesson.links.forEach(link => {
        const li = document.createElement("li");
        const a = document.createElement("a");
  
        a.href = baseURL + link.url;
        a.textContent = lesson.lesson + ": " + link.title;
  
        li.appendChild(a);
        ul.appendChild(li);
      });
    });
  }
  

document.addEventListener("DOMContentLoaded", getLinks);
