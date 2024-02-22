document.addEventListener("DOMContentLoaded", function() {
    const date = new Date(document.lastModified);
    const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    document.getElementById("footer").innerText = `Last modified: ${formattedDate}`;
});
