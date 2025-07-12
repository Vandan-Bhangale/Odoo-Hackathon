let currentIndex = 0;
const images = document.querySelectorAll('.slider img');
const totalImages = images.length;

function changeImage() {
    currentIndex++;
    if (currentIndex >= totalImages) {
        currentIndex = 0;
    }

    const offset = -currentIndex * 600;
    document.querySelector('.slider').style.transform = `translateX(${offset}px)`;
}

setInterval(changeImage, 4000); 
