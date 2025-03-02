// Remove the <main> with id 'main'
document.querySelector('main#main').remove();

// Create a new <h1> element
const newHeader = document.createElement('h1');

// Set its id to 'victory'
newHeader.id = 'victory';

// Set the text inside the <h1> element
newHeader.innerHTML = "YOUR-NAME is the champion"; // Replace YOUR-NAME with your actual name

// Append the new <h1> to the document body
document.body.appendChild(newHeader);
