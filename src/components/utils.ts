export function byLatestDate(paramName: string) {
    return (a: Record<string, any>, b: Record<string, any>) =>
        new Date(b[paramName]).getTime() - new Date(a[paramName]).getTime();
}

export function byEarliestDate(paramName: string) {
    return (a: Record<string, any>, b: Record<string, any>) =>
        new Date(a[paramName]).getTime() - new Date(b[paramName]).getTime();
}

export type Position = {
    id: number;
    name: string;
    acronym: string;
};

export type Member = {
    id: number;
    name: string;
    group: number;
};

export type Staff = {
    id: number;
    finished: boolean;
    updated_at: string;
    position: Position;
    member: Member;
};

export type Episode = {
    id: number;
    number: number;
    air_date: string;
    season: string;
    released: boolean;
    updated_at: string;
    staff: Staff[];
};

export type Group = {
    id: number;
    name: string;
    acronym: string;
    icon: string;
    shows: Show[];
};

export type Show = {
    id: number;
    name: string;
    status: string;
    progress: 'Airing' | 'Complete' | 'Incomplete' | string;
    created_at: string;
    updated_at: string;
    poster: string;
    joint_groups: Group[];
    episodes: Episode[];
};

export function byLatestEpisode(a: Show, b: Show) {
    const latestA = latestEpisode(a);
    const latestB = latestEpisode(b);
    return byLatestDate('updated_at')(latestA, latestB);
}

export function latestEpisode(show: Show) {
    const unreleasedEpisodes = show.episodes
        .filter((episode) => !episode.released)
        .sort(byEarliestDate('air_date'));
    if (unreleasedEpisodes.length > 0) {
        return unreleasedEpisodes[0];
    } else {
        return null;
    }
}

export function hasAired(episode: Episode) {
    const now = new Date().getTime();
    const airDate = new Date(episode.air_date).getTime();
    return now > airDate;
}

export function notYetReleased(episode: Episode) {
    return !episode.released;
}

export function allMarked(episode: Episode) {
    return episode.staff.filter((staff) => !staff.finished).length === 0;
}

export function someMarked(episode: Episode) {
    return episode.staff.filter((staff) => staff.finished).length > 0;
}

export function deduplicateStaff(stafflist: Staff[]) {
    const acronymList = stafflist.map((staff) => staff.position.acronym);
    return stafflist.filter((staff, index) => {
        return acronymList.indexOf(staff.position.acronym) === index;
    });
}

function allGroupPositions(group: Group): string[] {
    return group.shows.flatMap((show) =>
        show.episodes.flatMap((episode) =>
            deduplicateStaff(episode.staff).flatMap(
                (staff) => staff.position.acronym
            )
        )
    );
}

function groupPositionCount(positions: string[]): Record<string, number> {
    return positions.reduce((accumulator, currentPosition) => {
        return {
            ...accumulator,
            [currentPosition]: (accumulator[currentPosition] || 0) + 1,
        };
    }, {});
}

function corePositions(
    positionCounts: Record<string, number>
): Record<string, number> {
    return Object.fromEntries(
        Object.entries(positionCounts)
            .sort((a, b) => {
                const [_keyA, countA] = a;
                const [_keyB, countB] = b;
                return countB - countA;
            })
            .slice(0, 7)
    );
}

function averagePositionIndex(group: Group, acronym: string) {
    const episodePositions = group.shows.flatMap((show) =>
        show.episodes.map((episode) =>
            deduplicateStaff(episode.staff).flatMap(
                (staff) => staff.position.acronym
            )
        )
    );
    const appearances = episodePositions.filter((episode) =>
        episode.includes(acronym)
    );
    return (
        appearances
            .map((episode) => episode.indexOf(acronym))
            .reduce((a, b) => a + b) / appearances.length
    );
}

function byAvgIndex(group: Group) {
    return (a: [string, number], b: [string, number]) => {
        const [acronymA] = a;
        const [acronymB] = b;
        const indexA = averagePositionIndex(group, acronymA);
        const indexB = averagePositionIndex(group, acronymB);
        return indexA - indexB;
    };
}

export function groupCorePositions(group: Group) {
    const positions = allGroupPositions(group);
    const positionCounts = groupPositionCount(positions);
    const core = corePositions(positionCounts);
    return Object.entries(core)
        .sort(byAvgIndex(group))
        .map(([key, _value]) => key);
}
