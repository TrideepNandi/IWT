 // JavaScript code to demonstrate DOM navigation and display text content
 const parent = document.getElementById("parent");
const firstChild = parent.firstChild; // Get the first child
const lastChild = parent.lastChild;   // Get the last child
const secondParagraph = firstChild.nextSibling; // Get the next sibling
const thirdParagraph = secondParagraph.nextSibling; // Get the next sibling
const previousSibling = thirdParagraph.previousSibling; // Get the previous sibling

//NOTE: If we use firstChild, lastChild, nextSibling, previousSibling then it would include the whitespaces in the document
console.log("First Child:", firstChild);
console.log("Last Child:", lastChild);
console.log("Second Paragraph (Next Sibling):", secondParagraph);
console.log("Third Paragraph (Next Sibling):", thirdParagraph);
console.log("Second Paragraph (Previous Sibling):", previousSibling);

//NOTE: To fix the above issue we use firstElementChild, lastElement, nextElementSibling, previousElementSibling. This would only get the elements in a document.
console.log("")
console.log("------------Demonstrating the fix--------------")
const firstElementChild = parent.firstElementChild;
const lastElementChild = parent.lastElementChild;
const secondParagraph1 = firstChild.nextElementSibling;
const thirdParagraph1 = secondParagraph.nextElementSibling;
const previousSibling1 = thirdParagraph.previousElementSibling;

console.log("First Child Text:", firstElementChild.textContent);
console.log("Last Child Text:", lastElementChild.textContent);
console.log("Second Paragraph (Next Sibling) Text:", secondParagraph1.textContent);
console.log("Third Paragraph (Next Sibling) Text:", thirdParagraph1.textContent);
console.log("Second Paragraph (Previous Sibling) Text:", previousSibling1.textContent);