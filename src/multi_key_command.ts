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
