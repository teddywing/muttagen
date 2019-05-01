// ==UserScript==
// @name Muttagen
// @description Gmail user script providing Mutt features
// @namespace com.teddywing
// @match https://mail.google.com/*
// ==/UserScript==

import './style';
import sidebar from './sidebar';

window.setTimeout(function() {
	sidebar();
}, 3000);
