import {Canvas} from '../canvas/canvas';

export interface SignatureExporterOptions {
  element: Element;
}

export interface SignatureExporterSource {
  getBase64FromElement: any;
}

export class SignatureExporter {
  element: Element;
  options: SignatureExporterOptions;
  source: SignatureExporterSource = new Canvas();

  constructor(options: SignatureExporterOptions) {
    if (!options.element) {
      throw Error(`Invalid element provided: ${options.element}`);
    }

    this.options = options;
  }

  getBase64(): Promise<string> {
    return this.source.getBase64FromElement(this.options.element);
  }
}
