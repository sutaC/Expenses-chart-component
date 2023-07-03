import type { ServerLoad } from '@sveltejs/kit';
import data from '$lib/data/data.json';

export const load: ServerLoad = async () => {
	return { chartData: data };
};
