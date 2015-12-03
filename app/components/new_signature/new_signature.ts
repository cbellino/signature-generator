import {Component, CORE_DIRECTIVES} from 'angular2/angular2';

import {SignatureEditFormCmp} from '../signature_edit_form/signature_edit_form';
import {SignaturePreviewCmp} from '../signature_preview/signature_preview';

@Component({
  selector: 'new-signature',
  templateUrl: './components/new_signature/new_signature.html',
  directives: [CORE_DIRECTIVES, SignatureEditFormCmp, SignaturePreviewCmp]
})
export class NewSignatureCmp {
  signature: any;

  constructor() {
    this.signature = {
      character: 'Aperow',
      title: 'Rigolus party',
      site: 'dregomorn.fr',
      url: 'http://www.dregomorn.fr',
      clan: 'Dregomorn'
    };
  }
}
