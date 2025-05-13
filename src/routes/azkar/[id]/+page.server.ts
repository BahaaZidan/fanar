import { azkar } from '$lib';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const zikr = azkar.find((z) => z.id === params.id);
	if (!zikr) return error(404);
	return { zikr };
};
