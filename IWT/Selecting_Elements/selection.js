function selectAndModifyElements() {
    // Select elements using the methods
    const byId = document.getElementById("elementByIdExample");
    const byName = document.getElementsByName("elementByNameExample")[0]; // Note: getElementsByName returns a NodeList
    const byTagName = document.getElementsByTagName("p")[0];
    const byClass = document.getElementsByClassName("exampleClass")[0];
    const byQuerySelector = document.querySelector("p.exampleClass");

    console.log(byId)
    console.log(byName)
    console.log(byTagName)
    console.log(byClass)
    console.log(byQuerySelector)
    // Modify the selected elements
    byId.textContent = "Selected by ID - Modified";
    byName.textContent = "Selected by Name - Modified";
    byTagName.textContent = "Selected by Tag Name - Modified";
    byClass.textContent = "Selected by Class - Modified";
    byQuerySelector.textContent = "Selected by Query Selector - Modified";
}

// Attach the function to the button click event
document.getElementById("selectAndModifyButton").addEventListener("click", selectAndModifyElements);