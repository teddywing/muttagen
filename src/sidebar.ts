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


import { SIDEBAR } from './gmail_selectors';
import key_codes from './key_codes';
import multi_key_command from './multi_key_command';

export default function() {
	var key_buffer: number[] = [];

	var sidebar: HTMLElement = document.getElementsByClassName(SIDEBAR)[0] as HTMLElement;

	// Toggle left sidebar with `\m`
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
