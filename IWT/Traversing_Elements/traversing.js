// Select an element within the DOM structure
const targetElement = document.querySelector('ul li'); // Select the first <li> for demonstration

// Get the parent node of the target element
const parent = targetElement.parentNode;

// Get the first child element of the parent element
const firstChild = parent.firstElementChild;

// Get the last child element of the parent element
const lastChild = parent.lastElementChild;

// Get all child elements of the parent element
const children = Array.from(parent.children);

// Get the next sibling of the target element
const nextSibling = targetElement.nextElementSibling;

// Get the previous siblings of the target element
const prevSiblings = [];
let prevSibling = targetElement.previousElementSibling;
while (prevSibling) {
    prevSiblings.push(prevSibling);
    prevSibling = prevSibling.previousElementSibling;
}

// Get all siblings of the target element
let siblings = [];
let sibling = parent.firstChild;
while (sibling) {
    if (sibling.nodeType === 1 && sibling !== targetElement) {
        siblings.push(sibling);
    }
    sibling = sibling.nextSibling;
}

console.log('Parent Node:');
console.log(parent, parent.textContent);

console.log('First Child Element:');
console.log(firstChild, firstChild.textContent);

console.log('Last Child Element:');
console.log(lastChild, lastChild.textContent);

console.log('All Child Elements:');
console.log(children);

console.log('Next Sibling:');
console.log(nextSibling, nextSibling.textContent);

console.log('Previous Siblings:');
console.log(prevSiblings);

console.log('All Siblings:');
console.log(siblings);
