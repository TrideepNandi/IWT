  // JavaScript page load events
  document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded event fired.');
  });

  // JavaScript onload event
  window.addEventListener('load', function() {
    console.log('Load event fired.');
  });

  // JavaScript mouse events
  const divElement = document.getElementById('myDiv');
  divElement.addEventListener('mouseover', function() {
    console.log('Mouse over event fired.');
  });

  divElement.addEventListener('click', function() {
    console.log('Click event fired.');
  });

  // JavaScript keyboard events
  const inputElement = document.getElementById('myInput');
  inputElement.addEventListener('keydown', function(event) {
    console.log(`Keydown event: Key pressed - ${event.key}`);
  });

  // JavaScript Event Delegation
  document.body.addEventListener('click', function(event) {
    if (event.target.id === 'myButton') {
      console.log('Button clicked via event delegation.');
    }
  });

  // JavaScript custom events
  const customEvent = new Event('customEvent');
  document.addEventListener('customEvent', function() {
    console.log('Custom event fired.');
  });

  setTimeout(function() {
    document.dispatchEvent(customEvent);
  }, 2000);