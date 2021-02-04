function buildSketchPad(size) {
    const sketchPad = document.querySelector('#sketchPad');    

    for (let i = 1; i <= size; i++) {
        const cellDiv = document.createElement('div');

        cellDiv;
        cellDiv.setAttribute('class', 'cell');
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