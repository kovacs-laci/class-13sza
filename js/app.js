document.addEventListener('DOMContentLoaded', function () {
    const studentLinks = document.querySelectorAll('.student-name');
    studentLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const imgSrc = this.getAttribute('data-img');
            toggleImage(imgSrc);
        });
    });
});

function toggleImage(imgSrc) {
    const imageDisplay = document.getElementById('image-display');
    const currentImg = imageDisplay.querySelector('img');
    
    if (currentImg && currentImg.getAttribute('src') === imgSrc) {
        // Ha a kép már megjelenítve van és ugyanaz a forrás, elrejthetjük azt
        imageDisplay.innerHTML = '';
    } else {
        // Ellenkező esetben a megadott képet megjelenítjük
        imageDisplay.innerHTML = `<img src="${imgSrc}" alt="Student Image">`;
    }
}