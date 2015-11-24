import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    generateTags () {
      // TODO: clean this up.
      var signaturePreview = document.querySelector('.signature-preview');
      var signatureTagInput1 = document.querySelector('.signature-tag input:first-child');

      window.html2canvas(signaturePreview, {
        onrendered: function(canvas) {
          var dataURL = canvas.toDataURL();

          // TODO: do this the ember way.
          signatureTagInput1.value = dataURL;
        }
      });
    }
  }
});
