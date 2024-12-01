// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      // Get the target section's position
      const targetSection = document.querySelector(this.getAttribute('href'));
  
      // Scroll smoothly to the target section
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
      });
    });
  });
  
  // Highlight table row on hover
  const tableRows = document.querySelectorAll('.table-row');
  
  tableRows.forEach(row => {
    row.addEventListener('mouseenter', () => {
      row.style.backgroundColor = '#f1f1f1'; // Light gray background
    });
  
    row.addEventListener('mouseleave', () => {
      row.style.backgroundColor = ''; // Reset the background color
    });
  });
  
  // Scroll-to-top button functionality
  const scrollToTopButton = document.createElement('button');
  scrollToTopButton.innerHTML = '↑';
  scrollToTopButton.classList.add('scroll-to-top-btn');
  document.body.appendChild(scrollToTopButton);
  
  // Style the button
  scrollToTopButton.style.position = 'fixed';
  scrollToTopButton.style.bottom = '20px';
  scrollToTopButton.style.right = '20px';
  scrollToTopButton.style.padding = '10px';
  scrollToTopButton.style.backgroundColor = '#f5e5d3';
  scrollToTopButton.style.border = 'none';
  scrollToTopButton.style.borderRadius = '50%';
  scrollToTopButton.style.fontSize = '18px';
  scrollToTopButton.style.cursor = 'pointer';
  scrollToTopButton.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
  scrollToTopButton.style.display = 'none'; // Hidden initially
  
  // Show the button when user scrolls down
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollToTopButton.style.display = 'block';
    } else {
      scrollToTopButton.style.display = 'none';
    }
  });
  
  // Scroll to top when the button is clicked
  scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  