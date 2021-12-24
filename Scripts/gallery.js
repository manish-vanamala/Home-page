const container = document.querySelector('.gallery-container');
const renderImages = async () =>{
    const res = await fetch("http://localhost:3000/images/");
    const images = await res.json();
    let template = '';
    images.forEach(image => {
        template+=`
        <div class="gallery">
        <h2>${image.founder}</h2>
        <img src="${image.src}" alt="${image.alt}" width=200px height=200px/>
        <p>${image.description}</p>
        </div>
        `
    })
    container.innerHTML = template;
}
window.addEventListener('DOMContentLoaded',() => renderImages());