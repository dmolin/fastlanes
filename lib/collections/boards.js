import {Mongo} from 'meteor/mongo'

let Schemas = Schemas || {};

const Boards = new Mongo.Collection('boards')

Schemas.Boards = new SimpleSchema({
  name: {
    type: String,
    label: "Board Name",
    max: 200
  },
  description: {
    type: String,
    label: "Description",
    optional: true
  }
});

Boards.attachSchema(Schemas.Boards);
Boards.attachBehaviour('timestampable');

export default Boards
