function endTransition (e) {
    e.target.classList.remove('playing');
}

function playSound (e) {
    let keyPressed = e.key;
    let keyCode = e.keyCode;

    let key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    key.classList.add('playing');

    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (audio != null) audio.play();
}

const keys = document.querySelectorAll('.key');

console.log(keys);

keys.forEach((key) => {
    
    key.addEventListener('transitionend', endTransition);

});

window.addEventListener('keydown', playSound);
