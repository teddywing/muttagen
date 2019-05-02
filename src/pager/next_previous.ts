import { PAGER_NEWER_EL, PAGER_OLDER_EL } from '../gmail_selectors';
import key_codes from '../key_codes';

export default function(): void {
	/* var pager = document.querySelector(PAGER); */

	// TODO: Needs to be loaded when pager becomes visible.
	document.addEventListener('keydown', function(e: KeyboardEvent) {
		if (e.keyCode === key_codes.J) {
			console.log(PAGER_OLDER_EL());
			PAGER_OLDER_EL().click();
		}
		else if (e.keyCode === key_codes.K) {
			console.log(PAGER_NEWER_EL());
			PAGER_NEWER_EL().click();
		}
	});
};

/* document.querySelectorAll('div[aria-label="Newer"][role="button"]') */
/* document.querySelectorAll('div[aria-label="Older"][role="button"]') */
