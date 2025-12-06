import { adkar } from '$lib';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const dikr = adkar.find((d) => d.id === params.dikr_id);
	if (!dikr) return error(404);
	return { dikr };
};
