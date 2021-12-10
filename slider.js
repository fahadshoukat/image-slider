const images = document.querySelectorAll(".slider");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");

images.forEach(function (image, index) {

    image.style.left = `${index * 100}%`;
});

let counter = 0;

nextBtn.addEventListener('click', function () {

    counter++;
    carousel();
});

prevBtn.addEventListener('click', function () {

    counter--;
    carousel();
});

function carousel() {

    if(counter < images.length - 1) {
        nextBtn.style.display = "block";
    }
    else {
        nextBtn.style.display = "none";
    }

    if(counter > 0) {
        prevBtn.style.display = "block";
    }
    else {
        prevBtn.style.display = "none";
    }

    images.forEach(function(image){

        image.style.transform = `translateX(-${counter * 100}%)`;
    });
}

prevBtn.style.display = "none";
