import Ember from 'ember';

export default Ember.Component.extend({
  initBackgroundId: function () {
    this.set('currentBackgroundId', this.get('signature.background.id'));
  }.on('init'),

  actions: {
    backgroundChanged (id) {
      let background = this.get('backgrounds').findBy('id', id);
      this.set('signature.background', background);
    }
  }
});
