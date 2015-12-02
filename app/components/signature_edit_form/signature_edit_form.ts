import {Component, Input, CORE_DIRECTIVES} from 'angular2/angular2';

@Component({
  selector: 'signature-edit-form',
  templateUrl: './components/signature_edit_form/signature_edit_form.html',
  directives: [CORE_DIRECTIVES]
})
export class SignatureEditFormCmp {
  @Input() signature: any;

  constructor() {
    //
  }
}
