import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    backgroundChanged (value) {
      // TODO: replace this with a signature_background object containing:
      // - text color
      // - background color
      // - background image
      // - dimensions
      // - etc
      let textColor = '#000000';

      if (value.match('background_2.png')) {
        textColor = '#ffffff';
      }

      this.set('signature.textColor', textColor);
    }
  }
});
