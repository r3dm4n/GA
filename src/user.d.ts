import { IpcamId } from './ipcam';
import { Metadata } from './metadata';
interface Human {
    firstName: string;
    lastName: string;
}
export interface Adult extends Human, Metadata {
    id: string;
    phoneNumber: string;
    address: string;
}
export interface Child extends Human, Metadata {
    uid: string;
    id: string;
    cnp: string;
    placeOfBirth: string;
    group: Group;
    birthday: string;
    schedule: Schedule;
}
export interface User extends Metadata {
    parents: Adult[];
    children: Child[];
    emergencyContacts: Adult[];
    uid: string;
    displayName: string;
    avatar: string | null;
    email: string;
    password: string;
    role: Role;
    groups: Group[];
    ipcams: IpcamId[];
    tokens: string[];
    disabled: boolean;
    canComment: boolean;
}
export declare enum Role {
    PARENT = "PARENT",
    TEACHER = "TEACHER",
    ADMIN = "ADMIN"
}
export declare enum Schedule {
    LONG = "LONG",
    SHORT = "SHORT",
    SHORT_WITH_LUNCH = "SHORT_WITH_LUNCH"
}
export declare enum Group {
    BEBE = "BEBE",
    MICA = "MICA",
    MIJLOCIE = "MIJLOCIE",
    MARE = "MARE"
}
export declare enum UserType {
    ALL = "ALL",
    ACTIVE = "ACTIVE",
    DISABLED = "DISABLED"
}
export interface DecodedUser {
    uid: string;
    email: string;
    role: Role;
    groups: Group[];
}
export interface UserAvatar {
    uid: string;
    url: string;
}
export declare const INITIAL_CHILD: Child;
export declare const INITIAL_PARENT: Adult;
export declare const INITIAL_USER: User;
export declare const INITIAL_USER_BASIC_INFO: User;
export {};
