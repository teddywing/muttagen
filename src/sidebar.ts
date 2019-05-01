import { SIDEBAR } from './gmail_css_class';
import key_codes from './key_codes';
import multi_key_command from './multi_key_command';

export default function() {
	var key_buffer: number[] = [];

	var sidebar: HTMLElement = document.getElementsByClassName(SIDEBAR)[0] as HTMLElement;

	multi_key_command(
		document,
		[key_codes.SLASH, key_codes.M],
		function() {
			if (sidebar.offsetParent === null) {
				sidebar.style.display = 'block';
			}
			else {
				sidebar.style.display = 'none';
			}
		}
	);
};
