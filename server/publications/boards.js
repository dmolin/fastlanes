import {Boards} from '/lib/collections';

export default function () {
  Meteor.publish('boards', function() {
    return Boards.find({}, {sort:{priority:-1, createdAt:-1}});
  });
}
