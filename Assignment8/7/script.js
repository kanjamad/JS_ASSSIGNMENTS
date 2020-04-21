

function displayImg() {
    var dogImages = [{
        src: "./img/1.jpg",
        width: "240",
        height: "160"
    }, {
        src: "./img/2.jpg",
        width: "320",
        height: "195"
    }, {
        src: "./img/3.jpg",
        width: "500",
        height: "343"
    }, {
        src: "./img/4.jpg",
        width: "320",
        height: "195"
    },{
        src: "./img/5.jpg",
        width: "320",
        height: "195"
    },{
        src: "./img/6.jpg",
        width: "320",
        height: "195"
    },{
        src: "./img/7.jpg",
        width: "320",
        height: "195"
    }, ];

    var preBuffer = [];
    for (var i = 0, j = dogImages.length; i < j; i++) {
        preBuffer[i] = new Image();
        preBuffer[i].src = dogImages[i].src;
        // preBuffer[i].width = dogImages[i].width;
        // preBuffer[i].height = dogImages[i].height;
    }

    // create random image number
    function getRandomInt(min, max) {
        //  return Math.floor(Math.random() * (max - min + 1)) + min;

        imn = Math.floor(Math.random() * (max - min + 1)) + min;
        return preBuffer[imn];
    }

    // 0 is first image,   preBuffer.length - 1) is  last image

    var newImage = getRandomInt(0, preBuffer.length - 1);

    // remove the previous images
    var images = document.getElementsByTagName('img');
    var l = images.length;
    for (var p = 0; p < l; p++) {
        images[0].parentNode.removeChild(images[0]);
    }
    // display the image  
    document.body.appendChild(newImage);
}