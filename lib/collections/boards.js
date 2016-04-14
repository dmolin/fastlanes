import {Mongo} from 'meteor/mongo'

export const Boards = new Mongo.Collection('boards')
Boards.attachBehaviour('timestampable');
