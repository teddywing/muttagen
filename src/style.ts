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


import * as g from './gmail_selectors';

type GmailCSSDefinitions = { [selector in g.GmailCSSClass]: string };

var css: GmailCSSDefinitions = {};
css[g.TOOLS_PANEL] = 'display: none;';
css[g.SIDEBAR] = 'display: none;';
css[g.MESSAGE_PAGER] = 'filter: invert(100%);';

function construct_css(css: GmailCSSDefinitions): string {
	var joined = '';

	for (var selector in css) {
		joined += `.${selector} { ${css[selector]} }`;
	}

	return joined;
}

function append_css(css: string): void {
	var s = document.createElement('style');
	var t = document.createTextNode(css);

	s.appendChild(t);

	document.head.appendChild(s);
}

export default function(): void {
	append_css(
		construct_css(css)
	);
};
