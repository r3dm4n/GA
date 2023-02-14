"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.INITIAL_POST = void 0;
exports.INITIAL_POST = {
    id: undefined,
    groups: [],
    body: '',
    attachments: [],
    reviewed: false,
    author: '',
    numberOfLikes: 0,
    likedBy: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    numberOfComments: 0,
    comments: [],
    commentsOn: true,
    liveAt: null,
    sendNotification: true,
};
