import { Meteor } from 'meteor/meteor';
import publications from './publications';
import Collections from '../lib/collections';

Meteor.startup(() => {
  insertFakeBoards()
  publications()
})

function insertFakeBoards() {
  Collections.Boards.remove({});
  Collections.Boards.insert({name:'Test Board', description:'this is a test board'});
}
