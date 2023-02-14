import { Group, Schedule } from './user';
export interface Tier {
    group: Group;
    schedule: Schedule;
    meal: number;
    tuition: number;
}
export interface Tax {
    days: number;
    description: string;
    tiers: Tier[];
}
