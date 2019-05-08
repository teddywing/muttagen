import { INDEX, PAGER_NEWER_EL, PAGER_OLDER_EL } from '../gmail_selectors';
import key_codes from '../key_codes';

export default function(): void {
	var index = document.querySelector(INDEX);

	index.addEventListener('keydown', function(e: KeyboardEvent) {
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
