function createNewElement() {
    const newElement = document.createElement('div');
    newElement.textContent = 'Newly created div using createElement()';
    const parent = document.getElementById('parent');
    parent.appendChild(newElement);
  }

  function changeTextContent() {
    const child = document.getElementById('child');
    child.textContent = 'Updated paragraph text';
  }

  function replaceChildElement() {
    const parent = document.getElementById('parent');
    const replacementElement = document.createElement('p');
    replacementElement.textContent = 'This is the replacement paragraph.';
    const child = document.getElementById('child');
    parent.replaceChild(replacementElement, child);
  }

  function cloneElement() {
    const newElement = document.createElement('div');
    newElement.textContent = 'Newly created div using cloneElement()';
    const parent = document.getElementById('parent');
    const clonedElement = newElement.cloneNode(true);
    parent.appendChild(clonedElement);
  }

  function removeChildElement() {
      const parent = document.getElementById('parent');
      const clonedElement = parent.querySelector('div');
      if (clonedElement) {
        parent.removeChild(clonedElement);
      }
    }
    

  function insertAfterElement() {
    const newElement = document.createElement('div');
    newElement.textContent = 'Newly created div using after()';
    const parent = document.getElementById('parent');
    parent.after(newElement);
  }

  function insertBeforeElement() {
    const newElement = document.createElement('div');
    newElement.textContent = 'Newly created div using prepend()';
    const parent = document.getElementById('parent');
    parent.prepend(newElement);
  }

  function insertLastChildElement() {
    const newElement = document.createElement('div');
    newElement.textContent = 'Newly created div using append()';
    const parent = document.getElementById('parent');
    parent.append(newElement);
  }

  function insertHTMLContent() {
    const parent = document.getElementById('parent');
    parent.insertAdjacentHTML('beforeend', '<p>Inserted with insertAdjacentHTML</p>');
  }