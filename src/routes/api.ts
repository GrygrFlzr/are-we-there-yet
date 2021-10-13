import type { RequestHandler } from '@sveltejs/kit';
import type { GroupOrError } from '$lib/utils';
import { groupCorePositions, byLatestEpisode } from '$lib/utils';

export const get: RequestHandler<null, null, GroupOrError> = async () => {
	try {
		const url = `https://deschtimes.com/api/v1/groups/${process.env['TOKEN']}.json`;
		const response = await fetch(url);
		const data: GroupOrError = await response.json();

		if ('message' in data) {
			return {
				body: data
			};
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
			return {
				body: filteredData
			};
		}
	} catch (error) {
		// Do not expose token by accident
		console.error(error);
		return {
			body: {
				message: 'Internal server error, contact site operators'
			}
		};
	}
};
