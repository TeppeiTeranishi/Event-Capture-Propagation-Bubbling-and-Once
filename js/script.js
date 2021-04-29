const sect = document.querySelectorAll('section');
const button = document.querySelector('button');

function logText(e) {
    console.log(this.classList.value);
}

sect.forEach(section => section.addEventListener('click', logText, {
    capture: false,
    once: true
}));

button.addEventListener('click', () => {
    console.log('click!!!');
}, {
    once: true
});