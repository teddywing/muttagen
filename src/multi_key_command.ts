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


import key_codes, { KeyCode } from './key_codes';

export default function(
	el: HTMLDocument | HTMLElement,
	command: KeyCode[],
	action: () => void
): void {
	var key_buffer: number[] = [];

	el.addEventListener('keydown', function(e: KeyboardEvent) {
		command.forEach((key_code) => {
			if (e.keyCode === key_code) {
				key_buffer.push(key_code);
			}
		});
	});

	el.addEventListener('keyup', function(e: KeyboardEvent) {
		if (key_buffer.length >= 2) {
			var command_executed = key_buffer.length === command.length
				&& key_buffer.every((value, index) => value === command[index]);

			if (command_executed) {
				action();
				key_buffer = [];
			}
		}
	});
};
