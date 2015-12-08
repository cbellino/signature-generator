import {Component, CORE_DIRECTIVES} from 'angular2/angular2';

import {SignatureEditFormCmp} from '../signature_edit_form/signature_edit_form';
import {SignaturePreviewCmp} from '../signature_preview/signature_preview';
import {Canvas} from '../../services/canvas/canvas';

@Component({
  viewProviders: [Canvas],
  selector: 'new-signature',
  templateUrl: './components/new_signature/new_signature.html',
  directives: [CORE_DIRECTIVES, SignatureEditFormCmp, SignaturePreviewCmp]
})
export class NewSignatureCmp {
  signature: any;

  constructor(public canvas: Canvas) {
    this.signature = {
      character: 'Aperow',
      title: 'Rigolus party',
      site: 'dregomorn.fr',
      clanUrl: 'http://www.dregomorn.fr',
      iconUrl: 'http://lineage.pmfun.com/data/img/skill1263_0.png'
    };

    this.canvas.create();
  }

  save() {
    this.canvas.open();
  }
}
