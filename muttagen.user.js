// User script for Gmail that makes it Mutt-like

// Remove "Toggle side panel" button
// document.querySelector('[aria-label="Toggle side panel"]').style.display = 'none';

// Remove right panel
document.getElementsByClassName('bAw')[0].style.display = 'none';

// Remove left sidebar
document.getElementsByClassName('aeN')[0].style.display = 'none';


// Message view: .nH

// Invert colours of message view to make it white on black
.nH {
	filter: invert(100%);
}
