import { SIDEBAR } from './gmail_css_class';
import key_codes from './key_codes';

export default function() {
	var key_buffer: number[] = [];

	var sidebar: HTMLElement = document.getElementsByClassName(SIDEBAR)[0] as HTMLElement;

	document.addEventListener('keydown', function(e) {
		if (e.keyCode === key_codes.SLASH) {
			key_buffer.push(e.keyCode);
		}
		if (e.keyCode === key_codes.M) {
			key_buffer.push(e.keyCode);
		}
	});

	document.addEventListener('keyup', function(e) {
		if (key_buffer.length >= 2) {
			if (key_buffer[0] === key_codes.SLASH
				&& key_buffer[1] === key_codes.M) {
				if (sidebar.offsetParent === null) {
					sidebar.style.display = 'block';
				}
				else {
					sidebar.style.display = 'none';
				}
			}
			key_buffer = [];
		}
	});
};
