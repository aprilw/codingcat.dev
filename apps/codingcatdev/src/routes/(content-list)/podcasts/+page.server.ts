import { listContent } from '$lib/server/content';
import { ContentType } from '$lib/types';
import type { PageServerLoad } from './$types';

const contentType = ContentType.podcast;

export const load = (async () => {
	return {
		contentType,
		...(await listContent({ contentType }))
	};
}) satisfies PageServerLoad;
