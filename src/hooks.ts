import { groupCorePositions, byLatestEpisode } from '$lib/utils';
import { dev } from '$app/env';
import type { GetSession, Handle } from '@sveltejs/kit';
import type { GroupOrError } from '$lib/utils';

export const handle: Handle<GroupOrError> = async ({ request, resolve }) => {
	if (dev) {
		const { default: dotenv } = await import('dotenv');
		dotenv.config();
	}
	try {
		const url = `https://deschtimes.com/api/v1/groups/${process.env['TOKEN']}.json`;
		const response = await fetch(url);
		const data: GroupOrError = await response.json();

		if ('message' in data) {
			request.locals = data;
		} else {
			// Remove completed shows
			// Strip member data
			const filteredData = {
				...data,
				corePositions: groupCorePositions(data),
				shows: data.shows
					.filter((show) => show.progress !== 'Complete')
					.map((show) => ({
						...show,
						episodes: show.episodes.map((episode) => ({
							...episode,
							staff: episode.staff.map((individual) => ({
								...individual,
								member: {
									id: -1,
									name: '',
									group: individual.member.group
								}
							}))
						}))
					}))
					.sort(byLatestEpisode)
			};
			request.locals = filteredData;
		}
	} catch (error) {
		// Do not expose token by accident
		console.error(error);
		request.locals = {
			message: 'Internal server error, contact site operators'
		};
	}
	return await resolve(request);
};

export const getSession: GetSession<GroupOrError, GroupOrError> = ({ locals }) => {
	return locals;
};
