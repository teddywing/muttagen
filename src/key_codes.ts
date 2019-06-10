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


export type KeyCode = number;

var key_codes: { [index: string]: KeyCode } = {
	SLASH: 220,
	J: 74,
	K: 75,
	M: 77
};

export default key_codes;
