function getAttributeExample() {
    const myImage = document.getElementById("myImage");
    const srcAttribute = myImage.getAttribute("src");
    document.getElementById("result").textContent = "src Attribute Value: " + srcAttribute;
}

function setAttributeExample() {
    const imageUrl = prompt("Enter the new image URL:");
    const imageDescription = prompt("Enter the that best describe the image")
    if (imageUrl !== null) {
        const myImage = document.getElementById("myImage");
        myImage.setAttribute("src", imageUrl);
        myImage.setAttribute("alt", imageDescription)
        document.getElementById("result").textContent = "src Attribute Set!";
    }
}

function removeAttributeExample() {
    const myImage = document.getElementById("myImage");
    myImage.removeAttribute("src");
    myImage.removeAttribute("alt");
    document.getElementById("result").textContent = "All Attribute Removed!";
}

function hasAttributeExample() {
    const myImage = document.getElementById("myImage");
    const hasAttribute = myImage.hasAttribute("alt");
    if (hasAttribute) {
        document.getElementById("result").textContent = "alt Attribute Exists!";
    } else {
        document.getElementById("result").textContent = "alt Attribute Does Not Exist!";
    }
}