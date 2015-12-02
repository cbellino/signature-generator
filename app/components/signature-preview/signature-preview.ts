import {Component, Input, CORE_DIRECTIVES} from 'angular2/angular2';

@Component({
  selector: 'signature-preview',
  templateUrl: './components/signature-preview/signature-preview.html',
  directives: [CORE_DIRECTIVES]
})
export class SignaturePreviewCmp {
  @Input() signature: any;

  constructor() {
    //
  }
}
