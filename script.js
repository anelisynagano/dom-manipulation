const secondParagraph = document.getElementById('secondParagraph')
secondParagraph.innerText = "i've changed the content!"
secondParagraph.style.fontWeight = "bold"

const buttons = document.getElementsByTagName('button');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.backgroundColor = 'green'
}

const redClass = document.getElementsByClassName('red')
for (let index = 0; index < redClass.length; index++) {
    redClass[index].style.color = 'red';
}

const button1 = document.getElementById('button1')
let count = 0
button1.addEventListener('click', () => {
    count = count + 1;
    button1.innerText = `i've been clicked ${count} times` 
})


const selects = document.getElementsByTagName('select');
const spanChoice = document.getElementById('userSelection');

for (let ind = 0; ind < selects.length; ind++) {
    selects[ind].addEventListener('change', (event) => {
        spanChoice.innerText = event.target.value;
    })   
}

const buttonsArray = document.getElementsByClassName('clickedButton')

for (let j = 0; j < buttonsArray.length; j++) {
    buttonsArray[j].addEventListener('click', () => {
        console.log(`you've clicked on ${buttonsArray[j].innerText}`);
    })
}