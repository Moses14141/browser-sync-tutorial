// Select the button element
const button = document.getElementById('changeTextButton');

// Add an event listener to change the header text on button click
button.addEventListener('click', function() {
    const header = document.querySelector('header h1');
    header.textContent = 'Text has been changed!';
    // Optionally, you can change button text too
    button.textContent = 'You clicked me!';
});
