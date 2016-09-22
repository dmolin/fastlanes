import Boards from '/lib/collections/boards'

export default function() {
  Meteor.publish('board', function(id) {
    check(id, String)
    return Boards.find({_id: id});
  });
}
