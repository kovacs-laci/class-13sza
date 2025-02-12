document.addEventListener('DOMContentLoaded', function () {
    const studentLinks = document.querySelectorAll('.student-name');
    studentLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const imgSrc = this.getAttribute('data-img');
            const imgAlt = this.textContent.trim();
            toggleImage(imgSrc, imgAlt);
        });
    });
});

function toggleImage(imgSrc, imgAlt) {
    const imageDisplay = document.getElementById('image-display');
    const currentImg = imageDisplay.querySelector('img');
    
    if (currentImg && currentImg.getAttribute('src') === imgSrc) {
        // Ha a kép már megjelenítve van és ugyanaz a forrás, elrejthetjük azt
        imageDisplay.innerHTML = '';
    } else {
        // Ellenkező esetben a megadott képet megjelenítjük
        imageDisplay.innerHTML = `<img src="${imgSrc}" alt="${imgAlt}" title="${imgAlt}">`;
    }
}