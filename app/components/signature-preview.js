import Ember from 'ember';

export default Ember.Component.extend({

  generateImage: Ember.observer(
    'signature.clanImage',
    'signature.characterName',
    'signature.message',
    'signature.background',
  function () {
    var signaturePreview = document.querySelector('.signature-preview');

    if (!signaturePreview) {
      return;
    }

    window.html2canvas(signaturePreview, {
      onrendered: (canvas) => {
        this.set('signature.base64', canvas.toDataURL());
      },
    });
  }),
});
