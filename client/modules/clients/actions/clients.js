export default {
  create({ Meteor, LocalState, FlowRouter }, {name, phone, email}) {
    if (!name || !phone || !email) {
      return LocalState.set(
        'CLIENT_ERROR',
        'Name phone and email are required!'
      );
    }

    LocalState.set('CLIENT_ERROR', null);

    const _id = Meteor.uuid();
    const user = Meteor.user();

    Meteor.call( 'clients.create', { _id, name, phone, email }, (error) => {
      if (error) {
        return LocalState.set('CLIENT_ERROR', error.reason);
      } else {
        FlowRouter.go(`/clients/${_id}`);
      }
    });

  },

  remove({Meteor, LocalState}, id) {
    if (!id) {
      return LocalState.set('CLIENT_ERROR', 'Id is required to remove client.');
    }

    Meteor.call('clients.remove', id, (error) => {
      if (error) { LocalState.set('CLIENT_ERROR', error.reason); }
    });
  },

  update({Meteor, LocalState}, id, { name, phone, email }) {
    if (!id) {
      return LocalState.set('CLIENT_ERROR', 'Id is required to update a client!');
    }

    if (!name && !phone && !email) {
      return LocalState.set('CLIENT_ERROR', 'Name, phone or email required to update a client!');
    }

    Meteor.call(
      'clients.update',
      id, { name, phone, email },
      (err) => {
        if (err) { LocalState.set('CLIENT_ERROR', err.reason); }
      });
  },

  clearErrors({LocalState}) {
    return LocalState.set('CLIENT_ERROR', null);
  }
};
