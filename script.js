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

let salvaid = []
let salvacolore = []
let cont = 0
let punteggio=0


function coloring() {
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
coloring();


function showCard(x) {
    const firstChild = x.children[0];
    firstChild.style.display = 'none';
    salvacolore.push(window.getComputedStyle(x).getPropertyValue('background'))
    salvaid.push(x.id)
    console.log(salvacolore)
    console.log(salvaid)
    cont++
    if (cont == 2) {
        confronto(salvacolore, salvaid)
        cont = 0
    }
 
}

function confronto(x, y) {
    if (x[0] == x[1]) {
        punteggio++
        if (punteggio==4) {
            console.log('hai vinto')
        }
        console.log('sono uguali')
        x.length = 0
        y.length = 0
    }
    else {
        setTimeout(()=> {
        const firstParent = document.getElementById(y[0])
        const firstchild = firstParent.children[0]

        const secondtParent = document.getElementById(y[1])
        const secondtchild = secondtParent.children[0]

        firstchild.style.display = 'block';
        secondtchild.style.display = 'block';

        console.log('non sono uguali')
        x.length = 0
        y.length = 0
    }, 500);
    }

}


