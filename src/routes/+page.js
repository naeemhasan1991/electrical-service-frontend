import { getContent } from '$lib/sanity';
import { error } from '@sveltejs/kit';

export let ssr = true;

export const load = (async () => {
	const contents = await getContent();
	console.log('contents----------------->', contents);
	
	

	if (contents) {
		return {
			data: contents
		};
	}

	throw error(404, 'Not found');
});