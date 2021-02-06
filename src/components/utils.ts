import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
TimeAgo.addLocale(en);
TimeAgo.setDefaultLocale('en');

export const timeAgo = new TimeAgo();

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
    progress: string;
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
