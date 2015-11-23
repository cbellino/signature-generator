import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    let store = this.get('store');

    let signatureBackgrounds = store.findAll('signature_background');
    let newSignature = store.createRecord('signature', {
      characterName: 'Aperow',
      clanName: 'Dregomorn',
      clanImage: '/images/crests/dgm_24x12.png',
      message: 'Rigolus party',
    });

    signatureBackgrounds.then(function (backgrounds) {
      newSignature.set('background', backgrounds.get('firstObject'));
    });

    return Ember.RSVP.hash({
      backgrounds: signatureBackgrounds,
      newSignature: newSignature,
    });
  }
});
