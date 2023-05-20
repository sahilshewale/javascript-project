// // JavaScript
function openImage(img) {
    // Create the lightbox element
    var lightbox = document.createElement('div');
    lightbox.classList.add('lightbox');
  
    // Create the image element inside the lightbox
    var image = document.createElement('img');
    image.src = img.src;
  
    // Create the close button inside the lightbox
    var closeButton = document.createElement('span');
    closeButton.classList.add('lightbox-close');
    closeButton.innerHTML = '&times;';
  
    // Append the image and close button to the lightbox
    lightbox.appendChild(image);
    lightbox.appendChild(closeButton);
  
    // Add click event listener to close the lightbox
    closeButton.addEventListener('click', function() {
      document.body.removeChild(lightbox);
    });
  
    // Append the lightbox to the body
    document.body.appendChild(lightbox);
  }
   //Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Get the "View Gallery" button element
    var viewGalleryButton = document.querySelector('.button');
  
    // Add click event listener to the button
    viewGalleryButton.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default behavior of the link
      console.log('View Gallery button clicked!');
      // You can add your own code here to open the gallery or perform other actions
    });
  });
  // JavaScript
function openImage(img) {
    // Create the lightbox element
    var lightbox = document.createElement('div');
    lightbox.classList.add('lightbox');
  
    // Create the image element inside the lightbox
    var image = document.createElement('img');
    image.src = img.src;
  
    // Create the close button inside the lightbox
    var closeButton = document.createElement('span');
    closeButton.classList.add('lightbox-close');
    closeButton.innerHTML = '&times;';
  
    // Append the image and close button to the lightbox
    lightbox.appendChild(image);
    lightbox.appendChild(closeButton);
  
    // Add click event listener to close the lightbox
    closeButton.addEventListener('click', function() {
      document.body.removeChild(lightbox);
    });
  
    // Append the lightbox to the body
    document.body.appendChild(lightbox);
  }
  
  // JavaScript code can be added here to handle dynamic behavior if needed