const accordions = document.querySelectorAll('.accordion');

// Create event listener for each accordion node
accordions.forEach((accordion, index) => {

  accordion.addEventListener('click', function() {
    accordion.classList.toggle('is-open');
    console.log(accordion.classList());
  });


});
