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
