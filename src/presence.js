"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.INITIAL_PRESENCE = void 0;
exports.INITIAL_PRESENCE = {
    id: undefined,
    childId: '',
    uid: '',
    isPresent: true,
    plates: [
        { percent: 0, type: 'breakfast' },
        { percent: 0, type: 'lunch' },
        { percent: 0, type: 'snack' },
    ],
    date: new Date().toISOString().slice(0, 10),
    timestamp: new Date(),
};
