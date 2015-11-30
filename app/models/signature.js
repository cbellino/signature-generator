import DS from 'ember-data';
import Ember from 'ember';

// TODO: move this to environment.js
var config = {
  API_BASE_URL: 'http://localhost:5000/',
};

export default DS.Model.extend({
  characterName: DS.attr(),
  clanName: DS.attr(),
  clanImage: DS.attr(),
  background: DS.belongsTo('signature_background'),
  base64: DS.attr(),

  urlEncoded: Ember.computed('base64', function() {
    return encodeURIComponent(this.get('base64'));
  }),

  url: Ember.computed('urlEncoded', function() {
    return `${config.API_BASE_URL}?data=${this.get('urlEncoded')}`;
  }),

  bbcode: Ember.computed('urlEncoded', function() {
    return `[img]${config.API_BASE_URL}?data=${this.get('urlEncoded')}[/img]`;
  }),

  previewStyle: Ember.computed('background', function () {
    let styles = [];
    let backgroundTextColor = this.get('background.textColor');
    let backgroundImage = this.get('background.image');
    let backgroundPadding = this.get('background.padding');

    if (backgroundTextColor) {
      styles.push(`color: ${backgroundTextColor}`);
    }

    if (backgroundImage) {
      styles.push(`background-image: url("${backgroundImage}")`);
    }

    if (backgroundPadding) {
      styles.push(`padding-right: ${backgroundPadding.right}`);
    }

    return new Ember.Handlebars.SafeString(styles.join('; '));
  }),

});
