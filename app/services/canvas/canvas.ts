import {html2canvas} from 'html2canvas/dist/html2canvas';

export class Canvas {
  element: any;

  create() {
    this.element = document.querySelector('signature-preview');

    if (!this.element) {
      throw Error('No preview element to generate the canvas.');
    }
  }

  open() {
    console.log('open', this.element, html2canvas);

    html2canvas(this.element, {
      onrendered: (canvas) => {
        console.log('onrendered');
      }
    });
  }
}
