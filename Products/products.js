// Function to display a greeting when the page loads
window.onload = function() {
    console.log("Welcome to Duke Bakery! Explore our delicious offerings.");
    
  };
  
  // Function to highlight clicked images in the gallery
  const galleryItems = document.querySelectorAll('.gallery-item img');
  
  galleryItems.forEach(item => {
    item.addEventListener('click', function() {
      // Toggle a highlight class on the clicked image
      item.classList.toggle('highlighted');
    });
  });
  