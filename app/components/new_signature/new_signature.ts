declare var window: any;

import {Component, CORE_DIRECTIVES} from 'angular2/angular2';
import {SignatureEditFormCmp} from '../signature_edit_form/signature_edit_form';
import {SignaturePreviewCmp} from '../signature_preview/signature_preview';
import {SignatureExporter} from '../../services/signature_exporter/signature_exporter';

@Component({
  selector: 'new-signature',
  templateUrl: './components/new_signature/new_signature.html',
  directives: [CORE_DIRECTIVES, SignatureEditFormCmp, SignaturePreviewCmp]
})
export class NewSignatureCmp {
  signature: any;
  exporter: SignatureExporter;

  constructor() {
    this.signature = {
      character: 'Aperow',
      title: 'Rigolus party',
      site: 'dregomorn.fr',
      clanUrl: 'http://www.dregomorn.fr',
      iconUrl: 'http://lineage.pmfun.com/data/img/skill1263_0.png'
    };

    this.exporter = new SignatureExporter({
      element: document.querySelector('signature-preview')
    });
  }

  save(): void {
    this.exporter.getBase64().then(this.openImage);
  }

  private openImage(data: string): void {
    let image = new Image();

    image.src = data;
    image.onload = function() {
      let newWindow = window.open('', 'Your signature');
      newWindow.document.write(image.outerHTML);
    };
  }
}
