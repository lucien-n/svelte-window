import { Swindow } from './swindow.svelte';

export class Sdesktop {
	swindows: Swindow[] = $state([]);

	constructor() {}

	addWindow(swindow: Swindow) {
		this.swindows.push(swindow);
	}

	getWindow(id: string) {
		return this.swindows.find((swindo) => swindo.id === id);
	}

	removeWindow(id: string) {
		this.swindows = this.swindows.filter((swindow) => swindow.id !== id);
	}

	focusWindow(id: string) {
		const swindow = this.getWindow(id);
		if (!swindow) return;

		this.removeWindow(id);

		swindow.focused = true;

		this.addWindow(swindow);
	}
}
