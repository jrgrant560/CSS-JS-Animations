eyelidImages = [
    'eyeImages/eyelid2-06.png',
    'eyeImages/eyelid2-07.png',
    'eyeImages/eyelid2-08.png',
    'eyeImages/eyelid2-09.png'
]

eyelid = document.querySelector('.eyelidImg');

let interval = 8000;

setInterval(() => {
    setTimeout(function() {
        eyelid.src = eyelidImages[1]
    },0);
    setTimeout(function() {
        eyelid.src = eyelidImages[2]
    },10);
    setTimeout(function() {
        eyelid.src = eyelidImages[3]
    },20);
    setTimeout(function() {
        eyelid.src = eyelidImages[2]
    },50);
    setTimeout(function() {
        eyelid.src = eyelidImages[1]
    },60);
    setTimeout(function() {
        eyelid.src = eyelidImages[0]
    },70);
    // console.log("interval");
}, interval);