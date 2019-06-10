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
