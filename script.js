// Get elements
const form = document.getElementById('chat-form');
const userInput = document.getElementById('chat-input');
const userContainer = document.querySelector('.user');

// Function to create and display messages
function displayMessage(message, sender) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message', sender);
  messageDiv.textContent = message;
  userContainer.appendChild(messageDiv);
  userContainer.scrollTop = userContainer.scrollHeight; // Scroll to the bottom
}

// Handle form submission and display user input
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from refreshing the page

  const messageText = userInput.value.trim();
  if (messageText) {
    // Display user's message
    displayMessage(messageText, 'right');
    
    // Clear the input field after submission
    userInput.value = '';
    
    // Chatbot's response (for future purposes)
    setTimeout(() => {
      displayMessage("Hi! How can I help you?", 'left'); // Bot response
    }, 500); // Bot responds after a short delay
  }
});

// Initial bot message (when page loads)
window.addEventListener('load', () => {
  displayMessage("Hi! How can I help you?", 'left'); // Bot's first message
});

// Get references to the elements
const downloadButton = document.querySelector('.download-image-btn');
const imageInput = document.getElementById('image-input');
const selectedImage = document.getElementById('selected-image');

// Add an event listener to the button to trigger the file input
downloadButton.addEventListener('click', function() {
  imageInput.click();  // Trigger the file input click
});

// Add an event listener to the file input to handle file selection
imageInput.addEventListener('change', function(event) {
  const file = event.target.files[0];
  
  if (file) {
    const reader = new FileReader();
    
    // When the file is loaded, set the image source to the selected file
    reader.onload = function(e) {
      selectedImage.src = e.target.result;
      selectedImage.style.display = 'block';  // Make the image visible
    };
    
    reader.readAsDataURL(file); // Read the file as a data URL
  }
});
