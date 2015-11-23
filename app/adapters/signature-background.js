import DS from 'ember-data';
import _ from 'lodash/lodash';
import SignatureBackground from '../models/signature-background';

var SignatureBackgroundAdapter = DS.Adapter.extend({
  findAll () {
    return SignatureBackground.FIXTURES;
  },
  findRecord (store, type, id) {
    let record = _.find(SignatureBackground.FIXTURES, { id: +id });

    return record;
  }
});

export default SignatureBackgroundAdapter;
