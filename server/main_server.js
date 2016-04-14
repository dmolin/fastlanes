import { Meteor } from 'meteor/meteor';
import publications from './publications';
import * as Collections from '../lib/collections';

Meteor.startup(() => {
  publications();
})

