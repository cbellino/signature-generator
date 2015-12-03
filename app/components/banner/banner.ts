import {Component, Input, CORE_DIRECTIVES} from 'angular2/angular2';

@Component({
  selector: 'banner',
  templateUrl: './components/banner/banner.html',
  directives: [CORE_DIRECTIVES]
})
export class BannerCmp {
  @Input() title: string;

  constructor() {
    //
  }
}
