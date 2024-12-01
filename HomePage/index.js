// Smooth scrolling for anchor links
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

// Adding hover effect on the "Explore Our Bakes" button
const exploreButton = document.querySelector('.btn--full');
if (exploreButton) {
  exploreButton.addEventListener('mouseenter', () => {
    exploreButton.style.backgroundColor = '#f5e5d3'; // Light hover color
    exploreButton.style.transition = 'background-color 0.3s ease';
  });

  exploreButton.addEventListener('mouseleave', () => {
    exploreButton.style.backgroundColor = ''; // Reset to original
  });
}

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

// Show the button when the user scrolls down
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
