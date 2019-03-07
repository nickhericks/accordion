// Container for all accordion elements
const container = document.querySelector('.accordion-container');


// Event listener on the entire accordion-container element
container.addEventListener('click', e => {
	// Find closest bubbling element that has a class of accordion__header
	const header = e.target.closest('.accordion__header');
	// If that element exists in the event bubbling of the click, toggle is-open class
	if (header) {
		const accordion = header.parentElement;
		const content = header.nextElementSibling;
		const inner = content.children[0];
		const height = inner.getBoundingClientRect().height;

		if (accordion.classList.contains('is-open')) {
			content.style.height = '0px';
		} else {
			content.style.height = height + 'px';
		}

		accordion.classList.toggle('is-open');
	}
});
