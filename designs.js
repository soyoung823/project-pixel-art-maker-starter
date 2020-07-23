/*
Find the submit button
add click listener to it so, clicking the button will call `makegrid()`
get the values of `width` and `height`
clear the old grid
create a new grid with the width and height values
loop through the cells and for each cell add a click listener to change it's color
inside the change color, find the current value of the color picker and use it to set the style
test your app
*/
// TODO: Select color input // size input 
let table = document.getElementById('pixelCanvas');
let colorPick = document.getElementById('colorPicker');
let sizePick = document.getElementById('sizePicker');

// TODO: When size is submitted by the user, call makeGrid()
sizePick.addEventListener('submit', function(event) {
    const width = document.getElementById('inputWidth').value;
    const height = document.getElementById('inputHeight').value;
    event.preventDefault();
    makeGrid(height, width);
});

// TODO: Add color function call to each cell
table.addEventListener('click', function addColor(event) {
    if (event.target.nodeName === 'TD') {
        event.target.style.backgroundColor = colorPick.value;
    }
});

// TODO: Make grid by user input
function makeGrid(height, width) {
    table.innerHTML = ' ';
    for (let i = 0; i < height; i++) {
        var row = table.insertRow(0);
        for (let j = 0; j < width; j++) {
            row.insertCell(0);
        }
    }
}

// function makeGrid(height, width) {
//     //let selectedColor = document.getElementById('colorPicker').value;
//     table.innerHTML = " ";
//     for (let i = 0; i < height; i++) {
//         const row = document.createElement('tr');
//         table.append(row);
//         for (let j = 0; j < width; j++) {
//             const col = document.createElement('td');
//             row.append(col);
//             col.addEventListener('click', function(colorPick) {   
//                 col.style.backgroundColor = colorPick.value;
//             });
//         }
//     }
// };