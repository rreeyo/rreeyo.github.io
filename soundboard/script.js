const sounds = ['helloThere', 'quack', 'nope', 'rizz', 'steamMessage', 'bruh', 'kaching', 'FBI', 'rightBack']

sounds.forEach(sound => {
    const button = document.createElement('button') //<button></button>
    button.classList.add('button') //<button class="button"></button>

    button.innerText = sound

    button.addEventListener('click', () => {
        stopSound()

        document.getElementById(sound).play()
    })
    
    document.getElementById('buttons-container').appendChild(button)
});

function stopSound(){
    sounds.forEach(sound => {
        const soundClip = document.getElementById(sound)

        soundClip.pause()
        soundClip.currentTime = 0;
    })
}
