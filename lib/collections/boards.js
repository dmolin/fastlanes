import {Mongo} from 'meteor/mongo'

const Boards = new Mongo.Collection('boards')
Boards.attachBehaviour('timestampable');

export default Boards
