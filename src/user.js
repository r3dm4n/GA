"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.INITIAL_USER_BASIC_INFO = exports.INITIAL_USER = exports.INITIAL_PARENT = exports.INITIAL_CHILD = exports.UserType = exports.Group = exports.Schedule = exports.Role = void 0;
const ipcam_1 = require("./ipcam");
var Role;
(function (Role) {
    Role["PARENT"] = "PARENT";
    Role["TEACHER"] = "TEACHER";
    Role["ADMIN"] = "ADMIN";
})(Role = exports.Role || (exports.Role = {}));
var Schedule;
(function (Schedule) {
    Schedule["LONG"] = "LONG";
    Schedule["SHORT"] = "SHORT";
    Schedule["SHORT_WITH_LUNCH"] = "SHORT_WITH_LUNCH";
})(Schedule = exports.Schedule || (exports.Schedule = {}));
var Group;
(function (Group) {
    Group["BEBE"] = "BEBE";
    Group["MICA"] = "MICA";
    Group["MIJLOCIE"] = "MIJLOCIE";
    Group["MARE"] = "MARE";
})(Group = exports.Group || (exports.Group = {}));
var UserType;
(function (UserType) {
    UserType["ALL"] = "ALL";
    UserType["ACTIVE"] = "ACTIVE";
    UserType["DISABLED"] = "DISABLED";
})(UserType = exports.UserType || (exports.UserType = {}));
exports.INITIAL_CHILD = {
    uid: '',
    id: '',
    cnp: '',
    placeOfBirth: '',
    group: Group.BEBE,
    birthday: '',
    schedule: Schedule.LONG,
    firstName: '',
    lastName: '',
    createdAt: '',
    updatedAt: '',
};
exports.INITIAL_PARENT = {
    id: '',
    phoneNumber: '',
    address: '',
    firstName: '',
    lastName: '',
    createdAt: '',
    updatedAt: '',
};
exports.INITIAL_USER = {
    parents: [],
    children: [],
    emergencyContacts: [],
    uid: '',
    displayName: '',
    avatar: null,
    email: 'spaceapps.dev@gmail.com',
    password: '',
    role: Role.PARENT,
    groups: [Group.BEBE],
    tokens: [],
    ipcams: [],
    disabled: false,
    canComment: false,
    createdAt: '',
    updatedAt: '',
};
exports.INITIAL_USER_BASIC_INFO = {
    parents: [],
    children: [],
    emergencyContacts: [],
    uid: '',
    displayName: '',
    avatar: null,
    email: 'r3dm4n@me.com',
    password: '',
    role: Role.PARENT,
    groups: [Group.BEBE],
    tokens: [],
    ipcams: [ipcam_1.IpcamId.BEBE, ipcam_1.IpcamId.MICA],
    disabled: false,
    canComment: false,
    createdAt: '',
    updatedAt: '',
};
// export const createUser = (oldUser: OldUser): User => {
//     const lastName = oldUser.displayName.split(' ')?.[0] ?? 'lastName'
//     const firstName = oldUser.displayName.split(' ')?.[1] ?? 'firstName'
//     const newUser: User = {
//         parents: [
//             {
//                 id: '0',
//                 phoneNumber: oldUser.phone,
//                 createdAt: oldUser.created,
//                 firstName: '',
//                 lastName: lastName,
//                 address: '',
//                 updatedAt: new Date().toISOString(),
//             },
//         ],
//         children: [
//             {
//                 uid: oldUser.uid,
//                 id: uuid(),
//                 cnp: '',
//                 placeOfBirth: '',
//                 group:
//                     oldUser.groups.length > 0
//                         ? (oldUser.groups[0].toUpperCase() as Group)
//                         : Group.BEBE,
//                 birthday: oldUser.birthday,
//                 createdAt: oldUser.created,
//                 updatedAt: new Date().toISOString(),
//                 firstName,
//                 lastName,
//                 schedule: oldUser.schedule
//                     ? (oldUser.schedule
//                           .replace('scurt', Schedule.SHORT_WITH_LUNCH)
//                           .replace('prelungit', Schedule.LONG) as Schedule)
//                     : Schedule.LONG,
//             },
//         ],
//         emergencyContacts: [],
//         uid: oldUser.uid ?? '',
//         displayName: oldUser.displayName,
//         avatar: null,
//         email: oldUser.email,
//         password: oldUser.password,
//         role: Role.PARENT,
//         groups: oldUser.groups.map((g) => g.toUpperCase() as Group),
//         ipcams: [],
//         tokens: oldUser.tokens,
//         disabled: oldUser.disabled,
//         canComment: true,
//         createdAt: oldUser.created,
//         updatedAt: new Date().toISOString(),
//     }
//     return newUser
// }
