// Container for all accordion elements
const container = document.querySelector('.accordion-container');


// Event listener on the entire accordion-container element
container.addEventListener('click', e => {
	// Find closest bubbling element that has a class of accordion__header
	const header = e.target.closest('.accordion__header');
	// If that element exists in the event bubbling of the click, toggle is-open class
	if (header) {
		header.parentNode.classList.toggle('is-open');
	}
});
