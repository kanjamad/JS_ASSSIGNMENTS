const dogImages = [
    './img/1.jpg',
    './img/2.jpg',
    './img/3.jpg',
    './img/4.jpg',
    './img/5.jpg',
    './img/6.jpg',
    './img/7.jpg',
    './img/8.jpg',
    './img/9.jpg',
    './img/10.jpg',
];


let currentIndex = 0;

document.getElementById('slideImg').setAttribute('src', dogImages[0]);

const onClickPrev = () => {
    if (currentIndex === 0) {
        document.getElementById('slideImg').setAttribute('src', dogImages[dogImages.length - 1])
        currentIndex = 10;
    } else {
        document.getElementById('slideImg').setAttribute('src', dogImages[currentIndex - 1])
        currentIndex--;
    };
};

const onClickNext = () => {
    if (currentIndex === 10) {
        document.getElementById('slideImg').setAttribute('src', dogImages[0])
        currentIndex = 0;
    } else {
        document.getElementById('slideImg').setAttribute('src', dogImages[currentIndex + 1])
        currentIndex++;
    }
};

