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


export type GmailCSSClass = string;
type GmailCSSSelector = string;

export const TOOLS_PANEL: GmailCSSClass = 'bAw';
export const SIDEBAR: GmailCSSClass = 'aeN';
export const MESSAGE_PAGER: GmailCSSClass = 'AO';

export const INDEX: GmailCSSSelector = '.BltHke.nH.oy8Mbf[role="main"]';
export const PAGER: GmailCSSSelector = '.nH.g.id';

// export const PAGER_NEWER: GmailCSSSelector = 'div[aria-label="Newer"][role="button"]:not([aria-disabled="true"])';

export const NEWER: GmailCSSSelector = 'div[aria-label="Newer"][role="button"]';
export const OLDER: GmailCSSSelector = 'div[aria-label="Older"][role="button"]';

export function PAGER_NEWER_EL(): HTMLElement {
	return visible_element(document.querySelectorAll(NEWER)) as HTMLElement;
};
export function PAGER_OLDER_EL(): HTMLElement {
	return visible_element(document.querySelectorAll(OLDER)) as HTMLElement;
};

function visible_element(elements: NodeListOf<Element>) {
// https://stackoverflow.com/questions/13388616/firefox-query-selector-and-the-visible-pseudo-selector

	elements = Array.prototype.slice.call(elements)
		.filter(function(el, _) {
			return el.style.display !== 'none';
		});

	return elements[0];
};


// Index:
// .BltHke.nH.oy8Mbf[role="main"]
//
// Pager:
// .nH[role="main"]
// .nH.g.id
