//randomColor function//
function randomRgb(value) {
    col = "rgb("
        + randomColor(255) * value + ","
        + randomColor(255) * value + ","
        + randomColor(255) * value + ")";
}
function randomColor(num) {
    return Math.floor(Math.random() * num);
}
function resetColorOfBoxes() {
    boxes = document.querySelectorAll('div');
    boxes.forEach(box => box.style.backgroundColor = "white");
}

function promptEntry() {
    let userInput = prompt("How many rows would you like?", "Enter a number");

    if (isNaN(userInput)) {
        alert("That's not a valid entry. Try again");
        promptEntry();
    }

    else {
        createGrid(userInput);
    }
}
function createGrid(numberOfRows) {

    resetColorOfBoxes()

    let gridTemplateColumns = 'repeat(' + numberOfRows + ', 1fr)'

    var container = document.getElementById("container");
    container.style.gridTemplateColumns = gridTemplateColumns;
    container.style.gridTemplateRows = gridTemplateColumns;

    let brightness = [];
    let numberOfBoxes = numberOfRows ** 2;

    /*Create boxes*/
    for (let i=0; i < numberOfBoxes; i++) {
        brightness[i + 1] = 1;
        console.log(brightness);

        var div = document.createElement("div");
        div.classList.add(i + 1);
        document.getElementById("container").appendChild(div);

        div.addEventListener("mouseenter", function () {
            var className = this.className;
            brightness[className] = brightness[className] - 0.1;
            console.log(brightness[className]);
            randomRgb(brightness[className]);
            this.style.backgroundColor = col;
        });
    }
}
// button functionality
let btn = document.getElementById("start")
btn.addEventListener("click", promptEntry)
