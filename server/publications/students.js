import {Students} from '/lib/collections';

import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('clients.students', function (clientId) {
    check(clientId, String);

    const userId = this.userId;
    if (!userId) { return null; };

    const selector = {clientId};
    const options = {};

    return Students.find(selector, options);
  });

  Meteor.publish('bookings.students', function (studentIds = []) {
    check(studentIds, Array);

    const userId = this.userId;
    if (!userId) { return null; };

    const selector = {_id: { $in: studentIds } };
    const options = {};

    return Students.find(selector, options);
  });
}
