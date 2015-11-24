import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  characterName: DS.attr(),
  clanName: DS.attr(),
  clanImage: DS.attr(),
  background: DS.belongsTo('signature_background'),

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
