import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
    let store = this.store;

    return Ember.RSVP.hash({
      newSignature: store.createRecord('signature', {
        characterName: 'Aperow',
        clanName: 'Dregomorn',
        message: 'lolNecrolol',
      })
    });
  }
});
