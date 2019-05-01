type GmailCSSClass = string;

const TOOLS_PANEL: GmailCSSClass = 'bAw';
const SIDEBAR: GmailCSSClass = 'aeN';
const MESSAGE_PAGER: GmailCSSClass = 'AO';


type GmailCSSDefinitions = { [selector in GmailCSSClass]: string };

var css: GmailCSSDefinitions = {};
css[TOOLS_PANEL] = 'display: none;';
css[MESSAGE_PAGER] = 'filter: invert(100%);';

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

append_css(
	construct_css(css)
);
