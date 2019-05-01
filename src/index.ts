// ==UserScript==
// @name Muttagen
// @description Gmail user script providing Mutt features
// @namespace com.teddywing
// @match https://mail.google.com/*
// ==/UserScript==

import style from './style';
import sidebar from './sidebar';

var loading_view = document.getElementById('loading');

// Wait until loading view disappears before initialising
var initialize = window.setInterval(function() {
	if (loading_view.offsetParent === null) {
		window.clearInterval(initialize);

		style();
		sidebar();
	}
}, 500);
