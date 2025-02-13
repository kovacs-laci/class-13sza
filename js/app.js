document.addEventListener('DOMContentLoaded', function () {
    const studentLinks = document.querySelectorAll('.student-name');
    studentLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const imgSrc = this.getAttribute('data-img');
            toggleImage(imgSrc);
        });
    });

    document.getElementById('show-all-students').addEventListener('click', function (event) {
        event.preventDefault();
        showAllStudents();
    });
});

function toggleImage(imgSrc) {
    const imageDisplay = document.getElementById('image-display');
    const currentImg = imageDisplay.querySelector('img');
    
    if (currentImg && currentImg.getAttribute('src') === imgSrc) {
        // If the image is already displayed and the source is the same, hide it
        imageDisplay.innerHTML = '';
    } else {
        // Otherwise, display the specified image
        imageDisplay.innerHTML = `<img src="${imgSrc}" alt="Student Image">`;
    }
}

function showAllStudents() {
    const thumbnails = document.getElementById('thumbnails');
    thumbnails.style.display = 'block';
    const studentLinks = document.querySelectorAll('.student-name');
    let thumbnailsHtml = '<div class="thumbnails-grid">';
    studentLinks.forEach(link => {
        const imgSrc = link.getAttribute('data-img');
        const name = link.textContent;
        thumbnailsHtml += `<div class="thumbnail"><img src="${imgSrc}" alt="${name}"><p>${name}</p></div>`;
    });
    thumbnailsHtml += '</div>';
    thumbnails.innerHTML = thumbnailsHtml;
}