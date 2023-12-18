function generateRandomPairs() {
    const pairs = [];
    for (let i = 1; i <= 4; i++) {
        pairs.push(i);
        pairs.push(i);
    }
    pairs.sort(() => Math.random() - 0.5);
    return pairs;
}

const randomPairs = generateRandomPairs();
console.log(randomPairs);

let img = document.querySelectorAll('.card_cont')
console.log(img)

let arrprova = []
let cont = 0


function changeback() {
    for (let i = 0; i < randomPairs.length; i++) {
        switch (randomPairs[i]) {
            case 1:
                img[i].style.background = 'red';
                break;
            case 2:
                img[i].style.background = 'blue';
                break;
            case 3:
                img[i].style.background = 'green';
                break;
            case 4:
                img[i].style.background = 'yellow';
                break;
            default:
                break;
        }
    }
}
changeback();


function showCard(x) {

    arrprova.push(window.getComputedStyle(x).getPropertyValue('background'))
    console.log(window.getComputedStyle(x).getPropertyValue('background'))
    cont++
    if (cont == 2) {
        confronto(arrprova)
        cont = 0
    }
    console.log(cont)
}

function confronto(x) {
    if (x[0] == x[1]) {
        console.log('sono uguali')
    }
    else {
        console.log('non sono uguali')
    }
    x.length = 0
}