import {Component, CORE_DIRECTIVES} from 'angular2/angular2';

import {SignatureEditFormCmp} from '../signature-edit-form/signature-edit-form';
import {SignaturePreviewCmp} from '../signature-preview/signature-preview';

@Component({
  selector: 'about',
  templateUrl: './components/about/about.html',
  directives: [CORE_DIRECTIVES, SignatureEditFormCmp, SignaturePreviewCmp]
})
export class AboutCmp {
  signature: any;

  constructor() {
    this.signature = {
      character: 'Aperow',
      title: 'Rigolus party'
    };
  }
}
