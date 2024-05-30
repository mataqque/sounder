import { type IProject } from '../../store.interface';

export const data = new Map<number, IProject>([]);

const projectIdsToNames = new Map<string, number>([]);

const projectNamesToIds = new Map<string, number>();

for (const [id, name] of projectIdsToNames) {
	projectNamesToIds.set(id, name);
}

export type Project = typeof data;

export type Projects = Project[];
