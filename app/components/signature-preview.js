import Ember from 'ember';

export default Ember.Component.extend({
  signatureTag1: '',
  updateTags (canvas) {
    // TODO: this does not work after the first time
    this.set('signature.base64', canvas.toDataURL());
  },

  actions: {
    generateTags () {
      // TODO: clean this up.
      var signaturePreview = document.querySelector('.signature-preview');

      window.html2canvas(signaturePreview, {
        onrendered: this.updateTags.bind(this)
      });
    }
  }
});
