import DS from 'ember-data';

var SignatureBackground = DS.Model.extend({
  image: DS.attr(),
  textColor: DS.attr(),
  padding: DS.attr(),
});

SignatureBackground.reopenClass({
  FIXTURES: [
    {
      "id": 1,
      "textColor": "#000000",
      "image": "/images/backgrounds/background_1.png"
    },
    {
      "id": 2,
      "textColor": "#ffffff",
      "image": "/images/backgrounds/background_2.png"
    },
    {
      "id": 3,
      "textColor": "#ffffff",
      "image": "/images/backgrounds/background_3.png",
      "padding": { "right": "40px" },
    }
  ]
});

export default SignatureBackground;
