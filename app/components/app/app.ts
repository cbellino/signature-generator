import {Component, ViewEncapsulation} from 'angular2/angular2';
import {
  RouteConfig,
  ROUTER_DIRECTIVES
} from 'angular2/router';
// import {HTTP_PROVIDERS} from 'http/http';

import {BannerCmp} from '../banner/banner';
import {NewSignatureCmp} from '../new_signature/new_signature';

@Component({
  selector: 'app',
  viewProviders: [],
  templateUrl: './components/app/app.html',
  styleUrls: ['./components/app/app.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [ROUTER_DIRECTIVES, BannerCmp]
})
@RouteConfig([
  { path: '/', component: NewSignatureCmp, as: 'NewSignature' }
])
export class AppCmp {}
