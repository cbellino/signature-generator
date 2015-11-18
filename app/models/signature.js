import DS from 'ember-data';

export default DS.Model.extend({
  characterName: DS.attr(),
  clanName: DS.attr(),
});
