const demoElement = document.getElementById("demoElement");
const classDisplay = document.getElementById("classDisplay");
const currentClasses = document.getElementById("currentClasses");
currentClasses.textContent = demoElement.className;

function changeStyle() {
    const bgColor = prompt("Enter background color:");
    const textColor = prompt("Enter text color");
    demoElement.style.backgroundColor = bgColor;
    demoElement.style.color = textColor;
}

function getComputedStyles() {
    const computedStyles = getComputedStyle(demoElement);
    alert("Computed Background Color: " + computedStyles.backgroundColor);
    alert("Computed Color: " + computedStyles.color);
}

function addClass() {
    const newClass = prompt("Enter a new CSS class to add");
    demoElement.classList.add(newClass);

    // Update the class display using the className property
    currentClasses.textContent = demoElement.className;
}

function removeClass() {
    const classToRemove = prompt("Enter the CSS class to remove");
    demoElement.classList.remove(classToRemove);

    // Update the class display using the className property
    currentClasses.textContent = demoElement.className;
}

function getDimensions() {
    const width = demoElement.offsetWidth;
    const height = demoElement.offsetHeight;
    alert("Width: " + width + "px");
    alert("Height: " + height + "px");
}