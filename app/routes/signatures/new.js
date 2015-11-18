import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
    let store = this.store;

    return Ember.RSVP.hash({
      newSignature: store.createRecord('signature', {
        characterName: 'Aperow',
        clanName: 'Dregomorn',
        clanImage: '/images/crests/dgm_24x12.png',
        message: 'Necromancer 40+',
      })
    });
  }
});
