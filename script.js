function buildSketchPad(size) {
    const sketchPad = document.querySelector('#sketchPad');    

    for (let i = 1; i <= size; i++) {
        const cellDiv = document.createElement('div');

        cellDiv;
        cellDiv.setAttribute('class', 'cellRow');
        cellDiv.setAttribute('id', `row${i}`);
        sketchPad.appendChild(cellDiv);

        for (let j = 1; j <= size; j++) {
            const parent = document.querySelector(`#row${i}`);
            const cellDiv = document.createElement('div');

            cellDiv;
            cellDiv.setAttribute('class', 'cell');
            parent.appendChild(cellDiv);
        }
    }    
}

function buildSketchPadQuestions() {
    const parent = document.querySelector('#sketchSetup');
    const form = document.createElement('form');
    const padSize = document.createElement('input');
    const padColorLabel = document.createElement('label');
    const padColor = document.createElement('input');
    const submitBtn = document.createElement('button');

    padSize.setAttribute('type', 'number');
    padSize.setAttribute('id', 'padSize');
    padSize.setAttribute('placeholder', 'Enter Pad Size');
    padSize.setAttribute('min', '10');
    padSize.setAttribute('max', '100');
    padSize.setAttribute('required', '');

    padColorLabel.setAttribute('for', 'padColor');
    padColorLabel.innerText = 'Pick sketch pad color';
    padColor.setAttribute('type', 'color');
    padColor.setAttribute('id', 'padColor');
    padColor.setAttribute('name', 'padColor');
    padColor.setAttribute('value', '#ffffff');

    submitBtn.setAttribute('type', 'button');
    submitBtn.setAttribute('id', 'submitBtn');
    submitBtn.innerText = 'Submit';

    form.appendChild(padSize);
    form.appendChild(padColorLabel);
    form.appendChild(padColor);
    form.appendChild(submitBtn);

    parent.appendChild(form);
}

// function testCell() {
//     const cell = document.querySelectorAll('.cell');

//     cell.forEach((x) => {
//             x.addEventListener('click', () => {
//             console.log(x);
//             // x.style.backgroundColor = `hsl(0, 100%, ${darkness -= 1}%)`;
//         })
//     })
// }