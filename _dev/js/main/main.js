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

	// set focus to the search bar when it's been exposed
	// at sizes larger than 767px.
	$( '.dropdown' ).on( 'shown.bs.dropdown', function( event ) {
		var dropdown = $( event.target );

		setTimeout( function() {
			dropdown.find( '.search-query.form-control' ).focus();
		}, 10 );
	} );

	$( document ).ready( function() {
		$( '.ginput_container_date' ).append( '<i class="far fa-calendar-alt form-control-feedback" aria-hidden="true"></i>' );
		$( '.ui-datepicker-header a.ui-corner-all' ).children( '.ui-icon' ).remove();

		$( '#input_1_10' ).attr( 'data-placeholder', 'Click or begin typing to see options…' );
	} );
} )( jQuery );

// This function pushes the footer down
// on pages that have short content
$( window ).on( 'load resize', function stickyFooter() {

	// sticky footer stuff
	let windowHeight = $( window ).height(),
		adminBarHeight = $( '#wpadminbar' ).height(),
		contentHeight = $( '.wrapper' ).outerHeight(),
		footerHeight = $( 'footer' ).outerHeight();

	if ( contentHeight + footerHeight < windowHeight ) {
		if ( $( '#wpadminbar' ).length ) {
			$( '.wrapper' ).css( 'margin-bottom', windowHeight - ( contentHeight + footerHeight + adminBarHeight ) );
		} else {
			$( '.wrapper' ).css( 'margin-bottom', windowHeight - ( contentHeight + footerHeight ) );
		}
	}
} );
