import {Component, Input, CORE_DIRECTIVES} from 'angular2/angular2';

@Component({
  selector: 'signature-edit-form',
  templateUrl: './components/signature-edit-form/signature-edit-form.html',
  directives: [CORE_DIRECTIVES]
})
export class SignatureEditFormCmp {
  @Input() signature: any;

  constructor() {
    //
  }
}
