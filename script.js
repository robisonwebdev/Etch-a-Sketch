function buildSketchPad(size, color) {
    const sketchPad = document.querySelector('#sketchPad');    

    for (let i = 1; i <= size; i++) {
        const cellDiv = document.createElement('div');

        cellDiv;
        cellDiv.style.backgroundColor = color;
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

function buildSketchSetupQuestions() {
    const parent = document.querySelector('#sketchSetup');
    const form = document.createElement('form');
    const padSize = document.createElement('input');
    const padBackgroundColorLabel = document.createElement('label');
    const padBackgroundColor = document.createElement('input');
    const padColorLabel = document.createElement('label');
    const padColor = document.createElement('input');
    const submitBtn = document.createElement('button');

    form.setAttribute('id', 'sketchPadQuestions');

    padSize.setAttribute('type', 'number');
    padSize.setAttribute('id', 'padSize');
    padSize.setAttribute('placeholder', 'Enter Pad Size');
    padSize.setAttribute('min', '10');
    padSize.setAttribute('max', '100');
    padSize.setAttribute('required', '');

    padBackgroundColorLabel.setAttribute('for', 'padBackgroundColor');
    padBackgroundColorLabel.innerText = 'Pick pad background color';
    padBackgroundColor.setAttribute('type', 'color');
    padBackgroundColor.setAttribute('id', 'padBackgroundColor');
    padBackgroundColor.setAttribute('name', 'padBackgroundColor');
    padBackgroundColor.setAttribute('value', '#ffffff');

    padColorLabel.setAttribute('for', 'padColor');
    padColorLabel.innerText = 'Pick sketch color';
    padColor.setAttribute('type', 'color');
    padColor.setAttribute('id', 'padColor');
    padColor.setAttribute('name', 'padColor');
    padColor.setAttribute('value', '#000000');

    submitBtn.setAttribute('type', 'button');
    submitBtn.setAttribute('id', 'submitBtn');
    submitBtn.innerText = 'Submit';

    form.appendChild(padSize);
    form.appendChild(padBackgroundColorLabel);
    form.appendChild(padBackgroundColor);
    form.appendChild(padColorLabel);
    form.appendChild(padColor);
    form.appendChild(submitBtn);

    parent.appendChild(form);
}

function getSketchSetupAnswers() {
    const sketchSetup = document.querySelector('#sketchSetup');
    const padSize = document.querySelector('#padSize');
    const padBackgroundColor = document.querySelector('#padBackgroundColor');
    const padColor = document.querySelector('#padColor');
    const submitBtn = document.querySelector('#submitBtn'); 

    submitBtn.addEventListener('click', () => {
        buildSketchPad(padSize.value, padBackgroundColor.value);
        draw(padColor.value);
        sketchSetup.style.display = 'none';
    })
}

function draw(color) {
    const cell = document.querySelectorAll('.cell');

    cell.forEach((x) => {
        x.addEventListener('mouseover', () => {
            x.style.backgroundColor = color;
        })
    })
}

buildSketchSetupQuestions();
getSketchSetupAnswers();

