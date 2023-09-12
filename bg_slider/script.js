
var prev = document.getElementById('prev')
var next = document.getElementById('next')
var thumbnail = document.getElementsByClassName('thumbnail')
var section = document.getElementById('section')

const backgroundImg = new Array (
    'images/bg1.jpg',
    'images/bg2.jpg',
    'images/bg3.jpg',
    'images/bg4.jpg',
    'images/bg5.jpg'
)

let i = 0;

next.onclick = function() {
    if(i < 4){
        section.style.backgroundImage = 'url('+backgroundImg[i+1]+')';
        thumbnail[i+1].classList.add('active')
        thumbnail[i].classList.remove('active')
        i++;
    }
}

prev.onclick = function() {
    if(i > 0){
        section.style.backgroundImage = 'url('+backgroundImg[i-1]+')';
        thumbnail[i-1].classList.add('active')
        thumbnail[i].classList.remove('active')
        i--;
    }
    
}