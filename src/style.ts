import * as g from './gmail_css_class.ts';

type GmailCSSDefinitions = { [selector in g.GmailCSSClass]: string };

var css: GmailCSSDefinitions = {};
css[g.TOOLS_PANEL] = 'display: none;';
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

append_css(
	construct_css(css)
);
