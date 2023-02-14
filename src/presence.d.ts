import { Plate } from './menu';
import { Child, User } from './user';
export interface Presence {
    id: string | undefined;
    uid: string;
    childId: string;
    date: string;
    timestamp: Date;
    plates: Plate[];
    isPresent: boolean;
}
export declare const INITIAL_PRESENCE: Presence;
export interface PresenceState {
    users: User[];
    children: Child[];
    presences: Presence[];
    date: string;
    updated: boolean;
    saving: boolean;
    loading: boolean;
    refreshing: boolean;
    error: Error | null;
}
