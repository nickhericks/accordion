// Select all nodes that have the class of '.accordion'
const accordions = document.querySelectorAll('.accordion');

// Create event listener for each accordion node
accordions.forEach((accordion, index) => {
  // Toggle 'is-open' class when accordion node is clicked
  accordion.addEventListener('click', function() {
    accordion.classList.toggle('is-open');
  });
});
