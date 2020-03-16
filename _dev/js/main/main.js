const scroll = new SmoothScroll( 'a[href*="#"]', {

	// Selectors
	ignore: '[data-scroll-ignore]', // Selector for links to ignore (must be a valid CSS selector)
	header: null, // Selector for fixed headers (must be a valid CSS selector)
	topOnEmptyHash: true, // Scroll to the top of the page for links with href="#"

	// Speed & Easing
	speed: 666, // Integer. How fast to complete the scroll in milliseconds
	easing: 'cubic-bezier(0.77, 0, 0.175, 1)', // Easing pattern to use

	// History
	updateURL: true, // Update the URL on scroll
	popstate: true, // Animate scrolling with the forward/backward browser buttons (requires updateURL to be true)

	// Custom Events
	emitEvents: true // Emit custom events
} );

( function( $ ) {

} )( jQuery );
