// ==UserScript==
// @name Muttagen
// @description Gmail user script providing Mutt features
// @namespace com.teddywing
// @match https://mail.google.com/*
// ==/UserScript==

// Copyright (c) 2019  Teddy Wing
//
// This file is part of Muttagen.
//
// Muttagen is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Muttagen is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Muttagen. If not, see <https://www.gnu.org/licenses/>.


import style from './style';
import sidebar from './sidebar';
import index from './index_view';
import pager from './pager';

var loading_view = document.getElementById('loading');

// Wait until loading view disappears before initialising
var initialize = window.setInterval(function() {
	if (loading_view.offsetParent === null) {
		window.clearInterval(initialize);

		style();
		sidebar();
		index();
		/* pager(); */
	}
}, 500);
