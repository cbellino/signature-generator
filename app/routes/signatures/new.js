import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
    let store = this.store;

    return Ember.RSVP.hash({
      newSignature: store.createRecord('signature', {
        characterName: 'Aperow',
        clanName: 'Dregomorn',
        clanImage: '/images/crests/dgm_24x12.png',
        message: 'Rigolus party',
        textColor: '#000000',
        backgroundColor: '#f9f2c4',
        backgroundImage: '/images/backgrounds/background_1.png',
      })
    });
  }
});
