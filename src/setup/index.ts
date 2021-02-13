import { groupCorePositions, byLatestEpisode, Show } from '$components/utils';
import fetch from 'node-fetch';

type PrepareOptions = {
    headers?: Record<string, string>;
    context?: Record<string, any>;
};

export async function prepare(): Promise<PrepareOptions> {
    try {
        const url = `https://deschtimes.com/api/v1/groups/${process.env.TOKEN}.json`;
        const response = await fetch(url);
        const data = await response.json();

        // Remove completed shows
        // Strip member data
        const filteredData = {
            ...data,
            corePositions: groupCorePositions(data),
            shows: data.shows
                .filter((show: Show) => show.progress !== 'Complete')
                .map((show: Show) => ({
                    ...show,
                    episodes: show.episodes.map((episode) => ({
                        ...episode,
                        staff: episode.staff.map((individual) => ({
                            ...individual,
                            member: {
                                id: -1,
                                name: '',
                                group: individual.member.group,
                            },
                        })),
                    })),
                }))
                .sort(byLatestEpisode),
        };

        return {
            context: filteredData,
        };
    } catch (error) {
        // Do not expose token by accident
        console.error(error);
        return {
            context: {
                message: 'Internal server error, contact site operators',
            },
        };
    }
}

export async function getSession(context: Record<string, any>) {
    return context;
}
