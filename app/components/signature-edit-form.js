import Ember from 'ember';

export default Ember.Component.extend({

  initBackgroundId: function () {
    this.set('currentBackgroundId', this.get('signature.background.id'));
  }.on('init'),

  actions: {
    backgroundChanged (background) {
      this.set('signature.background', background);
    }
  }
});
