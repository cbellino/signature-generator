import _ from 'lodash/lodash';
import SignatureBackground from '../models/signature-background';

export function initialize(container) {
  // var store = container.lookup('service:store');
  // store.createRecords('signature_background', SignatureBackground.DATA);
  // store.save();
}

export default {
  name: 'signature-background-fixtures',
  initialize: initialize
};
