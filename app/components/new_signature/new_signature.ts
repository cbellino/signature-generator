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

  save() {
    this.exporter.getBase64().then(this.openImage);
  }

  private openImage(data: string) {
    // TODO: open a new window with the image
    // More info: http://stackoverflow.com/questions/5403709/convert-canvas-to-image-and-open-in-new-window-using-ruby-on-rails-and-javascrip

    // let newWindow = window.open();
    // console.log(window.open);
    // newWindow.document.write(`<img src="${data}" />`);
  }
}
