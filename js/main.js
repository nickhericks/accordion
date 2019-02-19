const accordions = document.querySelectorAll('.accordion');


accordions.forEach((accordion, index) => {

  accordion.addEventListener('click', function() {
    accordion.classList.toggle('is-open');
    console.log(accordion.classList());
  });


});
