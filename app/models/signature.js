import DS from 'ember-data';

export default DS.Model.extend({
  characterName: DS.attr(),
  clanName: DS.attr(),
  clanImage: DS.attr(),
  textColor: DS.attr(),
  backgroundColor: DS.attr(),
  backgroundImage: DS.attr(),
});
